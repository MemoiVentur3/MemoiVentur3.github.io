import React from 'react'

// images
import img1 from '../assets/Main/Community Photo (1).webp'
import { Button } from '@mui/material'
import communityBtn from '../assets/Buttons/Join Community Button-1.webp'


const Community = () => {
    return (
        <div className='bg-main w-full'>
            <div className='flex items-center flex-col p-8 text-white'>
                <div className='flex flex-col gap-3 items-center justify-center py-8 lg:w-[80%]'>
                    <img src={img1} className='img h-[400px] lg:w-[80%] lg:mb-16 rounded-3xl' alt="" />
                    <h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl'>Community</h1>
                    <p className='text-center ease-in duration-300  text-white text-sm'>We are building a community of 100,000 developers in Africa who want to learn, build, and get jobs. Join our network of developers & hack to win prizes, explore courses, get access to jobs and life-changing opportunities.</p>
                    <a href='https://nas.io/memoi-africa'>
                    <img src={communityBtn} className='cursor-pointer w-[250px]' alt="" />
                    </a>
                    {/* <Button variant='contained' className='contained-lg-btn '>Join Community</Button> */}
                </div>
            </div>
        </div>
    )
}

export default Community