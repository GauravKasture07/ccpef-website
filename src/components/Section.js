import Reveal from './Reveal';

function Section({ id, kicker, title, intro, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`.trim()}>
      <Reveal>
        <div className="section__intro">
          {kicker ? <p className="kicker">{kicker}</p> : null}
          {title ? <h2>{title}</h2> : null}
          {intro ? <p className="section__lead">{intro}</p> : null}
        </div>
      </Reveal>
      {children}
    </section>
  );
}

export default Section;
