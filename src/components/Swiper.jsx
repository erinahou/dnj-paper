
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import stackOfPaper from '../assets/images/dnj_paperStack@3x.png'

export default function App() {
  return (
    <>
      <Swiper
        speed={1} // Parameter to disable swiping transition. Hacky way.
        pagination={{
          type: 'fraction',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper twelve-col-first-four label"
      >
        <SwiperSlide>
          <img src={stackOfPaper} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={stackOfPaper} alt="" />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

/* Referece: https://codesandbox.io/p/devbox/swiper-react-pagination-fraction-jt6zlg?file=%2Fsrc%2Fstyles.css%3A24%2C1-34%2C1 */
