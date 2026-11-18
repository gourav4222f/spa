import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { useRef } from 'react'
import { business } from '../data/site'
import { CallButton, Picture, WhatsAppButton, ease } from './ui'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const line = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, ease, delay },
  })

  return (
    <section id="home" ref={ref} className="grain relative isolate flex min-h-[100svh] items-end overflow-hidden bg-olive-950">
      {/* Background image with reveal + parallax */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-10">
        <motion.div
          initial={{ scale: 1.18, opacity: 0 }}
          animate={{ scale: 1.04, opacity: 1 }}
          transition={{ duration: 2.4, ease }}
          className="h-full w-full"
        >
          <Picture
            name="hero-body-scrub"
            alt="Guest enjoying a warm mineral salt body ritual at LLOC SPA"
            priority
            className="block h-full w-full"
            imgClassName="h-full w-full object-cover object-[62%_center]"
          />
        </motion.div>
      </motion.div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-950/90 via-olive-950/55 to-transparent" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-olive-950 via-olive-950/30 to-olive-950/50" aria-hidden="true" />

      {/* Decorative frame lines */}
      <div className="pointer-events-none absolute inset-5 hidden rounded-[28px] border border-gold/15 md:block lg:inset-8" aria-hidden="true" />

      <motion.div style={{ y: contentY, opacity: fade }} className="container-lux relative w-full pb-28 pt-36 md:pb-32 lg:pb-36">
        <div className="max-w-3xl">
          <motion.span {...line(0.3)} className="eyebrow">
            Premium Wellness &amp; Relaxation
          </motion.span>

          <motion.h1 {...line(0.45)} className="heading-xl mt-7 text-[clamp(4.2rem,13vw,10.5rem)] text-ivory">
            LLOC <span className="italic text-gold">Spa</span>
          </motion.h1>

          <motion.p {...line(0.6)} className="mt-5 font-serif text-[clamp(1.5rem,3vw,2.35rem)] font-light italic leading-tight text-gold-light">
            An Escape Into Luxury, Comfort &amp; Relaxation
          </motion.p>

          <motion.p {...line(0.75)} className="mt-6 max-w-xl text-[0.98rem] leading-relaxed text-stone sm:text-lg">
            Discover a peaceful escape from everyday life with premium spa experiences and relaxing wellness therapies at LLOC SPA, Bangalore.
          </motion.p>

          <motion.div {...line(0.9)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CallButton />
            <WhatsAppButton />
          </motion.div>

          <motion.div {...line(1.05)} className="mt-10 inline-flex items-center gap-2.5 text-[0.72rem] uppercase tracking-[0.28em] text-stone/90">
            <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {business.city}, {business.region}
          </motion.div>
        </div>
      </motion.div>

      {/* Glass detail card */}
      <motion.aside
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease, delay: 1.2 }}
        className="absolute bottom-32 right-12 hidden w-72 rounded-3xl border border-white/15 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl xl:block"
        aria-label="Signature rituals"
      >
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">Signature Rituals</p>
        <ul className="mt-4 space-y-3 font-serif text-xl font-light text-ivory">
          {['Body Massage', 'Aromatherapy', 'Hot Stone', 'Couple Retreat'].map((s) => (
            <li key={s} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
              {s}
              <span className="h-1 w-1 rounded-full bg-gold" />
            </li>
          ))}
        </ul>
      </motion.aside>

      {/* Scroll indicator */}
      <motion.a
        href="#team"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-[0.6rem] uppercase tracking-[0.4em] text-stone/80 md:bottom-10 md:flex"
        aria-label="Scroll to meet our team"
      >
        Scroll
        <span className="relative h-12 w-px overflow-hidden bg-ivory/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gold"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
