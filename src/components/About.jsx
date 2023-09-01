import React from 'react'
import Fade from 'react-reveal/Fade';

// images
// import img1 from '../assets/Real-Estate-2 (1).webp'
import img2 from '../assets//Main/AboutImage.webp'

const About = () => {
    return (
        <div className='bg-white w-full' id='About'>
            <div className='flex items-center flex-col p-8 '>
                <div className='flex flex-col items-center justify-center py-8 lg:w-[80%]'>
                    <Fade top><h1 className='font-extrabold lg:text-6xl md:text-5xl text-4xl text-[#130395]'>About</h1></Fade>
                    <Fade bottom><div className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-[#130395] flex items-center gap-2'> <h1>Memoi</h1> <h1>Africa</h1></div></Fade>
                    <div className=' text-center mt-3 text-[#130395]'>
                        <p className='ease-in duration-300 text-[#130395] text-sm font-semibold '>At MEMOI AFRICA, we are more than just a community – we are a catalyst for change, a driving force that propels African innovation to new heights. Our platform serves as a nurturing ground for tech enthusiasts, developers, and visionary founders to converge, collaborate, and cultivate their ideas. With a strong emphasis on Blockchain, AI, and other emerging technologies, we believe in harnessing the immense potential of these domains to redefine industries, uplift economies, and solve pressing societal challenges. Rooted in the rich tapestry of Africa's diverse cultures and experiences, MEMOI AFRICA celebrates the continent's unique perspective while fostering a global outlook. Our mission is to empower, educate, and elevate individuals and businesses, creating a ripple effect that resonates far beyond the boundaries of technology. As we unite innovation with passion, MEMOI AFRICA stands as a beacon of progress, poised to leave an indelible legacy in the ever-evolving landscape of tech innovation.</p>
                    </div>
                </div>
                {/* images */}
                <div className='w-[90%] flex lg:flex-row flex-col gap-4 items-center justify-center' >
                    <img className='img ' src={img2} alt="" />
                    {/* <img className='img box-shadow lg:h-[400px] lg:w-[300px] lg:mt-24 rounded-3xl ' src={img2} alt="" /> */}
                </div>
                <div className="bg-white py-16 sm:py-24">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
                            Trusted by the world’s most innovative teams
                        </h2>
                        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                            <img
                                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                                src="https://pbs.twimg.com/profile_images/1646424218979143680/jlWD9pcr_400x400.png"
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
        </div>
    )
}

export default About