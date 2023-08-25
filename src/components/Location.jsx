import React from 'react'

import map from '../assets/Main/map.webp'
// mui
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import { IconButton } from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';

const Location = () => {
    return (
        <div className='flex flex-col items-center justify-center p-8'>
            <h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl text-[#1E3A8A]'>Our Location</h1>
            <div className='flex items-center justify-center gap-16 w-full mt-8'>
                <div className='col-span-1 grid lg:grid-cols-1 items-start justify-around h-[600px]'>
                    <div className='flex items-start gap-2'>
                        {/* icon */}
                        <IconButton sx={{ background: '#1E3A8A', color: 'white', }} className='location-icon-btn h-[60px] w-[60px] bg-[#1E3A8A]'>
                            <HomeWorkIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
                        <div className='flex flex-col gap-2 text-[#1E3A8A]'>
                            <div className='flex flex-col'>
                                <p className='pages-font text-xl font-semibold'>OFFICE</p>
                                <p className='pages-font text-xl font-semibold'>HEADQUARTERS</p>
                            </div>
                            <div className='flex lg:flex-col font-bold text-sm'>
                                <p className='pages-font'>Nairobi,</p>
                                <p className='pages-font'>Kenya</p>
                            </div>
                            <div className='flex items-center'>
                                <NearMeIcon sx={{ fontSize: '18px' }} />
                                <p className='pages-font text-semibold underline cursor-pointer text-sm'> Get direction</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        {/* icon */}
                        <IconButton sx={{ background: '#1E3A8A', color: 'white', }} className='location-icon-btn h-[60px] w-[60px] bg-[#1E3A8A]'>
                            <FlagOutlinedIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
                        <div className='flex flex-col gap-2 text-[#1E3A8A]'>
                            <div className='flex flex-col'>
                                <p className='pages-font text-xl font-semibold'>BOOTCAMP</p>
                                <p className='pages-font text-xl font-semibold'>LOCATION</p>
                            </div>
                            <div className='flex lg:flex-col font-bold text-sm'>
                                <p className='pages-font'>Nairobi,</p>
                                <p className='pages-font'>Kenya</p>
                            </div>
                            <div className='flex items-center'>
                                <NearMeIcon sx={{ fontSize: '18px' }} />
                                <p className='pages-font text-semibold underline cursor-pointer text-sm'> Get direction</p>
                            </div>                        </div>
                    </div>
                    <div className='flex items-start gap-2'>
                        {/* icon */}
                        <IconButton sx={{ background: '#1E3A8A', color: 'white', }} className='location-icon-btn h-[60px] w-[60px] bg-[#1E3A8A]'>
                            <ApartmentOutlinedIcon sx={{ fontSize: '24px' }} />
                        </IconButton>
                        <div className='flex flex-col gap-2 text-[#1E3A8A]'>
                            <div className='flex flex-col'>
                                <p className='pages-font text-xl font-semibold'>BRANCH</p>
                                <p className='pages-font text-xl font-semibold'>OFFICE</p>
                            </div>
                            <div className='flex lg:flex-col font-bold text-sm'>
                                <p className='pages-font'>Nairobi,</p>
                                <p className='pages-font'>Kenya</p>
                            </div>
                            <div className='flex items-center'>
                                <NearMeIcon sx={{ fontSize: '18px' }} />
                                <p className='pages-font text-semibold underline cursor-pointer text-sm'> Get direction</p>
                            </div>
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