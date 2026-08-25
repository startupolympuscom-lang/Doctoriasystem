const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Clinical OS™', href: '#platform' },
      { label: 'Patient Navigator™', href: '#platform' },
      { label: 'Products', href: '#products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Mission & Vision', href: '#mission' },
      { label: 'Roadmap', href: '#roadmap' },
      { label: 'Contact', href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 text-white/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img src="/images/logo-mark.png" alt="DoctorIA" className="h-8 w-auto" />
              <span className="font-sans text-lg font-bold text-white">
                Doctor<span className="text-accent">IA</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              One computer vision engine, three clinical intelligence
              modules &mdash; built first for the 300 million people global
              medical AI has overlooked.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s-6.5-4.35-9-9c-1.3-2.6.6-6 3.7-6 2 0 3.7 1.4 5.3 3.4C13.6 7.4 15.3 6 17.3 6c3.1 0 5 3.4 3.7 6-2.5 4.65-9 9-9 9z" />
              </svg>
              Rabat, Morocco
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Doctoria Medical Solutions LTD. All rights reserved.</p>
          <p>Founder: Jad Tounsi Al Azzoni &middot; info@doctoria.ai</p>
        </div>
      </div>
    </footer>
  )
}
