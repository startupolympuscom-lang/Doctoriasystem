import Reveal from './Reveal'

const arc = [
  {
    year: 'Year 1',
    copy: 'SnanIA shipping. First 100 dental customers. Sports club pilots. Medical Advisory Board recruited.',
  },
  {
    year: 'Year 2',
    copy: 'Sports + cancer modules deployed. MENA data flywheel spinning. Series A raised.',
  },
  {
    year: 'Year 3',
    copy: 'MENA model outperforms all Western competitors in region. Hospital enterprise deals.',
  },
  {
    year: 'Year 4',
    copy: 'Cross-specialty correlations publishable. Insurer partnerships. Research credibility.',
  },
  {
    year: 'Year 5+',
    copy: 'DoctorIA is the AI health intelligence infrastructure for 500M people across MENA.',
    highlight: true,
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="section-label text-xs font-bold text-primary">WHERE WE'RE HEADED</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
              The <span className="gradient-text">5-year arc.</span>
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute top-2 bottom-2 left-[86px] hidden w-px bg-gradient-to-b from-primary via-navy/10 to-transparent sm:block" />
          <div className="space-y-8">
            {arc.map((step, i) => (
              <Reveal key={step.year} delay={i * 100} direction="left">
                <div className="group relative flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8">
                  <div className="flex items-center gap-4 sm:w-[172px] sm:shrink-0">
                    <span
                      className={`rounded-full px-4 py-1.5 text-xs font-bold text-white transition-transform duration-300 group-hover:scale-105 ${
                        step.highlight ? 'bg-gradient-to-r from-primary to-accent' : 'bg-primary'
                      }`}
                    >
                      {step.year}
                    </span>
                    <span className="relative z-10 hidden h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-white sm:block">
                      {step.highlight && (
                        <span className="animate-pulse-ring absolute inset-0 rounded-full border-2 border-primary" />
                      )}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed sm:pt-1 ${
                      step.highlight ? 'font-bold text-primary' : 'text-navy/65'
                    }`}
                  >
                    {step.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
