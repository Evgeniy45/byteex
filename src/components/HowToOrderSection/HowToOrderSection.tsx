import { useState } from 'react';
import './HowToOrderSection.scss';
import { Button } from '../../shared/button/Button';

import packagingIcon from '../../assets/icons/packaging.svg';
import deliveryIcon from '../../assets/icons/delivery.svg';
import dayNightIcon from '../../assets/icons/dayNight.svg';
import starIcon from '../../assets/icons/star.svg';
import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';

interface StepCard {
  id: number;
  icon: string;
  title: string;
  description: string;
  variant?: 'highlight';
}

const STEPS_DATA: StepCard[] = [
  {
    id: 1,
    icon: packagingIcon,
    title: 'You save.',
    description: 'Browse our comfort sets and save 15% when you bundle.',
  },
  {
    id: 2,
    icon: deliveryIcon,
    title: 'We ship.',
    description: 'We ship your items within 1-2 days of receiving your order.',
    variant: 'highlight',
  },
  {
    id: 3,
    icon: dayNightIcon,
    title: 'You enjoy!',
    description: 'Wear hernest around the house, out on the town, or in bed.',
  },
];

export const HowToOrderSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? STEPS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === STEPS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="how-to-order">
      <div className="container">
        <div className="how-to-order__wrapper">
          <h2 className="how-to-order__title">Comfort made easy</h2>

          <div className="how-to-order__slider-wrapper">
            <button
              type="button"
              className="how-to-order__arrow how-to-order__arrow--prev"
              onClick={handlePrev}
              aria-label="Previous step"
            >
              <img src={arrowLeftIcon} alt="Left arrow" aria-hidden="true" />
            </button>

            <div className="how-to-order__cards">
              {STEPS_DATA.map((step, index) => (
                <div
                  key={step.id}
                  className={`how-to-order__card ${
                    step.variant === 'highlight'
                      ? 'how-to-order__card--highlight'
                      : ''
                  } ${
                    activeSlide === index ? 'how-to-order__card--active' : ''
                  }`}
                >
                  <div className="how-to-order__icon-wrapper">
                    <img
                      src={step.icon}
                      alt={step.title}
                      aria-hidden="true"
                      className="how-to-order__icon"
                    />
                  </div>
                  <h3 className="how-to-order__card-title">{step.title}</h3>
                  <p className="how-to-order__card-desc">{step.description}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="how-to-order__arrow how-to-order__arrow--next"
              onClick={handleNext}
              aria-label="Next step"
            >
              <img src={arrowRightIcon} alt="Right arrow" aria-hidden="true" />
            </button>
          </div>

          <div className="how-to-order__action">
            <Button
              text="Customize Your Outfit"
              hasArrow={true}
              className="how-to-order__btn"
            />

            <div className="how-to-order__reviews">
              <div
                className="how-to-order__stars"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={starIcon}
                    alt="star"
                    aria-hidden="true"
                    className="how-to-order__star"
                  />
                ))}
              </div>
              <span className="how-to-order__reviews-text">
                Over 500+ 5 Star Reviews Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
