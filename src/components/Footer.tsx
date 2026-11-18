import { MapPin, Phone } from 'lucide-react'
import { business, navLinks, telLink } from '../data/site'
import { Logo } from './Navbar'
import { CallButton, WhatsAppButton } from './ui'

export default function Footer() {
  return (
    <footer className="grain relative border-t border-gold/10 bg-olive-950 pb-28 pt-20 md:pb-10">
      <div className="container-lux">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-7 max-w-sm text-[0.95rem] leading-relaxed text-stone">
              A premium wellness and relaxation destination in Bangalore — a calm, private escape for body and mind.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CallButton size="sm" />
              <WhatsAppButton size="sm" />
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">Explore</p>
            <ul className="mt-6 grid grid-cols-2 gap-y-3 md:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="text-[0.95rem] text-stone transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">Visit &amp; Enquire</p>
            <ul className="mt-6 space-y-4 text-[0.95rem] text-stone">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={telLink} className="hover:text-gold">{business.phoneDisplay}</a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>
                  {business.city}, {business.region}, {business.country}
                  <span className={`mt-1 block text-sm ${business.address ? '' : 'italic text-stone/60'}`}>
                    {business.address || business.addressPlaceholder}
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-stone/70 sm:flex-row">
          <p>© {new Date().getFullYear()} LLOC SPA, Bangalore. All rights reserved.</p>
          <p className="font-serif text-sm italic text-gold/80">Relax · Refresh · Rejuvenate</p>
        </div>
      </div>
    </footer>
  )
}
