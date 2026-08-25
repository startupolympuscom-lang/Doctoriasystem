export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-light-blue to-accent/30 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-[320px] w-[320px] rounded-full bg-light-blue/70 blur-3xl" />
        <div className="dot-grid absolute top-16 right-[8%] h-32 w-32 text-primary/20" />
        <div className="dot-grid absolute bottom-10 left-[6%] h-24 w-24 text-primary/15" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            AI-POWERED MEDICAL SOLUTIONS
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
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
              className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl"
            >
              Partner with us
            </a>
            <a
              href="#products"
              className="rounded-full border border-navy/10 bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary"
            >
              Explore the platform
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
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
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-br from-light-blue via-white to-accent/20" />

            <img
              src="/images/logo-mark.png"
              alt="DoctorIA core engine"
              className="animate-float relative z-10 h-52 w-auto drop-shadow-xl sm:h-64"
            />

            {/* Floating scan cards */}
            <div className="animate-float-slow absolute -top-2 -left-4 z-20 w-44 rounded-2xl border border-navy/5 bg-white/90 p-3 shadow-xl backdrop-blur sm:-left-8">
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
              className="animate-float-slow absolute -right-2 top-8 z-20 w-40 rounded-2xl border border-navy/5 bg-white/90 p-3 shadow-xl backdrop-blur sm:-right-6"
              style={{ animationDelay: '1.2s' }}
            >
              <p className="text-[10px] font-semibold text-navy/40">RISK SCORE</p>
              <div className="mt-1 flex items-end gap-1">
                <span className="text-lg font-bold text-health-green">Low</span>
                <span className="mb-0.5 text-[10px] text-navy/40">confidence 96%</span>
              </div>
            </div>

            <div
              className="animate-float-slow absolute bottom-0 right-6 z-20 w-36 rounded-2xl border border-navy/5 bg-white/90 p-3 shadow-xl backdrop-blur sm:right-2"
              style={{ animationDelay: '2.4s' }}
            >
              <p className="text-[10px] font-semibold text-navy/40">CLINICAL DECISION</p>
              <p className="mt-1 text-xs font-bold text-navy">Early detection ✓</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
