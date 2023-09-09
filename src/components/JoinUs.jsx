import React from 'react'

// mui
import { IconButton } from '@mui/material'
import { Twitter, Mail,WhatsApp,LinkedIn, Telegram } from '@mui/icons-material'
import { BsDiscord } from 'react-icons/bs'

import twitter from '../assets/Buttons/X.webp'
import discord from '../assets/Buttons/DC.webp'
import linkedin from '../assets/Buttons/LinkedIn.webp'
import whatsapp from '../assets/Buttons/WA.webp'
import mail from '../assets/Buttons/Mail.webp'

const JoinUs = () => {
  return (
    <div className='grid lg:grid-cols-2 bg-joinUs p-6 lg:p-16 mt-2'>
        <div className='flex flex-col items-start gap-3 text-white'>
            <h1 className='font-extrabold  lg:text-6xl md:text-5xl text-4xl text-white'>Join Us</h1>
            <p  className='ease-in duration-300 hover:text-white text-white text-sm'>Ready to be part of the MEMOI AFRICA community and explore the exciting world of tech innovation? Connect with us on social media to stay updated on our latest programs, events, and initiatives. Join the conversation, engage with fellow tech enthusiasts, and be the first to know about opportunities that can shape your tech journey. <br /> <br /> Connect with us here:</p>
                {/* social media icons */}
                <div className='flex items-center gap-3 float-right right-0'>
                    <a href='https://twitter.com/memoians' target='blank' ><img className='w-[40px] cursor-pointer object-cover' src={twitter} alt="" /></a>
                    <a target='blank' href='https://t.me/Memoiafrica'><IconButton className='w-[40px] cursor-pointer object-cover' sx={{ width : '40px', background : '#4863ac' }}><Telegram sx={{ color : 'white' }} /></IconButton></a>
                    <a target='blank' href='https://www.linkedin.com/company/memoi/'><img className='w-[40px] cursor-pointer object-cover' src={linkedin} alt="" /></a>
                    <a target='blank' href='https://nas.io/memoi-africa'><img className='w-[40px] cursor-pointer object-cover' src={whatsapp} alt="" /></a>
                    <a target='blank' href='https://tr.ee/Q9fdkg-XRb'><img className='w-[40px] cursor-pointer object-cover' src={mail} alt="" /></a>
                </div>
        </div>
    </div>
  )
}

export default JoinUs