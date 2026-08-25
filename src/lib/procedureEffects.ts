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
  /** Instruction fed to the image-generation model for this procedure. */
  promptHint: string
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
    promptHint: 'Whiten the teeth noticeably — brighter, more uniform tooth color, no other change to the mouth shape.',
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
    promptHint:
      'Apply cosmetic veneers: teeth become more uniform, whiter, and symmetric, with slightly fuller-looking lip support.',
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
    promptHint:
      'Straighten and align the teeth as clear aligners would achieve over time — evenly spaced teeth, a more symmetric smile arc.',
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
    promptHint:
      'Straighten and align the teeth as orthodontic braces would achieve over time — evenly spaced teeth, a more symmetric smile arc.',
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
    promptHint: 'Fill any visible gaps between teeth with natural-looking dental implants.',
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
    promptHint: 'Reduce visible gum tissue when smiling (gum contouring), making the teeth look proportionally longer.',
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
    promptHint: 'Subtly adjust jaw alignment for better facial symmetry and profile balance, as orthognathic correction would.',
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

export function buildPrompt(selected: Procedure[]): string {
  return selected.map((p) => `${p.label}: ${p.promptHint}`).join(' ')
}
