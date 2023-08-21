import React from 'react'

// images
// import img1 from '../assets/Real-Estate-2 (1).webp'
import img2 from '../assets//Main/AboutImage.png'

const About = () => {
  return (
    <div className='bg-white w-full' id='About'>
        <div className='flex items-center flex-col p-8 '>
            <div className='flex flex-col items-center justify-center py-8 lg:w-[80%]'>
                <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-[#1E3A8A]'>About</h1>
                <h1 className='text-[#1E3A8A] font-bold lg:text-4xl'>MemoiVenture</h1>
                <div className=' text-center mt-3 text-[#1E3A8A]'>
                    <p className='ease-in duration-300 text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia pariatur saepe nesciunt voluptates quisquam ea culpa placeat iure ipsam accusamus ullam nisi laboriosam, nulla, reiciendis facilis voluptatum sint modi quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam a, sit, numquam nostrum possimus ratione, autem quos ab aliquid laudantium debitis doloremque? Praesentium consequuntur libero eaque ullam non quia!</p>
                </div>
            </div>
            {/* images */}
            <div className='w-[90%] flex lg:flex-row flex-col gap-4 items-center justify-center' >
                <img className='img '  src={img2} alt="" />
                {/* <img className='img box-shadow lg:h-[400px] lg:w-[300px] lg:mt-24 rounded-3xl ' src={img2} alt="" /> */}
            </div>
        </div>
    </div>
  )
}

export default About