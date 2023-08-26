import React from 'react'
import TeamsData from './TeamsData'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Team = () => {
    return (
        <div className=" w-[100%] bg-main p-4 py-8">
            <div className='flex flex-col items-center text-center'>
                <h1 className='font-extrabold  lg:text-5xl md:text-4xl text-4xl text-white'>The Team</h1>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={5}
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
                    768: { slidesPerView: 2, spaceBetween: 5 },
                    1024: { slidesPerView: 3, spaceBetween: 5 },
                }}
                //  navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper p-2"
            >
                {TeamsData.map((team, ind) => (
                    <SwiperSlide key={team.id} style={{ width: '300px' }} className='w-max mt-8 mb-8 flex flex-col items-center text-white '>
                        <div className='rounded-3xl mb-8'>
                            <img className='h-[300px] w-[300px] img rounded-t-3xl' src={team.image} alt="" />
                            <div className='flex flex-col bg-[#130395] items-center justify-center gap-2  shadow-black shadow-2xl w-full rounded-b-3xl py-4'>
                                <h1 className='pages-font text-lg text-white'>{team.name}</h1>
                                <p className='pages-font text-white text-sm'>- {team.position} -</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default Team