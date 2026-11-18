import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { gallery } from '../data/site'
import { Picture, SectionHeading, ease } from './ui'

const aspect: Record<(typeof gallery)[number]['shape'], string> = {
  tall: 'aspect-[3/4]',
  square: 'aspect-square',
  wide: 'aspect-[4/3]',
}

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const close = useCallback(() => setIndex(null), [])
  const go = useCallback((d: 1 | -1) => setIndex((i) => (i === null ? i : (i + d + gallery.length) % gallery.length)), [])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, close, go])

  return (
    <section id="gallery" aria-labelledby="gallery-title" className="relative bg-olive-900 py-24 sm:py-32">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <span id="gallery-title">
              Step Into the World of <span className="italic text-gold">LLOC SPA</span>
            </span>
          }
          subtitle="Explore the atmosphere of comfort, tranquility, and luxury."
        />

        <ul className="mt-16 columns-2 gap-4 sm:gap-5 lg:columns-3 lg:gap-6">
          {gallery.map((g, i) => (
            <motion.li
              key={g.image}
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 1, ease, delay: (i % 3) * 0.1 }}
              className="mb-4 break-inside-avoid sm:mb-5 lg:mb-6"
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`View larger: ${g.alt}`}
                className="group relative block w-full overflow-hidden rounded-[22px]"
              >
                <Picture
                  name={g.image}
                  alt={g.alt}
                  className="block"
                  imgClassName={`${aspect[g.shape]} w-full object-cover saturate-[0.9] sepia-[0.12] transition-all duration-[1.4s] ease-[var(--ease-lux)] group-hover:scale-[1.07] group-hover:saturate-100`}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-olive-950/0 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex translate-y-3 items-end justify-between gap-3 p-5 text-left opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-serif text-lg leading-snug text-ivory">{g.alt}</span>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-soft text-olive-900">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Gallery preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-olive-950/95 p-4 backdrop-blur-md sm:p-10"
            onClick={close}
          >
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
              className="relative max-h-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Picture
                name={gallery[index].image}
                alt={gallery[index].alt}
                className="block"
                imgClassName="max-h-[80vh] w-auto rounded-2xl object-contain"
                priority
              />
              <p className="mt-4 text-center font-serif text-lg text-stone">{gallery[index].alt}</p>
            </motion.div>

            <button type="button" onClick={close} aria-label="Close preview" className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full border border-ivory/20 text-ivory hover:border-gold hover:text-gold">
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(-1) }}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/20 bg-olive-950/50 text-ivory hover:border-gold hover:text-gold sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); go(1) }}
              aria-label="Next image"
              className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-ivory/20 bg-olive-950/50 text-ivory hover:border-gold hover:text-gold sm:right-6"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
