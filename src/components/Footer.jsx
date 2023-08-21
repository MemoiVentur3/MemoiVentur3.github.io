import React from 'react'

// mui
import { TextField,Button } from '@mui/material'


const Footer = () => {
  return (
    <div className='bg-main mt-2 px-6 lg:px-16 py-8'>
        <div className='grid lg:grid-cols-3 px-4  lg:py-8'>
            <div className='col-span-2 grid grid-cols-3 justify-center gap-3 text-white'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold lg:text-xl'>About Us</h1>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>Mission</p>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>Vision</p>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>Team</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold lg:text-xl'>Discover</h1>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>Blog</p>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>Services</p>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>Knowledge</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-bold lg:text-xl'>Support</h1>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>FAQs</p>
                    <p className='cursor-pointer ease-in duration-300 hover:text-white text-gray-300'>Contact</p>
                </div>
            </div>
            <div className='col col-span-1 flex flex-col gap-1 text-gray-300 lg:mt-0 mt-4 lg:mb-0 mb-4'>
                <div className='flex flex-col items-start'>
                    <h1 className='font-bold text-2xl lg:text-3xl text-white'>Subscribe to</h1>
                    <h1 className='font-bold text-2xl lg:text-3xl text-white'>Our Newsletter</h1>
                </div>
                <p>Subscribe to get latest information.</p>
                <TextField className='footer-inp' id="filled-basic" placeholder="Company(optional)" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'black' } }} />
                <Button variant='outlined nav-btn lg:w-[50%]'> Subscribe  </Button>
                {/* <input type="email" className='inp rounded-xl p-2 text-black' /> */}
                {/* <button className='mt-1 c border-2 border-white  px-8 lg:w-[40%] py-2 rounded-full text-white font-semibold'>Subscribe</button> */}
            </div>
        </div>
        <hr />
        <div className='flex items-center justify-between py-4'>
            {/* logo */}
            <img src="" alt="" />
            <p className='ease-in duration-300 text-gray-300'>All right reserved</p>
        </div>
    </div>
  )
}

export default Footer