import Reveal from './Reveal'

export default function Architecture() {
  return (
    <section className="relative overflow-hidden bg-soft-gray py-24 lg:py-32">
      <div className="dot-grid pointer-events-none absolute -top-6 right-10 h-32 w-32 text-primary/15" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label text-xs font-bold text-primary">PLATFORM ARCHITECTURE</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Clinical OS<span className="text-lg align-super">™</span> +{' '}
              <span className="gradient-text">Patient Navigator™</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="relative h-full overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-lg shadow-primary/20 transition-transform duration-300 hover:-translate-y-1.5 sm:p-10">
              <div className="dot-grid pointer-events-none absolute -bottom-4 -right-4 h-28 w-28 text-white/10" />
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                  <path d="M12 21s-6.5-4.35-9-9c-1.3-2.6.6-6 3.7-6 2 0 3.7 1.4 5.3 3.4C13.6 7.4 15.3 6 17.3 6c3.1 0 5 3.4 3.7 6-2.5 4.65-9 9-9 9z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold">DoctorIA Clinical OS™</h3>
              <p className="mt-1 text-sm text-white/70">For medical professionals · hospitals · clinics</p>
              <ul className="mt-6 space-y-3">
                {[
                  'Unified EHR + labs + imaging interface',
                  'AI-powered clinical decision support',
                  'Cancer, sports, and dental modules',
                  'Evidence-based care pathway engine',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="mt-0.5 shrink-0">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="glow-card h-full rounded-3xl border border-navy/5 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5 sm:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold text-navy">Patient Navigator™</h3>
              <p className="mt-1 text-sm text-navy/40">Patient-facing layer</p>
              <ul className="mt-6 space-y-3">
                {[
                  'Personalized health insights',
                  'Risk assessment scores',
                  'Treatment adherence tools',
                  'Smile simulation viewer',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-navy/65">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" className="mt-0.5 shrink-0">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M8 12.5l2.5 2.5L16 9.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl border border-navy/5 bg-white p-7 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-light-blue text-primary">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-navy">Medical Advisory Board (MAB)</p>
              <p className="mt-1 text-sm text-navy/55">
                Clinically validates every product before ship, provides warm
                introductions into hospital systems, and acts as our Michelin
                Star with hospital procurement.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
