import { LANDMARKS } from './faceLandmarks'

export type WarpPoint = { index: number; dx: number; dy: number } // dx/dy as a fraction of face width

export type Procedure = {
  id: string
  label: string
  /** % impact figures are illustrative, calibrated to the two data points
   *  DoctorIA's deck cites (veneers alone: +32% smile aesthetics; ortho +
   *  whitening: +51% facial harmony) — not a clinical outcome model. */
  smileAesthetics: number
  facialHarmony: number
  satisfaction: number
  durationRank: number
  duration: string
  faceChange: string[]
  whitening?: boolean
  warp?: WarpPoint[]
}

export const PROCEDURES: Procedure[] = [
  {
    id: 'whitening',
    label: 'Whitening',
    smileAesthetics: 12,
    facialHarmony: 6,
    satisfaction: 88,
    durationRank: 1,
    duration: '~1 hour, single visit',
    faceChange: [],
    whitening: true,
  },
  {
    id: 'veneers',
    label: 'Veneers',
    smileAesthetics: 32,
    facialHarmony: 12,
    satisfaction: 91,
    durationRank: 2,
    duration: '2–3 weeks',
    faceChange: ['Fuller lip support', 'Softer nasolabial fold appearance'],
    warp: [
      { index: LANDMARKS.upperLipTop, dx: 0, dy: -0.012 },
      { index: LANDMARKS.lowerLipBottom, dx: 0, dy: 0.012 },
      { index: LANDMARKS.mouthCornerLeft, dx: -0.006, dy: 0 },
      { index: LANDMARKS.mouthCornerRight, dx: 0.006, dy: 0 },
    ],
  },
  {
    id: 'invisalign',
    label: 'Invisalign',
    smileAesthetics: 18,
    facialHarmony: 45,
    satisfaction: 85,
    durationRank: 4,
    duration: '6–18 months',
    faceChange: ['Improved jaw alignment', 'More symmetric smile arc', 'Balanced lip line'],
    warp: [
      { index: LANDMARKS.mouthCornerLeft, dx: 0.006, dy: 0 },
      { index: LANDMARKS.mouthCornerRight, dx: -0.006, dy: 0 },
      { index: LANDMARKS.jawLeft, dx: 0.01, dy: 0 },
      { index: LANDMARKS.jawRight, dx: -0.01, dy: 0 },
    ],
  },
  {
    id: 'braces',
    label: 'Braces',
    smileAesthetics: 16,
    facialHarmony: 45,
    satisfaction: 80,
    durationRank: 5,
    duration: '12–24 months',
    faceChange: ['Improved jaw alignment', 'More symmetric smile arc'],
    warp: [
      { index: LANDMARKS.mouthCornerLeft, dx: 0.006, dy: 0 },
      { index: LANDMARKS.mouthCornerRight, dx: -0.006, dy: 0 },
      { index: LANDMARKS.jawLeft, dx: 0.01, dy: 0 },
      { index: LANDMARKS.jawRight, dx: -0.01, dy: 0 },
    ],
  },
  {
    id: 'implants',
    label: 'Implants',
    smileAesthetics: 15,
    facialHarmony: 8,
    satisfaction: 87,
    durationRank: 3,
    duration: '3–6 months',
    faceChange: ['Restored cheek volume near the gap'],
    warp: [
      { index: LANDMARKS.cheekLeft, dx: -0.008, dy: 0 },
      { index: LANDMARKS.cheekRight, dx: 0.008, dy: 0 },
    ],
  },
  {
    id: 'gumContouring',
    label: 'Gum Contouring',
    smileAesthetics: 14,
    facialHarmony: 5,
    satisfaction: 84,
    durationRank: 1,
    duration: '~45 minutes, single visit',
    faceChange: ['Reduced gummy smile', 'Longer visual tooth-to-lip ratio'],
    warp: [{ index: LANDMARKS.upperLipTop, dx: 0, dy: 0.012 }],
  },
  {
    id: 'jawCorrections',
    label: 'Jaw Corrections',
    smileAesthetics: 10,
    facialHarmony: 38,
    satisfaction: 78,
    durationRank: 6,
    duration: '6–12 months',
    faceChange: ['Improved jaw projection', 'Enhanced facial symmetry', 'Changed profile silhouette'],
    warp: [
      { index: LANDMARKS.chin, dx: 0, dy: -0.014 },
      { index: LANDMARKS.jawLowerLeft, dx: 0.008, dy: -0.006 },
      { index: LANDMARKS.jawLowerRight, dx: -0.008, dy: -0.006 },
    ],
  },
]

export type TreatmentIntelligence = {
  smileAesthetics: number
  facialHarmony: number
  satisfaction: number
  duration: string
}

export function computeTreatmentIntelligence(selected: Procedure[]): TreatmentIntelligence {
  if (selected.length === 0) {
    return { smileAesthetics: 0, facialHarmony: 0, satisfaction: 0, duration: '—' }
  }
  const smileAesthetics = Math.min(95, selected.reduce((s, p) => s + p.smileAesthetics, 0))
  const facialHarmony = Math.min(95, selected.reduce((s, p) => s + p.facialHarmony, 0))
  const satisfaction = Math.round(selected.reduce((s, p) => s + p.satisfaction, 0) / selected.length)
  const longest = selected.reduce((a, b) => (b.durationRank > a.durationRank ? b : a))
  return { smileAesthetics, facialHarmony, satisfaction, duration: longest.duration }
}

export function collectFaceChange(selected: Procedure[]): string[] {
  const seen = new Set<string>()
  selected.forEach((p) => p.faceChange.forEach((f) => seen.add(f)))
  return Array.from(seen)
}
