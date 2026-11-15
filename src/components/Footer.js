
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { footer, site } from '../data/siteContent';
import './Footer.css';

const emailJsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

function Footer() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const subscribe = async (event) => {
    event.preventDefault();

    if (sending) return;

    if (
      !emailJsConfig.serviceId ||
      !emailJsConfig.templateId ||
      !emailJsConfig.publicKey
    ) {
      setStatus(
        'Email is not configured yet. Add the REACT_APP_EMAILJS settings to the project root .env file and restart the app.'
      );
      setStatusType('error');
      return;
    }

    setSending(true);
    setStatus('');
    setStatusType('');

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name: 'Newsletter subscriber',
          email: email.trim(),
          interest: 'Newsletter subscription',
          message:
            'Please add this email address to updates on Climate Baithaks, RWH workshops, and eco-initiatives.',
        },
        {
          publicKey: emailJsConfig.publicKey,
        }
      );

      setStatus('Thank you! Your subscription request has been sent.');
      setStatusType('success');
      setEmail('');
    } catch (error) {
      console.error('EmailJS subscription failed:', error);
      setStatus('Sorry, we could not send your subscription. Please try again.');
      setStatusType('error');
    } finally {
      setSending(false);
    }
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
                disabled={sending}
              />

              <button
                className="footer__subscribe-btn"
                type="submit"
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Subscribe'}{' '}
                <span aria-hidden="true">↗</span>
              </button>
            </form>

            {status && (
              <p
                className={`footer__status footer__status--${statusType}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}

            <p className="footer__note">
              Stay informed. Stay involved.
            </p>
          </div>
        </div>
      </div>

      <div className="footer__meta footer__meta--singleLine">
        <p>Section 8 Registered Non-Profit </p>
        <p>{site.copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
