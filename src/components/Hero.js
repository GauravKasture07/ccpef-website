
import { useEffect, useState } from 'react';
import { hero } from '../data/siteContent';
import './Hero.css';

const heroSlides = Array.from({ length: 13 }, (_, index) => ({
  image: `/image/hero${index + 1}.jpeg`,
  alt: `Environmental project photo ${index + 1}`,
}));

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPaused, setSliderPaused] = useState(false);

  useEffect(() => {
    if (sliderPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [sliderPaused]);

  const showSlide = (index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="hero" id="home">
      <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--two" aria-hidden="true" />

      <div className="hero__grid">
        <div className="hero__copy">
          <p className="hero__kicker">
            <span className="hero__kicker-dot" />
            {hero.kicker}
          </p>

          <h1>
            {hero.titleLead}{'\u00a0'}
            <em>{hero.titleAccent}</em>
          </h1>

          <p className="hero__lead">{hero.description}</p>

          <div className="hero__cta">
            <a className="btn btn--primary hero__primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <span aria-hidden="true">↗</span>
            </a>

            <a className="btn btn--ghost hero__secondary" href={hero.secondaryCta.href}>
              <span className="hero__play" aria-hidden="true">→</span>
              {hero.secondaryCta.label}
            </a>
          </div>

        </div>

        <aside className="hero__panel" aria-label="Environmental impact illustration">
          <div
            className="hero__art"
            onFocus={() => setSliderPaused(true)}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setSliderPaused(false);
              }
            }}
          >
            <div className="hero__slider" aria-roledescription="carousel">
              <img
                key={heroSlides[activeSlide].image}
                className="hero__slide"
                src={heroSlides[activeSlide].image}
                alt={heroSlides[activeSlide].alt}
              />
              <div className="hero__slider-controls">
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => showSlide(activeSlide - 1)}
                >
                  ‹
                </button>
                <div className="hero__slider-dots" aria-label="Choose photo">
                  {heroSlides.map((slide, index) => (
                    <button
                      key={slide.image}
                      type="button"
                      className={index === activeSlide ? 'is-active' : ''}
                      aria-label={`Show photo ${index + 1}`}
                      aria-current={index === activeSlide ? 'true' : undefined}
                      onClick={() => showSlide(index)}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => showSlide(activeSlide + 1)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>

        </aside>
      </div>

      <div className="hero__stats">
        {hero.stats.map((stat, index) => (
          <div className="hero__stat" key={stat.label}>
            <span className="hero__stat-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
