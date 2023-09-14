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
          <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-[#130395]'>Memoi Community </h1>
        </div>
        <div className=''>
          <p className='mt-2 mb-4 ease-in duration-300 text-[#130395] text-sm w-full lg:w-[60%]'>Memoi is heavy on building a vibrant and functional community.
            We are leveraging a community driven approach to onboard the next generation of African developers who will make a global impact in emerging technologies.
            Whether you're a newbie looking to upskill or a seasoned developer needing a team to launch your startup or just need support to try out your ideas, there’s a range of events and programs for you.
            We are bringing together developers, designers and founders to create an innovative technological ecosystem that drives growth, economic, social development and greater tech inclusion in Africa.
          </p>

          {/* <Timeline position='alternate' className='flex'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot className='timelineDot'>
                  <ArrowRightIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className='bg-[#130395] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px]'>
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
                <div className='bg-[#130395] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px] float-right'>
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
                <div className='bg-[#130395] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px]'>
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
                <div className='bg-[#130395] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px] float-right'>
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
                <div className='bg-[#130395] rounded-t-2xl p-4 text-gray-300 text-smh-[150px] w-[200px]'>
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
