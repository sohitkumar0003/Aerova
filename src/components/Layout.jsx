import Header from './Header.jsx';
import Footer from './Footer.jsx';
import useReveal from '../hooks/useReveal.js';

/** Outer page frame: grey canvas, stacked rounded cards, shared footer. */
export function PageShell({ children }) {
  useReveal();
  return (
    <div className="page">
      {children}
      <Footer />
    </div>
  );
}

/** Light hero card used at the top of inner pages: header, breadcrumb, big title, intro. */
export function PageHero({ crumb, title, intro, children }) {
  return (
    <section className="hero-card page-hero">
      <Header />
      <div className="page-hero__content">
        <p className="breadcrumb">Home&nbsp;&nbsp;/&nbsp;&nbsp;{crumb}</p>
        <div className="page-hero__row">
          <h1 className="h1">{title}</h1>
          <p className="page-hero__intro">{intro}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export function WorldMap({ src, pins = [], small = false, children }) {
  return (
    <div className={`world-map ${small ? 'world-map--small' : ''}`}>
      <div className="world-map__inner">
        <img src={src} alt="" className="world-map__img" />
        {pins.map((p) => (
          <span key={p.name} className="map-pin" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
            <i /> {p.name}
          </span>
        ))}
        {children}
      </div>
    </div>
  );
}
