import React from 'react'
import { Link } from 'react-router-dom'

// mui
import { TextField, Button } from '@mui/material'
import subscribeBtn from '../assets/Buttons/Footer Submit Button.webp'

import Logo from '../assets/Buttons/logo.png'

const Footer = () => {
    return (
        <div className='bg-[#130395] mt-2 px-6 lg:px-16 py-8'>
            <div className='grid lg:grid-cols-3 px-4  lg:py-8'>
                <div className='col-span-2 grid lg:grid-cols-3 grid-cols-2 justify-center gap-3 text-white'>
                    <div className='flex flex-col gap-3'>
                        <h1 className=' text-xl'>About Us</h1>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Mission</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Vision</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Team</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl'>Discover</h1>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Blog</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Services</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Knowledge</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl'>Opportunities</h1>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Jobs</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Events</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Partners</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Projects</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl'>Support</h1>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>FAQs</p>
                        <p className='cursor-pointer ease-in duration-300 hover:text-white text-white text-sm'>Contact</p>
                    </div>
                </div>
                <div className='col col-span-1 flex flex-col gap-1 text-white text-sm mt-4 lg:mt-0 lg:mb-0 mb-4'>
                    <div className='flex flex-col items-start'>
                        <h1 className='font-bold text-2xl lg:text-4xl text-white'>Subscribe to</h1>
                        <h1 className='font-bold text-2xl lg:text-4xl text-white'>Our Newsletter</h1>
                    </div>
                    <p className='text-md '>Subscribe to get latest information.</p>
                    <TextField className='footer-inp' id="filled-basic" placeholder="Email Address" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'black' } }} />
                    <img className='w-[150px]' src={subscribeBtn} alt="" />
                    {/* <Button variant='outlined nav-btn lg:w-[50%]'> Subscribe  </Button> */}
                    {/* <input type="email" className='inp rounded-xl p-2 text-black' /> */}
                    {/* <button className='mt-1 c border-2 border-white  px-8 lg:w-[40%] py-2 rounded-full text-white '>Subscribe</button> */}
                </div>
            </div>
            <hr />
            <div className='flex items-center justify-between py-4'>
                {/* logo */}
                <Link to='/'>
                    <img className='w-[30px]' src={Logo} alt="" />
                </Link>
                <p className='ease-in duration-300 text-white text-xs'>All right reserved. © MemoiAfrica Official 2023</p>
            </div>
        </div>
    )
}

export default Footer