import { useState } from 'react';
import { PageHero, PageShell, WorldMap } from '../components/Layout.jsx';
import FAQ from '../components/FAQ.jsx';
import { ArrowUpRight, Chat, ChevronDown, Clock, Mail, Phone, Pin, Plane } from '../components/Icons.jsx';
import { PillButton, SectionHeader, SectionLabel } from '../components/ui.jsx';
import { contactFaq, img, offices } from '../data.js';

const channels = [
  { icon: Phone, label: 'Call us 24/7', value: '+1 (800) 555-0142', note: 'Avg. wait under 1 min', href: 'tel:+18005550142' },
  { icon: Mail, label: 'Email support', value: 'hello@aerova.travel', note: 'Replies within 2 hours', href: 'mailto:hello@aerova.travel' },
  { icon: Chat, label: 'Live chat', value: 'Chat in the app or web', note: 'Avg. reply in 2 mins', href: '#form' },
  { icon: Plane, label: 'Charter desk', value: 'charter@aerova.travel', note: 'Dedicated advisor', href: 'mailto:charter@aerova.travel', dark: true },
];
const TOPICS = ['Booking change', 'Refund', 'Private charter', 'Baggage', 'Partnership', 'Other'];
const EMPTY = { name: '', email: '', phone: '', topic: '', ref: '', message: '', consent: true };

function ContactForm() {
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!f.name.trim()) err.name = 'Please enter your name';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) err.email = 'Enter a valid email address';
    if (!f.topic) err.topic = 'Pick a topic';
    if (f.message.trim().length < 10) err.message = 'Tell us a little more (10+ characters)';
    if (!f.consent) err.consent = 'Please accept to continue';
    setErrors(err);
    if (!Object.keys(err).length) setSent(true);
  };

  if (sent) {
    return (
      <div className="contact-form contact-form--sent">
        <SectionLabel>MESSAGE SENT</SectionLabel>
        <h2>Thanks, {f.name.split(' ')[0]}!</h2>
        <p>We&apos;ve received your message about “{f.topic}” and will reply to {f.email} within 2 hours.</p>
        <PillButton
          onClick={() => {
            setF(EMPTY);
            setSent(false);
          }}
        >
          Send another
        </PillButton>
      </div>
    );
  }

  const field = (k, label, props = {}) => (
    <label className={`ffield ${errors[k] ? 'has-error' : ''}`}>
      <span>{label}</span>
      <input value={f[k]} onChange={set(k)} {...props} />
      {errors[k] && <small>{errors[k]}</small>}
    </label>
  );

  return (
    <form className="contact-form" id="form" onSubmit={submit} noValidate>
      <div className="contact-form__head">
        <SectionLabel>SEND A MESSAGE</SectionLabel>
        <h2>How can we help?</h2>
      </div>
      <div className="contact-form__row">
        {field('name', 'Full name', { placeholder: 'e.g. Ananya Kapoor', autoComplete: 'name' })}
        {field('email', 'Email address', { placeholder: 'you@example.com', type: 'email', autoComplete: 'email' })}
      </div>
      <div className="contact-form__row">
        {field('phone', 'Phone number', { placeholder: '+91 98765 43210', type: 'tel', autoComplete: 'tel' })}
        <label className={`ffield ${errors.topic ? 'has-error' : ''}`}>
          <span>Topic</span>
          <span className="ffield__select">
            <select value={f.topic} onChange={set('topic')}>
              <option value="">Select a topic</option>
              {TOPICS.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <ChevronDown size={18} />
          </span>
          {errors.topic && <small>{errors.topic}</small>}
        </label>
      </div>
      {field('ref', 'Booking reference (optional)', { placeholder: 'e.g. AER-7K2Q9' })}
      <label className={`ffield ${errors.message ? 'has-error' : ''}`}>
        <span>Message</span>
        <textarea rows={6} placeholder="Tell us about your trip or question…" value={f.message} onChange={set('message')} />
        {errors.message && <small>{errors.message}</small>}
      </label>
      <div className="contact-form__foot">
        <label className={`check ${errors.consent ? 'has-error' : ''}`}>
          <input type="checkbox" checked={f.consent} onChange={set('consent')} />
          <span>I agree to the Privacy Policy and to be contacted about my request.</span>
        </label>
        <PillButton type="submit">Send Message</PillButton>
      </div>
    </form>
  );
}

export default function Contact() {
  return (
    <PageShell>
      <PageHero
        crumb="Contact"
        title={
          <>
            Let&apos;s plan your
            {" "}<br />
            next journey.
          </>
        }
        intro="Questions about a booking, a charter or a partnership? Our team replies in minutes, around the clock."
      >
        <div className="channels">
          {channels.map(({ icon: Icon, ...c }) => (
            <a key={c.label} href={c.href} className={`channel ${c.dark ? 'channel--dark' : ''}`}>
              <span className="channel__top">
                <span className={`icon-box ${c.dark ? 'icon-box--light' : ''}`}>
                  <Icon size={22} style={Icon === Plane ? { transform: 'rotate(-45deg)' } : undefined} />
                </span>
                <ArrowUpRight size={18} className="channel__arrow" />
              </span>
              <span className="channel__text">
                <small>{c.label}</small>
                <strong>{c.value}</strong>
                <em>{c.note}</em>
              </span>
            </a>
          ))}
        </div>
      </PageHero>

      <section className="card">
        <div className="contact-grid">
          <ContactForm />
          <aside className="contact-side">
            <article className="charter-desk" style={{ backgroundImage: `url(${img.wing})` }}>
              <span className="cta-card__tag">PRIVATE CHARTER DESK</span>
              <div className="charter-desk__body">
                <h3>Planning a jet or helicopter charter?</h3>
                <p>Speak directly to an aviation advisor — quotes in under 30 minutes, any day of the year.</p>
                <a href="tel:+18005550199" className="charter-desk__phone">+1 (800) 555-0199</a>
                <PillButton variant="light">Request a Quote</PillButton>
              </div>
            </article>
            <div className="hours">
              <p className="hours__title">
                <Clock size={20} /> Support hours
              </p>
              {[
                ['Phone & chat', '24 / 7, every day'],
                ['Charter desk', '24 / 7, every day'],
                ['Head office', 'Mon – Fri, 9:00 – 18:00 GST'],
              ].map(([a, b]) => (
                <p key={a} className="hours__row">
                  <span>{a}</span>
                  <strong>{b}</strong>
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="card">
        <SectionHeader label="OUR OFFICES" title="Say hello in person" />
        <WorldMap src={img.worldMap} pins={offices.map((o) => ({ name: o.city === 'Dubai' ? 'Dubai · HQ' : o.city, ...o.pin }))} />
        <div className="grid-3">
          {offices.map((o, i) => (
            <article key={o.city} className={`office ${i === 0 ? 'office--dark' : ''}`}>
              <div className="office__top">
                <span>
                  <h3>{o.city}</h3>
                  <small>{o.label}</small>
                </span>
                <span className={`icon-box ${i === 0 ? 'icon-box--light' : ''}`}>
                  <Pin size={20} />
                </span>
              </div>
              <p>{o.address}</p>
              <strong>{o.phone}</strong>
              <a href={`https://maps.google.com/?q=${encodeURIComponent(o.address)}`} target="_blank" rel="noreferrer" className="office__link">
                Get directions <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="faq-layout">
          <div className="faq-layout__intro">
            <SectionLabel>QUICK ANSWERS</SectionLabel>
            <h2 className="h2">Before you write to us…</h2>
            <PillButton>Visit Help Center</PillButton>
          </div>
          <FAQ items={contactFaq} />
        </div>
      </section>
    </PageShell>
  );
}
