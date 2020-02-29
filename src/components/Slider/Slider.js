import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import './Slider.scss';

const params = {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  shouldSwiperUpdate: true,
}

export default function Slider({photoGallery}) {
  return (
    <div className="slider-wrapper">
      <Swiper {...params}>
        {photoGallery.map(el => {
          return (
            <div
              className="image-wrapper"
              key={el}
            >
              <img
                className="work-image"
                src={el}
                alt="works"
                height="100"
              />
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

Slider.defaultProps = {
  photoGallery: []
}

Slider.propTypes = {
  photoGallery: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
}
