import React from 'react'
import { TextField, Button } from '@mui/material'
// mui
import { IconButton } from '@mui/material'
import { Twitter, Mail, WhatsApp, LinkedIn } from '@mui/icons-material'
import { BsDiscord } from 'react-icons/bs'
import { Link } from 'react-router-dom'

import twitter from '../assets/Buttons/X.webp'
import discord from '../assets/Buttons/DC.webp'
import linkedin from '../assets/Buttons/LinkedIn.webp'
import whatsapp from '../assets/Buttons/WA.webp'
import mail from '../assets/Buttons/Mail.webp'
import Logo from '../assets/Buttons/logo.png'

const PagesFooter = () => {
    return (
        <div className='bg-[#1E3A8A] mt-2 px-4 lg:px-24 py-8'>
            <div className='flex flex-col justify-center lg:items-end w-full px-4 gap-4  lg:py-8 lg:px-24 pb-4'>
                <div className='lg:flex items-center justify-between grid grid-cols-2  gap-3 w-[100%] text-white'>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className=' pages-font font-semibold'>About Us</h1>
                        <p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Mission</p>
                        <p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Vision</p>
                        <p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Team</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='pages-font font-semibold '>Discover</h1>
                        <Link to='/blog'><p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Blog</p></Link>
                        <Link to='/service'><p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Services</p></Link>
                        <p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Knowledge</p>
                    </div>
                    <div className='flex flex-col items-center gap-3'>
                        <h1 className='pages-font font-semibold '>Support</h1>
                        <p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>FAQs</p>
                        <Link to='/contact'><p className='pages-font cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Contact</p></Link>

                    </div>
                </div>
                {/* social media icons */}
                <div className='flex items-center gap-3 float-right right-0'>
                    <img className='w-[40px] cursor-pointer object-cover' src={twitter} alt="" />
                    <img className='w-[40px] cursor-pointer object-cover' src={discord} alt="" />
                    <img className='w-[40px] cursor-pointer object-cover' src={linkedin} alt="" />
                    <img className='w-[40px] cursor-pointer object-cover' src={whatsapp} alt="" />
                    <img className='w-[40px] cursor-pointer object-cover' src={mail} alt="" />
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between py-4'>
                {/* logo */}
                <Link to='/'>
                    <img className='w-[30px]' src={Logo} alt="" />
                </Link>
                <p className='ease-in duration-300 text-white'>All right reserved</p>
            </div>
        </div>
    )
}

export default PagesFooter