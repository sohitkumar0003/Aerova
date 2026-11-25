import { useState } from 'react';
import { ArrowUpRight, Check, Copy, CreditCard, Heart, Plane, Search, Sliders, Star } from './Icons.jsx';
import { PillButton, Stars } from './ui.jsx';

export function FeatureItem({ n, title, desc }) {
  return (
    <div className="feature">
      <span className="feature__n">{n}</span>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

const STEP_ICONS = { search: Search, sliders: Sliders, card: CreditCard, plane: Plane };
export function StepCard({ n, title, desc, icon, dark }) {
  const Icon = STEP_ICONS[icon];
  return (
    <div className={`step ${dark ? 'step--dark' : ''}`}>
      <div className="step__top">
        <span className="step__icon">
          <Icon size={24} style={icon === 'plane' ? { transform: 'rotate(45deg)' } : undefined} />
        </span>
        <span className="step__n">{n}</span>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export function RouteCard({ from, to, time, duration, price }) {
  return (
    <article className="route">
      <div className="route__cities">
        <span>{from}</span>
        <span className="route__path">
          <i />
          <Plane size={16} style={{ transform: 'rotate(90deg)' }} />
          <i />
        </span>
        <span>{to}</span>
      </div>
      <p className="route__time">{time}</p>
      <div className="route__meta">
        <span>{duration}</span>
        <span className="price-pill">{price}</span>
      </div>
    </article>
  );
}

export function DealCard({ image, badge, route, meta, price, old }) {
  const [saved, setSaved] = useState(false);
  return (
    <article className="deal">
      <div className="deal__media" style={{ backgroundImage: `url(${image})` }}>
        <span className="deal__badge">{badge}</span>
        <button
          type="button"
          className={`deal__save ${saved ? 'is-saved' : ''}`}
          aria-label={saved ? 'Remove from saved' : 'Save deal'}
          aria-pressed={saved}
          onClick={() => setSaved((s) => !s)}
        >
          <Heart size={18} />
        </button>
      </div>
      <div className="deal__body">
        <h3>{route}</h3>
        <p className="deal__meta">{meta}</p>
        <div className="deal__row">
          <p className="deal__price">
            {price} <s>{old}</s>
          </p>
          <PillButton variant="light" to="/deals">Grab Deal</PillButton>
        </div>
      </div>
    </article>
  );
}

export function TestimonialCard({ quote, initials, name, trip, dark }) {
  return (
    <figure className={`testi ${dark ? 'testi--dark' : ''}`}>
      <div>
        <Stars />
        <blockquote>{quote}</blockquote>
      </div>
      <figcaption>
        <span className="avatar">{initials}</span>
        <span>
          <strong>{name}</strong>
          <small>{trip}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export function GuideCard({ image, tag, read, title }) {
  return (
    <article className="guide">
      <div className="guide__img" style={{ backgroundImage: `url(${image})` }} />
      <div className="guide__meta">
        <span className="tag-soft">{tag}</span>
        <span className="muted-sm">{read}</span>
      </div>
      <h3>{title}</h3>
    </article>
  );
}

export function DestinationCard({ image, city, country, rating, price }) {
  return (
    <article className="dest">
      <div className="dest__img" style={{ backgroundImage: `url(${image})` }} />
      <div className="dest__title">
        <h3>{city}</h3>
        <span className="dest__rating">
          <Star size={14} /> {rating}
        </span>
      </div>
      <p className="dest__country">{country}</p>
      <div className="dest__price">
        <p>
          <span>Flights from</span> <strong>{price}</strong>
        </p>
        <span className="round-btn round-btn--outline round-btn--sm">
          <ArrowUpRight size={16} />
        </span>
      </div>
    </article>
  );
}

export function Coupon({ code, title, cond, valid, dark }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      /* clipboard may be blocked; still show feedback */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className={`coupon ${dark ? 'coupon--dark' : ''}`}>
      <div className="coupon__body">
        <h3>{title}</h3>
        <p>{cond}</p>
        <small>{valid}</small>
      </div>
      <div className="coupon__code">
        <strong>{code}</strong>
        <button type="button" onClick={copy}>
          {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? 'Copied' : 'Copy code'}
        </button>
      </div>
    </div>
  );
}
