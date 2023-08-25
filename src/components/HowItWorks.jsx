import React from 'react'
import { Fade } from "react-awesome-reveal";
import img from '../assets/Main/How it works.webp'
// mui
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'


const HowItWorks = () => {

  return (
    <>
      <div className='flex flex-col pt-8'>
        <div className='flex flex-col items-center text-center'>
          <h1 className='font-extrabold lg:text-5xl md:text-4xl text-3xl text-[#1E3A8A]'>How It Works </h1>
        </div>
        <div className=''>
          <img src={img} alt="" />
          {/* <Timeline position='alternate' className='flex'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className='timelineDot'>
                  <ArrowRightIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='bg-[#1E3A8A] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px]'>
                  <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam odio nesciunt itaque quaerat.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem >
              <TimelineSeparator>
                <TimelineDot className='timelineDot'>
                  <ArrowLeftIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='bg-[#1E3A8A] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px] float-right'>
                  <p className='text-sm  text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam odio nesciunt itaque quaerat.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className='timelineDot'>
                  <ArrowRightIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='bg-[#1E3A8A] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px]'>
                  <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam odio nesciunt itaque quaerat.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className='timelineDot'>
                  <ArrowLeftIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='bg-[#1E3A8A] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px] float-right'>
                  <p className='text-sm  text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam odio nesciunt itaque quaerat.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className='timelineDot'>
                  <ArrowRightIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='bg-[#1E3A8A] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px]'>
                  <p className='text-sm '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam odio nesciunt itaque quaerat.</p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline> */}
        </div>
      </div>
    </>
  )
}

export default HowItWorks