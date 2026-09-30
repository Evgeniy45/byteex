import { useState } from 'react';
import './BenefitsSection.scss';

import packagingIcon from '../../assets/icons/packaging.svg';
import leafIcon from '../../assets/icons/leaf.svg';
import dayNightIcon from '../../assets/icons/dayNight.svg';
import wavesIcon from '../../assets/icons/waves.svg';

import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';

import womanReadBook from '../../assets/images/woman-read-book.webp';
import womanGreyTShort from '../../assets/images/woman-grey-t-short.webp';
import mainSlideImg from '../../assets/images/woman-dark-white-dress.webp';

interface BenefitItem {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 1,
    icon: packagingIcon,
    title: 'Ethically sourced.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 2,
    icon: leafIcon,
    title: 'Responsibly made.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 3,
    icon: dayNightIcon,
    title: 'Made for living in.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 4,
    icon: wavesIcon,
    title: 'Unimaginably comfortable.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

const SLIDES = [
  { id: 0, src: mainSlideImg, title: 'White Robe' },
  { id: 1, src: womanReadBook, title: 'Woman Reading Book' },
  { id: 2, src: womanGreyTShort, title: 'Woman in Grey T-Shirt' },
  { id: 3, src: mainSlideImg, title: 'White Robe' },
  { id: 4, src: mainSlideImg, title: 'White Robe' },
  { id: 5, src: mainSlideImg, title: 'White Robe' },
  { id: 6, src: mainSlideImg, title: 'White Robe' },
  { id: 7, src: mainSlideImg, title: 'White Robe' },
];

export const BenefitsSection = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="benefits-section">
      <div className="container">
        <div className="benefits-section__wrapper">
          <div className="benefits-section__content">
            <h2 className="benefits-section__title">
              Loungewear you can be proud of.
            </h2>

            <ul className="benefits-section__list">
              {BENEFITS_DATA.map((item) => (
                <li key={item.id} className="benefits-section__item">
                  <div className="benefits-section__icon-box">
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </div>
                  <div className="benefits-section__text">
                    <h3 className="benefits-section__item-title">
                      {item.title}
                    </h3>
                    <p className="benefits-section__item-desc">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="benefits-section__gallery">
            <div className="benefits-slider">
              <button
                type="button"
                className="benefits-slider__arrow benefits-slider__arrow--left"
                onClick={handlePrev}
                aria-label="Previous slide"
              >
                <img src={arrowLeftIcon} alt="Left arrow" />
              </button>

              <div className="benefits-slider__main-card">
                <img
                  key={activeSlideIndex}
                  src={SLIDES[activeSlideIndex].src}
                  alt={SLIDES[activeSlideIndex].title}
                  className="benefits-slider__main-image"
                />

                <div className="benefits-slider__thumbnails">
                  {SLIDES.map((slide, index) => (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setActiveSlideIndex(index)}
                      className={`benefits-slider__thumb-btn ${
                        activeSlideIndex === index
                          ? 'benefits-slider__thumb-btn--active'
                          : ''
                      }`}
                    >
                      <img src={slide.src} alt={slide.title} />
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className="benefits-slider__arrow benefits-slider__arrow--right"
                onClick={handleNext}
                aria-label="Next slide"
              >
                <img src={arrowRightIcon} alt="Right arrow" />
              </button>
            </div>

            <p className="benefits-section__caption">
              {SLIDES[activeSlideIndex].title}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
