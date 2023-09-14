import React from 'react'

import img from '../../assets/Main/Bootckathon.webp'

const Bootckathon = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-center gap-6 bg-main text-white lg:p-16 p-6'>
      <div className='flex flex-col '>
        <div className='flex flex-col'>
          <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'>Memoi Talent</h1>
          {/* <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'>(Bootcamp + Hackathon)</h1> */}
        </div>
        <div className='mt-2 text-white lg:text-sm text-sm'>
          <p className=' '>At Memoi, we understand that finding the right talent for your projects is essential for success. That's why we're excited to introduce Memoi Talent – your gateway to a curated pool of skilled and vetted developers from our over 5,000 community database,  who are ready to join your team. By hiring from our already existing pool of developers, we save you 35% time and money. With our rigorous selection process and commitment to quality, we're here to connect you with top-tier experts in Web3, AI, Blockchain, frontend development, backend engineers, product designers, product managers, UI/UX, Cybersecurity engineers, AWS engineers who can elevate your projects to new heights.</p>
        </div>
        
        {/* <div className='mt-4 text-white lg:text-sm text-sm'>
          <p className=' '>The Bootckathon isn't just a program – it's a catalyst that propels you from a curious learner to a tech innovator. It bridges the gap between theory and application, learning and doing, and empowers you to shape the future with your knowledge and skills. Embrace the Bootckathon, and embark on a journey that transforms you into a well-rounded, capable, and visionary contributor to the world of tech innovation.</p>
        </div> */}
      </div>
      {/* image */}
      <img className='lg:h-[400px] lg:w-[400px] rounded-3xl img' src={img} alt="" />
    </div>
  )
}

export default Bootckathon