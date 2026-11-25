# Aerova — flight booking website (React)

React build of the Aerova design from the KHUSH Figma file (Moodboard page → "✈ Aerova — Pages").

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Stack

- Vite + React 19 + React Router 7
- Plain CSS with design tokens (`src/styles/base.css`), font: Urbanist (Google Fonts)

## Structure

```
src/
  data.js              all copy, images and lists (fleet, deals, routes, FAQ…)
  components/          Header (+ mobile menu), Footer, BookingWidget, FleetSlider,
                       Countdown, FAQ, Cards, Layout (PageShell / PageHero / WorldMap), ui, Icons
  pages/               Home, Destinations, Deals, About, Contact
  styles/              base.css (tokens), components.css, pages.css
  assets/images/       images exported from Figma
```

## Interactive bits

- Fleet slider: arrows, thumbnails, Jets/Helicopters tabs, keyboard arrows, swipe on touch
- Booking widget: trip type, airports, dates, passengers → Search goes to Deals
- Live countdown, FAQ accordion, deal filters, destination search + category filter
- Contact form with validation and success state; price-alert email form; copy-to-clipboard coupons
- Mobile menu overlay (≤1024px), responsive down to 360px

## Before launch

- Team names, testimonials, office addresses, phone numbers, promo codes and partner logos are **sample content** — replace them in `src/data.js`.
- Images are large PNGs (~1–2.5 MB each). Convert to WebP/AVIF for production.
- Forms don't send anywhere yet — wire `ContactForm` / `PriceAlert` / `BookingWidget` to your backend.
