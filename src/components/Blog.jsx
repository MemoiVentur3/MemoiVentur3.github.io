import React, { useState } from 'react';
import BlogData from './BlogData';
import Fade from 'react-reveal/Fade';

// mui
import FitbitIcon from '@mui/icons-material/Fitbit';
import { FaBlog } from 'react-icons/fa';
import { Button } from '@mui/material';

// import BlogShow from '../assets/Buttons/'

const Blog = () => {

  return (
    <div className='flex flex-col items-start p-8' id='Blog'>
      <div className='flex flex-col'>
        <Fade top><h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-[#130395]'>Our Latest News</h1></Fade>
        <Fade bottom><h1 className='font-extrabold lg:text-xl md:text-lg text-lg text-[#130395]'>Stay informed, Get information</h1></Fade>
      </div>


    </div>
  );
};

export default Blog;
