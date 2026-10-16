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
      >
        <Reveal>
          <article className="about__card about__combined">
            <section className="about__combined-section">
              <h3>{about.visionTitle}</h3>
              <p className="about__quote">{about.visionQuote}</p>

              <h4>{about.pillarsTitle}</h4>
              <div className="about__matrix">
                {about.pillars.map((pillar) => (
                  <span key={pillar.title}>{pillar.title}</span>
                ))}
              </div>
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

      </Section>
    </>
  );
}

export default About;