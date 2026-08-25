import Reveal from './Reveal'

const cycle = [
  {
    icon: '/images/icon-prevention.png',
    tag: 'PREVENTION',
    title: 'Stop disease before it starts.',
    copy: 'Early detection and risk prediction reduce human and economic costs dramatically.',
  },
  {
    icon: '/images/icon-diagnostics.png',
    tag: 'DIAGNOSIS',
    title: 'Detect with confidence.',
    copy: 'AI-powered analysis turns any medical image into an accurate, actionable clinical insight.',
  },
  {
    icon: '/images/icon-treatment.png',
    tag: 'TREATMENT',
    title: 'Treat with precision.',
    copy: 'Personalized plans and continuous monitoring improve outcomes and quality of life.',
  },
]

export default function CycleOfCare() {
  return (
    <section id="platform" className="relative overflow-hidden bg-soft-gray py-24 lg:py-32">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-light-blue/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal direction="scale">
          <div className="glow-card mx-auto max-w-3xl rounded-3xl border border-navy/5 bg-white p-8 text-center shadow-sm sm:p-12">
            <p className="section-label text-xs font-bold text-primary">CORE VALUE PROPOSITION</p>
            <h2 className="mt-3 text-2xl font-extrabold leading-snug text-navy sm:text-3xl">
              &ldquo;One image. Instant clinical intelligence.
              <br className="hidden sm:block" /> Across{' '}
              <span className="gradient-text">every specialty.</span>&rdquo;
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-navy/55">
              DoctorIA is not three AI products &mdash; it is one shared computer
              vision engine that converts any medical visual, a scan, a photo,
              an X-ray, into a clinical decision in seconds. Built first for the
              300 million people that Western medical AI has never trained on.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-16 text-center">
            <p className="section-label text-xs font-bold text-primary">THE INTEGRATED ECOSYSTEM</p>
            <h3 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              AI that covers the <span className="gradient-text">full cycle of care.</span>
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-navy/55">
              One shared intelligence engine, unified across oncology, sports
              medicine, and dentistry &mdash; from the first risk signal to the
              final treatment plan.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cycle.map((c, i) => (
            <Reveal key={c.tag} delay={i * 120}>
              <div className="glow-card group relative h-full rounded-3xl border border-navy/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                <img
                  src={c.icon}
                  alt={c.tag}
                  className="h-16 w-16 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
                <p className="section-label mt-6 text-xs font-bold text-primary">{c.tag}</p>
                <h4 className="mt-2 text-lg font-bold text-navy">{c.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">{c.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
