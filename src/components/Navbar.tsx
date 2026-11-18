import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business, navLinks, telLink } from '../data/site'
import { CallButton, WhatsAppButton, ease } from './ui'

export function Logo({ className = '' }: { className?: string }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`} aria-label="LLOC SPA — back to top">
      <span className="relative grid h-10 w-10 place-items-center rounded-full border border-gold/50 transition-colors duration-500 group-hover:border-gold">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-gold" aria-hidden="true">
          <path d="M12 3c3 3.5 4.5 6.5 4.5 9.5a4.5 4.5 0 0 1-9 0C7.5 9.5 9 6.5 12 3z" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <path d="M12 8v13" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-serif text-[1.55rem] font-medium tracking-[0.22em] text-ivory">LLOC</span>
        <span className="mt-1 block text-[0.55rem] font-semibold uppercase tracking-[0.55em] text-gold">Spa · Bangalore</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section indicator
  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold" aria-hidden="true" />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[var(--ease-lux)] ${
          scrolled ? 'border-b border-gold/10 bg-olive-900/80 py-3 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl' : 'py-6'
        }`}
      >
        <nav className="container-lux flex items-center justify-between" aria-label="Main navigation">
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`relative py-2 text-[0.72rem] font-medium uppercase tracking-[0.24em] transition-colors duration-300 ${
                    active === l.id ? 'text-gold' : 'text-ivory/80 hover:text-ivory'
                  }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-0.5 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-500 ${
                      active === l.id ? 'w-full' : 'w-0'
                    }`}
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <a href={telLink} className="text-[0.78rem] tracking-[0.08em] text-stone transition-colors hover:text-gold">
              {business.phoneDisplay}
            </a>
            <CallButton size="sm" />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a href={telLink} aria-label="Call LLOC SPA" className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold">
              <Phone className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease }}
            className="grain fixed inset-0 z-[70] flex flex-col bg-olive-900/97 backdrop-blur-xl lg:hidden"
          >
            <div className="container-lux flex items-center justify-between py-6">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-11 w-11 place-items-center rounded-full border border-ivory/20 text-ivory"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="container-lux mt-6 flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline gap-4 border-b border-ivory/10 py-4 font-serif text-4xl font-light ${
                      active === l.id ? 'text-gold' : 'text-ivory'
                    }`}
                  >
                    <span className="font-sans text-xs tracking-[0.2em] text-gold/70">0{i + 1}</span>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="container-lux grid grid-cols-2 gap-3 pb-10 pt-6">
              <CallButton />
              <WhatsAppButton label="WhatsApp" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
