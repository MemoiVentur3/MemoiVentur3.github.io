import React from 'react'
import { TextField, Button } from '@mui/material'
// mui
import { IconButton } from '@mui/material'
import { Twitter, Mail, WhatsApp, LinkedIn, Telegram } from '@mui/icons-material'
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
        <div className='bg-[#130395] mt-2 px-4 lg:px-24 py-8'>
            <div className='flex flex-col justify-center lg:items-end w-full px-4 gap-4  lg:py-8 lg:px-24 pb-4'>
                <div className='lg:flex items-center justify-between grid grid-cols-2  gap-3 w-[100%] text-white'>
                    <div className='flex flex-col items-start gap-3'>
                        <h1 className='text-xl'>Support</h1>
                        <p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Mission</p>
                        <p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Vision</p>
                        <p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Team</p>
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                        <h1 className=' text-xl '>Discover</h1>
                        <Link to='/blog'><p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Blog</p></Link>
                        <Link to='/service'><p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Services</p></Link>
                        <p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Knowledge</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl'>Opportunities</h1>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Jobs</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Events</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Partners</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Projects</p>
                    </div>
                    <div className='flex flex-col items-start gap-3'>
                        <h1 className=' text-xl '>Support</h1>
                        <p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>FAQs</p>
                        <Link to='/contact'><p className=' cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Contact</p></Link>

                    </div>
                </div>
                {/* social media icons */}
                <div className='flex items-center gap-3 float-right right-0'>
                    <a href='https://twitter.com/memoians' target='blank' ><img className='w-[40px] cursor-pointer object-cover' src={twitter} alt="" /></a>
                    <a target='blank' href='https://t.me/Memoiafrica'><IconButton className='w-[40px] cursor-pointer object-cover' sx={{ width : '40px', background : '#4863ac' }}><Telegram sx={{ color : 'white' }} /></IconButton></a>
                    <a target='blank' href='https://www.linkedin.com/company/memoi/'><img className='w-[40px] cursor-pointer object-cover' src={linkedin} alt="" /></a>
                    <a target='blank' href='https://nas.io/memoi-africa'><img className='w-[40px] cursor-pointer object-cover' src={whatsapp} alt="" /></a>
                    <a target='blank' href='https://tr.ee/Q9fdkg-XRb'><img className='w-[40px] cursor-pointer object-cover' src={mail} alt="" /></a>
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