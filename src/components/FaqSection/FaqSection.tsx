import { useState } from 'react';
import './FaqSection.scss';
import { Button } from '../../shared/button/Button';

import plusIcon from '../../assets/icons/plus.svg';
import minusIcon from '../../assets/icons/minus.svg';
import starIcon from '../../assets/icons/star.svg';

import imgLongHair from '../../assets/images/woman-long-hair.webp';
import imgGreyTop from '../../assets/images/woman-grey-t-short.webp';
import imgReadBook from '../../assets/images/woman-read-book.webp';

const FAQ_DATA = [
  {
    id: 1,
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 2,
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 3,
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 4,
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 5,
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
  {
    id: 6,
    question: 'lorem ipsum dolor sit amet',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.',
  },
];

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Первый открыт по умолчанию, как на макете

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-section__wrapper">
          <div className="faq-section__content">
            <h2 className="faq-section__title">Frequently asked questions.</h2>

            <div className="faq-section__accordion">
              {FAQ_DATA.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.id}
                    className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                  >
                    <button
                      className="faq-item__header"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                    >
                      <h3 className="faq-item__question">{item.question}</h3>
                      <div className="faq-item__icon">
                        <img
                          src={isOpen ? minusIcon : plusIcon}
                          alt={isOpen ? 'Collapse' : 'Expand'}
                        />
                      </div>
                    </button>

                    <div className="faq-item__answer-wrapper">
                      <div className="faq-item__answer-inner">
                        <p className="faq-item__answer-text">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="faq-section__mobile-action">
              <Button
                text="Customize Your Outfit"
                hasArrow={true}
                className="faq-section__btn"
              />
              <div className="faq-section__reviews">
                <div className="faq-section__stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img key={i} src={starIcon} alt="" aria-hidden="true" />
                  ))}
                </div>
                <span className="faq-section__reviews-text">
                  Over 500+ 5 Star Reviews Online
                </span>
              </div>
            </div>
          </div>

          <div className="faq-section__visual">
            <div className="faq-section__composition">
              <div className="faq-section__rect faq-section__rect--top-left"></div>
              <div className="faq-section__rect faq-section__rect--bottom-right"></div>

              <div className="faq-section__img-box faq-section__img-box--center">
                <img src={imgGreyTop} alt="Woman in grey" />
              </div>
              <div className="faq-section__img-box faq-section__img-box--top-right">
                <img src={imgLongHair} alt="Woman long hair" />
              </div>
              <div className="faq-section__img-box faq-section__img-box--bottom-left">
                <img src={imgReadBook} alt="Woman reading book" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
