import { join } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Join.css';

function Join() {
  return (
    <Section
      id="join"
      kicker={join.kicker}
      title={join.title}
      intro={join.intro}
    >
      <div className="join">
        {join.cards.map((card, index) => (
          <Reveal key={card.title} delay={index * 60}>
            <article>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              <a className="btn btn--primary" href="#contact">
                {card.cta}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Join;
