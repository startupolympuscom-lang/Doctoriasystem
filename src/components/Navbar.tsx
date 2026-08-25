import { useEffect, useState } from 'react'

const links = [
  { href: '#platform', label: 'Platform' },
  { href: '#products', label: 'Products' },
  { href: '#mission', label: 'Mission' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el)

    if (typeof IntersectionObserver === 'undefined' || sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 shadow-sm shadow-navy/5 backdrop-blur-xl' : 'bg-white/60 backdrop-blur-sm'
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-navy/[0.04]">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src="/images/logo-mark.png"
            alt="DoctorIA"
            className="h-9 w-auto transition-transform duration-500 group-hover:rotate-[8deg]"
          />
          <span className="font-sans text-xl font-bold text-navy">
            Doctor<span className="text-primary">IA</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-navy/5 bg-navy/[0.02] px-1.5 py-1.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                active === l.href ? 'text-white' : 'text-navy/60 hover:text-primary'
              }`}
            >
              {active === l.href && (
                <span className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm shadow-primary/40" />
              )}
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-shine rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
          >
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          aria-label="Toggle menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-navy/5 bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium ${active === l.href ? 'text-primary' : 'text-navy/70'}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-white"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
