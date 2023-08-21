import React from 'react'
import { Link } from 'react-scroll';
// images
import img from '../assets/Main/HeroImage.png'

// animation
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';


// mui
import { Button } from '@mui/material'
import { ArrowForwardIosOutlined, ArrowForward } from '@mui/icons-material'

const Hero = () => {
    return (
        <div className=' w-[100%] ' id='Home'>
            {/* hero header */}
            <div className='flex flex-col items-center justify-center lg:px-16 bg-main py-6 p-8'>
                <div className='grid lg:grid-cols-2 items-center lg:justify-around justify-center  gap-3 '>
                    <div className='flex flex-col gap-3 text-white lg:items-start items-center '>
                        <Fade top><h1 className='font-extrabold lg:text-8xl md:text-4xl text-4xl '>MEMOI</h1></Fade>
                        <Fade bottom><h1 className='font-extrabold lg:text-8xl md:text-4xl text-4xl '>VENTURE</h1></Fade>
                        <LightSpeed top><p className='ease-in duration-300 lg:text-left text-center text-gray-300 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nam nobis natus dolore earum a magni voluptates officiis vitae rem eum sit, quisquam repellendus numquam laudantium deserunt, doloribus consectetur labore?</p></LightSpeed>
                        {/* button */}
                        <Button variant='outlined hero-btn'><Link to='About'>Get Started <ArrowForward /> </Link></Button>
                    </div>
                    {/* hero image */}
                    <Zoom right>
                        <img className='rounded-xl hidden lg:block  w-[100%]' src={img} alt="" />
                    </Zoom>
                </div>
            </div>
            {/* progress counter */}
            <div className='flex items-center justify-around mt-1 py-3 w-full bg-main text-white px-8'>
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold lg:text-6xl overflow-hidden text-white'>10+</h1>
                    <p className='lg:text-lg text-sm font-semibold'>Services</p>
                    {/* progress bar */}
                    <div className='service-progress rounded-full'></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold lg:text-6xl overflow-hidden text-white'>10+</h1>
                    <p className='lg:text-lg text-sm font-semibold'>Projects</p>
                    {/* progress bar */}
                    <div className='service-progress rounded-full'></div>
                </div>
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold lg:text-6xl overflow-hidden text-white'>100%</h1>
                    <p className='lg:text-lg text-sm font-semibold'>Bootcamp Success</p>
                    {/* progress bar */}
                    <div className='bootcamp-progress rounded-full'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero