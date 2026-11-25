import { useEffect, useState } from 'react';
import { Clock } from './Icons.jsx';

// Demo offer window: the sale ends 2d 14h 36m 9s after the page first loads.
const OFFER_MS = ((2 * 24 + 14) * 60 + 36) * 60 * 1000 + 9 * 1000;
const offerEnd = Date.now() + OFFER_MS;

function remaining() {
  const ms = Math.max(0, offerEnd - Date.now());
  const s = Math.floor(ms / 1000);
  return { Days: Math.floor(s / 86400), Hours: Math.floor((s % 86400) / 3600), Mins: Math.floor((s % 3600) / 60), Secs: s % 60 };
}

export default function Countdown({ label = 'Offer ends in', dark = false }) {
  const [t, setT] = useState(remaining);
  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className={`countdown ${dark ? 'countdown--dark' : ''}`}>
      <p className="countdown__label">
        <Clock size={16} /> {label}
      </p>
      <div className="countdown__units" role="timer" aria-live="off">
        {Object.entries(t).map(([unit, v]) => (
          <div key={unit} className="countdown__unit">
            <strong>{String(v).padStart(2, '0')}</strong>
            <span>{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
