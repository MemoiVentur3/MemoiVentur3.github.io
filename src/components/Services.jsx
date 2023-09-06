import React from 'react'
import { Fade } from "react-awesome-reveal";
// import Fade from 'react-reveal/Fade';

// icons
import icon1 from '../assets/Main/University.webp'
import icon2 from '../assets/Main/HackathonIcon.webp'
import icon3 from '../assets/Main/BootcampIcon.webp'
import viewMore from '../assets/Buttons/View More SertviceButton.webp'
import { Link } from 'react-router-dom';
// mui
import { Button } from '@mui/material'

const Services = () => {
    return (
        <div className='bg-white w-full flex flex-col items-center justify-center mb-8' id='Service'>
            <div className='flex items-center flex-col p-8 '>
                <div className='flex flex-col items-center justify-center py-8 w-[80%]'>
                    <Fade top><h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-[#130395]'>What we Offer</h1></Fade>
                    <div className=' text-center mt-3 text-[#130395]'>

                    </div>
                </div>
                {/* services cards */}
                <div className='flex lg:flex-row flex-col items-center justify-center gap-3 mt-4 lg:pb-8 pb-0'>
                    <Fade cascade damping={0.2}>
                        <div className='p-4 flex flex-col items-center text-center text-[#130395] border lg:translate-y-18 hover:shadow-black/40 shadow-xl h-[500px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon1} alt="" />
                            <h1 className='font-extrabold text-2xl'>UNIVERSITY CHAPTERS</h1>
                            <p className='mt-2 ease-in duration-300 text-[#130395] text-sm font-semibold'>Discover the potential of an exciting collaboration with us as we work together to expand your footprint within Africa's thriving tech ecosystem. Our extensive network encompasses partnerships with 40+ prestigious African Universities, providing us with invaluable insights and capabilities in the realm of community-building, campus tours, and ambassador programs.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#130395] border lg:translate-y-14 hover:shadow-black/40 shadow-xl h-[500px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon2} alt="" />
                            <h1 className='font-extrabold text-2xl'>Memoi Talent Hunt</h1>
                            <p className='mt-2 ease-in duration-300 text-[#130395] text-sm font-semibold'>Hire from the highest quality talent network in Africa.  Gain direct access to 1000+ technical African talents on demand to work full-time/part-time on a milestone basis  Effortlessly find the right tech talent for your projects with Memoi Talent.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#130395] border lg:translate-y-14 hover:shadow-black/40 shadow-xl h-[500px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon1} alt="" />
                            <h1 className='font-extrabold text-2xl'>Memoi University</h1>
                            <p className='mt-2 ease-in duration-300 text-[#130395] text-sm font-semibold'>Memoi University offers intensive bootcamps, courses, and workshops focused on blockchain, led by industry experts. Whether you're a beginner or an experienced developer, our programs provide practical knowledge and hands-on experience with the latest technologies. We empower developers to excel in the ever-evolving tech landscape.
                            </p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#130395] border hover:shadow-black/40 shadow-xl h-[500px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[200px] object-cover' src={icon3} alt="" />
                            <h1 className='font-extrabold text-2xl'>BOOTCKATHON</h1>
                            <h1 className='text-xl text-extrabold'>Bootcamp * Hackathon</h1>
                            <p className='mt-2 ease-in duration-300 text-[#130395] text-sm font-semibold'>
                                Memoi hosts dynamic hackathons with top partners, uniting diverse developers and innovators. Together, they tackle real-world challenges in a competitive, high-energy setting. Memoi handles everything, from participant recruitment to logistics, for both online and offline programs across Africa.
                            </p>
                        </div>
                    </Fade>
                </div>
            </div>
            <Link to='/service'>
                <img src={viewMore} className='lg:mt-16 mt-8 cursor-pointer w-[250px]' alt="" />
            </Link>
            {/* <Button className='outlined-lg-btn lg:mt-16 mt-8'>View More Services</Button> */}
            {/* <button className='mt-16 border-2 border-[#130395]  px-16 py-2 rounded-full text-[#130395] '>Join Community</button> */}
        </div>
    )
}

export default Services