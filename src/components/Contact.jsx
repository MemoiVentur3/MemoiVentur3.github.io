import React from 'react'
import Fade from 'react-reveal/Fade';

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import img from '../assets/Main/MemoiBanner.webp'
// import submitBtn from '../assets/Buttons/'

const Contact = () => {
    return (
        <div className=" w-[100%] flex items-center flex-col relative justify-center p-4 py-8 bg-main text-white" id='Contact'>
            <div className='lg:w-[70%]'>
                <div className='flex flex-col items-center text-center mb-6'>
                    <Fade top><h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl text-white'>Have a Project</h1></Fade>
                    <Fade bottom><h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl text-white'>in mind ?</h1></Fade>
                </div>
                <div className=' text-center text-white text-sm'>
                    <p className='pages-font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nisi hic iure, libero ipsam provident animi aperiam cupiditate fugit itaque eum fuga eos dolores voluptas aut odit. Quasi, amet commodi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde praesentium sapiente optio quisquam deserunt laborum consequatur, explicabo vel sint consectetur asperiores ducimus! Nostrum, minus voluptatum? Facilis et vel nobis dolorum.</p>
                </div>
            </div>
            <div className='w-full flex items-center justify-center mt-8 '>
                {/* image */}
                <div className='grid lg:grid-cols-3 gap-3 items-center bg-white/10 backdrop-blur-md lg:w-[70%] p-4 rounded-[35px]'>
                    <div className=' col-span-1 h-[100%] lg:block hidden'>
                        <img src={img} className='h-[100%] w-[400px] img rounded-3xl' alt="" />
                    </div>
                    <div className='flex flex-col col-span-2 '>
                        <div className='flex flex-col gap-1 p-4'>
                            <h1 className='lg:text-4xl text-3xl font-semibold'>Form</h1>
                            <p className='pages-font text-xs text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit nihil nemo odio voluptas iure sequi id ex soluta, qui obcaecati blanditiis dolore inventore commodi labore accusamus optio tempore harum quo?</p>
                        </div>
                        <form action="" className='pages-font flex flex-col items-start  gap-2 p-4'>
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