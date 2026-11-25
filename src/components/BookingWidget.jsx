import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Headset, Plane, Search } from './Icons.jsx';

const TRIPS = ['One Way', 'Round Trip', 'Multi-City'];
const AIRPORTS = ['New Delhi (DEL)', 'Mumbai (BOM)', 'Bengaluru (BLR)', 'Dubai (DXB)', 'London (LHR)', 'Singapore (SIN)', 'New York (JFK)', 'Malé (MLE)'];
const PAX = ['1 Adult · Economy', '2 Adults · Economy', '2 Adults · Premium', '2 Adults · Business', 'Family (4) · Economy'];

function Field({ label, children }) {
  return (
    <label className="bfield">
      <span className="bfield__label">{label}</span>
      <span className="bfield__control">
        {children}
        <ChevronDown size={16} className="bfield__chev" />
      </span>
    </label>
  );
}

export default function BookingWidget() {
  const nav = useNavigate();
  const [trip, setTrip] = useState('One Way');
  const [from, setFrom] = useState(AIRPORTS[0]);
  const [to, setTo] = useState(AIRPORTS[3]);
  const [dep, setDep] = useState('2026-12-12');
  const [ret, setRet] = useState('2026-12-20');
  const [pax, setPax] = useState(PAX[1]);
  const [flex, setFlex] = useState(true);
  const [direct, setDirect] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    nav('/deals');
  };

  return (
    <form className="booking" id="book" onSubmit={submit}>
      <div className="booking__head">
        <p className="booking__title">
          <Plane size={18} style={{ transform: 'rotate(90deg)' }} /> START BOOKING YOUR FLIGHT
        </p>
        <a href="tel:+18005550142" className="booking__support">
          <Headset size={18} /> <span>Customer Service</span>
        </a>
      </div>

      <div className="booking__trips" role="radiogroup" aria-label="Trip type">
        {TRIPS.map((t) => (
          <button
            type="button"
            key={t}
            role="radio"
            aria-checked={trip === t}
            className={`trip-opt ${trip === t ? 'is-active' : ''}`}
            onClick={() => setTrip(t)}
          >
            <i /> {t}
          </button>
        ))}
      </div>

      <div className="booking__fields">
        <Field label="From">
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {AIRPORTS.map((a) => <option key={a}>{a}</option>)}
          </select>
        </Field>
        <Field label="To">
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {AIRPORTS.map((a) => <option key={a}>{a}</option>)}
          </select>
        </Field>
        <Field label="Departure">
          <input type="date" value={dep} onChange={(e) => setDep(e.target.value)} />
        </Field>
        <Field label="Return">
          <input type="date" value={ret} disabled={trip === 'One Way'} onChange={(e) => setRet(e.target.value)} />
        </Field>
        <Field label="Passengers">
          <select value={pax} onChange={(e) => setPax(e.target.value)}>
            {PAX.map((p) => <option key={p}>{p}</option>)}
          </select>
        </Field>
        <button type="submit" className="booking__search">
          <Search size={18} /> Search
        </button>
      </div>

      <div className="booking__foot">
        <div className="booking__checks">
          <label className="check">
            <input type="checkbox" checked={flex} onChange={(e) => setFlex(e.target.checked)} /> <span>Flexible dates</span>
          </label>
          <label className="check">
            <input type="checkbox" checked={direct} onChange={(e) => setDirect(e.target.checked)} /> <span>Direct flights only</span>
          </label>
        </div>
        <a href="#" className="link-strong" onClick={(e) => e.preventDefault()}>Track flight status →</a>
      </div>
    </form>
  );
}
