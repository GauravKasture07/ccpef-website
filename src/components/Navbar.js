import { useEffect, useState } from 'react';
import { navLinks, site } from '../data/siteContent';
import './Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      {/* Main navigation */}
      <div className="nav__main">
        <a
          href="#home"
          className="nav__brand"
          onClick={closeMenu}
          aria-label={`${site.fullName} home`}
        >
          <span className="nav__mark">
            <img src="/image/web_logo.png" alt="" />
          </span>

          <span>
            <strong className="nav__brand-name">
              <span>Climate Collective Pune Environmental</span>{' '}
              <span className="nav__brand-foundation">Foundation</span>
            </strong>
          </span>
        </a>

        {/* Navigation links */}
        <nav
          id="primary-navigation"
          className={`nav__links ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          {/* Buttons visible in the mobile menu */}
          <div className="nav__mobile-actions">
            <a
              className="btn btn--ghost"
              href="#contact"
              onClick={closeMenu}
            >
              Join / Volunteer
            </a>

            <a
              className="btn btn--primary"
              href="#contact"
              onClick={closeMenu}
            >
              Support Work
            </a>
          </div>
        </nav>

        {/* Desktop action buttons */}
        <div className="nav__actions">
          <a className="btn btn--ghost" href="#contact">
            Join / Volunteer
          </a>

          <a className="btn btn--primary" href="#contact">
            Support Work
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;