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
              <div className="leader__heading">
                <h3>{person.name}</h3>
                <a
                  className="leader__linkedin"
                  href={person.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${person.name} on LinkedIn`}
                  title={`View ${person.name} on LinkedIn`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8v11.3H3.3V9.4Zm6.1 0H13v1.5h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 5.9v5.9h-3.8v-5.2c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.3H9.4V9.4Z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
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
