import React, { useState } from 'react';
import BlogData from './BlogData';
import Fade from 'react-reveal/Fade';

// mui
import FitbitIcon from '@mui/icons-material/Fitbit';
import { FaBlog } from 'react-icons/fa';
import { Button } from '@mui/material';

// import BlogShow from '../assets/Buttons/'

const Blog = () => {
  const [view, setView] = useState(true)

  const groupSize = 3;

  const groups = [];
  for (let i = 0; i < BlogData.length; i += groupSize) {
    groups.push(BlogData.slice(i, i + groupSize));
  }

  return (
    <div className='flex flex-col items-start p-8' id='Blog'>
      <div className='flex flex-col'>
        <Fade top><h1 className='font-semibold lg:text-4xl md:text-4xl text-4xl text-[#1E3A8A]'>Our Latest News</h1></Fade>
        <Fade bottom><h1 className='font-semibold lg:text-lg md:text-4xl text-lg text-[#1E3A8A]'>Stay informed, Get information</h1></Fade>

      </div>
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-3 grid-cols-1'>
        {BlogData.map(item => (
          <div key={item.id} title={item.tag} className="box-shadow border bg-main rounded-3xl p-4 flex flex-col mt-8 cursor-pointer lg:max-w-[400px] w-[100%] hover:-translate-y-4 transform ease duration-300 hover:shadow-lg">
            <img src={item.img} className='img rounded-3xl h-[300px] max-w-[100%] ' alt="" />
            <p className='pages-font text-white text-sm mt-3 flex items-center gap-2'> <FitbitIcon sx={{ fontSize: '14px' }} /> {item.tag}</p>
            <p className='pages-font text-white text-xs text-start mt-1 line-clamp-3'>{item.content}</p>
          </div>
        ))}
      </div>
      {
        !view ? (
          <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-3 grid-cols-1'>
            {BlogData.map(item => (
              <div key={item.id} title={item.tag} className="box-shadow border bg-main rounded-3xl p-4 flex flex-col mt-8 cursor-pointer lg:max-w-[400px] w-[100%] hover:-translate-y-4 transform ease duration-300 hover:shadow-lg">
                <img src={item.img} className='img rounded-3xl h-[300px] max-w-[100%] ' alt="" />
                <p className='pages-font text-white text-sm mt-3 flex items-center gap-2'> <FitbitIcon sx={{ fontSize: '14px' }} /> {item.tag}</p>
                <p className='pages-font text-white text-xs text-start mt-1 line-clamp-3'>{item.content}</p>
              </div>
            ))}
          </div>
        ) : null
      }
      <div className='w-full flex items-center justify-center '>
        {view ? (

          <Button onClick={() => setView(!view)} className='pages-font outlined-lg-btn mt-16'>Show More</Button>
        ) : (
          <Button onClick={() => setView(!view)} className='pages-font outlined-lg-btn mt-16'>Show Less</Button>
        )}
      </div>

    </div>
  );
};

export default Blog;
