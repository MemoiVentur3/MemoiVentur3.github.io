import React from 'react'
import { Link } from 'react-scroll';
// images
import img from '../assets/Main/HeroImage.webp'
import devbtn from '../assets/Buttons/Dev.png'
import partnersbtn from '../assets/Buttons/partners.png'

// animation
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';


// mui
import { Button } from '@mui/material'
import { ArrowForwardIosOutlined, ArrowForward } from '@mui/icons-material'

const Hero = () => {
    return (
        <div className='' id='Home'>
            {/* hero header */}
            <div className='flex flex-col items-center justify-center lg:px-16 bg-main py-6 p-8 h-[70vh]'>
                <div className='grid lg:grid-cols-2 items-center lg:justify-around justify-center  gap-24 '>
                    <div className='flex flex-col gap-3 text-white lg:items-start items-center '>
                        <Fade top><h1 className='font-extrabold lg:text-9xl md:text-6xl text-6xl'>MEMOI</h1></Fade>
                        <Fade bottom><h1 className='font-extrabold lg:text-9xl md:text-6xl text-6xl '>AFRICA</h1></Fade>
                        <LightSpeed top><p className='ease-in duration-300 lg:text-left text-center text-gray-300 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure nam nobis natus dolore earum a magni voluptates officiis vitae rem eum sit, quisquam repellendus numquam laudantium deserunt, doloribus consectetur labore?</p></LightSpeed>
                        {/* button */}
                        <div className='grid lg:grid-cols-2 gap-2 w-full'>
                            <Button variant='outlined hero-btn'><Link to='About'>Developers<ArrowForward /> </Link></Button>
                            <Button variant='outlined hero-btn'><Link to='About'>Partners <ArrowForward /> </Link></Button>
                        </div>
                        {/* image buttons */}
                        {/* <div className='flex items-start w-[50%]'>
                            <img className='w-[250px]' src={devbtn} alt="" />
                            <img className='w-[250px]' src={partnersbtn} alt="" />
                        </div> */}
                    </div>
                    {/* hero image */}
                    <Zoom  right>
                        <div className='hidden lg:block  hero-img-holder h-[450px] w-[450px]'></div>
                        {/* <img className='rounded-xl hidden lg:block w-[100%] ' src={img} alt="" /> */}
                    </Zoom>
                </div>
            </div>
            {/* progress counter */}
            <div className='flex items-center justify-evenly mt-1 py-10 w-full bg-[#130395] text-white lg:px-8 px-2'>
                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold lg:text-[60px] text-4xl text-white'>10+</h1>
                    <p className='lg:text-lg text-xs '>Services</p>
                    {/* progress bar */}
                    <div className='service-progress rounded-full lg:block hidden'></div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                <h1 className='font-bold lg:text-[60px] text-4xl text-white'>10+</h1>
                    <p className='lg:text-lg text-xs '>Projects</p>
                    {/* progress bar */}
                    <div className='service-progress rounded-full lg:block hidden'></div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold lg:text-[60px] text-4xl text-white'>100%</h1>
                    <p className='lg:text-lg text-xs flex lg:flex-row flex-col'><span>Bootcamp</span> <span>Success</span></p>
                    {/* progress bar */}
                    <div className='bootcamp-progress rounded-full lg:block hidden'></div>
                </div>
            </div>
        </div>
    )
}

export default Hero