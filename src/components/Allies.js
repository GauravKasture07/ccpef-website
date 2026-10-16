import { about, partners } from '../data/siteContent';
import Reveal from './Reveal';
import './About.css';

const partnerLogoMap = {
  'Pune Municipal Corporation (PMC)': '/image/pmc.png',
  'Pimpri Chinchwad Municipal Corporation (PCMC)': '/image/pcmc.jpg',
  'Pune Metropolitan Region Development Authority (PMRDA)': '/image/pmrda.png',
  'Parisar (Sustainable Mobility)': '/image/parisar.jpg',
  'Mission Groundwater & ACWADAM': '/image/acwadamorg.jpg',
  'NSRCEL - IIM Bengaluru': '/image/nsrcl.png',
  'Swach & Red Dot Movement': '/image/swach.png',
};

const partnerLogos = partners.map((name) => ({
  name,
  image: partnerLogoMap[name] ?? '',
}));

function Allies() {
  return (
    <div className="allies">
      <div className="allies__intro">
        <span className="allies__eyebrow">OUR NETWORK</span>
        <p className="allies__heading">Trusted Collaborations & Civic Alliances</p>
        <span className="allies__description">
          Working together with organizations committed to a greener future.
        </span>
      </div>

      <div className="allies__marquee">
        <div className="allies__track">
          {[...partnerLogos, ...partnerLogos].map((partner, index) => (
            <div className="allies__item" key={`${partner.name}-${index}`}>
              {partner.image && (
                <img
                  src={partner.image}
                  alt={partner.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>

      <Reveal>
        <blockquote className="about__close">
          <span className="about__close-label">BE PART OF THE CHANGE</span>
          <p>{about.closingQuote}</p>
          <span className="about__close-text">{about.closingText}</span>

          <div className="about__buttons">
            <a className="btn btn--primary" href="#contact">
              Donate <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#focus">
              Explore Pillars
            </a>
          </div>
        </blockquote>
      </Reveal>
    </div>
  );
}

export default Allies;
