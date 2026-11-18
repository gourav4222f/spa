import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { CallButton, Ornament, Picture, Reveal, WhatsAppButton } from './ui'

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1])

  return (
    <section ref={ref} aria-labelledby="cta-title" className="grain relative isolate overflow-hidden bg-olive-950 py-32 sm:py-44">
      <motion.div style={{ scale }} className="absolute inset-0 -z-10">
        <Picture
          name="flower-bowl"
          alt="Hands cradling a chrysanthemum above a carved wooden bowl of floating flowers"
          className="block h-full w-full"
          imgClassName="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-olive-950/70" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-olive-900 via-transparent to-olive-900" aria-hidden="true" />

      <div className="container-lux text-center">
        <Reveal>
          <span className="eyebrow justify-center">Begin Your Ritual</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 id="cta-title" className="heading-xl mx-auto mt-7 max-w-4xl text-[clamp(2.8rem,7vw,6rem)] text-ivory">
            Your Wellness Journey <span className="italic text-gold">Begins Here</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-9 flex justify-center">
          <Ornament />
        </Reveal>
        <Reveal delay={0.28}>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            Step away from the everyday rush and discover a relaxing wellness experience at LLOC SPA, Bangalore.
          </p>
        </Reveal>
        <Reveal delay={0.36} className="mt-11 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton />
        </Reveal>
      </div>
    </section>
  )
}
