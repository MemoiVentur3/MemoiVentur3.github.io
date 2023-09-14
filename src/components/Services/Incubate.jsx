import React from 'react'

import img1 from '../../assets/Main/Incubator.webp'

const Incubate = () => {
  return (
    <div className=" w-[100%] flex items-center flex-col relative justify-center p-4 py-8 bg-main text-white">
      <div className='lg:w-[70%]'>
        <div className='flex flex-col items-center text-center mb-6'>
          <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'>What We Offer</h1>
          {/* <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-white'></h1> */}
        </div>
        <div className='mt-2 text-center text-white text-sm'>
          <p className='text-sm'>Memoi is more than just a developer community.  It's a movement that's propelling toward a more equitable and innovative future.
Partner with us in making a lasting impact that reaches far beyond the confines of code and algorithms.</p>
        </div>
        
      </div>
      <img className='transform mt-16 lg:w-[70%] h-[400px] rounded-3xl img' src={img1} alt="" />
    </div>
  )
}

export default Incubate