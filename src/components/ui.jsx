import { Link } from 'react-router-dom';
import { ArrowUpRight, Plane, Star } from './Icons.jsx';

export function Logo({ light = false, to = '/' }) {
  return (
    <Link to={to} className={`logo ${light ? 'logo--light' : ''}`} aria-label="Aerova home">
      <span className="logo__mark">
        <Plane size={18} style={{ transform: 'rotate(-45deg)' }} />
      </span>
      <span className="logo__word">Aerova</span>
    </Link>
  );
}

export function SectionLabel({ children, light = false }) {
  return <p className={`section-label ${light ? 'section-label--light' : ''}`}>{children}</p>;
}

/** Section heading row: label + big title on the left, optional element on the right. */
export function SectionHeader({ label, title, right, light = false }) {
  return (
    <div className="section-header">
      <div className="section-header__titles">
        <SectionLabel light={light}>{label}</SectionLabel>
        <h2 className={`h2 ${light ? 'is-light' : ''}`}>{title}</h2>
      </div>
      {right && <div className="section-header__right">{right}</div>}
    </div>
  );
}

/** Pill button with a round arrow badge — the signature CTA of the design. */
export function PillButton({ children, to, onClick, variant = 'dark', block = false, type = 'button' }) {
  const cls = `pill-btn pill-btn--${variant} ${block ? 'pill-btn--block' : ''}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="pill-btn__icon">
        <ArrowUpRight size={14} />
      </span>
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function OutlineButton({ children, to, onClick, light = false, block = false, icon = true }) {
  const cls = `outline-btn ${light ? 'outline-btn--light' : ''} ${block ? 'outline-btn--block' : ''}`;
  const inner = (
    <>
      {children}
      {icon && <ArrowUpRight size={14} />}
    </>
  );
  if (to) return <Link to={to} className={cls}>{inner}</Link>;
  return (
    <button type="button" className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}

export function Chip({ active, children, onClick, light = false }) {
  return (
    <button
      type="button"
      className={`chip ${active ? 'is-active' : ''} ${light ? 'chip--light' : ''}`}
      onClick={onClick}
      aria-pressed={!!active}
    >
      {children}
    </button>
  );
}

export function Stars({ count = 5, size = 16 }) {
  return (
    <span className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} />
      ))}
    </span>
  );
}

export function IconCircle({ children, variant = 'dark', size = 'md' }) {
  return <span className={`icon-circle icon-circle--${variant} icon-circle--${size}`}>{children}</span>;
}
