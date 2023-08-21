import React from 'react'

// images
import img1 from '../assets/Main/CommunityImage.jpg'
import { Button } from '@mui/material'


const Community = () => {
    return (
        <div className='bg-main w-full'>
            <div className='flex items-center flex-col p-8 text-white'>
                <div className='flex flex-col gap-3 items-center justify-center py-8 lg:w-[80%]'>
                    <img src={img1} className='img h-[400px] lg:w-[80%]  rounded-3xl' alt="" />
                    <h1 className='font-bold text-4xl'>Community</h1>
                    <p className='text-center ease-in duration-300  text-gray-300 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia pariatur saepe nesciunt voluptates quisquam ea culpa placeat iure ipsam accusamus ullam nisi laboriosam, nulla, reiciendis facilis voluptatum sint modi quidem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nam a, sit, numquam nostrum possimus ratione, autem quos ab aliquid laudantium debitis doloremque? Praesentium consequuntur libero eaque ullam non quia!</p>
                    <Button variant='contained' className='contained-lg-btn '>Join Community</Button>
                </div>
            </div>
        </div>
    )
}

export default Community