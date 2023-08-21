import React from 'react'

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import img from '../assets/Main/MemoiBanner.png'

const Contact = () => {
    return (
        <div className=" w-[100%] flex items-center flex-col relative justify-center p-4 py-8 bg-main text-white" id='Contact'>
            <div className='lg:w-[70%]'>
                <div className='flex flex-col items-center text-center mb-6'>
                    <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-white'>Have a Projects</h1>
                    <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-white'>in mind ?</h1>
                </div>
                <div className='mt-2 text-center text-gray-300'>
                    <p>Lorem ipsum dolor sit Quasi, amet commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium sapiente optio quisquam deserunt laborum consequatur, explicabo vel sint consectetur asperiores ducimus! Nostrum, minus voluptatum? Facilis et vel nobis dolorum.</p>
                </div>
            </div>
            <div className='w-full flex items-center justify-center mt-4 '>
                {/* image */}
                <div className='grid lg:grid-cols-3 gap-3 items-center bg-white/10 backdrop-blur-md lg:w-[70%] lg:rounded-[50px] rounded-3xl'>
                    <div className=' col-span-1 h-[100%] lg:block hidden'>
                        <img src={img} className='h-[100%] w-[400px] img rounded-3xl' alt="" />
                    </div>
                    <div className='flex flex-col col-span-2 '>
                        <div className='flex flex-col gap-1 p-4'>
                            <h1 className='text-5xl font-bold'>Form</h1>
                            <p className='text-sm text-gray-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil nemo odio voluptas iure sequi id ex soluta, qui obcaecati blanditiis dolore inventore commodi labore accusamus optio tempore harum quo?</p>
                        </div>
                        <form action="" className='flex flex-col items-start  gap-2 p-4'>
                            <TextField className='inp w-[100%]' id="filled-basic" placeholder="Name" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                            <TextField type='email' className='inp w-[100%]' id="filled-basic" placeholder="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                            <div className='grid lg:grid-cols-2 gap-2 w-[100%]'>
                                <TextField className='inp' id="filled-basic" placeholder="Company(optional)" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                                <TextField className='inp overflow-hidden' id="filled-basic" placeholder="Phone Number" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                            </div>
                            <TextField
                                id="filled-multiline-static"
                                InputProps={{ disableUnderline: true }}
                                sx={{ input: { color: 'white' } }}
                                inputProps={{ style: { color: "white" } }}
                                className='inp w-[100%]'
                                multiline
                                rows={4}
                                variant="standard"
                                placeholder="Tell us about your self"
                            />
                            <Button type='submit' variant='contained' className='contained-lg-btn' >Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact