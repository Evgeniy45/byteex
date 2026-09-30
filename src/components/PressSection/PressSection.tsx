import './PressSection.scss';

import ecoStylist from '../../assets/icons/eco-stylist.svg';
import canadianLiving from '../../assets/icons/canadianLiving.svg';
import jullianHarris from '../../assets/icons/JullianHarris.svg';
import theEcoHub from '../../assets/icons/TheEcoHub.svg';
import trendHunter from '../../assets/icons/TrendHunter.svg';

const PRESS_LOGOS = [
  { id: 1, src: ecoStylist, alt: 'Eco-Stylist' },
  { id: 2, src: canadianLiving, alt: 'Canadian Living' },
  { id: 3, src: jullianHarris, alt: 'Jillian Harris' },
  { id: 4, src: theEcoHub, alt: 'The Eco Hub' },
  { id: 5, src: trendHunter, alt: 'Trend Hunter' },
];

export const PressSection = () => {
  return (
    <section className="press-section">
      <div className="container">
        <p className="press-section__subtitle">as seen in</p>

        <div className="press-section__list">
          {PRESS_LOGOS.map((logo) => (
            <div key={logo.id} className="press-section__item">
              <img
                src={logo.src}
                alt={logo.alt}
                className="press-section__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
