import { leadership } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Leadership.css';

function Leadership() {
  return (
    <Section
      id="leadership"
      kicker={leadership.kicker}
      title={leadership.title}
      intro={leadership.intro}
    >
      <div className="leaders">
        {leadership.directors.map((person, index) => (
          <Reveal key={person.name} delay={index * 70}>
            <article className="leader">
              <div className="leader__avatar" aria-hidden="true">
                {person.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')}
              </div>
              <p className="kicker">{person.role}</p>
              <h3>{person.name}</h3>
              <p className="leader__summary">{person.summary}</p>
              <p className="leader__aff">{person.affiliation}</p>
              <p>{person.bio}</p>
              <h4>Key Career Milestones & Civic Impact:</h4>
              <ul>
                {person.milestones.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="leader__tags">
                {person.expertise.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Leadership;
