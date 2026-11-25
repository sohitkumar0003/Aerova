import { PageHero, PageShell } from '../components/Layout.jsx';
import { OutlineButton, PillButton, SectionHeader, SectionLabel } from '../components/ui.jsx';
import { FeatureItem } from '../components/Cards.jsx';
import { img, milestones, team, values } from '../data.js';

const aboutStats = [
  ['2019', 'Founded in Bengaluru'],
  ['2M+', 'Travelers served'],
  ['450+', 'Partner airlines'],
  ['38', 'Countries with local teams'],
];

export default function About() {
  return (
    <PageShell>
      <PageHero
        crumb="About Us"
        title={
          <>
            Flying, made
            {" "}<br />
            effortless again.
          </>
        }
        intro="Aerova started with a simple frustration: booking a flight shouldn't feel harder than the flight itself. Today we help 2M+ travelers fly smarter."
      >
        <div className="about-banner">
          <div className="about-banner__img" style={{ backgroundImage: `url(${img.airport})` }} role="img" aria-label="Traveler walking through an airport terminal" />
          <div className="about-banner__stats">
            {aboutStats.map(([v, l]) => (
              <div key={l}>
                <strong>{v}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      <section className="card">
        <div className="story">
          <div className="story__left">
            <SectionLabel>OUR STORY</SectionLabel>
            <h2>Two frequent flyers, one spreadsheet of fare prices and a belief that travel tech could be honest, fast and human.</h2>
          </div>
          <div className="story__right">
            <p>
              In 2019, Arjun and Meera were spending more time comparing tabs than packing bags. They built a tiny tool that
              watched fares and flagged hidden fees — friends started using it, then friends of friends.
            </p>
            <p>
              Seven years later Aerova connects 450+ airlines and a private fleet of jets and helicopters, but the promise is
              the same: the price you see is the price you pay, and a real person is always one tap away.
            </p>
            <div className="signature">
              <span className="avatar">AR</span>
              <span className="avatar avatar--alt">MI</span>
              <span>
                <strong>Arjun Rao &amp; Meera Iyer</strong>
                <small>Co-founders, Aerova</small>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <SectionHeader label="WHAT WE STAND FOR" title="Four promises we never break" />
        <div className="grid-4">
          {values.map((v) => (
            <FeatureItem key={v.n} {...v} />
          ))}
        </div>
      </section>

      <section className="card card--dark">
        <SectionHeader label="MILESTONES" title="Our journey so far" light />
        <ol className="timeline">
          {milestones.map((m, i) => (
            <li key={m.year} className={i === milestones.length - 1 ? 'is-now' : ''}>
              <span className="timeline__dot" />
              <strong>{m.year}</strong>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="card">
        <SectionHeader label="LEADERSHIP" title="The people behind Aerova" right={<PillButton>Meet the full team</PillButton>} />
        <div className="grid-4 grid-4--team">
          {team.map((t) => (
            <article key={t.name} className="member">
              <div className={`member__portrait ${t.dark ? 'is-dark' : ''}`}>{t.initials}</div>
              <div className="member__info">
                <span>
                  <h3>{t.name}</h3>
                  <p>{t.role}</p>
                </span>
                <a href="#" className="member__in" aria-label={`${t.name} on LinkedIn`} onClick={(e) => e.preventDefault()}>
                  in
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="card card--soft careers">
        <div>
          <SectionLabel>WE&apos;RE HIRING</SectionLabel>
          <h2>Help us build the future of travel</h2>
          <p>24 open roles across engineering, design, ops and customer care — remote-friendly.</p>
        </div>
        <div className="careers__btns">
          <PillButton>View open roles</PillButton>
          <OutlineButton icon={false}>Life at Aerova</OutlineButton>
        </div>
      </section>
    </PageShell>
  );
}
