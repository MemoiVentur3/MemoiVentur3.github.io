import React from 'react'

import img from '../../assets/Main/Bootckathon.webp'

const Bootckathon = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-center gap-6 bg-main text-white lg:p-16 p-6'>
      <div className='flex flex-col '>
        <div className='flex flex-col'>
          <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'>Bootckathon</h1>
          <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'>(Bootcamp + Hackathon)</h1>
        </div>
        <div className='mt-2 text-white lg:text-sm text-sm'>
          <p className=' '>In the world of tech education, where learning and application often stand apart, the Bootckathon emerges as a unique fusion of knowledge and action. This transformative experience begins with a comprehensive bootcamp that equips you with the fundamentals and advanced concepts of Blockchain, AI, and emerging technologies. Through interactive workshops, expert-led sessions, and hands-on exercises, you'll build a strong foundation that sets the stage for what's to come.</p>
        </div>
        <div className='mt-2 text-white lg:text-sm text-sm'>
          <p className=' '>Once you've absorbed the knowledge, it's time to unleash your innovation in the hackathon phase. This is where theory meets practice, and ideas take shape as tangible solutions. Collaborate with diverse minds, tap into your creativity, and embark on a coding journey that's fueled by mentorship and camaraderie. As you work alongside like-minded participants and industry experts, you'll refine your ideas, overcome challenges, and create projects that have the potential to make a meaningful impact.</p>
        </div>
        <div className='mt-4 text-white lg:text-sm text-sm'>
          <p className=' '>The Bootckathon isn't just a program – it's a catalyst that propels you from a curious learner to a tech innovator. It bridges the gap between theory and application, learning and doing, and empowers you to shape the future with your knowledge and skills. Embrace the Bootckathon, and embark on a journey that transforms you into a well-rounded, capable, and visionary contributor to the world of tech innovation.</p>
        </div>
      </div>
      {/* image */}
      <img className='lg:h-[400px] lg:w-[400px] rounded-3xl img' src={img} alt="" />
    </div>
  )
}

export default Bootckathon