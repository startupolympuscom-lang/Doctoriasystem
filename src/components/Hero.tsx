import Reveal from './Reveal'

const orbitNodes = [
  { label: 'Prevention', angle: -90 },
  { label: 'Diagnosis', angle: 30 },
  { label: 'Treatment', angle: 150 },
]

const specialtyAvatars = [
  { icon: '/images/icon-oncologia.png', ring: 'ring-[#7C3AED]/40' },
  { icon: '/images/icon-thermographia.png', ring: 'ring-[#EA580C]/40' },
  { icon: '/images/icon-snania.png', ring: 'ring-[#2563EB]/40' },
]

export default function Hero() {
  return (
    <section id="top" className="relative bg-navy pt-32 pb-24 lg:pt-40 lg:pb-28">
      {/* Background layer — clipped separately so floating cards can hang past the edge */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-primary-dark/60" />
        <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-primary/25 via-transparent to-transparent" />
        <div className="animate-mesh absolute top-[-10%] right-[-5%] h-[560px] w-[560px] rounded-full bg-primary/30 blur-[110px]" />
        <div className="animate-mesh-slow absolute bottom-[-15%] left-[10%] h-[420px] w-[420px] rounded-full bg-accent/15 blur-[100px]" />
        <div className="animate-mesh absolute top-1/3 right-1/4 h-[260px] w-[260px] rounded-full bg-health-green/10 blur-[90px]" style={{ animationDelay: '3s' }} />
        <div className="dot-grid absolute top-24 left-[4%] h-28 w-28 text-white/10" />
        <div className="dot-grid absolute bottom-24 right-[6%] h-24 w-24 text-white/10" />

        {/* Vertical editorial label */}
        <div className="absolute inset-y-0 right-8 hidden items-center gap-4 lg:flex">
          <span className="vertical-rl text-[11px] font-semibold tracking-[0.25em] text-white/35">
            DOCTORIA © 2026
          </span>
          <span className="h-24 w-px bg-white/15" />
          <span className="vertical-rl text-[11px] font-semibold tracking-[0.25em] text-white/35">
            CLINICAL AI PLATFORM
          </span>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-10">
          <Reveal direction="up">
            <div>
              <h1 className="font-sans font-black uppercase leading-[0.92] tracking-tight text-white">
                <span className="flex flex-wrap items-center gap-3 text-4xl sm:text-6xl lg:text-[4.2rem]">
                  Clinical
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-health-green sm:h-12 sm:w-12">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0B1220" strokeWidth="2.4" className="sm:h-5 sm:w-5">
                      <path d="M3 12h4l2-7 4 14 2-7h6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
                <span className="mt-1 flex flex-wrap items-baseline gap-2.5 text-4xl sm:text-6xl lg:text-[4.2rem]">
                  <span className="text-lg font-bold normal-case tracking-normal text-accent sm:text-2xl">Nº01</span>
                  <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                    Intelligence.
                  </span>
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60">
                One image. Instant clinical intelligence. Across every specialty.
                DoctorIA converts scans, photos, and X-rays into actionable
                clinical decisions in seconds &mdash; built first for the 300
                million people global medical AI has overlooked.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#contact"
                  className="btn-shine rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy shadow-lg shadow-black/20 transition-all hover:-translate-y-0.5 hover:bg-light-blue hover:shadow-xl"
                >
                  Partner with us
                </a>
                <a href="#products" className="group flex items-center gap-3 text-sm font-semibold text-white">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:border-white/60 group-hover:bg-white/10">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Explore the platform
                </a>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/40">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                  </svg>
                  Incubated by Startup Olympus
                </span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Pre-seed stage</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>Rabat, Morocco</span>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  ['LIFE', 'Empathy, care and human-centered healthcare.'],
                  ['ASPIRE', 'Pushing boundaries for a healthier tomorrow.'],
                  ['TECH', 'AI-powered, data-driven, secure solutions.'],
                ].map(([title, copy]) => (
                  <div key={title}>
                    <p className="text-sm font-bold tracking-wide text-accent">{title}</p>
                    <p className="mt-1 text-xs leading-snug text-white/40">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="scale" delay={150}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative flex aspect-square items-center justify-center">
                <div className="absolute h-[88%] w-[88%] rounded-full bg-gradient-to-br from-primary/30 via-white/5 to-accent/10" />

                <div className="animate-spin-slow absolute h-[78%] w-[78%] rounded-full border border-dashed border-white/20" />
                <div className="animate-spin-slow-reverse absolute h-[60%] w-[60%] rounded-full border border-white/10" />

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
                    <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(96,165,250,0.2)]" />
                    <span className="rounded-full border border-white/10 bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/80 backdrop-blur">
                      {node.label}
                    </span>
                  </div>
                ))}

                {/* Twinkling particles for a "network" feel */}
                {[
                  [18, 22],
                  [82, 30],
                  [12, 68],
                  [88, 74],
                  [50, 8],
                ].map(([top, left], idx) => (
                  <span
                    key={`${top}-${left}`}
                    className="animate-twinkle absolute h-1.5 w-1.5 rounded-full bg-accent"
                    style={{ top: `${top}%`, left: `${left}%`, animationDelay: `${idx * 0.5}s` }}
                  />
                ))}

                <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-white/10 shadow-[0_0_80px_rgba(96,165,250,0.35)] backdrop-blur sm:h-40 sm:w-40">
                  <span className="animate-pulse-ring absolute inset-0 rounded-full border-2 border-accent/50" />
                  <img
                    src="/images/logo-mark.png"
                    alt="DoctorIA core engine"
                    className="animate-float h-20 w-auto drop-shadow-[0_0_35px_rgba(96,165,250,0.55)] sm:h-24"
                  />
                </div>

                {/* Floating glass scan cards */}
                <div className="animate-float-slow absolute -top-2 -left-4 z-20 w-44 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-xl shadow-black/20 backdrop-blur-md sm:-left-8">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-accent">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4-4" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-white">Scan analyzed</p>
                      <p className="text-[10px] text-white/40">1.2s response</p>
                    </div>
                  </div>
                </div>

                <div
                  className="animate-float-slow absolute -right-2 top-8 z-20 w-40 rounded-2xl border border-white/15 bg-white/10 p-3 shadow-xl shadow-black/20 backdrop-blur-md sm:-right-6"
                  style={{ animationDelay: '1.2s' }}
                >
                  <p className="text-[10px] font-semibold text-white/40">RISK SCORE</p>
                  <div className="mt-1 flex items-end gap-1">
                    <span className="text-lg font-bold text-health-green">Low</span>
                    <span className="mb-0.5 text-[10px] text-white/40">confidence 96%</span>
                  </div>
                </div>

                <div className="absolute bottom-2 right-4 z-20 flex items-center gap-1 rounded-full bg-health-green py-1 pl-3 pr-1 text-[11px] font-bold text-navy shadow-lg sm:bottom-6 sm:right-8">
                  Pre-seed
                  <span className="rounded-full border border-navy/15 bg-white/70 px-2 py-0.5 text-[10px] font-bold">2026</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Floating info strip — hangs over the seam into the next section on desktop */}
        <div className="relative mt-14 grid grid-cols-1 gap-4 lg:mt-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <Reveal delay={200} className="lg:absolute lg:bottom-[-52px] lg:left-0 lg:w-[46%]">
            <a
              href="#platform"
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-navy-soft/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-white/20"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 p-2.5">
                <img src="/images/logo-mark.png" alt="" className="h-full w-full object-contain" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-wide text-accent">How it works</p>
                <p className="mt-0.5 text-sm font-semibold leading-snug text-white">
                  One shared engine, every specialty.
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.2"
                className="ml-auto shrink-0 text-white/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>

          <Reveal delay={280} className="lg:absolute lg:bottom-[-52px] lg:right-0 lg:w-[46%]">
            <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-2xl shadow-black/30">
              <div className="flex shrink-0 -space-x-3">
                {specialtyAvatars.map((a) => (
                  <span
                    key={a.icon}
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-soft-gray p-1.5 ring-2 ring-white ${a.ring}`}
                  >
                    <img src={a.icon} alt="" className="h-full w-full object-contain" />
                  </span>
                ))}
              </div>
              <div>
                <p className="text-xl font-extrabold text-navy">
                  300M<span className="text-primary">+</span>
                </p>
                <p className="text-xs text-navy/50">people overlooked by global medical AI</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
