import { useState } from 'react';
import './PressSection.scss';

import ecoStylist from '../../assets/icons/eco-stylist.svg';
import canadianLiving from '../../assets/icons/canadianLiving.svg';
import jullianHarris from '../../assets/icons/JullianHarris.svg';
import theEcoHub from '../../assets/icons/TheEcoHub.svg';
import trendHunter from '../../assets/icons/TrendHunter.svg';

const PRESS_LOGOS = [
  { id: 'eco-stylist', src: ecoStylist, alt: 'Eco-Stylist' },
  { id: 'canadian-living', src: canadianLiving, alt: 'Canadian Living' },
  { id: 'jillian-harris', src: jullianHarris, alt: 'Jillian Harris' },
  { id: 'the-eco-hub', src: theEcoHub, alt: 'The Eco Hub' },
  { id: 'trend-hunter', src: trendHunter, alt: 'Trend Hunter' },
];

export const PressSection = () => {
  const [activeDot, setActiveDot] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.currentTarget;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;

    const progress = scrollLeft / maxScroll;
    if (progress < 0.33) {
      setActiveDot(0);
    } else if (progress < 0.66) {
      setActiveDot(1);
    } else {
      setActiveDot(2);
    }
  };

  return (
    <section className="press-section">
      <div className="container">
        <p className="press-section__subtitle">as seen in</p>

        <div className="press-section__list" onScroll={handleScroll}>
          {PRESS_LOGOS.map((logo) => (
            <div key={logo.id} className="press-section__item">
              <img
                src={logo.src}
                alt={logo.alt}
                className={`press-section__logo press-section__logo--${logo.id}`}
              />
            </div>
          ))}
        </div>

        <div className="press-section__dots" aria-hidden="true">
          {[0, 1, 2].map((dotIndex) => (
            <span
              key={dotIndex}
              className={`press-section__dot ${
                activeDot === dotIndex ? 'press-section__dot--active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
