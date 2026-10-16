import { useState } from 'react';
import { faqs } from '../data/siteContent';
import Reveal from './Reveal';
import Section from './Section';
import './Faq.css';

function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <Section
      id="faq"
      kicker="Transparency & FAQs"
      title="Frequently Asked Questions"
      intro="Learn more about our governance, methodology, and how we collaborate across civic and community ecosystems."
    >
      <Reveal>
        <div className="faq">
          {faqs.map((item, index) => {
            const expanded = open === index;
            return (
              <div key={item.question} className="faq__item">
                <button
                  type="button"
                  aria-expanded={expanded}
                  onClick={() => setOpen(expanded ? -1 : index)}
                >
                  {item.question}
                  <span aria-hidden="true">{expanded ? '−' : '+'}</span>
                </button>
                {expanded ? <p>{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
}

export default Faq;
