
import { pillars } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Pillars.css';

const images = [
  '/image/community-workshop.jpg',
  '/image/water-conservation.jpg',
  '/image/green-environment.jpg',
];

function Pillars() {
  return (
    <Section
      id="focus"
      className="pillars"
      kicker={pillars.kicker}
      title={pillars.title}
      intro={pillars.intro}
    >
      <div className="pillars__grid">
        {pillars.items.map((item, index) => (
          <Reveal key={item.id} delay={index * 50}>
            <article className="pillar" id={item.id}>
              <img
                className="pillar__image"
                src={images[index % images.length]}
                alt={item.title}
                loading="lazy"
              />

              <div className="pillar__content">
                <div className="pillar__tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <div className="pillar__actions">
                  <a className="pillar__button" href="#contact">
                    Join / Volunteer
                    <span aria-hidden="true"> →</span>
                  </a>
                  <a className="pillar__button" href="#contact">
                    Donate
                    <span aria-hidden="true"> →</span>
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Pillars;
