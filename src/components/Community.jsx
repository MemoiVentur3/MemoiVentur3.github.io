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
                    <p className='text-center ease-in duration-300  text-white text-sm'>At MEMOI AFRICA, our community is the beating heart of our mission. We are a collective of forward-thinkers, trailblazers, and problem solvers who understand the power of collaboration. When you join our community, you're not just signing up – you're stepping into an ecosystem of knowledge-sharing, skill-building, and limitless possibilities. Whether you're a seasoned developer or a budding entrepreneur, our inclusive platform welcomes you with open arms. Through engaging events, interactive workshops, and spirited discussions, we foster an environment where ideas flourish and connections thrive. As you join the community via button beneath here, isn't just an invitation; it's a commitment to being a part of something greater than yourself. Together, we amplify each other's strengths, navigate challenges, and collectively shape the trajectory of African tech innovation. Embark on this journey with us, and let's co-create a future that's not only promising but transformative.</p>
                    <img src={communityBtn} className='cursor-pointer w-[250px]' alt="" />
                    {/* <Button variant='contained' className='contained-lg-btn '>Join Community</Button> */}
                </div>
            </div>
        </div>
    )
}

export default Community