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
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur tenetur earum et aliquam fuga quis neque doloribus molestiae repudiandae odio, distinctio, enim placeat quam eum laudantium doloremque impedit facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio totam quas, nam quisquam repellendus dolor expedita odit sapiente, impedit pariatur ut consequatur praesentium inventore eligendi sit hic rerum eius repudiandae.</p>
        </div>
        <div className='mt-4 text-[#130395] lg:text-sm text-sm'>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis aspernatur tenetur earum et aliquam fuga quis neque doloribus molestiae repudiandae odio, distinctio, enim placeat quam eum laudantium doloremque impedit facilis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio totam quas, nam quisquam repellendus dolor expedita odit sapiente, impedit pariatur ut consequatur praesentium inventore eligendi sit hic rerum eius repudiandae.</p>
        </div>
      </div>
    </div>
  )
}

export default Hackathon