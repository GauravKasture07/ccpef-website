
import { hero } from '../data/siteContent';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--two" aria-hidden="true" />

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">
            <span className="hero__kicker-dot" />
            {hero.kicker}
          </p>

          <h1>
            {hero.titleLead}{' '}
            <em>{hero.titleAccent}</em>
          </h1>

          <p className="hero__lead">{hero.description}</p>

          <div className="hero__cta">
            <a className="btn btn--primary hero__primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <span aria-hidden="true">↗</span>
            </a>

            <a className="btn btn--ghost hero__secondary" href={hero.secondaryCta.href}>
              <span className="hero__play" aria-hidden="true">→</span>
              {hero.secondaryCta.label}
            </a>
          </div>

        </div>

        <aside className="hero__panel" aria-label="Environmental impact illustration">
          <div className="hero__art">
            <div className="hero__art-top">
              <span className="hero__art-label">
                <span />
                A greener tomorrow
              </span>
              <span className="hero__art-sun" aria-hidden="true">✳</span>
            </div>

            <svg
              className="hero__landscape"
              viewBox="0 0 560 460"
              role="img"
              aria-label="Illustration of green hills, trees, leaves and a flowing river"
            >
              <defs>
                <linearGradient id="heroSky" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#d9f0dc" />
                  <stop offset="100%" stopColor="#a9d8b8" />
                </linearGradient>
                <linearGradient id="heroRiver" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a9dfd3" />
                  <stop offset="100%" stopColor="#4eaa91" />
                </linearGradient>
              </defs>

              <rect width="560" height="460" rx="24" fill="url(#heroSky)" />

              <circle cx="426" cy="105" r="53" fill="#f8e8a8" opacity=".9" />
              <circle cx="426" cy="105" r="69" fill="#f8e8a8" opacity=".2" />

              <path
                d="M0 235 100 144 170 208 265 115 370 221 450 160 560 240V460H0Z"
                fill="#92c9a2"
                opacity=".8"
              />
              <path
                d="M0 285Q115 195 225 275T450 260T560 270V460H0Z"
                fill="#5a9d70"
              />
              <path
                d="M0 340Q110 265 220 325T430 315T560 330V460H0Z"
                fill="#367c55"
              />

              <path
                d="M205 460Q260 395 320 355T405 300Q375 380 340 410T285 460Z"
                fill="url(#heroRiver)"
              />
              <path
                d="M228 460Q278 400 325 368"
                stroke="#d8f4e8"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
                opacity=".8"
              />

              <g className="hero__tree hero__tree--one">
                <path d="M100 360V240" stroke="#775d3f" strokeWidth="12" strokeLinecap="round" />
                <circle cx="100" cy="218" r="47" fill="#276c49" />
                <circle cx="69" cy="240" r="32" fill="#398657" />
                <circle cx="127" cy="245" r="34" fill="#4b9c65" />
                <circle cx="94" cy="187" r="31" fill="#478f5b" />
              </g>

              <g className="hero__tree hero__tree--two">
                <path d="M460 350V245" stroke="#775d3f" strokeWidth="10" strokeLinecap="round" />
                <circle cx="460" cy="222" r="40" fill="#286b49" />
                <circle cx="434" cy="240" r="29" fill="#3e8a57" />
                <circle cx="484" cy="244" r="30" fill="#4a9a60" />
              </g>

              <g className="hero__leaf hero__leaf--one">
                <path d="M340 155Q351 103 400 95Q398 144 340 155Z" fill="#2c8053" />
                <path d="M342 153 386 111" stroke="#d5f0d7" strokeWidth="2" />
              </g>

              <g className="hero__leaf hero__leaf--two">
                <path d="M180 180Q143 140 158 105Q205 132 180 180Z" fill="#4b9864" />
                <path d="M180 179 165 124" stroke="#d5f0d7" strokeWidth="2" />
              </g>

              <g fill="#fff" opacity=".7">
                <circle cx="245" cy="93" r="3" />
                <circle cx="276" cy="72" r="2" />
                <circle cx="305" cy="110" r="3" />
              </g>
            </svg>

          </div>

          <div className="hero__note">
            <span className="hero__note-icon" aria-hidden="true">↗</span>
            <div>
              <strong>{hero.highlightTitle}</strong>
              <p>{hero.highlightText}</p>
            </div>
          </div>
        </aside>
      </div>

      <div className="hero__stats">
        {hero.stats.map((stat, index) => (
          <div className="hero__stat" key={stat.label}>
            <span className="hero__stat-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
