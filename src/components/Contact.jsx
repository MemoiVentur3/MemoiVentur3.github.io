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
                    <p className=''>Ready to turn your idea into reality? Whether it's a tech startup, an innovative app, or a game-changing solution, we're here to support you. Fill out the form below to share your project details with us. Our team is excited to learn more about your vision and explore how MEMOI AFRICA can help bring your project to life. Let's embark on this journey of innovation together!</p>
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
                            <p className='pages-font text-sm text-white'>Please provide us with some information about your project. This will help us understand your vision and how MEMOI AFRICA can assist you in achieving your goals. We're eager to collaborate with you and contribute to the success of your project.</p>
                        </div>
                        <form action="" className='pages-font flex flex-col items-start  gap-2 p-4'>
                            <TextField className='inp w-[100%]' name="from_name" id="from_name" placeholder="Name" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                            <TextField type='email' className='inp w-[100%]' name="email" id="email" placeholder="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                            <div className='grid lg:grid-cols-2 gap-2 w-[100%]'>
                                <TextField className='inp' name="company" id="company" placeholder="Company(optional)" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                                <TextField className='inp overflow-hidden' name="number" id="number" placeholder="Phone Number" variant="standard" InputProps={{ disableUnderline: true }} sx={{ input: { color: 'white' } }} />
                            </div>
                            <TextField
                                name="message" id="message"
                                InputProps={{ disableUnderline: true }}
                                sx={{ input: { color: 'white' } }}
                                inputProps={{ style: { color: "white" } }}
                                className='inp w-[100%]'
                                multiline
                                rows={4}
                                variant="standard"
                                placeholder="Tell us about your self"
                            />
                            <Button type="submit" id="button" value="Send Email" variant='contained' className='contained-lg-btn' >Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact