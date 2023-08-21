import React from 'react'

import map from '../assets/map.jpg'
// mui
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { IconButton } from '@mui/material';

const Location = () => {
  return (
    <div className='flex flex-col items-center justify-center p-8'>
        <h1  className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-[#1E3A8A]'>Our Location</h1>
        <div className='flex items-center justify-center gap-16 w-full mt-8'>
            <div className='col-span-1 grid lg:grid-cols-1 items-start justify-around h-[600px]'>
                <div className='flex items-start gap-2'>
                    {/* icon */}
                    <IconButton sx={{ background : '#1E3A8A', color : 'white', }} className='location-icon-btn h-[60px] w-[60px] bg-blue-700'>
                        <HomeWorkIcon sx={{ fontSize : '24px' }} />
                    </IconButton>
                    <div className='flex flex-col gap-2 text-[#1E3A8A]'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-lg lg:text-2xl'>OFFICE</h1>
                            <h1 className='font-bold text-lg lg:text-2xl'>HEADQUARTERS</h1>
                        </div>
                        <div className='flex lg:flex-col font-bold text-base'>
                            <p>Nairobi,</p>
                            <p>Kenya</p>
                        </div>
                        <p className='text-bold underline cursor-pointer'>Get direction</p>
                    </div>
                </div>
                <div className='flex items-start gap-2'>
                    {/* icon */}
                    <IconButton sx={{ background : '#1E3A8A', color : 'white', }} className='location-icon-btn h-[60px] w-[60px] bg-blue-700'>
                        <FlagOutlinedIcon sx={{ fontSize : '24px' }} />
                    </IconButton>
                    <div className='flex flex-col gap-2 text-[#1E3A8A]'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-lg lg:text-2xl'>BOOTCAMP</h1>
                            <h1 className='font-bold text-lg lg:text-2xl'>LOCATION</h1>
                        </div>
                        <div className='flex lg:flex-col font-bold text-base'>
                            <p>Nairobi,</p>
                            <p>Kenya</p>
                        </div>
                        <p className='text-bold underline cursor-pointer'>Get direction</p>
                    </div>
                </div>
                <div className='flex items-start gap-2'>
                    {/* icon */}
                    <IconButton sx={{ background : '#1E3A8A', color : 'white', }} className='location-icon-btn h-[60px] w-[60px] bg-blue-700'>
                        <ApartmentOutlinedIcon sx={{ fontSize : '24px' }} />
                    </IconButton>
                    <div className='flex flex-col gap-2 text-[#1E3A8A]'>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-lg lg:text-2xl'>BRANCH</h1>
                            <h1 className='font-bold text-lg lg:text-2xl'>OFFICE</h1>
                        </div>
                        <div className='flex lg:flex-col font-bold text-base'>
                            <p>Nairobi,</p>
                            <p>Kenya</p>
                        </div>
                        <p className='text-bold underline cursor-pointer'>Get direction</p>
                    </div>
                </div>
            </div>
            <div className='col-span-2 lg:block hidden'>
                <img className='img h-[600px] w-[500px]' src={map} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Location