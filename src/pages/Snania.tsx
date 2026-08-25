import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

const steps = [
  {
    n: '01',
    title: 'Image acquisition',
    copy: 'The dentist uploads a front smile photo, side profile, intraoral images, panoramic X-ray, or an optional CBCT scan. The better the data, the better the prediction.',
  },
  {
    n: '02',
    title: 'AI facial landmark detection',
    copy: 'The system maps lips, jawline, cheek structure, chin, nose, gum line, tooth positions, and bite alignment into a digital facial model.',
  },
  {
    n: '03',
    title: 'Dental structure reconstruction',
    copy: 'Current tooth geometry, spacing, angulation, bite structure, and gum exposure are reconstructed into the patient’s baseline anatomy.',
  },
  {
    n: '04',
    title: 'Procedure simulation engine',
    copy: 'The AI applies whitening, veneers, Invisalign, braces, implants, gum contouring, or jaw corrections — and predicts how the entire face changes, not only the teeth.',
  },
  {
    n: '05',
    title: 'Generative visualization',
    copy: 'SnanIA renders photorealistic previews, 3D simulations, animated transitions, and side-by-side comparisons — anatomically plausible, not a beauty filter.',
  },
  {
    n: '06',
    title: 'Treatment intelligence layer',
    copy: 'Beyond visuals: estimated treatment duration, procedure comparisons, recommended plans, predicted patient satisfaction, and cost/value impact.',
  },
]

const procedures = ['Whitening', 'Veneers', 'Invisalign', 'Braces', 'Implants', 'Gum contouring', 'Jaw corrections']

const faceFactors = [
  ['Lip posture', 'Recessed teeth can flatten lips.'],
  ['Smile curvature', 'Wider smiles can improve perceived facial balance.'],
  ['Cheek volume', 'Dental support changes how cheeks are held.'],
  ['Jaw projection', 'Correcting bite alignment can affect jaw aesthetics.'],
  ['Facial symmetry', 'Veneers alter tooth-to-lip proportions.'],
]

const techStack = [
  ['Computer vision', 'Detect teeth & face'],
  ['Facial landmark AI', 'Map facial geometry'],
  ['Dental segmentation', 'Identify tooth structure'],
  ['Generative AI', 'Render future appearance'],
  ['3D morphable models', 'Simulate anatomy'],
  ['Orthodontic modeling', 'Predict movement'],
  ['Biomechanics', 'Estimate structural changes'],
  ['Diffusion models', 'Generate realistic outcomes'],
]

const moatPillars = [
  ['Dental datasets', 'Large-scale, high-quality dental data'],
  ['Paired before/after outcomes', 'Verified transformations & results'],
  ['Orthodontic treatment histories', 'Longitudinal treatment progress data'],
  ['Facial evolution tracking', 'How faces change over time'],
  ['Clinical validation', 'Dentist-reviewed, clinically-accepted outcomes'],
]

const outcomes = [
  'Boost patient confidence',
  'Improve treatment acceptance',
  'Enhance communication & education',
  'Increase practice conversion',
]

const pricing = [
  {
    name: 'Free',
    price: '€0',
    features: ['10 simulations/month', 'SnanIA or sports module', 'No credit card required', 'Conversion to paid triggered at limit'],
  },
  {
    name: 'Starter',
    price: '€49',
    features: ['1 module unlimited', 'Up to 3 users', 'Basic patient dashboard', 'Email support'],
  },
  {
    name: 'Pro',
    price: '€149',
    popular: true,
    features: ['Full Clinical OS™', '2 AI modules', 'Patient Navigator sync', 'MAB-validated pathways'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: ['All modules + EHR integration', 'Hospital-wide deployment', 'Custom MAB validation', 'Dedicated success manager'],
  },
]

export default function Snania() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-light-blue to-accent/30 blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-[320px] w-[320px] rounded-full bg-light-blue/70 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <Link to="/#products" className="inline-flex items-center gap-2 text-sm font-medium text-navy/50 hover:text-primary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back to the platform
            </Link>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <Reveal delay={80}>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-4 py-1.5 text-xs font-bold tracking-wide text-primary">
                  DENTAL MODULE &middot; SNANIA&trade;
                </div>
                <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] text-navy sm:text-5xl">
                  More than a smile preview.
                  <br />
                  <span className="gradient-text">A facial transformation engine.</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/60">
                  SnanIA analyzes a patient&rsquo;s unique anatomy and shows how
                  different dental procedures can enhance their smile, facial
                  symmetry, and overall attractiveness &mdash; combining dental,
                  facial, and skeletal analysis with generative AI to predict
                  outcomes with stunning realism.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    to="/snania/try"
                    className="btn-shine rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Try SnanIA now
                  </Link>
                  <a
                    href="mailto:info@doctoria.ai?subject=SnanIA%20demo"
                    className="rounded-full border border-navy/10 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
                  >
                    Book a demo
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="scale" delay={160}>
              <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center">
                <div className="absolute h-[90%] w-[90%] rounded-full bg-gradient-to-br from-light-blue via-white to-accent/20" />
                <div className="animate-spin-slow absolute h-[72%] w-[72%] rounded-full border border-dashed border-primary/25" />
                <div className="relative z-10 flex h-40 w-40 items-center justify-center rounded-full bg-white p-8 shadow-2xl shadow-primary/20 sm:h-48 sm:w-48">
                  <img src="/images/icon-snania.png" alt="SnanIA" className="animate-float h-full w-full object-contain" />
                </div>

                <div className="animate-float-slow absolute -top-2 left-0 z-20 rounded-2xl border border-navy/5 bg-white/90 p-3 shadow-xl backdrop-blur-md">
                  <p className="text-[10px] font-semibold text-navy/40">SMILE AESTHETICS</p>
                  <p className="text-lg font-bold text-primary">
                    +32%<span className="ml-1 text-xs font-medium text-navy/40">veneers alone</span>
                  </p>
                </div>
                <div
                  className="animate-float-slow absolute bottom-2 right-0 z-20 rounded-2xl border border-navy/5 bg-white/90 p-3 shadow-xl backdrop-blur-md"
                  style={{ animationDelay: '1.2s' }}
                >
                  <p className="text-[10px] font-semibold text-navy/40">FACIAL HARMONY</p>
                  <p className="text-lg font-bold text-health-green">
                    +51%<span className="ml-1 text-xs font-medium text-navy/40">ortho + whitening</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative bg-soft-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label text-xs font-bold text-primary">HOW SNANIA WORKS</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                Six steps from photo to <span className="gradient-text">clinical simulation.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="glow-card h-full rounded-3xl border border-navy/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <span className="text-3xl font-extrabold text-primary/15">{s.n}</span>
                  <h3 className="mt-3 text-lg font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-3xl border border-navy/5 bg-white p-6">
              <span className="text-xs font-bold uppercase tracking-wide text-navy/40">Procedures simulated</span>
              {procedures.map((p) => (
                <span key={p} className="rounded-full bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why teeth affect facial structure */}
      <section className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
            <Reveal direction="left">
              <div>
                <p className="section-label text-xs font-bold text-primary">WHY TEETH AFFECT FACIAL STRUCTURE</p>
                <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                  Teeth are structural support <span className="gradient-text">for the face.</span>
                </h2>
                <p className="mt-4 text-navy/55">
                  Changing dental alignment doesn&rsquo;t just change a smile &mdash;
                  it changes how the whole face reads. This is why cosmetic
                  dentistry can subtly change attractiveness.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <div className="space-y-3">
                {faceFactors.map(([title, copy]) => (
                  <div key={title} className="flex items-start gap-4 rounded-2xl border border-navy/5 bg-soft-gray p-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      &#10003;
                    </span>
                    <div>
                      <p className="text-sm font-bold text-navy">{title}</p>
                      <p className="text-sm text-navy/55">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech stack + hardest challenge */}
      <section className="relative bg-soft-gray py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
            <Reveal direction="left" className="lg:col-span-3">
              <div className="h-full rounded-3xl border border-navy/5 bg-white p-8">
                <p className="section-label text-xs font-bold text-primary">THE REAL TECHNICAL STACK</p>
                <h3 className="mt-2 text-xl font-bold text-navy">Eight technologies, one simulation.</h3>
                <div className="mt-6 divide-y divide-navy/5">
                  {techStack.map(([tech, role]) => (
                    <div key={tech} className="flex items-center justify-between gap-4 py-3 text-sm">
                      <span className="font-semibold text-navy">{tech}</span>
                      <span className="text-right text-navy/50">{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={100} className="lg:col-span-2">
              <div className="flex h-full flex-col rounded-3xl bg-navy p-8 text-white">
                <p className="section-label text-xs font-bold text-accent">THE HARDEST TECHNICAL CHALLENGE</p>
                <p className="mt-2 text-lg font-bold leading-snug">
                  Making predictions medically realistic.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  A fake beauty filter is easy. A clinically plausible simulation
                  is hard: teeth movement follows biomechanics, bone remodeling
                  takes time, and orthodontic change is constrained by anatomy.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-center">
                  {['Realism', 'Aesthetics', 'Medical plausibility'].map((w) => (
                    <div key={w} className="rounded-xl bg-white/5 px-2 py-3 text-xs font-semibold text-white/80">
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Moat */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label text-xs font-bold text-primary">THE MOST DEFENSIBLE MOAT</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                The moat isn&rsquo;t image generation.
                <br />
                It&rsquo;s <span className="gradient-text">data, outcomes, and clinical truth.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {moatPillars.map(([title, copy], i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="glow-card h-full rounded-2xl border border-navy/5 bg-soft-gray p-5 transition-transform duration-300 hover:-translate-y-1">
                  <p className="text-sm font-bold text-navy">{title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-navy/50">{copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm italic text-navy/45">
              If DoctorIA trains on real patient transformations, actual
              orthodontic results, and dentist-approved outcomes, SnanIA
              becomes extremely valuable and very difficult to replicate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Outcomes strip */}
      <section className="relative bg-primary py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 sm:grid-cols-4 lg:px-8">
          {outcomes.map((o) => (
            <Reveal key={o}>
              <p className="text-center text-sm font-semibold text-white/90">{o}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="section-label text-xs font-bold text-primary">BUSINESS MODEL</p>
              <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
                Start free. <span className="gradient-text">Scale with your practice.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 90}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl p-7 ${
                    tier.popular
                      ? 'bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/25'
                      : 'border border-navy/5 bg-soft-gray text-navy'
                  }`}
                >
                  {tier.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-primary">
                      MOST POPULAR
                    </span>
                  )}
                  <p className={`text-sm font-bold ${tier.popular ? 'text-white/80' : 'text-navy/50'}`}>{tier.name}</p>
                  <p className="mt-2 text-3xl font-extrabold">
                    {tier.price}
                    {tier.price.startsWith('€') && <span className="text-sm font-medium opacity-60">/mo</span>}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5">
                    {tier.features.map((f) => (
                      <li
                        key={f}
                        className={`flex items-start gap-2 text-sm ${tier.popular ? 'text-white/85' : 'text-navy/60'}`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          className="mt-0.5 shrink-0"
                        >
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <p className="mt-8 text-center text-xs text-navy/40">
              Gross margin ~78&ndash;82% &middot; LTV:CAC target 12:1 &middot; Payback period &lt;2 months on Starter
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal direction="scale">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-16 text-center sm:px-16">
              <div className="dot-grid pointer-events-none absolute -top-4 -left-4 h-40 w-40 text-white/10" />
              <p className="section-label text-xs font-bold text-accent">BUILT FOR THE FUTURE OF DENTISTRY</p>
              <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold text-white sm:text-4xl">
                Bring SnanIA to your practice.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-white/60">
                No regulatory clearance needed &mdash; the fastest path to first
                revenue in the DoctorIA platform.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:info@doctoria.ai?subject=SnanIA%20demo"
                  className="btn-shine rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  info@doctoria.ai
                </a>
                <Link
                  to="/"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Explore the full platform
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
