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
                    <Fade top><h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-[#130395]'>Our Services</h1></Fade>
                    <div className=' text-center mt-3 text-[#130395]'>
                        <p className='text-sm font-semibold text-[#130395] '>We offer a number of programming but the three major programming includes :    </p>
                    </div>
                </div>
                {/* services cards */}
                <div className='flex lg:flex-row flex-col items-center justify-center gap-3 mt-4 lg:pb-8 pb-0'>
                    <Fade cascade damping={0.2}>
                        <div className='p-4 flex flex-col items-center text-center text-[#130395] border lg:translate-y-28 hover:shadow-black/40 shadow-xl h-[500px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon1} alt="" />
                            <h1 className='font-extrabold text-2xl'>UNIVERSITY CHAPTERS</h1>
                            <p className='mt-2 ease-in duration-300 text-[#130395] text-sm font-semibold'>One of the cornerstones of MEMOI AFRICA is our dedicated focus on nurturing the next generation of tech leaders through our University Chapters program. We recognize that the journey of innovation begins early, and that's why we've established partnerships with universities across the continent. These chapters serve as hubs of learning, collaboration, and inspiration, where students can dive into the world of Blockchain, AI, and emerging technologies.</p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#130395] border lg:translate-y-14 hover:shadow-black/40 shadow-xl h-[500px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[100px] object-cover' src={icon2} alt="" />
                            <h1 className='font-extrabold text-2xl'>HACKATHON AS A SERVICE</h1>
                            <p className='mt-2 ease-in duration-300 text-[#130395] text-sm font-semibold'>Introducing our innovative "Hackathon as a Service" – a dynamic offering designed to fuel creativity, foster innovation, and accelerate problem-solving in the tech realm. Hackathons have long been recognized as incubators of groundbreaking ideas, and at MEMOI AFRICA, we take them to the next level. </p>
                        </div>
                        <div className='p-4 flex flex-col items-center text-center text-[#130395] border  hover:shadow-black/40 shadow-xl h-[500px] w-[300px] rounded-3xl ease-out duration-300'>
                            {/* icon */}
                            <img className='mb-2 h-[100px] w-[200px] object-cover' src={icon3} alt="" />
                            <h1 className='font-extrabold text-2xl'>BOOTCKATHON</h1>
                            <h1 className='text-xl text-extrabold'>Bootcamp * Hackathon</h1>
                            <p className='mt-2 ease-in duration-300 text-[#130395] text-sm font-semibold'>Experience the best of both worlds with our unique Bootckathon – the fusion of a bootcamp and a hackathon, tailored to supercharge your skills and innovation prowess. Designed to provide a comprehensive learning journey, the Bootckathon takes you from the basics to cutting-edge applications in record time.</p>
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