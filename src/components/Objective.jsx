import React from 'react'

const Objective = () => {
  return (
    <>
      <div className='grid lg:grid-cols-2 items-center justify-center text-center obj-background p-8 pb-14  h-max'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-white'>Our Vision </h1>
          {/* <h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-white'>Vision</h1> */}
          <p className='mt-6 mb-6 ease-in duration-300 text-white text-lg w-full lg:w-[90%]'>By 2030, our vision is to empower 100,000 developers and founders, fostering a thriving and innovative ecosystem. Through this achievement, we aim to drive growth, facilitate economic and social development, promoting greater tech inclusion in Africa. </p>
        </div>
        
        <div className='flex flex-col items-center justify-center text-center'>
          <h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-white'>Our Objectives</h1>
          <h5 className='font-bold lg:text-4xl md:text-3xl text-2xl text-white'>Inclusion, Innovation, Opportunities</h5>
          <p className='mt-6 ease-in duration-300 text-white text-lg w-full lg:w-[90%]'>We are primarily focused on harnessing the power of blockchain technology and decentralized technologies to foster a community of builders who can make global impact, create real world solutions and are equipped with the right skills to not only consume but to contribute and set the pace. </p>
        </div>
      </div>
      {/* <div className='flex flex-col items-center justify-center text-center obj-background  pb-24  h-[450px]'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-white'>Our Objectives</h1>
          <h3 className='font-bold  lg:text-6xl md:text-5xl text-4xl text-white'>Inclusion, Innovation, Opportunities</h3>
        </div>
        <p className='mt-2 ease-in duration-300 text-white text-sm w-full lg:w-[60%]'>We are primarily focused on harnessing the power of blockchain technology and decentralized technologies to foster a community of builders who can make global impact, create real world solutions and are equipped with the right skills to not only consume but to contribute and set the pace. </p>
      </div> */}
    </>
  )
}

export default Objective
