import { motion } from 'framer-motion'
import { Activity, Clock, Flame, Flower2, Gem, Hand, Heart, Leaf, Phone, Smile, Tag, Waves, type LucideIcon } from 'lucide-react'
import { serviceDetailsPlaceholder, services, telLink, waLink, type ServiceIcon } from '../data/site'
import { Picture, SectionHeading, WhatsAppIcon, ease } from './ui'

const icons: Record<ServiceIcon, LucideIcon> = {
  hand: Hand,
  waves: Waves,
  activity: Activity,
  flower: Flower2,
  flame: Flame,
  smile: Smile,
  heart: Heart,
  leaf: Leaf,
  gem: Gem,
}

/** Editorial grid placement (lg: 6-col grid). Featured cards span wider. */
const layout = [
  'lg:col-span-4 lg:row-span-2', // Body — featured
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-6', // Luxury — featured banner
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="grain relative bg-olive-900 py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <span id="services-title">
              Discover Your Perfect <span className="italic text-gold">Relaxation</span> Experience
            </span>
          }
          subtitle="Explore a collection of relaxing massage therapies and wellness experiences designed to help you unwind, refresh, and rejuvenate."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon]
            const big = i === 0
            const wide = i === services.length - 1
            const msg = `Hello LLOC SPA, I would like to enquire about the ${s.title}. Please share availability and pricing.`
            return (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.85, ease, delay: (i % 3) * 0.08 }}
                className={`${layout[i]} ${big || wide ? 'sm:col-span-2' : ''}`}
              >
                <article
                  className={`group relative flex h-full overflow-hidden rounded-[26px] border border-gold/15 bg-olive-800 transition-all duration-700 ease-[var(--ease-lux)] hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_40px_70px_-35px_rgba(0,0,0,0.8)] ${
                    wide ? 'flex-col md:flex-row' : 'flex-col'
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      big ? 'aspect-[4/3] lg:aspect-auto lg:flex-1' : wide ? 'aspect-[16/10] md:aspect-auto md:w-[55%]' : 'aspect-[4/3]'
                    }`}
                  >
                    <Picture
                      name={s.image}
                      alt={`${s.title} at LLOC SPA`}
                      className="block h-full w-full"
                      imgClassName="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-lux)] group-hover:scale-[1.07]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 via-transparent to-transparent" aria-hidden="true" />
                    <span className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-olive-950/45 text-gold backdrop-blur-md">
                      <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    {(big || wide) && (
                      <span className="absolute right-5 top-5 rounded-full bg-gold-soft px-3.5 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.25em] text-olive-900">
                        Signature
                      </span>
                    )}
                    <span className="absolute bottom-4 right-5 font-serif text-5xl font-light text-ivory/25">{String(i + 1).padStart(2, '0')}</span>
                  </div>

                  <div className={`flex flex-1 flex-col p-6 sm:p-7 ${wide ? 'md:justify-center md:p-12' : ''} ${big ? 'lg:flex-none lg:p-9' : ''}`}>
                    <h3 className={`font-serif font-normal leading-tight text-ivory ${big || wide ? 'text-[2.2rem] sm:text-[2.6rem]' : 'text-[1.75rem]'}`}>
                      {s.title}
                    </h3>
                    <p className={`mt-3 leading-relaxed text-stone ${big || wide ? 'max-w-lg text-[1rem]' : 'text-[0.92rem]'}`}>{s.description}</p>

                    <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-ivory/10 pt-5 text-[0.75rem] text-stone">
                      <div className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                        <dt className="sr-only">Duration</dt>
                        <dd>{serviceDetailsPlaceholder.duration}</dd>
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                        <dt className="sr-only">Starting price</dt>
                        <dd>{serviceDetailsPlaceholder.price}</dd>
                      </div>
                    </dl>

                    <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
                      <a
                        href={telLink}
                        aria-label={`Call now about ${s.title}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-soft px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-olive-900 transition-colors duration-500 hover:bg-gold-light"
                      >
                        <Phone className="h-3.5 w-3.5" aria-hidden="true" /> Call Now
                      </a>
                      <a
                        href={waLink(msg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp now about ${s.title}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-ivory/25 px-4 py-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ivory transition-colors duration-500 hover:border-gold hover:text-gold"
                      >
                        <WhatsAppIcon className="h-3.5 w-3.5" /> WhatsApp
                      </a>
                    </div>
                  </div>
                </article>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
