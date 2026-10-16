
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { contact, site } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Contact.css';

const emailJsConfig = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: (
      <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8v11.3H3.3V9.4Zm6.1 0H13v1.5h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 5.9v5.9h-3.8v-5.2c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.3H9.4V9.4Z" />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.8" r="1.2" />
      </>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: (
      <>
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8Z" />
        <path d="m9.6 15.6 6.2-3.6-6.2-3.6v7.2Z" fill="#fff" />
      </>
    ),
  },
];

const initial = {
  name: '',
  email: '',
  phone: '',
  interest: contact.interests[0],
  message: '',
};

function Contact() {
  const [form, setForm] = useState(initial);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState('');

  const update = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submit = async (event) => {
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
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          interest: form.interest,
          message: form.message.trim(),
        },
        {
          publicKey: emailJsConfig.publicKey,
        }
      );

      setStatus('Thank you! Your inquiry has been sent successfully.');
      setStatusType('success');
      setForm({ ...initial });
    } catch (error) {
      console.error('EmailJS submission failed:', error);

      setStatus(
        'Sorry, we could not send your inquiry. Please try again or contact us by email.'
      );
      setStatusType('error');
    } finally {
      setSending(false);
    }
  };

  return (
    <Section
      id="contact"
      kicker={contact.kicker}
      title={contact.title}
      intro={contact.intro}
    >
      <div className="contact">
        <Reveal>
          <aside className="contact__details">
            <h3>Registered Office</h3>
            <p>{site.office}</p>
            <p>{site.previousOffice}</p>

            <h3>Phone Contact</h3>
            <p>
              <a href={site.phoneHref}>{site.phone}</a>
            </p>

            <h3>Official Email</h3>
            <p>
              <a href={site.emailHref}>{site.email}</a>
            </p>

            <p className="contact__cin">
              Section 8 Registered Entity
              <br />
              Corporate Identification Number (CIN):{' '}
              <strong>{site.cin}</strong>
            </p>
            <div className="contact__socials" aria-label="Social media links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit CCPEF on ${social.name}`}
                  title={social.name}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </aside>
        </Reveal>

        <Reveal delay={80}>
          <form className="contact__form" onSubmit={submit}>
            <h3>{contact.formTitle}</h3>
            <p>{contact.formIntro}</p>

            <label>
              Full Name *
              <input
                type="text"
                name="name"
                autoComplete="name"
                required
                maxLength={100}
                value={form.name}
                onChange={update}
                placeholder="e.g. Rahul Deshmukh"
                disabled={sending}
              />
            </label>

            <label>
              Email Address *
              <input
                type="email"
                name="email"
                autoComplete="email"
                required
                maxLength={254}
                value={form.email}
                onChange={update}
                placeholder="name@example.com"
                disabled={sending}
              />
            </label>

            <label>
              Phone Number *
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                required
                minLength={10}
                maxLength={15}
                pattern="[0-9+() -]{10,15}"
                title="Enter a valid phone number using 10 to 15 characters."
                value={form.phone}
                onChange={update}
                placeholder="98765 43210"
                disabled={sending}
              />
            </label>

            <label>
              Area of Interest / Collaboration
              <select
                name="interest"
                value={form.interest}
                onChange={update}
                disabled={sending}
              >
                {contact.interests.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Your Message / Requirements *
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                value={form.message}
                onChange={update}
                placeholder="Tell us about your organization, location in Pune/MH, and what you'd like to achieve..."
                disabled={sending}
              />
            </label>

            <button
              className="btn btn--primary"
              type="submit"
              disabled={sending}
            >
              {sending ? 'Sending Inquiry...' : 'Submit Inquiry'}
            </button>

            {status && (
              <p
                className={`contact__status contact__status--${statusType}`}
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
