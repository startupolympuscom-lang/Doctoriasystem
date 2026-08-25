export type SimulationSummary = {
  id: string
  created_at: string
  patient_label: string | null
  procedures: string[]
  treatment_intelligence: {
    smileAesthetics?: number
    facialHarmony?: number
    satisfaction?: number
    duration?: string
  }
}

export type CreateSimulationPayload = {
  procedures: string[]
  landmarkSummary: Record<string, unknown>
  beforeImage: string
  afterImage: string
  faceChange: string[]
  treatmentIntelligence: Record<string, unknown>
  patientLabel?: string
}

async function readError(res: Response) {
  try {
    const body = await res.json()
    return body.error || `Request failed (${res.status})`
  } catch {
    return `Request failed (${res.status})`
  }
}

export async function createSimulation(payload: CreateSimulationPayload) {
  const res = await fetch('/api/simulations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error(await readError(res))
  return res.json() as Promise<{ id: string; created_at: string }>
}

export async function listSimulations(limit = 8): Promise<SimulationSummary[]> {
  const res = await fetch(`/api/simulations?limit=${limit}`)
  if (!res.ok) throw new Error(await readError(res))
  return res.json()
}

export async function generatePreview(beforeImage: string, instruction: string): Promise<{ afterImage: string }> {
  const res = await fetch('/api/generate-preview', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ beforeImage, instruction }),
  })
  if (!res.ok) throw new Error(await readError(res))
  return res.json()
}
