import React from 'react'
import UniversityData from './Data/UniversityData'
import uniImage from '../../assets/Main/UniversityChapters.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const UniversityChapters = () => {
  return (
    <div className=" w-[100%]  p-4 py-8">
      <div className='flex flex-col items-center text-center mb-6'>
        <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-[#1E3A8A]'>University</h1>
        <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-[#1E3A8A]'>Chapters</h1>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        //  freeMode = {true}
        // freeModeMomentum={false}
        // reverseDirection={true}
        direction='horizontal'
        // loopFillGroupWithBlank={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
          dot: true,
        }}
        //  navigation = {true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}

        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 5 },
          480: { slidesPerView: 1, spaceBetween: 5 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          1024: { slidesPerView: 3, spaceBetween: 50 },
        }}
        //  navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-[90%] p-8 mx-8 university-service-container z-50"
      >
        {UniversityData.map((data, ind) => (
          <SwiperSlide key={data.id} style={{ width: '200px' }} className='w-max mt-8 flex flex-col items-center text-white py-8 -z-50'>
            <div className='rounded-3xl mb-8 bg-main  -z-50 relative'>
              <div className='university-service-icon transform -translate-y-6 -translate-x-6 absolute h-[70px] w-[70px] border-4 border-[#1E3A8A] flex items-center justify-center rounded-full bg-white'>
                { data.icon }
              </div>
              <div className='flex flex-col items-center justify-center gap-2 shadow-2xl w-full rounded-3xl p-4'>
                <h1 className='text-xl font-bold'>{data.header}</h1>
                <p className='text-gray-300 text-sm font-semibold'>{data.writeup}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      <div className='flex flex-col items-center text-center mt-6'>
        <img className='rounded-3xl lg:h-[500px] lg:w-[80%] self-center img' src={uniImage} alt="" />
      </div>
    </div>
  )
}

export default UniversityChapters