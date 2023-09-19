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
            <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-3xl text-[#130395]'>Hackathon/Bootcathons</h1>
            {/* <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-[#130395]'>as a Service</h1> */}
          </div>
          {/* <h1 className=' font-semibold lg:text-5xl md:text-4xl text-3xl text-[#130395]'>(HaaS)</h1> */}
        </div>
        <div className='mt-2 text-[#130395] lg:text-sm text-sm'>
          <p className=''>Memoi offers exhilarating hackathons with leading partners bringing together developers and innovators from diverse backgrounds. Memoi helps you get the desired participants, run the program both online & offline from start to finish, including handling all logistics involved anywhere on the African continent.</p>
        </div>
        <div className='mt-4 text-[#130395] lg:text-sm text-sm'>
          <p className=''>On the other hand, this program aims to support developers in their growth in blockchain and AI technologies through a systematic approach to learning and project development. We emphasize hands-on participation fostering growth in these rapidly advancing technologies.</p>
        </div>
        {/* <div className='mt-4 text-[#130395] lg:text-sm text-sm'>
          <p className=''>With Hackathon as a Service, innovation becomes more than a concept – it becomes a tangible journey where challenges turn into opportunities and ideas materialize into solutions. Embrace the power of HaaS and join us in reshaping the way innovation is catalyzed and cultivated.</p>
        </div> */}
      </div>
    </div>
  )
}

export default Hackathon