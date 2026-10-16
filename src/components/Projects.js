import { useMemo, useState } from 'react';
import { projects } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Projects.css';

function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const visible = useMemo(
    () =>
      filter === 'All'
        ? projects.items
        : projects.items.filter((item) => item.category === filter),
    [filter]
  );

  return (
    <Section
      id="projects"
      kicker={projects.kicker}
      title={projects.title}
    >
      <div className="filters" role="tablist" aria-label="Project categories">
        {projects.filters.map((item) => (
          <button
            key={item}
            type="button"
            className={filter === item ? 'is-active' : ''}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <div
        className={`projects__grid${filter === 'All' ? '' : ' projects__grid--filtered'}`}
      >
        {visible.map((item, index) => (
          <Reveal key={item.title} delay={index * 40}>
            <article
              className={`project${selectedProject === item.title ? ' project--expanded' : ''}`}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="project__foot">
                <small>{item.period}</small>
                <button
                  type="button"
                  aria-expanded={selectedProject === item.title}
                  onClick={() =>
                    setSelectedProject(
                      selectedProject === item.title ? null : item.title
                    )
                  }
                >
                  {selectedProject === item.title ? 'Close case study' : 'Full case study'}
                </button>
              </div>
              {selectedProject === item.title && (
                <div className="project__details">
                  <img className="project__image" src={item.image} alt={item.title} />
                  <p className="project__meta">
                    <span>{item.status}</span>
                    <span>{item.partners}</span>
                  </p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
