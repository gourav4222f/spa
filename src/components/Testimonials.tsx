import { Quote, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/site'
import { SectionHeading, ease } from './ui'

export default function Testimonials() {
  return (
    <section aria-labelledby="reviews-title" className="relative bg-cream py-24 text-ink sm:py-32">
      <div className="container-lux">
        <SectionHeading
          tone="dark"
          eyebrow="Guest Experiences"
          title={
            <span id="reviews-title">
              Experiences That Inspire <span className="italic text-[#8a7650]">Relaxation</span>
            </span>
          }
        />

        <ul className="no-scrollbar -mx-5 mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:gap-6">
          {testimonials.map((t, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, ease, delay: i * 0.1 }}
              className="w-[82vw] shrink-0 snap-center sm:w-[60vw] md:w-auto"
            >
              <figure className="relative flex h-full flex-col rounded-[26px] border border-ink/10 bg-white/60 p-8 shadow-[0_30px_60px_-45px_rgba(37,39,31,0.6)] sm:p-10">
                <Quote className="h-10 w-10 text-[#b9a476]" strokeWidth={1} aria-hidden="true" />
                <div className="mt-6 flex gap-1" aria-label={`Rating placeholder: ${t.rating} out of 5`}>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-[#b9a476]/40 text-[#b9a476]" strokeWidth={1.2} aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 font-serif text-[1.45rem] font-light italic leading-snug text-ink/70">{t.text}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-olive-900 font-serif text-lg text-gold" aria-hidden="true">
                    L
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{t.name}</span>
                    <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft">Verified review placeholder</span>
                  </span>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
