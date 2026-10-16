import { documentary, site } from '../data/siteContent';
import Reveal from './Reveal';
import './Documentary.css';

function Documentary() {
  return (
    <section className="film" id="gallery" aria-labelledby="film-title">
      <Reveal>
        <div className="film__inner">
          <div>
            <p className="kicker">{documentary.kicker}</p>
            <h2 id="film-title">{documentary.title}</h2>
            <p>{documentary.text}</p>
            <dl>
              {documentary.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
            <div className="hero__cta">
              <a className="btn btn--primary" href={`mailto:${site.email}?subject=Watch%20Trailer%20%26%20Story`}>
                Watch Trailer & Story
              </a>
              <a
                className="btn btn--ghost"
                href={`mailto:${site.email}?subject=Request%20Campus%20Screening`}
              >
                Request Campus Screening
              </a>
            </div>
          </div>
          <div className="film__art" aria-hidden="true">
            <svg viewBox="0 0 420 320" fill="none">
              <rect width="420" height="320" rx="28" fill="#0f291e" />
              <path d="M0 210c70-50 140-20 210 0s140-30 210 10v100H0V210Z" fill="#1b4332" />
              <circle cx="86" cy="78" r="26" fill="#d8f3dc" opacity="0.4" />
              <path d="M150 188c20-70 80-90 140-70-10 50-50 80-90 88-30 6-48-2-50-18Z" fill="#74c69d" />
              <rect x="168" y="118" width="84" height="58" rx="10" fill="#f7f4ed" />
              <path d="M202 134v26l24-13-24-13Z" fill="#143528" />
            </svg>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Documentary;
