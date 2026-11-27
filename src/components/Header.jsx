import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks } from '../data.js';
import { ArrowUpRight, Close, Menu } from './Icons.jsx';
import { Logo } from './ui.jsx';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu on navigation and lock body scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <Logo />
      <nav className="site-header__nav" aria-label="Main">
        {navLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end className={({ isActive }) => `nav-pill ${isActive ? 'is-active' : ''}`}>
            {l.label}
          </NavLink>
        ))}
      </nav>
      <Link to="/#book" className="site-header__cta">
        <span>Book a Flight</span>
        <span className="site-header__cta-icon">
          <ArrowUpRight size={16} />
        </span>
      </Link>
      <button type="button" className="site-header__menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}>
        <Menu size={20} />
      </button>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="mobile-menu__top">
          <Logo light />
          <button type="button" className="mobile-menu__close" aria-label="Close menu" onClick={() => setOpen(false)}>
            <Close size={20} />
          </button>
        </div>
        <nav className="mobile-menu__links" aria-label="Mobile">
          {navLinks.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end
              style={{ '--i': i }}
              className={({ isActive }) => `mobile-menu__link ${isActive ? 'is-active' : ''}`}
            >
              <span className="mobile-menu__num">0{i + 1}</span>
              <span className="mobile-menu__label">{l.label}</span>
              <ArrowUpRight size={20} />
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__bottom">
          <Link to="/#book" className="mobile-menu__book" onClick={() => setOpen(false)}>
            Book a Flight <ArrowUpRight size={16} />
          </Link>
          <p>24/7 support · +1 (800) 555-0142</p>
        </div>
      </div>
    </header>
  );
}
