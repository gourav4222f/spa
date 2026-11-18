/**
 * LLOC SPA — all editable business content lives in this file.
 * Update values here; every section of the site reads from it.
 */

export const business = {
  name: 'LLOC SPA',
  city: 'Bangalore',
  region: 'Karnataka',
  country: 'India',
  phoneDisplay: '+91 70192 49963',
  phoneE164: '+917019249963',
  whatsappNumber: '917019249963',

  /** PLACEHOLDER — replace with the verified full business address. */
  address: '',
  addressPlaceholder: '[ADD VERIFIED FULL BUSINESS ADDRESS]',

  /**
   * PLACEHOLDER — paste the Google Maps "Embed a map" src URL of the verified
   * LLOC SPA listing. While empty, an elegant placeholder is shown instead.
   */
  mapEmbedUrl: '',

  /** PLACEHOLDER — paste the verified Google Maps listing / directions link. */
  mapsLink: '',
}

export const defaultWhatsAppMessage =
  'Hello LLOC SPA, I would like to enquire about your spa services and availability.'

export const telLink = `tel:${business.phoneE164}`

export const waLink = (message: string = defaultWhatsAppMessage) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`

/** Directions: verified maps link if provided, otherwise ask for the location on WhatsApp. */
export const directionsLink = business.mapsLink
  ? business.mapsLink
  : waLink('Hello LLOC SPA, could you please share your exact location and directions?')

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'contact', label: 'Contact' },
] as const

export const img = (name: string) => ({
  webp: `/images/${name}.webp`,
  jpg: `/images/${name}.jpg`,
})

/* ---------------------------------- Team --------------------------------- */
/**
 * PLACEHOLDER team members — replace names, roles and photos with your real team.
 * Drop new photos into /src-images and run `npm run images`, then reference the file name here.
 * `focus` is the CSS object-position used to frame the face in the portrait card.
 */
export const team = [
  { name: 'Aaradhya', role: 'Wellness Therapist', image: 'towel-portrait', focus: '68% 30%' },
  { name: 'Ishani', role: 'Spa Therapist', image: 'eye-ritual', focus: '28% 30%' },
  { name: 'Kavya', role: 'Facial & Relaxation', image: 'facial-ritual', focus: '42% 45%' },
  { name: 'Riya', role: 'Massage Therapist', image: 'relaxing-guest', focus: '55% 40%' },
  { name: 'Naira', role: 'Aromatherapy', image: 'candle-massage', focus: '46% 45%' },
  { name: 'Tara', role: 'Spa Host', image: 'body-massage', focus: '30% 50%' },
]

/* -------------------------------- Services ------------------------------- */
export type ServiceIcon =
  | 'hand' | 'waves' | 'activity' | 'flower' | 'flame' | 'smile' | 'heart' | 'leaf' | 'gem'

export const services: {
  title: string
  description: string
  image: string
  icon: ServiceIcon
  featured?: boolean
}[] = [
  {
    title: 'Body Massage',
    description: 'A full-body ritual of slow, flowing strokes that melts away tension and restores a deep sense of calm.',
    image: 'body-massage',
    icon: 'hand',
    featured: true,
  },
  {
    title: 'Swedish Massage',
    description: 'Gentle, rhythmic techniques designed to soothe the body and quiet a busy mind.',
    image: 'candle-massage',
    icon: 'waves',
  },
  {
    title: 'Deep Tissue Massage',
    description: 'Focused, firmer pressure for those who carry the weight of long days in their muscles.',
    image: 'relaxing-guest',
    icon: 'activity',
  },
  {
    title: 'Aromatherapy Massage',
    description: 'Warm aromatic oils and unhurried touch, crafted for complete sensory relaxation.',
    image: 'aroma-oil',
    icon: 'flower',
  },
  {
    title: 'Hot Stone Massage',
    description: 'Smooth, heated stones placed and glided with care to ease you into stillness.',
    image: 'stone-foot-ritual',
    icon: 'flame',
  },
  {
    title: 'Head & Shoulder Massage',
    description: 'A restorative focus on the head, neck and shoulders — where everyday stress settles.',
    image: 'facial-ritual',
    icon: 'smile',
  },
  {
    title: 'Couple Massage',
    description: 'Share a peaceful escape side by side in a calm, private setting made for two.',
    image: 'couple-massage',
    icon: 'heart',
  },
  {
    title: 'Wellness Therapy',
    description: 'Relaxing therapies inspired by natural botanicals to help you refresh and recharge.',
    image: 'herbs',
    icon: 'leaf',
  },
  {
    title: 'Luxury Spa Experience',
    description: 'Our most indulgent journey — an unhurried, personalised escape from arrival to farewell.',
    image: 'robes',
    icon: 'gem',
    featured: true,
  },
]

/** PLACEHOLDERS — do not invent. Update once confirmed. */
export const serviceDetailsPlaceholder = {
  duration: 'To Be Confirmed',
  price: 'Contact for Pricing',
}

/* -------------------------------- Features ------------------------------- */
export const features = [
  { icon: 'users', title: 'Experienced Service Team', text: 'Attentive care from a team devoted to your comfort.' },
  { icon: 'door', title: 'Comfortable Private Spaces', text: 'Calm, private rooms designed for complete ease.' },
  { icon: 'sparkles', title: 'Hygienic Environment', text: 'Fresh linens and spotless spaces, every visit.' },
  { icon: 'lamp', title: 'Relaxing Luxury Ambience', text: 'Soft light, gentle aromas and quiet surroundings.' },
  { icon: 'droplet', title: 'Quality Massage Oils', text: 'Carefully chosen oils for a smooth, soothing touch.' },
  { icon: 'fingerprint', title: 'Personalized Experience', text: 'Every session shaped around how you wish to feel.' },
  { icon: 'calendar', title: 'Convenient Booking', text: 'Reserve in moments with a quick call or WhatsApp.' },
  { icon: 'layers', title: 'Multiple Wellness Therapies', text: 'A curated menu of therapies for every mood.' },
] as const

/* -------------------------------- Gallery -------------------------------- */
export const gallery = [
  { image: 'stone-bath', alt: 'Guest relaxing in a natural stone soaking bath', shape: 'tall' },
  { image: 'aroma-oil', alt: 'Golden aromatherapy oil with fresh citrus and rosemary', shape: 'square' },
  { image: 'vanity', alt: 'Clean spa vanity with wooden mirror and fresh greenery', shape: 'wide' },
  { image: 'candle-massage', alt: 'Candlelit massage room with a guest resting on the bed', shape: 'wide' },
  { image: 'herbs', alt: 'Dried calendula petals in a carved wooden bowl', shape: 'square' },
  { image: 'poolside', alt: 'Woven loungers beside a tranquil pool', shape: 'tall' },
  { image: 'couple-massage', alt: 'Couple massage room with candles, oils and natural soap', shape: 'square' },
  { image: 'robes', alt: 'Guests in soft spa robes in warm ambient light', shape: 'tall' },
] as const

/* ------------------------------ Testimonials ----------------------------- */
/** PLACEHOLDERS — replace with genuine guest reviews only. */
export const testimonials = [
  { name: '[Guest Name]', text: '[Add a genuine guest review here once supplied by LLOC SPA.]', rating: 5 },
  { name: '[Guest Name]', text: '[Add a genuine guest review here once supplied by LLOC SPA.]', rating: 5 },
  { name: '[Guest Name]', text: '[Add a genuine guest review here once supplied by LLOC SPA.]', rating: 5 },
]
