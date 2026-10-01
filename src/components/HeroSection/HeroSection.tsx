import './HeroSection.scss';
import logo from '../../assets/logo.svg';
import dayNightIcon from '../../assets/icons/dayNight.svg';
import packagingIcon from '../../assets/icons/packaging.svg';
import wavesIcon from '../../assets/icons/waves.svg';
import starIcon from '../../assets/icons/star.svg';
import userAvatar from '../../assets/images/user-avatar.webp';

import womanBlackShort from '../../assets/images/woman-black-short.webp';
import womanGreyTShort from '../../assets/images/woman-grey-t-short.webp';
import womanWhiteDress from '../../assets/images/woman-dark-white-dress.webp';

import { Button } from '../../shared/button/Button';

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container hero-section__container">
        <div className="hero-section__header">
          <img src={logo} alt="Byteex logo" className="hero-section__logo" />
        </div>

        <div className="hero-section__body">
          <div className="hero-section__content">
            <h1 className="hero-section__title">
              Don’t apologize for being comfortable.
            </h1>

            <ul className="hero-section__list">
              <li className="hero-section__list-item">
                <span className="hero-section__icon-box">
                  <img src={dayNightIcon} alt="" />
                </span>
                <p className="hero-section__list-text">
                  Beautiful, comfortable loungewear for day or night.
                </p>
              </li>

              <li className="hero-section__list-item">
                <span className="hero-section__icon-box">
                  <img src={packagingIcon} alt="" />
                </span>
                <p className="hero-section__list-text">
                  No wasteful extras, like tags or plastic packaging.
                </p>
              </li>

              <li className="hero-section__list-item">
                <span className="hero-section__icon-box">
                  <img src={wavesIcon} alt="" />
                </span>
                <p className="hero-section__list-text">
                  Our signature fabric is incredibly comfortable — unlike
                  anything you’ve ever felt.
                </p>
              </li>
            </ul>

            <div className="hero-section__actions">
              <Button
                text="Customize Your Outfit"
                hasArrow={true}
                className="hero-section__btn"
              />

              <div className="hero-review-card">
                <div className="hero-review-card__header">
                  <img
                    src={userAvatar}
                    alt="Amy P."
                    className="hero-review-card__avatar"
                  />
                  <div className="hero-review-card__meta">
                    <span className="hero-review-card__name">Amy P.</span>
                    <div
                      className="hero-review-card__stars"
                      aria-label="5 out of 5 stars"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img key={i} src={starIcon} alt="" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="hero-review-card__badge">
                      One of 500+ 5 Star Reviews Online
                    </span>
                  </div>
                </div>
                <p className="hero-review-card__text">
                  Overjoyed with my Loungewear set. I have the jogger and the
                  sweatshirt. Quality product on every level. From the
                  compostable packaging, to the supplied washing bag, even the
                  garments smells like fresh herbs when I first held them.
                </p>
              </div>
            </div>
          </div>

          <div className="hero-section__carousel">
            <div className="hero-section__image-col hero-section__image-col--side">
              <img
                src={womanGreyTShort}
                alt="Model in grey loungewear"
                className="hero-section__img"
              />
            </div>
            <div className="hero-section__image-col hero-section__image-col--center">
              <img
                src={womanWhiteDress}
                alt="Model in white robe"
                className="hero-section__img"
              />
            </div>
            <div className="hero-section__image-col hero-section__image-col--side">
              <img
                src={womanBlackShort}
                alt="Model in black short"
                className="hero-section__img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
