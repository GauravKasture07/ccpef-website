import { partners } from '../data/siteContent';
import './About.css';

const partnerLogoMap = {
  'Pune Municipal Corporation (PMC)': '/image/pmc.png',
  'Pimpri Chinchwad Municipal Corporation (PCMC)': '/image/pcmc.jpg',
  'Pune Metropolitan Region Development Authority (PMRDA)': '/image/pmrda.png',
  'Parisar (Sustainable Mobility)': '/image/parisar.jpg',
  'Mission Groundwater & ACWADAM': '/image/acwadamorg.jpg',
  'NSRCEL - IIM Bengaluru': '/image/nsrcl.png',
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
    </div>
  );
}

export default Allies;
