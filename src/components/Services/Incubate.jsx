import React from 'react'

import img1 from '../../assets/Main/Incubator.webp'

const Incubate = () => {
  return (
    <div className=" w-[100%] flex items-center flex-col relative justify-center p-4 py-8 bg-main text-white">
      <div className='lg:w-[70%]'>
        <div className='flex flex-col items-center text-center mb-6'>
          <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'>Incubator &</h1>
          <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'>Accelerate</h1>
        </div>
        <div className='mt-2 text-center text-white text-sm'>
          <p className='text-sm'>Our Incubator & Accelerate program is designed to guide budding startups and visionary entrepreneurs on their journey from ideation to execution. We understand that great ideas need the right support to flourish, which is why we provide a nurturing environment that combines mentorship, resources, and networking opportunities. Whether you're developing a cutting-edge tech solution or disrupting an industry, our program is tailored to help you navigate challenges, refine your strategy, and turn your vision into a thriving reality.</p>
        </div>
        <div className='mt-8 text-center text-white text-sm'>
          <p className='text-sm'>In the fast-paced world of tech startups, acceleration is crucial. Through our Accelerate track, we offer a curated roadmap that propels your startup forward. Benefit from expert insights, validation of your business model, and access to a network of investors and industry partners. With a focus on scalability and sustainable growth, we provide the tools and guidance needed to take your startup to the next level. Whether you're seeking funding or strategic partnerships, Accelerate paves the way for rapid and meaningful progress.</p>
        </div>
        <div className='mt-8 text-center text-white text-sm'>
          <p className='text-sm'>MEMOI AFRICA's Incubator & Accelerate program isn't just about launching startups – it's about fostering a culture of innovation, resilience, and success. Join us on this transformative journey and let us be your partner in shaping the future of tech entrepreneurship.</p>
        </div>
      </div>
      <img className='transform mt-16 lg:w-[70%] h-[400px] rounded-3xl img' src={img1} alt="" />
    </div>
  )
}

export default Incubate