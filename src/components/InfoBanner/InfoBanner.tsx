import React from 'react';
import './InfoBanner.scss';

import co2Icon from '../../assets/icons/co2.svg';
import h2oIcon from '../../assets/icons/h2o.svg';
import energyIcon from '../../assets/icons/energy.svg';

interface ImpactItem {
  id: number;
  icon: string;
  value: string;
  description: string;
}

const IMPACT_DATA: ImpactItem[] = [
  {
    id: 1,
    icon: co2Icon,
    value: '3,927 kg',
    description: 'of CO2 saved',
  },
  {
    id: 2,
    icon: h2oIcon,
    value: '2,546,167 days',
    description: 'of drinking water saved',
  },
  {
    id: 3,
    icon: energyIcon,
    value: '7,321 kWh',
    description: 'of energy saved',
  },
];

export const InfoBanner: React.FC = () => {
  return (
    <section className="info-banner">
      <div className="container">
        <div className="info-banner__wrapper">
          <h2 className="info-banner__title">Our total green impact</h2>

          <div className="info-banner__items">
            {IMPACT_DATA.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="info-banner__item">
                  <div className="info-banner__icon-wrap">
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="info-banner__icon"
                    />
                  </div>
                  <h3 className="info-banner__value">{item.value}</h3>
                  <p className="info-banner__desc">{item.description}</p>
                </div>

                {index < IMPACT_DATA.length - 1 && (
                  <span className="info-banner__divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
