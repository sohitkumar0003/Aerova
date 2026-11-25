import { useState } from 'react';
import { PageHero, PageShell } from '../components/Layout.jsx';
import Countdown from '../components/Countdown.jsx';
import { Bell, Tag } from '../components/Icons.jsx';
import { Chip, PillButton, SectionHeader } from '../components/ui.jsx';
import { Coupon, DealCard } from '../components/Cards.jsx';
import { coupons, dealFilters, deals, img } from '../data.js';

function PriceAlert() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (/^\S+@\S+\.\S+$/.test(email)) setDone(true);
  };
  return (
    <section className="card card--soft price-alert">
      <div className="price-alert__copy">
        <span className="icon-box">
          <Bell size={26} />
        </span>
        <div>
          <h2>Never miss a price drop</h2>
          <p>Set an alert for any route — we&apos;ll email you the moment fares fall.</p>
        </div>
      </div>
      {done ? (
        <p className="price-alert__done">✓ Alert created for {email}</p>
      ) : (
        <form className="price-alert__form" onSubmit={submit}>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
          />
          <button type="submit">Create Alert</button>
        </form>
      )}
    </section>
  );
}

export default function Deals() {
  const [filter, setFilter] = useState('all');
  const list = filter === 'all' ? deals : deals.filter((d) => d.tags.includes(filter));

  return (
    <PageShell>
      <PageHero
        crumb="Deals"
        title={
          <>
            Today&apos;s best
            {" "}<br />
            flight deals
          </>
        }
        intro="Hand-picked fares refreshed every hour. Book before the timer runs out — prices go back up when it does."
      >
        <div className="deals-controls">
          <div className="chip-row chip-row--scroll">
            {dealFilters.map((f) => (
              <Chip key={f.id} active={filter === f.id} onClick={() => setFilter(f.id)}>
                {f.label}
              </Chip>
            ))}
          </div>
          <Countdown label="Flash sale ends in" />
        </div>
      </PageHero>

      <section className="card deal-week-wrap">
        <article className="deal-week" style={{ backgroundImage: `url(${img.maldives})` }}>
          <div className="deal-week__text">
            <span className="deal-week__tag">
              <Tag size={14} /> DEAL OF THE WEEK · -40%
            </span>
            <h2>Bengaluru → Malé</h2>
            <p>Round trip · Premium economy · Travel Feb – Apr 2027</p>
            <p className="deal-week__price">
              $298 <s>$499</s>
            </p>
            <PillButton variant="light">Grab This Deal</PillButton>
          </div>
          <div className="deal-week__seats">
            <strong>Only 12 seats left</strong>
            <span className="bar">
              <i style={{ width: '80%' }} />
            </span>
            <small>184 travelers booked today</small>
          </div>
        </article>
      </section>

      <section className="card card--dark">
        <SectionHeader
          label="LIMITED-TIME DEALS"
          title="Fares this low won't last"
          light
          right={<span className="count-pill">Showing {list.length} of 48 deals</span>}
        />
        {list.length ? (
          <div className="grid-3">
            {list.map((d) => (
              <DealCard key={d.id} {...d} />
            ))}
          </div>
        ) : (
          <p className="empty-state empty-state--dark">No deals in this category right now — check back in an hour.</p>
        )}
      </section>

      <section className="card">
        <SectionHeader label="PROMO CODES" title="Extra savings, stacked on top" />
        <div className="grid-3">
          {coupons.map((c) => (
            <Coupon key={c.code} {...c} />
          ))}
        </div>
      </section>

      <PriceAlert />
    </PageShell>
  );
}
