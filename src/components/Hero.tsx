import Reveal from './Reveal'

const orbitNodes = [
  { label: 'Prevention', angle: -90 },
  { label: 'Diagnosis', angle: 30 },
  { label: 'Treatment', angle: 150 },
]

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Animated mesh background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-mesh absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-light-blue to-accent/40 opacity-70 blur-3xl" />
        <div className="animate-mesh-slow absolute top-1/4 -left-40 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-primary/15 to-light-blue opacity-80 blur-3xl" />
        <div className="animate-mesh absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-health-green/10 blur-3xl" style={{ animationDelay: '4s' }} />
        <div className="dot-grid absolute top-16 right-[8%] h-32 w-32 text-primary/20" />
        <div className="dot-grid absolute bottom-10 left-[6%] h-24 w-24 text-primary/15" />
        <svg className="absolute inset-x-0 top-0 h-full w-full opacity-[0.35]" preserveAspectRatio="none">
          <path
            d="M0,120 C 200,180 350,40 600,90 S 950,180 1200,110 S 1440,60 1440,60"
            fill="none"
            stroke="url(#heroLine)"
            strokeWidth="1.5"
          />
          <defs>
            <linearGradient id="heroLine" x1="0" x2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
              <stop offset="50%" stopColor="#2563EB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal direction="up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary section-label">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            AI-POWERED MEDICAL SOLUTIONS
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.75rem]">
            AI that sees
            <br />
            <span className="gradient-text">what others miss.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy/60">
            One image. Instant clinical intelligence. Across every specialty.
            DoctorIA converts scans, photos, and X-rays into actionable
            clinical decisions in seconds &mdash; built first for the 300
            million people global medical AI has overlooked.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="btn-shine rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/40"
            >
              Partner with us
            </a>
            <a
              href="#products"
              className="group flex items-center gap-2 rounded-full border border-navy/10 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
            >
              Explore the platform
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-navy/40">
            <span className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
              </svg>
              Incubated by Startup Olympus
            </span>
            <span className="h-1 w-1 rounded-full bg-navy/20" />
            <span>Pre-seed stage</span>
            <span className="h-1 w-1 rounded-full bg-navy/20" />
            <span>Rabat, Morocco</span>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
            {[
              ['LIFE', 'Empathy, care and human-centered healthcare.'],
              ['ASPIRE', 'Pushing boundaries for a healthier tomorrow.'],
              ['TECH', 'AI-powered, data-driven, secure solutions.'],
            ].map(([title, copy]) => (
              <div key={title}>
                <p className="text-sm font-bold tracking-wide text-primary">{title}</p>
                <p className="mt-1 text-xs leading-snug text-navy/50">{copy}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="scale" delay={150}>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative flex aspect-square items-center justify-center">
              <div className="absolute h-[85%] w-[85%] rounded-full bg-gradient-to-br from-light-blue via-white to-accent/20" />

              {/* Orbit rings echoing the "cycle of care" diagram */}
              <div className="animate-spin-slow absolute h-[78%] w-[78%] rounded-full border border-dashed border-primary/25" />
              <div className="animate-spin-slow-reverse absolute h-[60%] w-[60%] rounded-full border border-primary/15" />

              {orbitNodes.map((node) => (
                <div
                  key={node.label}
                  className="absolute flex flex-col items-center gap-1"
                  style={{
                    top: `${50 + 39 * Math.sin((node.angle * Math.PI) / 180)}%`,
                    left: `${50 + 39 * Math.cos((node.angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_5px_rgba(37,99,235,0.15)]" />
                  <span className="rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold text-navy/60 shadow-sm backdrop-blur">
                    {node.label}
                  </span>
                </div>
              ))}

              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-2xl shadow-primary/20 sm:h-40 sm:w-40">
                <span className="animate-pulse-ring absolute inset-0 rounded-full border-2 border-primary/40" />
                <img
                  src="/images/logo-mark.png"
                  alt="DoctorIA core engine"
                  className="animate-float h-20 w-auto drop-shadow-lg sm:h-24"
                />
              </div>

              {/* Floating scan cards */}
              <div className="animate-float-slow absolute -top-2 -left-4 z-20 w-44 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xl shadow-navy/10 backdrop-blur-md sm:-left-8">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="7" />
                      <path d="M21 21l-4-4" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-navy">Scan analyzed</p>
                    <p className="text-[10px] text-navy/40">1.2s response</p>
                  </div>
                </div>
              </div>

              <div
                className="animate-float-slow absolute -right-2 top-8 z-20 w-40 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xl shadow-navy/10 backdrop-blur-md sm:-right-6"
                style={{ animationDelay: '1.2s' }}
              >
                <p className="text-[10px] font-semibold text-navy/40">RISK SCORE</p>
                <div className="mt-1 flex items-end gap-1">
                  <span className="text-lg font-bold text-health-green">Low</span>
                  <span className="mb-0.5 text-[10px] text-navy/40">confidence 96%</span>
                </div>
              </div>

              <div
                className="animate-float-slow absolute bottom-0 right-6 z-20 w-36 rounded-2xl border border-white/60 bg-white/80 p-3 shadow-xl shadow-navy/10 backdrop-blur-md sm:right-2"
                style={{ animationDelay: '2.4s' }}
              >
                <p className="text-[10px] font-semibold text-navy/40">CLINICAL DECISION</p>
                <p className="mt-1 text-xs font-bold text-navy">Early detection ✓</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
