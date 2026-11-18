import { motion, useScroll, useTransform } from 'framer-motion'
import { Check } from 'lucide-react'
import { useRef } from 'react'
import { CallButton, Picture, Reveal, WhatsAppButton } from './ui'

const reasons = [
  'Relaxing Luxury Atmosphere',
  'Comfortable Private Spaces',
  'Quality Wellness Experiences',
  'Hygienic Environment',
  'Personalized Guest Experience',
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const smallY = useTransform(scrollYProgress, [0, 1], ['18%', '-18%'])

  return (
    <section id="about" aria-labelledby="about-title" className="relative overflow-hidden bg-cream py-24 text-ink sm:py-32">
      <div className="container-lux grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-24">
        {/* Images */}
        <div ref={ref} className="relative pb-16 pr-8 sm:pb-20 sm:pr-16">
          <Reveal className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[32px] border border-[#b9a476]/50 sm:-left-6 sm:-top-6" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[32px] shadow-[0_40px_80px_-40px_rgba(37,39,31,0.55)]">
              <Picture
                name="stone-foot-ritual"
                alt="Candlelit treatment room with warm stones, oils and fresh towels"
                className="block"
                imgClassName="aspect-[4/5] w-full object-cover object-[60%_center] sm:aspect-[5/6]"
              />
            </div>
          </Reveal>

          <motion.div style={{ y: smallY }} className="absolute bottom-0 right-0 w-[48%] sm:w-[44%]">
            <div className="overflow-hidden rounded-[24px] border-[6px] border-cream shadow-[0_30px_60px_-25px_rgba(37,39,31,0.6)]">
              <Picture
                name="towels-flower"
                alt="Soft spa towels with cinnamon and a fresh daisy"
                className="block"
                imgClassName="aspect-square w-full object-cover"
              />
            </div>
          </motion.div>

          <Reveal delay={0.3} className="absolute left-6 top-8 rounded-2xl bg-olive-900/85 px-5 py-4 text-ivory backdrop-blur-md sm:left-8 sm:top-10">
            <p className="font-serif text-3xl font-light leading-none text-gold">Bangalore</p>
            <p className="mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-stone">Wellness Sanctuary</p>
          </Reveal>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow !text-[#8a7650]">About LLOC SPA</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="about-title" className="heading-lg mt-5 text-ink">
              A Sanctuary Designed for <span className="italic text-[#8a7650]">Relaxation</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-7 text-[1.02rem] leading-[1.85] text-ink-soft">
              At LLOC SPA, we believe that taking time to relax is an essential part of everyday well-being. Our vision is to create a
              peaceful wellness environment where guests can step away from their busy routines and enjoy comfortable, personalized spa
              experiences.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 border-l-2 border-[#b9a476] pl-5 font-serif text-2xl font-light italic leading-snug text-ink">
              Our focus is on relaxation, comfort, hygiene, and welcoming hospitality.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-10 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-ink">Why Choose LLOC SPA</p>
            <ul className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-center gap-3 text-[0.95rem] text-ink">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-olive-900 text-gold">
                    <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32} className="mt-11 flex flex-col gap-3 sm:flex-row">
            <CallButton variant="dark" label="Call to Discover More" />
            <WhatsAppButton variant="outline-dark" label="WhatsApp Us" />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
