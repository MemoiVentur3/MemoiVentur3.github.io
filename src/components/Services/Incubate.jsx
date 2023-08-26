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
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi hic iure, libero ipsam provident animi aperiam cupiditate fugit itaque eum fuga eos dolores voluptas aut odit. Quasi, amet commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium sapiente optio quisquam deserunt laborum consequatur, explicabo vel sint consectetur asperiores ducimus! Nostrum, minus voluptatum? Facilis et vel nobis dolorum.</p>
        </div>
      </div>
      <img className='transform mt-16 lg:w-[70%] h-[400px] rounded-3xl img' src={img1} alt="" />
    </div>
  )
}

export default Incubate