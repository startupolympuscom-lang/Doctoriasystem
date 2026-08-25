import Reveal from './Reveal'

const products = [
  {
    name: 'Oncologia',
    tag: 'Oncology module',
    title: 'Cancer AI Diagnostics',
    color: '#7C3AED',
    colorSoft: '#7C3AED1A',
    copy: 'Image recognition for early-stage cancer detection. Reads radiology, histology, and dermatology scans.',
    points: ['Trained on MENA-population imaging data', 'Integrates with hospital PACS and EHR systems'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4v2M12 18v2M4 12h2M18 12h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Thermographia',
    tag: 'Sports medicine module',
    title: 'Real-Time Injury Intelligence',
    color: '#16A34A',
    colorSoft: '#16A34A1A',
    copy: 'Real-time injury risk assessment for athletes via thermal imaging AI. Analyses MRI, X-ray, and video gait data.',
    points: ['Designed for club medical staff and physios', 'Tracks recovery timelines and return-to-play readiness'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'SnanIA',
    tag: 'Dental module',
    title: 'Smile Simulation & Conversion',
    color: '#EA580C',
    colorSoft: '#EA580C1A',
    copy: 'Converts a smile photo into a photorealistic before/after simulation in seconds &mdash; a chairside conversion tool for aesthetic dentistry.',
    points: ['Reduces patient hesitation on treatment plans', 'Fastest path to revenue &mdash; no regulatory clearance'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path
          d="M4 8c0-2.5 3-3 4-1 .6 1.1 1.4 1.6 2 1.6s1.4-.5 2-1.6c1-2 4-1.5 4 1 0 3-2 6-3.5 6.5-.6.2-1-1-1-2v-1.5M8 15v1.5c0 1-.4 2.2-1 2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section id="products" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label text-xs font-bold text-primary">PRODUCT SUITE</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              Three AI modules. <span className="gradient-text">One platform.</span>
            </h2>
            <p className="mt-4 text-navy/55">
              Every module runs on the same shared computer vision core &mdash;
              an architectural improvement in one specialty compounds across
              the entire ecosystem.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <div className="glow-card group flex h-full flex-col rounded-3xl border border-navy/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ color: p.color, backgroundColor: p.colorSoft }}
                >
                  {p.icon}
                </div>

                <p
                  className="mt-6 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold tracking-wide"
                  style={{ color: p.color, backgroundColor: p.colorSoft }}
                >
                  {p.tag.toUpperCase()}
                </p>

                <h3 className="mt-4 text-xl font-extrabold text-navy">
                  {p.name}
                  <span className="align-super text-xs">™</span>
                </h3>
                <p className="mt-1 text-sm font-semibold text-navy/40">{p.title}</p>
                <p className="mt-4 text-sm leading-relaxed text-navy/60" dangerouslySetInnerHTML={{ __html: p.copy }} />

                <ul className="mt-5 space-y-2.5 border-t border-navy/5 pt-5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-navy/60">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={p.color}
                        strokeWidth="2.5"
                        className="mt-0.5 shrink-0"
                      >
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="relative mt-14 flex flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl bg-navy px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
            <div className="dot-grid pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-white/10" />
            <div className="relative">
              <p className="text-lg font-bold text-white">One engine. Three heads. Infinite clinical intelligence.</p>
              <p className="mt-1 text-sm text-white/50">
                A shared image-recognition architecture where every data point trains the core engine.
              </p>
            </div>
            <a
              href="#contact"
              className="btn-shine relative shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:-translate-y-0.5 hover:bg-light-blue"
            >
              Talk to the team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
