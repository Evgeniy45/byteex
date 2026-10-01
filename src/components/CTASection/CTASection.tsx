import './CTASection.scss';

import React from 'react';
import { Button } from '../../shared/button/Button';

import starIcon from '../../assets/icons/star.svg';
import paymentCardsImg from '../../assets/images/cards.webp';
import deliveryIcon from '../../assets/icons/delivery.svg';
import safetyIcon from '../../assets/icons/safety.svg';
import leafIcon from '../../assets/icons/packaging.svg';

import imgLongHair from '../../assets/images/woman-long-hair.webp';
import imgCurlyHair from '../../assets/images/woman-curly-hair.webp';
import imgGreyTop from '../../assets/images/woman-grey-t-short.webp';

interface BenefitItem {
  id: number;
  icon: string;
  firstLine: string;
  secondLine: string;
}

const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 1,
    icon: deliveryIcon,
    firstLine: 'FREE Shipping on',
    secondLine: 'Orders over $200',
  },
  {
    id: 2,
    icon: safetyIcon,
    firstLine: 'Over 500+ 5 Star',
    secondLine: 'Reviews Online',
  },
  {
    id: 3,
    icon: leafIcon,
    firstLine: 'Made ethically',
    secondLine: 'and responsibly.',
  },
];

export const CTASection: React.FC = () => {
  return (
    <section className="find-love">
      <div>
        <div className="find-love__wrapper">
          <h2 className="find-love__title">Find something you love.</h2>

          <p className="find-love__subtitle find-love__subtitle--desktop">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et
            felis finibus consequat.
          </p>
          <p className="find-love__subtitle find-love__subtitle--mobile">
            Click below to browse our collection!
          </p>

          <div className="find-love__visual">
            <div className="find-love__rect find-love__rect--left" />
            <div className="find-love__rect find-love__rect--right" />

            <div className="find-love__img-box find-love__img-box--side find-love__img-box--left">
              <img src={imgLongHair} alt="Woman collection item" />
            </div>

            <div className="find-love__img-box find-love__img-box--center">
              <img src={imgCurlyHair} alt="Woman collection featured item" />
            </div>

            <div className="find-love__img-box find-love__img-box--side find-love__img-box--right">
              <img src={imgGreyTop} alt="Woman collection item" />
            </div>
          </div>

          <Button
            text="Customize Your Outfit"
            hasArrow={true}
            className="find-love__btn"
          />

          <div className="find-love__mobile-rating">
            <div className="find-love__stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <img key={i} src={starIcon} alt="" aria-hidden="true" />
              ))}
            </div>
            <span className="find-love__rating-text">
              Over 500+ 5 Star Reviews Online
            </span>
          </div>

          <div className="find-love__payments">
            <img src={paymentCardsImg} alt="Accepted payment methods" />
          </div>

          <div className="find-love__benefits">
            {BENEFITS_DATA.map((benefit, index) => (
              <React.Fragment key={benefit.id}>
                <div className="find-love__benefit-item">
                  <div className="find-love__benefit-icon">
                    <img src={benefit.icon} alt="" aria-hidden="true" />
                  </div>
                  <p className="find-love__benefit-text">
                    {benefit.firstLine} <br /> {benefit.secondLine}
                  </p>
                </div>

                {index < BENEFITS_DATA.length - 1 && (
                  <span className="find-love__divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
