import React from 'react'

// mui
import { IconButton } from '@mui/material'
import { Twitter, Mail,WhatsApp,LinkedIn } from '@mui/icons-material'
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
            <div className='flex items-center gap-3'>
                <img className='w-[50px] object-cover' src={twitter} alt="" />
                <img className='w-[50px] object-cover' src={discord} alt="" />
                <img className='w-[50px] object-cover' src={linkedin} alt="" />
                <img className='w-[50px] object-cover' src={whatsapp} alt="" />
                <img className='w-[50px] object-cover' src={mail} alt="" />
            </div>
        </div>
    </div>
  )
}

export default JoinUs