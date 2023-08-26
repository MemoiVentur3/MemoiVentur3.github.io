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
          <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur tenetur earum et aliquam fuga quis neque doloribus molestiae repudiandae odio, distinctio, enim placeat quam eum laudantium doloremque impedit facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio totam quas, nam quisquam repellendus dolor expedita odit sapiente, impedit pariatur ut consequatur praesentium inventore eligendi sit hic rerum eius repudiandae.</p>
        </div>
        <div className='mt-4 text-white lg:text-sm text-sm'>
          <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur tenetur earum et aliquam fuga quis neque doloribus molestiae repudiandae odio, distinctio, enim placeat quam eum laudantium doloremque impedit facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio totam quas, nam quisquam repellendus dolor expedita odit sapiente, impedit pariatur ut consequatur praesentium inventore eligendi sit hic rerum eius repudiandae.</p>
        </div>
      </div>
      {/* image */}
      <img className='lg:h-[400px] lg:w-[400px] rounded-3xl img' src={img} alt="" />
    </div>
  )
}

export default Bootckathon