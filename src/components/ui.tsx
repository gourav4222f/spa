import { motion, type HTMLMotionProps } from 'framer-motion'
import { Phone } from 'lucide-react'
import type { ReactNode } from 'react'
import { business, img, telLink, waLink } from '../data/site'

export const ease = [0.22, 1, 0.36, 1] as const

/* ------------------------------ WhatsApp icon ---------------------------- */
export function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.79h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.88-9.88 9.88m8.41-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.94L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.17-3.48-8.41" />
    </svg>
  )
}

/* -------------------------------- Picture -------------------------------- */
type PictureProps = {
  name: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  style?: React.CSSProperties
  sizes?: string
}

export function Picture({ name, alt, className, imgClassName, priority, style }: PictureProps) {
  const src = img(name)
  return (
    <picture className={className}>
      {src.webp && <source srcSet={src.webp} type="image/webp" />}
      <img
        src={src.jpg}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={imgClassName}
        style={style}
        draggable={false}
      />
    </picture>
  )
}

/* -------------------------------- Reveal --------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/* -------------------------------- Buttons -------------------------------- */
type Variant = 'gold' | 'outline' | 'outline-dark' | 'dark'

const variants: Record<Variant, string> = {
  gold: 'bg-gold-soft text-olive-900 hover:bg-gold-light shadow-[0_10px_30px_-12px_rgba(214,194,154,0.55)]',
  outline: 'border border-ivory/35 text-ivory hover:border-gold hover:text-gold backdrop-blur-sm bg-white/[0.03]',
  'outline-dark': 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory',
  dark: 'bg-olive-900 text-ivory hover:bg-olive-700',
}

type BtnProps = {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
  size?: 'md' | 'sm'
  ariaLabel?: string
}

export function Button({ href, children, variant = 'gold', className = '', external, size = 'md', ariaLabel }: BtnProps) {
  const sizing = size === 'sm' ? 'px-4 py-2.5 text-[0.68rem]' : 'px-7 py-4 text-[0.72rem]'
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-[0.2em] transition-all duration-500 ease-[var(--ease-lux)] hover:-translate-y-0.5 ${sizing} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}

export function CallButton({ variant = 'gold', label = 'Call Now', className, size }: { variant?: Variant; label?: string; className?: string; size?: 'md' | 'sm' }) {
  return (
    <Button href={telLink} variant={variant} className={className} size={size} ariaLabel={`${label} — ${business.phoneDisplay}`}>
      <Phone className="h-3.5 w-3.5 transition-transform duration-500 group-hover:rotate-12" strokeWidth={2} aria-hidden="true" />
      {label}
    </Button>
  )
}

export function WhatsAppButton({
  variant = 'outline',
  label = 'WhatsApp Now',
  message,
  className,
  size,
}: { variant?: Variant; label?: string; message?: string; className?: string; size?: 'md' | 'sm' }) {
  return (
    <Button href={waLink(message)} external variant={variant} className={className} size={size} ariaLabel={`${label} (opens WhatsApp)`}>
      <WhatsAppIcon className="h-3.5 w-3.5" />
      {label}
    </Button>
  )
}

/* ------------------------------ Section head ----------------------------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
}: {
  eyebrow: string
  title: ReactNode
  subtitle?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <Reveal>
        <span className={`eyebrow ${center ? 'justify-center' : ''} ${tone === 'dark' ? '!text-[#8a7650]' : ''}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className={`heading-lg mt-5 ${tone === 'dark' ? 'text-ink' : 'text-ivory'}`}>{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p className={`mt-6 text-base leading-relaxed sm:text-lg ${center ? 'mx-auto' : ''} max-w-2xl ${tone === 'dark' ? 'text-ink-soft' : 'text-stone'}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}

/** Thin ornamental divider */
export function Ornament({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 text-gold ${className}`} aria-hidden="true">
      <path d="M0 6h50M70 6h50" stroke="currentColor" strokeWidth="0.75" />
      <path d="M60 1l5 5-5 5-5-5z" fill="none" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  )
}
