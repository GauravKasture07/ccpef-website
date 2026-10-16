import { about } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './About.css';

function About() {
  return (
    <>
      <Section
        id="vision"
        kicker={about.kicker}
        title={about.title}
        intro={about.intro}
      >
        <Reveal>
          <article className="about__card about__combined">
            <section className="about__combined-section">
              <h3>{about.visionTitle}</h3>
              <p className="about__quote">{about.visionQuote}</p>

              <h4>{about.pillarsTitle}</h4>
              <ul className="about__list">
                {about.pillars.map((pillar) => (
                  <li key={pillar.title}>
                    <span className="about__check">✓</span>
                    <span>
                      <strong>{pillar.title}</strong>: {pillar.text}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="about__combined-section">
              <h3>{about.missionTitle}</h3>
              <p className="about__quote">{about.missionQuote}</p>

              <h4>{about.matrixTitle}</h4>
              <div className="about__matrix">
                {about.matrix.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </section>
          </article>
        </Reveal>

        <Reveal>
          <blockquote className="about__close">
            <span className="about__close-label">BE PART OF THE CHANGE</span>
            <p>{about.closingQuote}</p>
            <span className="about__close-text">{about.closingText}</span>

            <div className="about__buttons">
              <a className="btn btn--primary" href="#contact">
                Join as a Volunteer <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href="#focus">
                Explore 6 Pillars
              </a>
            </div>
          </blockquote>
        </Reveal>
      </Section>
    </>
  );
}

export default About;