
import { useEffect, useRef, useState } from 'react';
import { pillars } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Pillars.css';

function Pillars() {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (selectedPillar && !dialog.open) {
      dialog.showModal();
    } else if (!selectedPillar && dialog.open) {
      dialog.close();
    }
  }, [selectedPillar]);

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
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="pillar__content">
                <h3>{item.title}</h3>
                <div className="pillar__metrics">
                  {item.metrics.map((metric) => (
                    <div className="pillar__metric" key={metric.label}>
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="pillar__button"
                  type="button"
                  onClick={() => setSelectedPillar(item)}
                  aria-haspopup="dialog"
                >
                  View action details
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="pillar-dialog"
        aria-labelledby="pillar-dialog-title"
        onClose={() => setSelectedPillar(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setSelectedPillar(null);
          }
        }}
      >
        {selectedPillar && (
          <div className="pillar-dialog__content">
            <button
              className="pillar-dialog__close"
              type="button"
              onClick={() => setSelectedPillar(null)}
              aria-label="Close pillar details"
            >
              ×
            </button>
            <img
              className="pillar-dialog__image"
              src={selectedPillar.image}
              alt={selectedPillar.title}
            />
            <div className="pillar-dialog__body">
              <h2 id="pillar-dialog-title">{selectedPillar.title}</h2>
              <p className="pillar-dialog__description">{selectedPillar.text}</p>
              <div className="pillar-dialog__metrics">
                {selectedPillar.metrics.map((metric) => (
                  <div className="pillar-dialog__metric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
              {selectedPillar.interventions && (
                <section className="pillar-dialog__interventions" aria-labelledby="pillar-interventions-title">
                  <h3 id="pillar-interventions-title">Key Interventions</h3>
                  <ul>
                    {selectedPillar.interventions.map((intervention) => (
                      <li key={intervention}>{intervention}</li>
                    ))}
                  </ul>
                </section>
              )}
              <div className="pillar__tags">
                {selectedPillar.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="pillar__button" href="#contact" onClick={() => setSelectedPillar(null)}>
                Get involved <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}
      </dialog>
    </Section>
  );
}

export default Pillars;
