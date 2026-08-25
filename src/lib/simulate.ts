import { LANDMARKS, type Landmark } from './faceLandmarks'
import type { Procedure } from './procedureEffects'

function dist(a: Landmark, b: Landmark, width: number, height: number) {
  return Math.hypot((a.x - b.x) * width, (a.y - b.y) * height)
}

/** Brightens/de-yellows pixels inside the detected inner-mouth polygon. Pure
 *  color processing — real, but simple; not a generative model. */
export function whitenTeeth(ctx: CanvasRenderingContext2D, landmarks: Landmark[], width: number, height: number) {
  const path = new Path2D()
  LANDMARKS.innerLips.forEach((idx, i) => {
    const p = landmarks[idx]
    const x = p.x * width
    const y = p.y * height
    if (i === 0) path.moveTo(x, y)
    else path.lineTo(x, y)
  })
  path.closePath()

  const xs = LANDMARKS.innerLips.map((i) => landmarks[i].x * width)
  const ys = LANDMARKS.innerLips.map((i) => landmarks[i].y * height)
  const minX = Math.max(0, Math.floor(Math.min(...xs)) - 4)
  const maxX = Math.min(width, Math.ceil(Math.max(...xs)) + 4)
  const minY = Math.max(0, Math.floor(Math.min(...ys)) - 4)
  const maxY = Math.min(height, Math.ceil(Math.max(...ys)) + 4)
  if (maxX <= minX || maxY <= minY) return

  const boxW = maxX - minX
  const boxH = maxY - minY
  const imgData = ctx.getImageData(minX, minY, boxW, boxH)
  const data = imgData.data

  for (let y = minY; y < maxY; y++) {
    for (let x = minX; x < maxX; x++) {
      if (!ctx.isPointInPath(path, x + 0.5, y + 0.5)) continue
      const idx = ((y - minY) * boxW + (x - minX)) * 4
      const r = data[idx]
      const g = data[idx + 1]
      const b = data[idx + 2]
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b
      if (luminance < 90) continue // skip gum shadow / inner-mouth darkness
      data[idx] = r + (255 - r) * 0.22
      data[idx + 1] = g + (255 - g) * 0.22
      data[idx + 2] = b + (255 - b) * 0.42 // stronger blue lift cancels the yellow cast
    }
  }
  ctx.putImageData(imgData, minX, minY)
}

function sampleBilinear(src: ImageData, width: number, height: number, x: number, y: number) {
  const cx = Math.max(0, Math.min(width - 1.001, x))
  const cy = Math.max(0, Math.min(height - 1.001, y))
  const x0 = Math.floor(cx)
  const y0 = Math.floor(cy)
  const x1 = x0 + 1
  const y1 = y0 + 1
  const tx = cx - x0
  const ty = cy - y0

  const get = (px: number, py: number) => {
    const i = (py * width + px) * 4
    return [src.data[i], src.data[i + 1], src.data[i + 2], src.data[i + 3]]
  }
  const p00 = get(x0, y0)
  const p10 = get(x1, y0)
  const p01 = get(x0, y1)
  const p11 = get(x1, y1)
  const out = [0, 0, 0, 0]
  for (let i = 0; i < 4; i++) {
    const top = p00[i] * (1 - tx) + p10[i] * tx
    const bot = p01[i] * (1 - tx) + p11[i] * tx
    out[i] = Math.round(top * (1 - ty) + bot * ty)
  }
  return out
}

/**
 * A localized, radial-basis-weighted image warp: every selected procedure
 * contributes a handful of landmark control points with a small directional
 * offset (see procedureEffects.ts). Each output pixel samples the source
 * image at an inverse-displaced position, blended by distance to every
 * control point (Shepard/RBF-style interpolation) — the same family of
 * technique used for "liquify"-style tools, just deliberately subtle here.
 *
 * This is a genuine geometric prediction preview, not a diffusion model: it
 * shows the *direction* a procedure is expected to move facial landmarks,
 * calibrated to plausible small magnitudes — not a clinical simulation.
 */
export function warpFace(
  sourceCanvas: HTMLCanvasElement,
  destCtx: CanvasRenderingContext2D,
  landmarks: Landmark[],
  procedures: Procedure[],
  width: number,
  height: number,
) {
  const faceWidth = dist(landmarks[LANDMARKS.cheekLeft], landmarks[LANDMARKS.cheekRight], width, height)

  const controls: { x: number; y: number; dx: number; dy: number }[] = []
  procedures.forEach((p) => {
    p.warp?.forEach((w) => {
      const lm = landmarks[w.index]
      controls.push({
        x: lm.x * width,
        y: lm.y * height,
        dx: w.dx * faceWidth,
        dy: w.dy * faceWidth,
      })
    })
  })

  const srcCtx = sourceCanvas.getContext('2d')!
  const srcData = srcCtx.getImageData(0, 0, width, height)

  if (controls.length === 0) {
    destCtx.putImageData(srcData, 0, 0)
    return
  }

  const outData = destCtx.createImageData(width, height)
  outData.data.set(srcData.data)

  const xs = landmarks.map((l) => l.x * width)
  const ys = landmarks.map((l) => l.y * height)
  const pad = faceWidth * 0.6
  const minX = Math.max(0, Math.floor(Math.min(...xs) - pad))
  const maxX = Math.min(width, Math.ceil(Math.max(...xs) + pad))
  const minY = Math.max(0, Math.floor(Math.min(...ys) - pad))
  const maxY = Math.min(height, Math.ceil(Math.max(...ys) + pad))

  const sigma = faceWidth * 0.22
  const twoSigma2 = 2 * sigma * sigma

  for (let y = minY; y < maxY; y++) {
    for (let x = minX; x < maxX; x++) {
      let sumW = 0
      let wdx = 0
      let wdy = 0
      for (const c of controls) {
        const d2 = (x - c.x) ** 2 + (y - c.y) ** 2
        const w = Math.exp(-d2 / twoSigma2)
        sumW += w
        wdx += w * c.dx
        wdy += w * c.dy
      }
      if (sumW < 1e-6) continue

      const influence = Math.min(1, sumW)
      const dx = (wdx / sumW) * influence
      const dy = (wdy / sumW) * influence

      const pixel = sampleBilinear(srcData, width, height, x - dx, y - dy)
      const o = (y * width + x) * 4
      outData.data[o] = pixel[0]
      outData.data[o + 1] = pixel[1]
      outData.data[o + 2] = pixel[2]
      outData.data[o + 3] = pixel[3]
    }
  }

  destCtx.putImageData(outData, 0, 0)
}

/** Draws `image` onto a new canvas capped at `maxDim` on its longest side. */
export function toWorkingCanvas(image: HTMLImageElement, maxDim = 520): HTMLCanvasElement {
  const scale = Math.min(1, maxDim / Math.max(image.naturalWidth, image.naturalHeight))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(image.naturalWidth * scale)
  canvas.height = Math.round(image.naturalHeight * scale)
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  return canvas
}
