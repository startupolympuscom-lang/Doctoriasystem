import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-primary-dark px-8 py-16 text-center sm:px-16">
            <div className="animate-mesh pointer-events-none absolute -top-24 -left-24 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />
            <div className="animate-mesh-slow pointer-events-none absolute -bottom-24 -right-24 h-[300px] w-[300px] rounded-full bg-accent/30 blur-3xl" />
            <div className="dot-grid pointer-events-none absolute -top-4 -left-4 h-40 w-40 text-white/10" />
            <div className="dot-grid pointer-events-none absolute -bottom-6 -right-6 h-40 w-40 text-white/10" />

            <p className="section-label text-xs font-bold text-white/70">
              TOGETHER, LET'S BUILD THE FUTURE OF HEALTHCARE
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-extrabold text-white sm:text-4xl">
              Building the clinical intelligence layer for 300 million overlooked patients.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Incubated by Startup Olympus. We're raising our pre-seed round
              to ship SnanIA, onboard our first clinics, and build the MENA
              data flywheel. Clinicians, partners, and investors &mdash; let's talk.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:info@doctoria.ai"
                className="btn-shine rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                info@doctoria.ai
              </a>
              <a
                href="#products"
                className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10"
              >
                Back to the platform
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
