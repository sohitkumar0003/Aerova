// All site content lives here so pages stay presentational.
import heroJet from './assets/images/hero-jet.png';
import worldMap from './assets/images/world-map.png';
import seat from './assets/images/seat.png';
import airport from './assets/images/airport.png';
import wing from './assets/images/wing.png';
import banff from './assets/images/banff.png';
import dubai from './assets/images/dubai.png';
import santorini from './assets/images/santorini.png';
import maldives from './assets/images/maldives.png';
import paris from './assets/images/paris.png';
import kyoto from './assets/images/kyoto.png';
import newYork from './assets/images/new-york.png';
import stratos from './assets/images/fleet-stratos.png';
import vega from './assets/images/fleet-vega.png';
import hawk from './assets/images/fleet-hawk.png';
import orion from './assets/images/fleet-orion.png';

export const img = { heroJet, worldMap, seat, airport, wing, banff, dubai, santorini, maldives, paris, kyoto, newYork };

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/deals', label: 'Deals' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export const stats = [
  { value: '2M+', label: 'Happy travelers since 2019' },
  { value: '450+', label: 'Partner airlines worldwide' },
  { value: '1,200+', label: 'Destinations across 6 continents' },
  { value: '4.8★', label: 'Average rating from 12k reviews' },
];

// Placeholder partner wordmarks (fictional brands).
export const partners = [
  { name: 'SKYWARD', weight: 900, spacing: '0.2em' },
  { name: 'Nordair', weight: 700, spacing: '-0.02em' },
  { name: 'AURELIA', weight: 300, spacing: '0.3em' },
  { name: 'meridian air', weight: 600, spacing: '-0.03em' },
  { name: 'PACIFICA', weight: 800, spacing: '0.06em' },
  { name: 'Altus', weight: 400, spacing: '-0.02em', italic: true },
];

export const features = [
  { n: '01', title: 'Global Reach', desc: 'Fly to 1,200+ destinations with 450 partner airlines worldwide.' },
  { n: '02', title: 'Smart Price Watch', desc: 'Real-time fare tracking alerts you the moment prices drop.' },
  { n: '03', title: 'Flexible Booking', desc: 'Change dates or cancel with zero hidden fees on most fares.' },
  { n: '04', title: '24/7 Support', desc: 'Real humans on call round the clock, before and after you fly.' },
];

export const steps = [
  { n: '01', title: 'Search', desc: 'Enter your route and dates — we scan 450+ airlines instantly.', icon: 'search' },
  { n: '02', title: 'Compare', desc: 'Filter by price, duration, stops and cabin class side by side.', icon: 'sliders' },
  { n: '03', title: 'Book & Pay', desc: 'Secure checkout in under 60 seconds with instant e-tickets.', icon: 'card' },
  { n: '04', title: 'Fly', desc: 'Check in online, track your gate live and enjoy the journey.', icon: 'plane' },
];

export const fleet = [
  {
    id: 'stratos', category: 'jet', cat: 'Private Jet', kind: 'Ultra long-range jet', name: 'Stratos X7', image: stratos,
    desc: 'Our flagship for nonstop intercontinental travel — four living zones and a full-size bed at 51,000 ft.',
    specs: [['14', 'Passengers'], ['13,700 km', 'Range'], ['956 km/h', 'Cruise Speed'], ['16.6 m', 'Cabin Length']],
    amenities: ['Private bedroom', 'Shower suite', 'Starlink Wi-Fi'], price: '$6,200', cta: 'Book This Jet',
  },
  {
    id: 'vega', category: 'jet', cat: 'Private Jet', kind: 'Midsize business jet', name: 'Vega M2', image: vega,
    desc: 'The sweet spot of speed and comfort for coast-to-coast trips, with a stand-up cabin and fully flat seats.',
    specs: [['9', 'Passengers'], ['5,900 km', 'Range'], ['870 km/h', 'Cruise Speed'], ['7.9 m', 'Cabin Length']],
    amenities: ['Flat-bed seats', 'High-speed Wi-Fi', 'Fresh galley'], price: '$3,400', cta: 'Book This Jet',
  },
  {
    id: 'hawk', category: 'heli', cat: 'Helicopter', kind: 'Luxury VIP helicopter', name: 'Hawk H5', image: hawk,
    desc: 'Skip the traffic. City hops and resort transfers in a whisper-quiet leather cabin with panoramic glass.',
    specs: [['6', 'Passengers'], ['750 km', 'Range'], ['278 km/h', 'Cruise Speed'], ['1.0 m³', 'Baggage']],
    amenities: ['VIP leather cabin', 'Panoramic windows', 'ANC headsets'], price: '$2,100', cta: 'Book This Helicopter',
  },
  {
    id: 'orion', category: 'heli', cat: 'Helicopter', kind: 'Twin-engine executive helicopter', name: 'Orion H9', image: orion,
    desc: 'Twin-engine safety with airliner-grade comfort — ideal for group transfers and island-to-mainland hops.',
    specs: [['12', 'Passengers'], ['1,100 km', 'Range'], ['306 km/h', 'Cruise Speed'], ['2.4 m³', 'Baggage']],
    amenities: ['Twin-engine safety', 'Climate control', 'Airport-to-city'], price: '$3,900', cta: 'Book This Helicopter',
  },
];

export const mapPins = [
  { name: 'New York', x: 27, y: 36 }, { name: 'London', x: 47, y: 26 }, { name: 'Paris', x: 48.5, y: 31 },
  { name: 'Dubai', x: 64, y: 46 }, { name: 'New Delhi', x: 70, y: 43 }, { name: 'Singapore', x: 77, y: 60 },
  { name: 'Tokyo', x: 87, y: 37 }, { name: 'Sydney', x: 89, y: 80 }, { name: 'Cape Town', x: 53.5, y: 80 },
  { name: 'Rio', x: 35.5, y: 72 },
];

export const routes = [
  { from: 'DEL', to: 'DXB', time: '06:15 → 08:40', duration: '3h 55m · Non-stop', price: '$249' },
  { from: 'BOM', to: 'LHR', time: '02:10 → 07:35', duration: '10h 25m · Non-stop', price: '$689' },
  { from: 'BLR', to: 'SIN', time: '23:40 → 06:55', duration: '4h 45m · Non-stop', price: '$312' },
  { from: 'DEL', to: 'JFK', time: '01:30 → 07:15', duration: '15h 15m · Non-stop', price: '$842' },
];

export const deals = [
  { id: 1, image: dubai, badge: '-35% OFF', route: 'New Delhi → Dubai', meta: 'Round trip · Economy · Travel Jan – Mar', price: '$249', old: '$389', tags: ['under300', 'weekend'] },
  { id: 2, image: santorini, badge: '-28% OFF', route: 'Mumbai → Santorini', meta: 'Round trip · Economy · Travel Apr – Jun', price: '$612', old: '$849', tags: ['longhaul'] },
  { id: 3, image: maldives, badge: '-40% OFF', route: 'Bengaluru → Malé', meta: 'Round trip · Premium · Travel Feb – Apr', price: '$298', old: '$499', tags: ['under300', 'lastminute'] },
  { id: 4, image: paris, badge: '-22% OFF', route: 'Delhi → Paris', meta: 'Round trip · Economy · Travel May – Jul', price: '$548', old: '$699', tags: ['longhaul'] },
  { id: 5, image: kyoto, badge: '-30% OFF', route: 'Bengaluru → Kyoto', meta: 'Round trip · Business · Travel Mar – May', price: '$689', old: '$979', tags: ['business', 'longhaul'] },
  { id: 6, image: newYork, badge: '-18% OFF', route: 'Mumbai → New York', meta: 'Round trip · Business · Travel Sep – Nov', price: '$842', old: '$1,029', tags: ['business', 'longhaul'] },
];

export const dealFilters = [
  { id: 'all', label: 'All deals' },
  { id: 'under300', label: 'Under $300' },
  { id: 'weekend', label: 'Weekend getaways' },
  { id: 'business', label: 'Business class' },
  { id: 'lastminute', label: 'Last-minute' },
  { id: 'longhaul', label: 'Long-haul' },
];

export const coupons = [
  { code: 'AERO20', title: '20% off your first booking', cond: 'New customers · Min spend $200', valid: 'Valid till 31 Dec' },
  { code: 'WEEKEND15', title: '15% off weekend getaways', cond: 'Fri – Sun departures only', valid: 'Valid till 15 Jan' },
  { code: 'JETSET500', title: '$500 off private charters', cond: 'Stratos X7 & Vega M2 · 3+ hrs', valid: 'Valid till 28 Feb', dark: true },
];

// Sample testimonials — replace with real reviews before launch.
export const testimonials = [
  { quote: '“Found a fare 40% cheaper than anywhere else, and the app flagged my gate change before the airport even announced it.”', initials: 'AK', name: 'Ananya Kapoor', trip: 'Mumbai → London' },
  { quote: '“We chartered the Stratos X7 for a family trip. Seamless from the first call to landing — the crew remembered every detail.”', initials: 'RM', name: 'Rohan Mehta', trip: 'Delhi → Maldives · Private charter', dark: true },
  { quote: '“Booking took under a minute and support sorted a missed connection at 2 AM. That alone earned my loyalty.”', initials: 'SL', name: 'Sara Lopez', trip: 'Madrid → Singapore' },
];

export const guides = [
  { image: banff, tag: 'Destinations', read: '8 min read', title: '10 Hidden Gems To Visit In The Canadian Rockies' },
  { image: airport, tag: 'Travel Hacks', read: '5 min read', title: 'How To Find The Best Flight Deals Every Season' },
  { image: seat, tag: 'Comfort', read: '6 min read', title: 'What To Pack For Long-Haul Flights Like A Pro' },
];

export const homeFaq = [
  { q: 'Can I cancel or change my booking?', a: 'Most fares can be changed or cancelled from My Trips up to 24 hours before departure. Flexible fares carry zero change fees; basic fares may have airline charges shown before you pay.' },
  { q: 'How much baggage is included?', a: 'Allowances depend on the airline and fare. Every result shows cabin and checked baggage up front, and you can add extra bags during checkout.' },
  { q: 'How do I book a private jet or helicopter?', a: 'Pick an aircraft in Our Fleet or send a charter request. A dedicated advisor confirms availability, crew and pricing within 30 minutes.' },
  { q: 'When will I get my refund?', a: 'Refunds are processed within 24 hours on our side. Card refunds usually reach your account in 5–7 business days.' },
  { q: 'Is my payment secure?', a: 'Yes. Payments are encrypted end-to-end, PCI-DSS compliant and protected with 3-D Secure verification.' },
  { q: 'Do you offer price alerts?', a: 'Turn on Smart Price Watch for any route and we will notify you the moment fares drop.' },
];

export const destinationCategories = ['All', 'Beaches', 'Cities', 'Mountains', 'Islands', 'Culture', 'Adventure'];

export const destinations = [
  { image: dubai, city: 'Dubai', country: 'United Arab Emirates', rating: '4.8', price: '$249', cats: ['Cities'] },
  { image: paris, city: 'Paris', country: 'France', rating: '4.8', price: '$548', cats: ['Cities', 'Culture'] },
  { image: kyoto, city: 'Kyoto', country: 'Japan', rating: '4.9', price: '$689', cats: ['Culture'] },
  { image: maldives, city: 'Malé', country: 'Maldives', rating: '4.9', price: '$298', cats: ['Beaches', 'Islands'] },
  { image: newYork, city: 'New York', country: 'United States', rating: '4.7', price: '$842', cats: ['Cities'] },
  { image: banff, city: 'Banff', country: 'Canada', rating: '4.9', price: '$612', cats: ['Mountains', 'Adventure'] },
  { image: santorini, city: 'Santorini', country: 'Greece', rating: '4.9', price: '$612', cats: ['Beaches', 'Islands'] },
];

export const regions = [
  { name: 'Asia', count: 320 }, { name: 'Europe', count: 284 }, { name: 'Middle East', count: 96 },
  { name: 'North America', count: 210 }, { name: 'Africa', count: 118 }, { name: 'Oceania', count: 74 },
];

export const values = [
  { n: '01', title: 'Radical Transparency', desc: 'Every fee shown up front. No surprises at checkout, ever.' },
  { n: '02', title: 'Safety First', desc: 'Audited operators, certified crews and strict maintenance standards.' },
  { n: '03', title: 'Human Support', desc: 'Real travel experts on call 24/7 — not a chatbot maze.' },
  { n: '04', title: 'Lighter Footprint', desc: 'Carbon offsets on every booking and SAF partnerships.' },
];

export const milestones = [
  { year: '2019', title: 'Founded in Bengaluru', desc: 'A fare-tracking side project turns into a company.' },
  { year: '2021', title: '1M travelers', desc: 'Crossed our first million bookings during the travel rebound.' },
  { year: '2023', title: 'Private fleet', desc: 'Launched jet and helicopter charters with the Stratos X7.' },
  { year: '2025', title: '450+ airlines', desc: 'Partnerships across 6 continents and 1,200+ destinations.' },
  { year: '2026', title: '2M+ travelers', desc: 'Rated 4.8★ from 12,400+ verified reviews.' },
];

// Sample team — replace with real people before launch.
export const team = [
  { initials: 'AR', name: 'Arjun Rao', role: 'Co-founder & CEO' },
  { initials: 'MI', name: 'Meera Iyer', role: 'Co-founder & COO', dark: true },
  { initials: 'DB', name: 'Daniel Brooks', role: 'Head of Charter Operations' },
  { initials: 'LH', name: 'Lina Haddad', role: 'Head of Customer Care', dark: true },
];

// Sample contact details — replace before launch.
export const offices = [
  { city: 'Dubai', label: 'Headquarters', address: 'Level 21, Skyline Tower, Sheikh Zayed Rd, Dubai, UAE', phone: '+971 4 555 0142', pin: { x: 64, y: 46 } },
  { city: 'London', label: 'Europe', address: '4 Kingsway Yard, Holborn, London WC2B, UK', phone: '+44 20 5550 0142', pin: { x: 47, y: 26 } },
  { city: 'Bengaluru', label: 'Asia Pacific · Tech hub', address: '12th Floor, Prestige Aero Park, Indiranagar, Bengaluru', phone: '+91 80 5550 0142', pin: { x: 70.5, y: 52 } },
];

export const contactFaq = [
  { q: 'How fast will I hear back?', a: 'Chat and phone are answered in minutes. Emails get a reply within 2 hours, any day of the week.' },
  { q: 'Can I change a booking over the phone?', a: 'Yes — have your booking reference ready and an agent can change dates, names or seats on the call.' },
  { q: 'Do you handle group or corporate travel?', a: 'Absolutely. Groups of 10+ and companies get a dedicated travel manager — mention it in the form.' },
  { q: 'Where do I send partnership enquiries?', a: 'Write to partners@aerova.travel and our partnerships team will get back to you within 2 business days.' },
];
