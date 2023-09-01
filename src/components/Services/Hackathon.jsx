import React from 'react'
import img from '../../assets/Main/HackathonImage.webp'


const Hackathon = () => {
  return (
    <div className='flex lg:flex-row flex-col-reverse items-center justify-center gap-6  text-[#130395] lg:p-16 p-6'>
      {/* image */}
      <img className='h-[400px] w-[300px] rounded-3xl img' src={img} alt="" />
      <div className='flex flex-col '>
        <div className='flex flex-col'>
          <div className='flex lg:flex-row flex-col lg:gap-4'>
            <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-[#130395]'>Hackathon</h1>
            <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-[#130395]'>as a Service</h1>
          </div>
          <h1 className=' font-semibold lg:text-5xl md:text-4xl text-3xl text-[#130395]'>(HaaS)</h1>
        </div>
        <div className='mt-2 text-[#130395] lg:text-sm text-sm'>
          <p className=''>Imagine a service that takes the essence of hackathons – rapid ideation, dynamic collaboration, and creative problem-solving – and brings it to your doorstep. Hackathon as a Service (HaaS) does just that. Whether you're an organization seeking novel solutions or an individual looking to harness your skills, HaaS redefines how innovation takes shape. We handle the logistics, curate the challenges, and provide the platform, allowing you to focus on unleashing your creativity and pushing the boundaries of what's possible.</p>
        </div>
        <div className='mt-4 text-[#130395] lg:text-sm text-sm'>
          <p className=''>HaaS isn't just an event; it's an experience that taps into the collective potential of minds from various backgrounds. Through structured problem-solving and competition, HaaS uncovers hidden talents, fosters cross-disciplinary collaboration, and sparks unconventional ideas. With mentorship from industry experts, you'll navigate challenges with insights that elevate your solutions. Whether you're a seasoned coder or a visionary thinker, HaaS provides a platform to showcase your ingenuity and drive innovation that leaves a lasting impact.</p>
        </div>
        <div className='mt-4 text-[#130395] lg:text-sm text-sm'>
          <p className=''>With Hackathon as a Service, innovation becomes more than a concept – it becomes a tangible journey where challenges turn into opportunities and ideas materialize into solutions. Embrace the power of HaaS and join us in reshaping the way innovation is catalyzed and cultivated.</p>
        </div>
      </div>
    </div>
  )
}

export default Hackathon