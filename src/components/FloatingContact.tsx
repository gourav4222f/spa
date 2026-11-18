import { AnimatePresence, motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business, telLink, waLink } from '../data/site'
import { WhatsAppIcon, ease } from './ui'

export default function FloatingContact() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Desktop floating buttons */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease }}
            className="fixed bottom-8 right-8 z-40 hidden flex-col gap-3 md:flex"
          >
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with LLOC SPA on WhatsApp"
              className="group relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_15px_35px_-10px_rgba(37,211,102,0.6)] transition-transform duration-500 hover:-translate-y-1"
            >
              <WhatsAppIcon className="h-6 w-6" />
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-olive-900 px-4 py-2 text-xs text-ivory opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                WhatsApp Now
              </span>
            </a>
            <a
              href={telLink}
              aria-label={`Call LLOC SPA on ${business.phoneDisplay}`}
              className="group relative grid h-14 w-14 place-items-center rounded-full bg-gold-soft text-olive-900 shadow-[0_15px_35px_-10px_rgba(214,194,154,0.6)] transition-transform duration-500 hover:-translate-y-1"
            >
              <Phone className="h-5 w-5" />
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-olive-900 px-4 py-2 text-xs text-ivory opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                {business.phoneDisplay}
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom contact bar (always visible; footer has matching bottom padding) */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2.5 border-t border-gold/15 bg-olive-900/90 px-3 pt-3 backdrop-blur-xl md:hidden"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
      >
        <a
          href={telLink}
          aria-label={`Call LLOC SPA on ${business.phoneDisplay}`}
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gold-soft text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-olive-900"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with LLOC SPA on WhatsApp"
          className="flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#25D366] text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-white"
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp Now
        </a>
      </div>
    </>
  )
}
