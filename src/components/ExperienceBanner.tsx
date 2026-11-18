import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CallButton, Ornament, Picture, Reveal, WhatsAppButton, ease } from './ui'

export default function ExperienceBanner() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-12%', '12%'])

  const words = ['Relax.', 'Refresh.', 'Rejuvenate.']

  return (
    <section
      id="experience"
      ref={ref}
      aria-labelledby="experience-title"
      className="grain relative isolate flex min-h-[90svh] items-center overflow-hidden bg-olive-950 py-28"
    >
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0 -z-10">
        <Picture
          name="thermal-pool"
          alt="Guest unwinding in a misty natural thermal pool surrounded by greenery"
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-olive-950/60" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(27,28,22,0.85)_75%)]" aria-hidden="true" />

      <div className="container-lux text-center">
        <Reveal>
          <span className="eyebrow justify-center">The LLOC Experience</span>
        </Reveal>
        <h2 id="experience-title" className="mt-8 font-serif font-light uppercase leading-[0.92] tracking-[0.04em] text-ivory">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease, delay: 0.15 + i * 0.18 }}
              className={`block text-[clamp(3rem,10vw,8.5rem)] ${i === 1 ? 'italic text-gold' : ''}`}
            >
              {w}
            </motion.span>
          ))}
        </h2>
        <Reveal delay={0.6} className="mt-10 flex justify-center">
          <Ornament />
        </Reveal>
        <Reveal delay={0.7}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
            Take a moment for yourself and experience the comfort of a peaceful wellness escape.
          </p>
        </Reveal>
        <Reveal delay={0.8} className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton />
        </Reveal>
      </div>
    </section>
  )
}
