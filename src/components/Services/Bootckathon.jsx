import React from 'react'

import img from '../../assets/Main/Bootckathon.png'

const Bootckathon = () => {
  return (
    <div className='flex lg:flex-row flex-col items-center justify-center gap-6 bg-main text-white lg:p-16 p-6'>
      <div className='flex flex-col '>
        <div className='flex flex-col'>
          <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-white'>Bootckathon</h1>
          <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-white'>(Bootcamp * Hackathon)</h1>
        </div>
        <div className='mt-2 text-gray-300 font-semibold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur tenetur earum et aliquam fuga quis neque doloribus molestiae repudiandae odio, distinctio, enim placeat quam eum laudantium doloremque impedit facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio totam quas, nam quisquam repellendus dolor expedita odit sapiente, impedit pariatur ut consequatur praesentium inventore eligendi sit hic rerum eius repudiandae.
        </div>
        <div className='mt-6 text-gray-300 font-semibold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur tenetur earum et aliquam fuga quis neque doloribus molestiae repudiandae odio, distinctio, enim placeat quam eum laudantium doloremque impedit facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio totam quas, nam quisquam repellendus dolor expedita odit sapiente, impedit pariatur ut consequatur praesentium inventore eligendi sit hic rerum eius repudiandae.
        </div>
      </div>
      {/* image */}
      <img className='lg:h-[400px] lg:w-[300px] rounded-3xl img' src={img} alt="" />
    </div>
  )
}

export default Bootckathon