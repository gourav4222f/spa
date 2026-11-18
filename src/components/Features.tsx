import { motion } from 'framer-motion'
import { CalendarCheck, Droplet, DoorClosed, Fingerprint, Lamp, Layers, Sparkles, Users, type LucideIcon } from 'lucide-react'
import { features } from '../data/site'
import { CallButton, SectionHeading, WhatsAppButton, ease } from './ui'

const icons: Record<(typeof features)[number]['icon'], LucideIcon> = {
  users: Users,
  door: DoorClosed,
  sparkles: Sparkles,
  lamp: Lamp,
  droplet: Droplet,
  fingerprint: Fingerprint,
  calendar: CalendarCheck,
  layers: Layers,
}

export default function Features() {
  return (
    <section aria-labelledby="features-title" className="relative bg-cream-deep py-24 text-ink sm:py-32">
      <div className="container-lux">
        <SectionHeading
          tone="dark"
          eyebrow="Why Choose Us"
          title={
            <span id="features-title">
              Your Comfort Is Our <span className="italic text-[#8a7650]">Priority</span>
            </span>
          }
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = icons[f.icon]
            return (
              <motion.li
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, ease, delay: (i % 4) * 0.07 }}
                className="group relative bg-cream p-8 transition-colors duration-700 hover:bg-olive-900 sm:p-10"
              >
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#b9a476]/60 text-[#8a7650] transition-all duration-700 group-hover:border-gold group-hover:text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.3} aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-serif text-[1.55rem] font-normal leading-tight text-ink transition-colors duration-700 group-hover:text-ivory">
                  {f.title}
                </h3>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft transition-colors duration-700 group-hover:text-stone">{f.text}</p>
                <span className="absolute right-7 top-8 font-serif text-sm text-ink/30 transition-colors duration-700 group-hover:text-gold/60">
                  0{i + 1}
                </span>
              </motion.li>
            )
          })}
        </ul>

        <div className="mt-14 flex flex-col justify-center gap-3 sm:flex-row">
          <CallButton variant="dark" />
          <WhatsAppButton variant="outline-dark" />
        </div>
      </div>
    </section>
  )
}
