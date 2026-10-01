import { useState } from 'react';
import './ReviewsSection.scss';
import { Button } from '../../shared/button/Button';

import arrowLeftIcon from '../../assets/icons/arrowLeft.svg';
import arrowRightIcon from '../../assets/icons/arrowRight.svg';
import starIcon from '../../assets/icons/star.svg';

import img1 from '../../assets/images/two-womans-on-bed.webp';
import img2 from '../../assets/images/two-womans.webp';
import img3 from '../../assets/images/woman-and-man.webp';
import img4 from '../../assets/images/woman-blue-dress-and-whine.webp';
import img5 from '../../assets/images/woman-eat-meal.webp';
import img6 from '../../assets/images/woman-green-sweater.webp';
import img7 from '../../assets/images/woman-hands-on-head.webp';
import img8 from '../../assets/images/woman-in-blue-t-shirt-white-dress.webp';
import img9 from '../../assets/images/woman-in-grey-dress.webp';
import img10 from '../../assets/images/woman-in-jeans.webp';
import img11 from '../../assets/images/woman-in-red-dress.webp';
import img12 from '../../assets/images/woman-in-white-dress.webp';
import img13 from '../../assets/images/woman-lies-and-read-book.webp';
import img14 from '../../assets/images/woman-on-road.webp';
import img15 from '../../assets/images/woman-red-hair-on-bed.webp';
import img16 from '../../assets/images/woman-smile-white-hair.webp';
import img17 from '../../assets/images/woman-stay-near-shelf.webp';
import img18 from '../../assets/images/woman-take-book.webp';
import img19 from '../../assets/images/womat-sit-on-chair.webp';

const GALLERY_PHOTOS = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img1,
  img2,
  img3,
];

interface ReviewItem {
  id: number;
  name: string;
  comment: string;
}

const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 1,
    name: 'Jane, S.',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 2,
    name: 'Jane, S.',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Aenean eget placerat ligula.',
  },
  {
    id: 3,
    name: 'Jane, S.',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 4,
    name: 'Sarah, M.',
    comment:
      'Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Duis non fermentum augue. Vivamus laoreet aliquam risus.',
  },
  {
    id: 5,
    name: 'Anna, K.',
    comment:
      'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.',
  },
];

export const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalReviews = REVIEWS_DATA.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalReviews - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalReviews - 1 ? 0 : prev + 1));
  };

  const desktopReviews = [
    REVIEWS_DATA[currentSlide % totalReviews],
    REVIEWS_DATA[(currentSlide + 1) % totalReviews],
    REVIEWS_DATA[(currentSlide + 2) % totalReviews],
  ];

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-section__header">
          <h2 className="reviews-section__title">What are our fans saying?</h2>
          <p className="reviews-section__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat. Fusce non nibh luctus.
          </p>
        </div>
      </div>

      <div className="reviews-section__gallery-wrap">
        <div className="reviews-section__gallery">
          {GALLERY_PHOTOS.map((src, index) => {
            let visibilityClass = '';
            if (index >= 14) {
              visibilityClass = 'reviews-section__photo-item--desktop-only';
            } else if (index >= 8) {
              visibilityClass = 'reviews-section__photo-item--hide-mobile';
            }

            return (
              <div
                key={index}
                className={`reviews-section__photo-item ${visibilityClass}`}
              >
                <img src={src} alt="Community fan" loading="lazy" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container">
        <div className="reviews-slider">
          <button
            type="button"
            className="reviews-slider__arrow reviews-slider__arrow--prev"
            onClick={handlePrev}
            aria-label="Previous review"
          >
            <img src={arrowLeftIcon} alt="Left arrow" aria-hidden="true" />
          </button>

          <div className="reviews-slider__deck-desktop">
            {desktopReviews.map((review, idx) => (
              <div key={`${review.id}-${idx}`} className="review-card">
                <div className="review-card__header">
                  <div className="review-card__avatar" />
                  <div className="review-card__meta">
                    <div className="review-card__stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img
                          key={i}
                          src={starIcon}
                          alt="star"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="review-card__name">{review.name}</span>
                  </div>
                </div>
                <p className="review-card__text">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="reviews-slider__deck-mobile">
            {REVIEWS_DATA.map((review, index) => (
              <div
                key={review.id}
                className={`review-card ${
                  currentSlide === index ? 'review-card--active' : ''
                }`}
              >
                <div className="review-card__header">
                  <div className="review-card__avatar" />
                  <div className="review-card__meta">
                    <div className="review-card__stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img
                          key={i}
                          src={starIcon}
                          alt="star"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="review-card__name">{review.name}</span>
                  </div>
                </div>
                <p className="review-card__text">{review.comment}</p>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="reviews-slider__arrow reviews-slider__arrow--next"
            onClick={handleNext}
            aria-label="Next review"
          >
            <img src={arrowRightIcon} alt="Right arrow" aria-hidden="true" />
          </button>
        </div>

        <div className="reviews-section__dots">
          {[0, 1, 2].map((dotIndex) => (
            <span
              key={dotIndex}
              className={`reviews-section__dot ${
                currentSlide % 3 === dotIndex
                  ? 'reviews-section__dot--active'
                  : ''
              }`}
            />
          ))}
        </div>

        <div className="reviews-section__action">
          <Button
            text="Customize Your Outfit"
            hasArrow={true}
            className="reviews-section__btn"
          />

          <div className="reviews-section__rating">
            <div className="reviews-section__stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={starIcon} alt="" aria-hidden="true" />
              ))}
            </div>
            <span className="reviews-section__rating-text">
              Over 500+ 5 Star Reviews Online
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
