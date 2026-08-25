const moats = [
  {
    num: '01',
    tag: 'Surface advantage',
    title: 'Shared computer vision engine',
    copy: 'One architectural improvement benefits all three products simultaneously. Single-specialty competitors can never match this compound R&D return.',
    color: '#2563EB',
  },
  {
    num: '02',
    tag: 'Deep advantage',
    title: 'MENA-first, MENA-trained data',
    copy: 'DoctorIA accumulates what will become the most comprehensive medical imaging dataset for North African patients — a dataset no competitor can buy.',
    color: '#16A34A',
  },
  {
    num: '03',
    tag: 'Core moat',
    title: 'Cross-specialty patient record',
    copy: 'When a dentist, a sports physio, and an oncologist all use DoctorIA for the same patient, we see correlations no single-specialty tool ever can.',
    color: '#7C3AED',
  },
]

export default function Moat() {
  return (
    <section className="relative bg-navy py-24 text-white lg:py-32">
      <div className="dot-grid pointer-events-none absolute top-10 left-10 h-32 w-32 text-white/10" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-label text-xs font-bold text-accent">UNFAIR ADVANTAGE</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Three compounding moats.
            <br />
            No competitor <span className="gradient-text">holds all three.</span>
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {moats.map((m) => (
            <div
              key={m.num}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:bg-white/[0.07] sm:flex-row sm:items-center"
            >
              <div className="flex shrink-0 items-center gap-4 sm:w-72">
                <span className="text-3xl font-extrabold text-white/15">{m.num}</span>
                <div>
                  <p
                    className="mb-1.5 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide"
                    style={{ color: m.color, backgroundColor: `${m.color}26` }}
                  >
                    {m.tag.toUpperCase()}
                  </p>
                  <p className="font-bold leading-snug">{m.title}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/55 sm:border-l sm:border-white/10 sm:pl-6">{m.copy}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm italic text-white/45">
          The unfair advantage in one sentence: DoctorIA is the only AI
          platform training a shared computer-vision engine on cross-specialty
          MENA data &mdash; 3 to 5 years ahead of any competitor who starts today.
        </p>
      </div>
    </section>
  )
}
