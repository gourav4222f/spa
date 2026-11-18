import { MapPin, Navigation, Phone } from 'lucide-react'
import { business, directionsLink, telLink } from '../data/site'
import { Button, CallButton, Reveal, WhatsAppButton } from './ui'

export default function Contact() {
  const hasAddress = Boolean(business.address)
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-olive-900 py-24 sm:py-32">
      <div className="container-lux grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <span className="eyebrow">LLOC SPA</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="contact-title" className="heading-lg mt-5 text-ivory">
              We Look Forward to <span className="italic text-gold">Welcoming You</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <dl className="mt-12 divide-y divide-ivory/10 border-y border-ivory/10">
              <div className="flex gap-5 py-6">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">Location</dt>
                  <dd className="mt-2 font-serif text-2xl font-light text-ivory">
                    {business.city}, {business.region}, {business.country}
                  </dd>
                </div>
              </div>
              <div className="flex gap-5 py-6">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">Phone</dt>
                  <dd className="mt-2">
                    <a href={telLink} className="font-serif text-2xl font-light text-ivory transition-colors hover:text-gold">
                      {business.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-5 py-6">
                <Navigation className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">Address</dt>
                  <dd className={`mt-2 text-base ${hasAddress ? 'text-ivory' : 'italic text-stone/70'}`}>
                    {business.address || business.addressPlaceholder}
                  </dd>
                </div>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.24} className="mt-10 flex flex-col flex-wrap gap-3 sm:flex-row">
            <CallButton />
            <WhatsAppButton />
            <Button href={directionsLink} external variant="outline">
              <Navigation className="h-3.5 w-3.5" aria-hidden="true" /> Get Directions
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-[30px] border border-gold/15">
          {business.mapEmbedUrl ? (
            <iframe
              title="LLOC SPA location on Google Maps"
              src={business.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[0.4] sepia-[0.2]"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-olive-800 p-10 text-center">
              {/* Decorative abstract map lines — not a real location */}
              <svg className="absolute inset-0 h-full w-full text-gold/[0.08]" aria-hidden="true">
                <defs>
                  <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
                    <path d="M56 0H0v56" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <path d="M-20 300 C 120 220, 260 380, 420 260 S 700 160, 900 240" fill="none" stroke="currentColor" strokeWidth="14" />
                <path d="M200 -20 C 240 160, 160 320, 260 520" fill="none" stroke="currentColor" strokeWidth="9" />
              </svg>
              <span className="relative grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-olive-900">
                <span className="absolute inset-0 animate-ping rounded-full border border-gold/30 [animation-duration:2.6s]" />
                <MapPin className="h-7 w-7 text-gold" strokeWidth={1.3} aria-hidden="true" />
              </span>
              <p className="relative mt-7 font-serif text-3xl font-light text-ivory">
                {business.city}, {business.region}
              </p>
              <p className="relative mt-3 max-w-xs text-sm leading-relaxed text-stone">
                Our map location will appear here soon. Message us on WhatsApp for exact directions.
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
