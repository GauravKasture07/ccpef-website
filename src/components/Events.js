import { useState } from 'react';
import { events, site } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Events.css';

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <Section
      id="events"
      kicker={events.kicker}
      title={events.title}
      intro={events.intro}
    >
      <div className="events">
        {events.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 40}>
            <article
              className={`event${selectedEvent === item.title ? ' event--expanded' : ''}`}
            >
              <div className="event__when">
                <strong>{item.date}</strong>
                <span>{item.type}</span>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p className="event__meta">
                  {item.time} · {item.place}
                </p>
                {selectedEvent === item.title && (
                  <div className="event__details">
                    <img className="event__image" src={item.image} alt={item.title} />
                    <p className="event__meta">{item.facilitator}</p>
                    <p>{item.text}</p>
                    <div className="event__tags">
                      {item.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="event__cta">
                <small>{item.seats}</small>
                <button
                  className="event__details-toggle"
                  type="button"
                  aria-expanded={selectedEvent === item.title}
                  onClick={() =>
                    setSelectedEvent(
                      selectedEvent === item.title ? null : item.title
                    )
                  }
                >
                  {selectedEvent === item.title ? 'Hide details' : 'View details'}
                </button>
                <a
                  className="btn btn--primary"
                  href={`mailto:${site.email}?subject=${encodeURIComponent(`RSVP: ${item.title}`)}`}
                >
                  RSVP / Register
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Events;
