import Header from '../components/Header.jsx';
import BookingWidget from '../components/BookingWidget.jsx';
import FleetSlider from '../components/FleetSlider.jsx';
import FAQ from '../components/FAQ.jsx';
import Countdown from '../components/Countdown.jsx';
import { PageShell, WorldMap } from '../components/Layout.jsx';
import { ArrowUpRight, Plane } from '../components/Icons.jsx';
import { OutlineButton, PillButton, SectionHeader, SectionLabel, Stars } from '../components/ui.jsx';
import { DealCard, FeatureItem, GuideCard, RouteCard, StepCard, TestimonialCard } from '../components/Cards.jsx';
import { deals, features, guides, homeFaq, img, mapPins, partners, routes, stats, steps, testimonials } from '../data.js';

function Hero() {
  return (
    <section className="hero-card home-hero">
      <Header />
      <div className="home-hero__stage">
        <img src={img.heroJet} alt="Black private jet in flight" className="home-hero__jet" />
        <div className="home-hero__text">
          <span className="tag-pill">
            <i className="dot" /> Trusted by 2M+ travelers
          </span>
          <h1 className="h1 home-hero__title">
            Your Journey,
            {" "}<br />
            Elevated Above All
          </h1>
          <p className="home-hero__sub">
            Discover exclusive fares and effortless booking with Aerova — your trusted gateway to destinations around the
            world.
          </p>
        </div>
        <article className="charter-card">
          <div>
            <h3>SkyLine Charter</h3>
            <p>Private jet · up to 8 seats</p>
          </div>
          <div className="charter-card__img" style={{ backgroundImage: `url(${img.heroJet})` }} />
          <div className="charter-card__foot">
            <span className="charter-card__price">from $899</span>
            <a href="#fleet" className="round-btn round-btn--dark round-btn--sm" aria-label="View charter fleet">
              <ArrowUpRight size={16} />
            </a>
          </div>
        </article>
      </div>
      <BookingWidget />
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="card trust">
      <div className="trust__stats">
        {stats.map((s) => (
          <div key={s.label} className="trust__stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="trust__logos">
        <p>
          Trusted by leading
          {" "}<br />
          airlines &amp; partners
        </p>
        {partners.map((p) => (
          <span
            key={p.name}
            className="partner"
            style={{ fontWeight: p.weight, letterSpacing: p.spacing, fontStyle: p.italic ? 'italic' : 'normal' }}
          >
            <Plane size={16} style={{ transform: 'rotate(-45deg)' }} /> {p.name}
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="card about" id="about">
      <div className="about__intro">
        <h2 className="about__statement">Aerova redefines booking with smart tech and handpicked travel deals.</h2>
        <SectionLabel>ABOUT AEROVA</SectionLabel>
      </div>
      <div className="about__content">
        <div className="about__features">
          {features.map((f) => (
            <FeatureItem key={f.n} {...f} />
          ))}
        </div>
        <article className="promo-card promo-card--dark">
          <h3>
            Travel
            {" "}<br />
            Packages
          </h3>
          <div className="promo-card__bottom">
            <p>Flights, stays and transfers bundled into one seamless itinerary — save up to 30%.</p>
            <PillButton variant="light" to="/deals">Explore Packages</PillButton>
          </div>
        </article>
        <article className="promo-card promo-card--photo" style={{ backgroundImage: `url(${img.seat})` }}>
          <h3>
            Flight
            {" "}<br />
            Finder
          </h3>
          <p>Compare 500+ airlines in seconds</p>
        </article>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="card">
      <SectionHeader
        label="HOW IT WORKS"
        title="Booked in four simple steps"
        right={<p className="header-note">From search to boarding gate in minutes — no hidden fees, no call centers, just a smooth path to your seat.</p>}
      />
      <div className="grid-4">
        {steps.map((s, i) => (
          <StepCard key={s.n} {...s} dark={i === steps.length - 1} />
        ))}
      </div>
    </section>
  );
}

function Routes() {
  return (
    <section className="card">
      <SectionHeader label="POPULAR ROUTES" title="Discover top routes and deals" right={<OutlineButton to="/destinations">View all routes</OutlineButton>} />
      <WorldMap src={img.worldMap} pins={mapPins}>
        <article className="map-feature">
          <span className="map-feature__img" style={{ backgroundImage: `url(${img.banff})` }} />
          <span>
            <strong>Banff, Canada</strong>
            <small>Round trip from $612</small>
          </span>
        </article>
      </WorldMap>
      <div className="grid-4">
        {routes.map((r) => (
          <RouteCard key={r.from + r.to} {...r} />
        ))}
      </div>
    </section>
  );
}

function DealsBlock() {
  return (
    <section className="card card--dark">
      <SectionHeader label="LIMITED-TIME DEALS" title="Fares this low won't last" light right={<Countdown dark />} />
      <div className="grid-3">
        {deals.slice(0, 3).map((d) => (
          <DealCard key={d.id} {...d} />
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="card">
      <SectionHeader
        label="TESTIMONIALS"
        title="Loved by travelers worldwide"
        right={
          <div className="rating">
            <strong>4.8</strong>
            <span>
              <Stars size={18} />
              <small>Based on 12,400+ verified reviews</small>
            </span>
          </div>
        }
      />
      <div className="grid-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}

function Guides() {
  return (
    <section className="card">
      <SectionHeader label="TRAVEL INSIGHTS" title="Travel tips and guides for every traveler" right={<OutlineButton>Read all guides</OutlineButton>} />
      <div className="guides">
        <div className="guides__scroll">
          {guides.map((g) => (
            <GuideCard key={g.title} {...g} />
          ))}
        </div>
        <article className="cta-card" style={{ backgroundImage: `url(${img.wing})` }}>
          <span className="cta-card__tag">Limited offer · 20% off</span>
          <div className="cta-card__bottom">
            <h3>
              Ready to take off?
              {" "}<br />
              Let Aerova plan
              {" "}<br />
              your next journey.
            </h3>
            <PillButton variant="light" to="/#book">Start Booking</PillButton>
          </div>
        </article>
      </div>
    </section>
  );
}

function FaqBlock() {
  return (
    <section className="card">
      <div className="faq-layout">
        <div className="faq-layout__intro">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="h2">Questions? We&apos;ve got answers.</h2>
          <p>Can&apos;t find what you&apos;re looking for? Our travel experts are available 24/7 by chat, phone or email.</p>
          <PillButton to="/contact">Contact Support</PillButton>
        </div>
        <FAQ items={homeFaq} />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustStrip />
      <About />
      <HowItWorks />
      <FleetSlider />
      <Routes />
      <DealsBlock />
      <Testimonials />
      <Guides />
      <FaqBlock />
    </PageShell>
  );
}
