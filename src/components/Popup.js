import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const closePopup = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button onClick={toggleVisibility} className=" p-[5px_10px] border border-solid border-[var(--yellow)] rounded-[16px] text-[var(--yellow)]">
        Open
      </button>
      {isVisible && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-50 absolute inset-0" onClick={toggleVisibility}></div>
          <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg z-10">
          <p>Lucero Numerology</p>
            <button className="absolute top-0 right-0 p-4" onClick={closePopup}>&times;</button>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img/></SwiperSlide>
      <SwiperSlide><img/></SwiperSlide>
      <SwiperSlide><img/></SwiperSlide>
      <SwiperSlide><img/></SwiperSlide>
      <SwiperSlide><img/></SwiperSlide>
      <a href='https://lucero-numerology.ru/'>https://lucero-numerology.ru/</a>
    </Swiper>

            <button onClick={closePopup} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-[16px] mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
