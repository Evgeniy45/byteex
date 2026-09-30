import './AboutFounderSection.scss';
import { Button } from '../../shared/button/Button';

import imgDress from '../../assets/images/woman-dark-white-dress.webp';
import imgGreyTop from '../../assets/images/woman-grey-short.webp';
import imgHands from '../../assets/images/woman-near-window.webp';

export const AboutFounderSection = () => {
  return (
    <section className="about-founder">
      <div className="container">
        <div className="about-founder__wrapper">
          <div className="about-founder__visual">
            <div className="about-founder__composition">
              <div className="about-founder__img-box about-founder__img-box--main">
                <img
                  src={imgDress}
                  alt="Woman in white dress"
                  className="about-founder__img"
                />
              </div>

              <div className="about-founder__img-box about-founder__img-box--top-left">
                <img
                  src={imgGreyTop}
                  alt="Woman in grey set"
                  className="about-founder__img"
                />
              </div>

              <div className="about-founder__img-box about-founder__img-box--bottom-right">
                <img
                  src={imgHands}
                  alt="Woman at the window"
                  className="about-founder__img"
                />
              </div>
            </div>
          </div>

          <div className="about-founder__content">
            <h2 className="about-founder__title">Be your best self.</h2>

            <div className="about-founder__text">
              <p>
                Hi! My name’s [Insert Name], and I founded [Insert] in ____.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                lobortis sapien facilisis tincidunt pellentesque. In eget ipsum
                et felis finibus consequat.
              </p>
              <p>
                Fusce non nibh luctus, dignissim risus quis, bibendum dolor.
                Donec placerat volutpat ligula, ac consectetur felis varius non.
                Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est.
                Vivamus id arcu congue, faucibus libero nec, placerat ligula.
              </p>
              <p>
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales.
              </p>
              <p>
                Fusce non ante velit. Sed auctor odio eu semper molestie. Nam
                mattis, sapien eget lobortis fringilla, eros ipsum tristique
                tellus, ac convallis urna massa at nibh.
              </p>
              <p>
                Duis non fermentum augue. Vivamus laoreet aliquam risus, sed
                euismod leo aliquam ut. Vivamus in felis eu lacus feugiat
                aliquam nec in sapien.
              </p>
              <p>Cras mattis varius mollis.</p>
            </div>

            <Button
              text=" Customize Your Outfit"
              hasArrow={false}
              className="about-founder__btn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
