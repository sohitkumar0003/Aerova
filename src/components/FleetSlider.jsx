import { useEffect, useRef, useState } from 'react';
import { fleet } from '../data.js';
import { ArrowLeft, ArrowRight, Rotate } from './Icons.jsx';
import { PillButton, SectionHeader } from './ui.jsx';

export default function FleetSlider() {
  const [i, setI] = useState(0);
  const touchX = useRef(null);
  const ac = fleet[i];
  const step = (d) => setI((prev) => (prev + d + fleet.length) % fleet.length);
  const go = (n) => step(n - i);
  const category = ac.category;

  // Keyboard arrows move the slider when it has focus.
  const onKey = (e) => {
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  };
  // Preload all aircraft images so slides swap instantly.
  useEffect(() => {
    fleet.forEach((f) => {
      const im = new Image();
      im.src = f.image;
    });
  }, []);

  const tabs = (
    <div className="seg-tabs" role="tablist" aria-label="Aircraft type">
      <button role="tab" aria-selected={category === 'jet'} className={category === 'jet' ? 'is-active' : ''} onClick={() => setI(0)}>
        Private Jets
      </button>
      <button role="tab" aria-selected={category === 'heli'} className={category === 'heli' ? 'is-active' : ''} onClick={() => setI(2)}>
        Helicopters
      </button>
    </div>
  );

  return (
    <section className="card fleet" id="fleet" tabIndex={-1} onKeyDown={onKey}>
      <SectionHeader label="OUR FLEET" title="Meet the aircraft behind every journey" right={tabs} />

      <div
        className="fleet__showcase"
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="fleet__stage">
          <img key={ac.id} src={ac.image} alt={`${ac.name} side profile`} className="fleet__img" />
          <div className="fleet__stage-top">
            <span className="tag-pill">
              <i className="dot" /> {ac.cat}
            </span>
            <span className="fleet__index">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className="fleet__stage-bottom">
            <span className="muted-sm">Side profile · Actual livery may vary</span>
            <button type="button" className="ghost-pill">
              <Rotate size={16} /> 360° Cabin Tour
            </button>
          </div>
        </div>

        <div className="fleet__details" key={`d-${ac.id}`}>
          <div className="fleet__info">
            <p className="eyebrow-light">{ac.kind}</p>
            <h3>{ac.name}</h3>
            <p className="fleet__desc">{ac.desc}</p>
          </div>
          <dl className="fleet__specs">
            {ac.specs.map(([v, l]) => (
              <div key={l}>
                <dt>{l}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <ul className="fleet__chips">
            {ac.amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <div className="fleet__cta">
            <div>
              <span className="muted-sm">from</span>
              <p className="fleet__price">
                {ac.price} <small>/ hr</small>
              </p>
            </div>
            <PillButton variant="light" to="/contact">
              {ac.cta}
            </PillButton>
          </div>
        </div>
      </div>

      <div className="fleet__controls">
        <div className="fleet__counter">
          <p>
            <strong>{String(i + 1).padStart(2, '0')}</strong> <span>/ {String(fleet.length).padStart(2, '0')}</span>
          </p>
          <div className="fleet__progress">
            {fleet.map((f, k) => (
              <i key={f.id} className={k === i ? 'is-active' : ''} />
            ))}
          </div>
        </div>
        <div className="fleet__thumbs">
          {fleet.map((f, k) => (
            <button key={f.id} type="button" className={`fleet__thumb ${k === i ? 'is-active' : ''}`} onClick={() => setI(k)}>
              <img src={f.image} alt="" />
              <span>{f.name}</span>
            </button>
          ))}
        </div>
        <div className="fleet__arrows">
          <button type="button" className="round-btn round-btn--outline" aria-label="Previous aircraft" onClick={() => step(-1)}>
            <ArrowLeft size={20} />
          </button>
          <button type="button" className="round-btn round-btn--dark" aria-label="Next aircraft" onClick={() => step(1)}>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
