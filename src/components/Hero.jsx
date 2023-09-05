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
                        <LightSpeed top><p className='ease-in duration-300 lg:text-left text-center text-gray-300 text-sm'>Memoi is a community of African developers and founders.
                            Our primary mission is to fuel growth in the areas of Blockchain, AI, IoT and other emerging techs. We empower young builders to create practical solutions to real-world challenges and make global impact.
                        </p></LightSpeed>
                        {/* button */}
                        <div className='grid lg:grid-cols-2 gap-2 w-full'>
                            <Button variant='outlined hero-btn'><Link to='https://nas.io/memoi-africa'>Developers<ArrowForward /> </Link></Button>
                            <Button variant='outlined hero-btn'><Link to='About'>Partners <ArrowForward /> </Link></Button>
                        </div>
                        {/* image buttons */}
                        {/* <div className='flex items-start w-[50%]'>
                            <img className='w-[250px]' src={devbtn} alt="" />
                            <img className='w-[250px]' src={partnersbtn} alt="" />
                        </div> */}
                    </div>
                    {/* hero image */}
                    <Zoom right>
                        <div className='hidden lg:block  hero-img-holder h-[450px] w-[450px]'></div>
                        {/* <img className='rounded-xl hidden lg:block w-[100%] ' src={img} alt="" /> */}
                    </Zoom>
                </div>
            </div>
            {/* progress counter */}
            <div className='flex items-center justify-evenly mt-1 py-10 w-full bg-[#130395] text-white lg:px-8 px-2'>
                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold lg:text-[60px] text-md md:text-4xl text-white'>5,000+</h1>
                    <p className='lg:text-lg text-xs flex lg:flex-row flex-col gap-1'><span>Developer</span> <span>Community</span></p>
                    {/* progress bar */}
                    <div className='service-progress rounded-full lg:block hidden'></div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold lg:text-[60px] text-md md:text-4xl text-white'>40+</h1>
                    <p className='lg:text-lg text-xs flex lg:flex-row flex-col gap-1'><span>University</span> <span>Partners</span></p>
                    {/* progress bar */}
                    <div className='service-progress rounded-full lg:block hidden'></div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <h1 className='font-bold lg:text-[60px] text-md md:text-4xl text-white'>100%</h1>
                    <p className='lg:text-lg text-xs flex lg:flex-row flex-col gap-1'><span>Project</span> <span>Success</span></p>
                    {/* progress bar */}
                    <div className='bootcamp-progress rounded-full lg:block hidden'></div>
                </div>
            </div>

            <div className="bg-[#130395] py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h1 className="text-center text-xl md:text-4xl font-extrabold leading-8 text-white">
                        Our Partners
                    </h1>
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
                            alt="Transistor"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
                            alt="Reform"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
                            alt="Tuple"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                            alt="SavvyCal"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
                            alt="Statamic"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero