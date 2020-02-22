import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './Slider.scss';

const Slider = ({photoGallery = []}) => {
  const params = {
    effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination'
      },
      shouldSwiperUpdate: true
  }
  return (
    <Swiper {...params}>
      {photoGallery.map((el) => {
        return (
          <div className="image-wrapper" key={el}>
            <img className="work-image" src={el} alt='works' height="100" />
          </div>
        )
      })}
    </Swiper>
  );
}

export default Slider;
