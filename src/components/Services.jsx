import React from 'react'
import { Fade } from "react-awesome-reveal";
// import Fade from 'react-reveal/Fade';

// icons
import icon1 from '../assets/Main/University.webp'
import icon2 from '../assets/Main/HackathonIcon.webp'
import icon3 from '../assets/Main/BootcampIcon.webp'
import viewMore from '../assets/Buttons/View More SertviceButton.webp'

// mui
import { Button } from '@mui/material'

const Services = () => {
    return (
        <div className='bg-white w-full flex flex-col items-center justify-center mb-8' id='Service'>
            <div className='flex items-center flex-col p-8 '>
                <div className='flex flex-col items-center justify-center py-8 w-[80%]'>
                    <Fade top><h1 className='font-extrabold lg:text-5xl md:text-4xl text-3xl text-[#1E3A8A]'>Our Services</h1></Fade>
                    <div className=' text-center mt-3 text-[#1E3A8A]'>
                        <p className='text-sm font-semibold text-[#1E3A8A] '>We offer a number of programming but the three major programming includes :    </p>
                    </div>
                </div>
                {/* services cards */}
                <div className='flex lg:flex-row flex-col items-center justify-center gap-3 mt-4 lg:pb-8 pb-0'>
                    <Fade cascade damping={0.2}>
                        <div className='p-4 flex flex-col items-center text-center text-[#1E3A8A] border lg:translate-y-28 hover:shadow-black/40 shadow-xl h-[400px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon1} alt="" />
                            <h1 className='service-headers font-extrabold text-xl'>UNIVERSITY CHAPTERS</h1>
                            <p className='mt-2 ease-in duration-300 text-[#1E3A8A] text-xs font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum inventore facere commodi ratione, nesciunt porro. Molestias quasi, id consectetur ducimus officia, pariatur incidunt, vitae reprehenderit quis repellat distinctio perspiciatis.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#1E3A8A] border lg:translate-y-14 hover:shadow-black/40 shadow-xl h-[400px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon2} alt="" />
                            <h1 className='service-headers font-extrabold text-xl'>HACKATHON AS A SERVICE</h1>
                            <p className='mt-2 ease-in duration-300 text-[#1E3A8A] text-xs font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum inventore facere commodi ratione, nesciunt porro. Molestias quasi, id consectetur ducimus officia, pariatur incidunt, vitae reprehenderit quis repellat distinctio perspiciatis.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#1E3A8A] border  hover:shadow-black/40 shadow-xl h-[400px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[200px] object-cover' src={icon3} alt="" />
                            <h1 className='service-headers font-extrabold text-xl'>BOOTCKATHON</h1>
                            <h1 className='service-headers text-bold'>Bootcamp * Hackathon</h1>
                            <p className='mt-2 ease-in duration-300 text-[#1E3A8A] text-xs font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum inventore facere commodi ratione, nesciunt porro. Molestias quasi, id consectetur ducimus officia, pariatur incidunt, vitae reprehenderit quis repellat distinctio perspiciatis.</p>
                        </div>
                    </Fade>
                </div>
            </div>
            <img src={viewMore} className='lg:mt-16 mt-8 cursor-pointer w-[250px]' alt="" />
            {/* <Button className='outlined-lg-btn lg:mt-16 mt-8'>View More Services</Button> */}
            {/* <button className='mt-16 border-2 border-[#1E3A8A]  px-16 py-2 rounded-full text-[#1E3A8A] '>Join Community</button> */}
        </div>
    )
}

export default Services