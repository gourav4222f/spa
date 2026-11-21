import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, CalendarCheck } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { team, waLink } from '../data/site'
import { Picture, Reveal, ease } from './ui'

export default function Team() {
  const track = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [progress, setProgress] = useState(0)

  const update = useCallback(() => {
    const el = track.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < max - 4)
    setProgress(max > 0 ? el.scrollLeft / max : 0)
  }, [])

  useEffect(() => {
    update()
    const el = track.current
    el?.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el?.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [update])

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current
    if (!el) return
    const card = el.querySelector('li')
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <section id="team" aria-labelledby="team-title" className="relative overflow-hidden bg-olive-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-0 h-[520px] w-[520px] rounded-full bg-gold/[0.06] blur-3xl" aria-hidden="true" />

      <div className="container-lux">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="eyebrow">Meet Our Team</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 id="team-title" className="heading-lg mt-5 text-ivory">
                The Hands Behind <span className="italic text-gold">Your Calm</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-stone sm:text-lg">
                Choose the therapist you'd like to unwind with and book your session in a single tap.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canPrev}
              aria-label="Previous team members"
              className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-500 hover:bg-gold hover:text-olive-900 disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canNext}
              aria-label="Next team members"
              className="grid h-14 w-14 place-items-center rounded-full border border-gold/40 text-gold transition-all duration-500 hover:bg-gold hover:text-olive-900 disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </Reveal>
        </div>
      </div>

      {/* Track aligned with container on the left, bleeding off to the right */}
      <ul
        ref={track}
        aria-label="Team members"
        className="no-scrollbar mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pl-5 pr-5 scroll-pl-5 sm:pl-8 sm:scroll-pl-8 lg:pl-[max(3rem,calc((100vw-1320px)/2+3rem))] lg:scroll-pl-[max(3rem,calc((100vw-1320px)/2+3rem))]"
      >
        {team.map((m, i) => (
          <motion.li
            key={m.name + i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease, delay: Math.min(i, 4) * 0.08 }}
            className="group relative w-[78vw] shrink-0 snap-start sm:w-[340px] lg:w-[360px]"
          >
            <article className="relative overflow-hidden rounded-[26px] border border-gold/15 bg-olive-800">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Picture
                  name={m.image}
                  alt={`${m.name}, ${m.role} at LLOC SPA`}
                  className="block h-full w-full"
                  imgClassName="h-full w-full object-cover transition-transform duration-[1.6s] ease-[var(--ease-lux)] group-hover:scale-[1.06]"
                  style={{ objectPosition: m.focus }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-950 via-olive-950/25 to-transparent" aria-hidden="true" />
                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-olive-950/40 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-gold-light backdrop-blur-md">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-gold">{m.role}</p>
                <h3 className="mt-2 font-serif text-[2.1rem] font-light leading-none text-ivory">{m.name}</h3>
                <div className="mt-3 flex gap-2 text-[0.68rem] font-semibold text-ivory">
                  <span className="rounded-full border border-gold/25 bg-olive-950/60 px-3 py-1.5">Short · {m.shortPrice}</span>
                  <span className="rounded-full border border-gold/25 bg-olive-950/60 px-3 py-1.5">Full Night · {m.nightPrice}</span>
                </div>
                <a
                  href={waLink(`Hello LLOC SPA, I would like to book a session with ${m.name}. Please share the available slots.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book now with ${m.name} on WhatsApp`}
                  className="mt-5 flex w-full items-center justify-between rounded-full bg-gold-soft py-2 pl-6 pr-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-olive-900 transition-all duration-500 hover:bg-gold-light"
                >
                  Book Now
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-olive-900 text-gold transition-transform duration-500 group-hover:rotate-[-8deg]">
                    <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </article>
          </motion.li>
        ))}
        <li aria-hidden="true" className="w-1 shrink-0 lg:w-12" />
      </ul>

      <div className="container-lux mt-8">
        <div className="relative h-px w-full bg-ivory/10" aria-hidden="true">
          <div
            className="absolute inset-y-0 left-0 bg-gold transition-[width] duration-300"
            style={{ width: `${Math.max(12, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  )
}
