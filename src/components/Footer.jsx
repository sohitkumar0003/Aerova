import { Link } from 'react-router-dom';
import { ArrowUp } from './Icons.jsx';
import { Logo } from './ui.jsx';

const columns = [
  { title: 'Company', links: [['About Us', '/about'], ['Careers', '/about'], ['Press', '/about'], ['Blog', '/']] },
  { title: 'Resources', links: [['Help Center', '/contact'], ['Flight Status', '/'], ['Baggage Policy', '/contact'], ['Travel Advisories', '/contact']] },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <Logo light />
          <p>Smarter flights, fairer fares and real human support — wherever you are headed next.</p>
          <div className="site-footer__socials">
            {['X', 'IG', 'in', 'f'].map((s) => (
              <a key={s} href="#" aria-label={s} onClick={(e) => e.preventDefault()}>
                {s}
              </a>
            ))}
          </div>
        </div>
        <div className="site-footer__cols">
          {columns.map((c) => (
            <div key={c.title} className="site-footer__col">
              <h4>{c.title}</h4>
              {c.links.map(([label, to]) => (
                <Link key={label} to={to}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
          <div className="site-footer__col">
            <h4>Contact</h4>
            <a href="mailto:hello@aerova.travel">hello@aerova.travel</a>
            <a href="tel:+18005550142">+1 (800) 555-0142</a>
            <span>221 Skyline Ave, Dubai</span>
          </div>
        </div>
        <button
          type="button"
          className="site-footer__top-btn"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp size={20} />
        </button>
      </div>
      <div className="site-footer__wordmark" aria-hidden="true">AEROVA</div>
      <div className="site-footer__bottom">
        <span>© 2026 Aerova. All rights reserved.</span>
        <span>Privacy Policy · Terms of Use · Cookies</span>
      </div>
    </footer>
  );
}
