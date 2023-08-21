import React, { useState } from 'react';
import BlogData from './BlogData';
import { Fade } from "react-awesome-reveal";

// mui
import FitbitIcon from '@mui/icons-material/Fitbit';
import { FaBlog } from 'react-icons/fa';
import { Button } from '@mui/material';

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
        <h1 className='font-extrabold lg:text-4xl md:text-4xl text-4xl text-[#1E3A8A]'>Our Latest News</h1>
        <h1 className='font-extrabold lg:text-xl md:text-4xl text-lg text-[#1E3A8A]'>Stay informed, Get information</h1>
      </div>
      <div className='grid lg:grid-cols-3 xl:grid-cols-4 gap-3 grid-cols-1'>
        <Fade cascade damping={0.01}>
          {BlogData.map(item => (
            <div key={item.id} title={item.tag} className="box-shadow border bg-main rounded-3xl p-4 flex flex-col mt-8 cursor-pointer lg:max-w-[400px] w-[100%]">
              <img src={item.img} className='img rounded-3xl h-[300px] max-w-[100%] ' alt="" />
              <p className='text-gray-300 font-bold mt-3 flex items-center gap-2'> <FitbitIcon sx={{ fontSize: '14px' }} /> {item.tag}</p>
              <p className='text-gray-300 font-semibold text-start mt-1 line-clamp-3'>{item.content}</p>
            </div>
          ))}
        </Fade>
      </div>
      {
        !view ? (
          <div className='grid lg:grid-cols-3 gap-3 grid-cols-1'>
            <Fade cascade damping={0.1}>
              {BlogData.map(item => (
                <div key={item.id} title={item.tag} className="box-shadow border bg-main rounded-3xl p-4 flex flex-col mt-8 cursor-pointer lg:max-w-[400px] w-[100%]">
                  <img src={item.img} className='img rounded-3xl h-[300px] max-w-[100%] ' alt="" />
                  <p className='text-gray-300 font-bold mt-3 flex items-center gap-2'> <FitbitIcon sx={{ fontSize: '14px' }} /> {item.tag}</p>
                  <p className='text-gray-300 font-semibold text-start mt-1 line-clamp-3'>{item.content}</p>
                </div>
              ))}
            </Fade>
          </div>
        ) : null
      }
      <div className='w-full flex items-center justify-center '>
        {view ? (

          <Button onClick={() => setView(!view)} className='outlined-lg-btn mt-16'>Show More</Button>
        ) : (
          <Button onClick={() => setView(!view)} className='outlined-lg-btn mt-16'>Show Less</Button>
        )}
      </div>

    </div>
  );
};

export default Blog;
