export default function Mission() {
  return (
    <section id="mission" className="relative bg-soft-gray py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-navy/5 bg-white p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s-6.5-4.35-9-9c-1.3-2.6.6-6 3.7-6 2 0 3.7 1.4 5.3 3.4C13.6 7.4 15.3 6 17.3 6c3.1 0 5 3.4 3.7 6-2.5 4.65-9 9-9 9z" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-navy">Mission</h3>
            <p className="mt-3 leading-relaxed text-navy/60">
              To build intelligent, integrated AI technologies that empower
              clinicians and transform patient care &mdash; making the{' '}
              <span className="font-semibold text-primary">
                prevention, diagnosis, and treatment
              </span>{' '}
              of disease faster, more accurate, and accessible to every
              population the world has overlooked.
            </p>
          </div>

          <div className="rounded-3xl border border-navy/5 bg-white p-8 sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="mt-6 text-xl font-bold text-navy">Vision</h3>
            <p className="mt-3 leading-relaxed text-navy/60">
              A future where geography and demographics no longer determine
              the quality of your diagnosis &mdash; where a patient in
              Casablanca receives the same precision of AI-powered clinical
              intelligence as one in Paris, and every doctor works with a
              platform that{' '}
              <span className="font-semibold text-primary">sees the whole patient</span>,
              not just one condition.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
