import Reveal from './Reveal'

const scale = [
  { value: '$45B', label: 'Global AI diagnostics market by 2030', tone: 'light' },
  { value: '$4.2B', label: 'MENA + Francophone Europe MedTech AI (SAM)', tone: 'primary' },
  { value: '$180M', label: 'Dental AI + Sports Med AI, MENA, 5-year (SOM)', tone: 'dark' },
]

const segments = [
  { name: 'Dental AI', value: '$2.1B', cagr: '21% CAGR', note: 'SnanIA enters this first' },
  { name: 'Sports Medicine AI', value: '$890M', cagr: '18% CAGR', note: 'Clubs, federations, physios' },
  { name: 'Oncology AI', value: '$1.1B', cagr: '28% CAGR', note: 'Highest impact, longest cycle' },
]

const toneClasses: Record<string, string> = {
  light: 'bg-light-blue text-navy',
  primary: 'bg-gradient-to-br from-primary to-primary-dark text-white',
  dark: 'bg-navy text-white',
}

export default function Market() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
            <div>
              <p className="section-label text-xs font-bold text-primary">MARKET OPPORTUNITY</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-navy sm:text-4xl">
                A massive, underserved market at the intersection of{' '}
                <span className="gradient-text">AI, MedTech, and Francophone Africa.</span>
              </h2>
            </div>
            <p className="text-navy/55">
              95% of medical AI is trained on US/EU populations. By focusing on
              North African and Francophone populations, DoctorIA is building
              the most comprehensive cross-specialty medical imaging dataset
              for a region the global system has overlooked.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {scale.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div
                className={`h-full rounded-3xl p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-xl ${toneClasses[s.tone]}`}
              >
                <p className="text-4xl font-extrabold">{s.value}</p>
                <p className="mt-3 text-sm opacity-80">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.name} delay={i * 100}>
              <div className="glow-card h-full rounded-3xl border border-navy/5 bg-soft-gray p-6 transition-transform duration-300 hover:-translate-y-1">
                <p className="font-bold text-navy">{s.name}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-primary">{s.value}</span>
                  <span className="text-xs font-semibold text-navy/40">{s.cagr}</span>
                </div>
                <p className="mt-2 text-xs italic text-navy/45">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
