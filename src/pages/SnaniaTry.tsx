import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { createSimulation, generatePreview, listSimulations, type SimulationSummary } from '../lib/api'
import { detectFaceLandmarks, LANDMARKS, preloadFaceLandmarker, type Landmark } from '../lib/faceLandmarks'
import {
  buildPrompt,
  collectFaceChange,
  computeTreatmentIntelligence,
  PROCEDURES,
  type Procedure,
} from '../lib/procedureEffects'
import { toWorkingCanvas } from '../lib/simulate'

type Status = 'idle' | 'detecting' | 'no-face' | 'ready' | 'generating' | 'result' | 'error'

export default function SnaniaTry() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [sourceCanvas, setSourceCanvas] = useState<HTMLCanvasElement | null>(null)
  const [landmarks, setLandmarks] = useState<Landmark[] | null>(null)
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [beforeUrl, setBeforeUrl] = useState('')
  const [afterUrl, setAfterUrl] = useState('')
  const [reveal, setReveal] = useState(50)
  const [label, setLabel] = useState('')
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [recent, setRecent] = useState<SimulationSummary[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    preloadFaceLandmarker()
    listSimulations(6)
      .then(setRecent)
      .catch(() => {})
  }, [])

  const selectedProcedures: Procedure[] = PROCEDURES.filter((p) => selected.has(p.id))
  const intelligence = computeTreatmentIntelligence(selectedProcedures)
  const faceChange = collectFaceChange(selectedProcedures)

  async function handleFile(file: File) {
    setStatus('detecting')
    setErrorMsg('')
    setBeforeUrl('')
    setAfterUrl('')
    setSaveState('idle')

    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = () => reject(new Error('Could not read the file'))
        reader.readAsDataURL(file)
      })

      const img = await new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image()
        image.onload = () => resolve(image)
        image.onerror = () => reject(new Error('Could not load the image'))
        image.src = dataUrl
      })

      const canvas = toWorkingCanvas(img)
      setSourceCanvas(canvas)

      const timeout = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Face detection timed out — try a different photo or reload the page.')), 25000),
      )
      const points = await Promise.race([detectFaceLandmarks(canvas), timeout])
      if (!points) {
        setStatus('no-face')
        return
      }
      setLandmarks(points)
      setStatus('ready')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong reading that photo.')
      setStatus('error')
    }
  }

  function toggleProcedure(id: string) {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  async function generate() {
    if (!sourceCanvas || !landmarks || selectedProcedures.length === 0) return
    setStatus('generating')
    setSaveState('idle')
    setErrorMsg('')

    const before = sourceCanvas.toDataURL('image/jpeg', 0.92)

    try {
      const { afterImage } = await generatePreview(before, buildPrompt(selectedProcedures))
      setBeforeUrl(before)
      setAfterUrl(afterImage)
      setReveal(50)
      setStatus('result')
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'The AI preview could not be generated.')
      setStatus('ready')
    }
  }

  async function handleSave() {
    if (!beforeUrl || !afterUrl || !landmarks) return
    setSaveState('saving')
    try {
      const faceWidthPx = Math.hypot(
        (landmarks[LANDMARKS.cheekLeft].x - landmarks[LANDMARKS.cheekRight].x) * (sourceCanvas?.width ?? 0),
        (landmarks[LANDMARKS.cheekLeft].y - landmarks[LANDMARKS.cheekRight].y) * (sourceCanvas?.height ?? 0),
      )
      await createSimulation({
        procedures: selectedProcedures.map((p) => p.label),
        landmarkSummary: { pointCount: landmarks.length, faceWidthPx: Math.round(faceWidthPx) },
        beforeImage: beforeUrl,
        afterImage: afterUrl,
        faceChange,
        treatmentIntelligence: intelligence,
        patientLabel: label.trim() || undefined,
      })
      setSaveState('saved')
      const fresh = await listSimulations(6)
      setRecent(fresh)
    } catch {
      setSaveState('error')
    }
  }

  function reset() {
    setStatus('idle')
    setSourceCanvas(null)
    setLandmarks(null)
    setSelected(new Set())
    setBeforeUrl('')
    setAfterUrl('')
    setLabel('')
    setSaveState('idle')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <section className="relative bg-soft-gray pt-28 pb-24 lg:pt-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link to="/snania" className="inline-flex items-center gap-2 text-sm font-medium text-navy/50 hover:text-primary">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to SnanIA
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold text-navy sm:text-4xl">
          Try <span className="gradient-text">SnanIA</span>
        </h1>
        <p className="mt-3 max-w-2xl text-navy/60">
          Upload a smile photo. SnanIA detects your face with an on-device AI
          model, then previews how selected procedures could change your
          smile &mdash; and your face.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-300/50 bg-amber-50 p-4 text-sm text-amber-900">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 shrink-0">
            <path d="M12 9v4m0 4h.01M10.29 3.86l-8.18 14.18A2 2 0 0 0 3.94 21h16.12a2 2 0 0 0 1.83-2.96L13.71 3.86a2 2 0 0 0-3.42 0z" />
          </svg>
          <p>
            <strong>Prototype demo, not a medical device.</strong> The
            &ldquo;after&rdquo; photo is generated by a general-purpose AI
            image model, not a dental-trained one &mdash; it&rsquo;s an
            illustrative preview, not a clinical prediction of your actual
            treatment outcome. Please don&rsquo;t upload real patient photos:
            anything you choose to save here goes into a shared demo database
            visible in the gallery below.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-navy/5 bg-white p-6 sm:p-8">
          {status === 'idle' && (
            <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-navy/15 bg-soft-gray px-6 py-16 text-center transition-colors hover:border-primary/40">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
              />
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 16l4.5-4.5a2 2 0 0 1 2.8 0L16 16M14 14l1.5-1.5a2 2 0 0 1 2.8 0L20 14M4 8h16M4 4h16v16H4V4z" />
                </svg>
              </span>
              <span className="font-semibold text-navy">Upload a front-facing smile photo</span>
              <span className="text-xs text-navy/40">JPG or PNG &middot; processed in your browser</span>
            </label>
          )}

          {status === 'detecting' && (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <span className="h-8 w-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" />
              <p className="text-sm font-medium text-navy/60">Detecting facial landmarks&hellip;</p>
              <p className="text-xs text-navy/40">First run downloads the AI model &mdash; this can take a moment.</p>
            </div>
          )}

          {status === 'no-face' && (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <p className="font-semibold text-navy">No face detected</p>
              <p className="max-w-sm text-sm text-navy/50">
                Try a clearer, front-facing photo with good lighting and only one face in frame.
              </p>
              <button onClick={reset} className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">
                Try another photo
              </button>
            </div>
          )}

          {status === 'error' && (
            <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
              <p className="font-semibold text-navy">Something went wrong</p>
              <p className="max-w-sm text-sm text-navy/50">{errorMsg}</p>
              <button onClick={reset} className="mt-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">
                Try again
              </button>
            </div>
          )}

          {(status === 'ready' || status === 'generating' || status === 'result') && sourceCanvas && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
              <div>
                {status !== 'result' ? (
                  <img
                    src={sourceCanvas.toDataURL('image/jpeg', 0.9)}
                    alt="Uploaded smile"
                    className="w-full rounded-2xl border border-navy/5 object-cover"
                  />
                ) : (
                  <div>
                    <div className="relative overflow-hidden rounded-2xl border border-navy/5">
                      <img src={afterUrl} alt="After simulation" className="block w-full select-none" draggable={false} />
                      <div className="absolute inset-0 overflow-hidden" style={{ width: `${reveal}%` }}>
                        <img
                          src={beforeUrl}
                          alt="Before"
                          className="block h-full w-full select-none object-cover"
                          style={{ width: sourceCanvas.width, maxWidth: 'none' }}
                          draggable={false}
                        />
                      </div>
                      <div
                        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
                        style={{ left: `${reveal}%` }}
                      />
                      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-navy/70 px-2.5 py-1 text-[10px] font-bold text-white">
                        BEFORE
                      </span>
                      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-white">
                        AFTER (AI preview)
                      </span>
                    </div>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={reveal}
                      onChange={(e) => setReveal(Number(e.target.value))}
                      className="mt-3 w-full accent-primary"
                      aria-label="Reveal before/after"
                    />
                  </div>
                )}
                <button onClick={reset} className="mt-4 text-xs font-semibold text-navy/40 hover:text-primary">
                  &larr; Start over with a different photo
                </button>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-primary">Select procedures</p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {PROCEDURES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => toggleProcedure(p.id)}
                      disabled={status === 'generating'}
                      className={`rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                        selected.has(p.id)
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-navy/10 bg-white text-navy/70 hover:border-primary/30'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={generate}
                  disabled={selectedProcedures.length === 0 || status === 'generating'}
                  className="btn-shine mt-4 w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  {status === 'generating' ? 'Generating simulation…' : 'Generate simulation'}
                </button>
                <p className="mt-2 text-center text-[11px] text-navy/35">
                  {status === 'generating' ? 'Usually takes 10–20 seconds.' : 'AI photo edit — takes a moment to generate.'}
                </p>
                {errorMsg && status === 'ready' && (
                  <p className="mt-2 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{errorMsg}</p>
                )}

                {status === 'result' && (
                  <div className="mt-6 space-y-5 border-t border-navy/5 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-navy/40">Treatment intelligence</p>
                      <div className="mt-2 grid grid-cols-2 gap-3">
                        <Stat label="Smile aesthetics" value={`+${intelligence.smileAesthetics}%`} />
                        <Stat label="Facial harmony" value={`+${intelligence.facialHarmony}%`} />
                        <Stat label="Predicted satisfaction" value={`${intelligence.satisfaction}%`} />
                        <Stat label="Estimated duration" value={intelligence.duration} small />
                      </div>
                    </div>

                    {faceChange.length > 0 && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-navy/40">How your face is predicted to change</p>
                        <ul className="mt-2 space-y-1.5">
                          {faceChange.map((f) => (
                            <li key={f} className="flex items-start gap-2 text-sm text-navy/65">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" className="mt-1 shrink-0">
                                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wide text-navy/40" htmlFor="sim-label">
                        Label this simulation (optional)
                      </label>
                      <input
                        id="sim-label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="e.g. Patient A — consult"
                        className="mt-1.5 w-full rounded-xl border border-navy/10 px-3 py-2 text-sm text-navy focus:border-primary/40 focus:outline-none"
                      />
                    </div>

                    <button
                      onClick={handleSave}
                      disabled={saveState === 'saving' || saveState === 'saved'}
                      className="w-full rounded-full border border-navy/10 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-primary/30 hover:text-primary disabled:cursor-not-allowed"
                    >
                      {saveState === 'saving' && 'Saving…'}
                      {saveState === 'saved' && 'Saved ✓'}
                      {saveState === 'error' && 'Failed to save — try again'}
                      {saveState === 'idle' && 'Save to demo gallery'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="mt-14">
          <p className="text-xs font-bold uppercase tracking-wide text-primary">Recent simulations (demo gallery)</p>
          {recent.length === 0 ? (
            <p className="mt-3 text-sm text-navy/40">No simulations saved yet — be the first.</p>
          ) : (
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recent.map((sim) => (
                <div key={sim.id} className="rounded-2xl border border-navy/5 bg-white p-4">
                  <p className="text-xs text-navy/40">{new Date(sim.created_at).toLocaleString()}</p>
                  {sim.patient_label && <p className="mt-1 text-sm font-semibold text-navy">{sim.patient_label}</p>}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {sim.procedures.map((p) => (
                      <span key={p} className="rounded-full bg-primary/5 px-2 py-0.5 text-[10px] font-semibold text-primary">
                        {p}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                    <MiniStat label="Smile" value={sim.treatment_intelligence.smileAesthetics} />
                    <MiniStat label="Harmony" value={sim.treatment_intelligence.facialHarmony} />
                    <MiniStat label="Satisf." value={sim.treatment_intelligence.satisfaction} />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, small }: { label: string; value: string | number; small?: boolean }) {
  return (
    <div className="rounded-xl bg-soft-gray p-3">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-navy/40">{label}</p>
      <p className={`mt-1 font-extrabold text-navy ${small ? 'text-sm' : 'text-lg'}`}>{value}</p>
    </div>
  )
}

function MiniStat({ label, value }: { label: string; value?: number }) {
  return (
    <div>
      <p className="text-sm font-extrabold text-primary">{value != null ? `+${value}%` : '—'}</p>
      <p className="text-[10px] text-navy/40">{label}</p>
    </div>
  )
}
