import React from 'react'
import { Fade } from "react-awesome-reveal";

// icons
import icon1 from '../assets/Main/University.png'
import icon2 from '../assets/Main/HackathonIcon.png'
import icon3 from '../assets/Main/BootcampIcon.jpg'

// mui
import { Button } from '@mui/material'

const Services = () => {
    return (

        <div className='bg-white w-full flex flex-col items-center justify-center mb-8' id='Service'>
            <div className='flex items-center flex-col p-8 '>
                <div className='flex flex-col items-center justify-center py-8 w-[80%]'>
                    <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-[#1E3A8A]'>Our Services</h1>
                    <div className=' text-center mt-3 text-[#1E3A8A]'>
                        <p className='ease-in duration-300 text-gray-500 font-semibold'>We offer a number of programming but the three major programming includes</p>
                    </div>
                </div>
                {/* services cards */}
                <div className='flex lg:flex-row flex-col items-center justify-center gap-3 mt-4 pb-8'>
                    <Fade cascade damping={0.2}>
                        <div className='p-4 flex flex-col items-center text-center text-[#1E3A8A] border lg:translate-y-28 hover:shadow-black/40 shadow-xl h-[400px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon1} alt="" />
                            <h1 className='font-bold text-xl'>UNIVERSITY CHAPTERS</h1>
                            <p className='mt-2 ease-in duration-300 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum inventore facere commodi ratione, nesciunt porro. Molestias quasi, id consectetur ducimus officia, pariatur incidunt, vitae reprehenderit quis repellat distinctio perspiciatis.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#1E3A8A] border lg:translate-y-14 hover:shadow-black/40 shadow-xl h-[400px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon2} alt="" />
                            <h1 className='font-bold text-xl'>HACKATHON AS A SERVICE</h1>
                            <p className='mt-2 ease-in duration-300 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum inventore facere commodi ratione, nesciunt porro. Molestias quasi, id consectetur ducimus officia, pariatur incidunt, vitae reprehenderit quis repellat distinctio perspiciatis.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#1E3A8A] border  hover:shadow-black/40 shadow-xl h-[400px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[200px] object-cover' src={icon3} alt="" />
                            <h1 className='font-bold text-xl'>BOOTCKATHON</h1>
                            <h1 className='font-semibold text-base'>Bootcamp * Hackathon</h1>
                            <p className='mt-2 ease-in duration-300 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ipsum inventore facere commodi ratione, nesciunt porro. Molestias quasi, id consectetur ducimus officia, pariatur incidunt, vitae reprehenderit quis repellat distinctio perspiciatis.</p>
                        </div>
                    </Fade>
                </div>
            </div>
            <Button className='outlined-lg-btn mt-16'>View More Services</Button>
            {/* <button className='mt-16 border-2 border-blue-700  px-16 py-2 rounded-full text-[#1E3A8A] font-semibold'>Join Community</button> */}
        </div>
    )
}

export default Services