
import { useState } from 'react';
import { footer, site } from '../data/siteContent';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');

  const subscribe = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent('Subscribe to CCPEF updates');
    const body = encodeURIComponent(
      `Please add ${email.trim()} to updates on Climate Baithaks, RWH workshops, and eco-initiatives.`
    );

    window.location.href =
      `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="footer__logo" href="#home" aria-label="CCPEF home">
              <img src="/image/web_logo.png" alt="" />
              <span>CCPEF</span>
            </a>

            <p className="footer__blurb">{footer.blurb}</p>
          </div>

          <div className="footer__column">
            <h4>Explore</h4>
            <ul>
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h4>Our Focus Areas</h4>
            <ul>
              {footer.focusAreas.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__newsletter">
            <span className="footer__eyebrow">STAY CONNECTED</span>
            <h3>Small actions.<br />A greener future.</h3>
            <p>{footer.subscribeText}</p>

            <form onSubmit={subscribe} className="footer__subscribe">
              <label className="sr-only" htmlFor="subscribe-email">
                Your email address
              </label>

              <input
                id="subscribe-email"
                type="email"
                required
                maxLength={254}
                placeholder="Your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <button className="footer__subscribe-btn" type="submit">
                Subscribe <span aria-hidden="true">↗</span>
              </button>
            </form>

            <p className="footer__note">
              Stay informed. Stay involved.
            </p>
          </div>
        </div>
      </div>

      <div className="footer__meta footer__meta--singleLine">
        <p>{site.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
