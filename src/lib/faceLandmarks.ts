import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision'

// The WASM runtime is self-hosted under /public/mediapipe (copied from the
// npm package) so face detection never depends on a third-party CDN being
// reachable. Only the trained model weights are fetched at runtime, from
// Google's public model store.
const WASM_BASE_PATH = '/mediapipe/wasm'
const MODEL_URL =
  'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task'

export type Landmark = { x: number; y: number; z: number }

let landmarkerPromise: Promise<FaceLandmarker> | null = null

async function createLandmarker(delegate: 'GPU' | 'CPU') {
  const vision = await FilesetResolver.forVisionTasks(WASM_BASE_PATH)
  return FaceLandmarker.createFromOptions(vision, {
    baseOptions: { modelAssetPath: MODEL_URL, delegate },
    runningMode: 'IMAGE',
    numFaces: 1,
  })
}

function getLandmarker(): Promise<FaceLandmarker> {
  if (!landmarkerPromise) {
    landmarkerPromise = createLandmarker('GPU').catch((err) => {
      console.warn('GPU delegate failed for face landmarker, falling back to CPU:', err)
      return createLandmarker('CPU')
    })
  }
  return landmarkerPromise
}

/** Pre-warms the model so the first "Detect face" click isn't the slow one. */
export function preloadFaceLandmarker() {
  void getLandmarker()
}

export async function detectFaceLandmarks(
  image: HTMLImageElement | HTMLCanvasElement,
): Promise<Landmark[] | null> {
  const landmarker = await getLandmarker()
  const result = landmarker.detect(image)
  if (!result.faceLandmarks || result.faceLandmarks.length === 0) return null
  return result.faceLandmarks[0]
}

// Named indices from MediaPipe's 468-point face mesh topology, used to drive
// the whitening mask and the procedure-specific warps.
export const LANDMARKS = {
  innerLips: [78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308, 324, 318, 402, 317, 14, 87, 178, 88, 95],
  mouthCornerLeft: 61,
  mouthCornerRight: 291,
  upperLipTop: 0,
  lowerLipBottom: 17,
  chin: 152,
  jawLeft: 172,
  jawRight: 397,
  jawLowerLeft: 149,
  jawLowerRight: 378,
  cheekLeft: 234,
  cheekRight: 454,
}
