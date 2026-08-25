/** Draws `image` onto a new canvas capped at `maxDim` on its longest side. */
export function toWorkingCanvas(image: HTMLImageElement, maxDim = 900): HTMLCanvasElement {
  const scale = Math.min(1, maxDim / Math.max(image.naturalWidth, image.naturalHeight))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(image.naturalWidth * scale)
  canvas.height = Math.round(image.naturalHeight * scale)
  const ctx = canvas.getContext('2d')!
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
  return canvas
}
