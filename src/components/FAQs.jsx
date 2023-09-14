import React from 'react'

// mui
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div id="faq" className='bg-white w-full'>
            <div className='flex items-center justify-center flex-col p-8 '>
                <div className='flex flex-col items-center justify-center py-8 lg:w-[80%]'>
                    <h1 className='font-extrabold  lg:text-5xl md:text-5xl text-4xl text-[#130395]'>FAQs</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-full'>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel1bh-content"
                            sx={{ width : '100%', background : '#130395', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel1bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className=" lg:text-base text-white">What is Memoi Africa ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-24 h-max'>
                            <p className=' text-[#130395] text-sm py-8'>MEMOI AFRICA is a vibrant community that brings together African developers, founders, and tech enthusiasts who are passionate about driving growth in the fields of Blockchain, AI, and other emerging technologies. We provide a platform for knowledge sharing, collaboration, and innovation. Our initiatives include workshops, hackathons, bootcamps, and more, all aimed at empowering individuals and fostering tech excellence across the continent.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel2bh-content"
                            sx={{ width : '100%', background : '#130395', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel2bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className=" lg:text-base text-white">How can i apply for your programs ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-8 h-max'>
                            <p className=' text-[#130395] text-sm  py-8'>Applying for our programs is easy! Simply visit our website and navigate to the "Programs" section. Browse through the list of available initiatives, workshops, and events. Click on the program you're interested in, and you'll find detailed information about the application process. Follow the provided instructions to complete your application. We're excited to have you join our community of tech enthusiasts!</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel3bh-content"
                            sx={{ width : '100%', background : '#130395', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel3bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className=" lg:text-base text-white">Are there bootcamps available to the public ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-8 h-max'>
                        <p className=' text-[#130395] text-sm py-8'>Absolutely! Our bootcamps are designed to cater to individuals at various skill levels, from beginners to experienced developers. We offer bootcamps on topics related to Blockchain, AI, and other emerging technologies. These bootcamps provide a structured learning experience with hands-on exercises and practical insights. Keep an eye on our announcements and program listings to find out when the next bootcamp is available to the public.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel4bh-content"
                            sx={{ width : '100%', background : '#130395', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel4bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className=" lg:text-base text-white">Can i get a promotional or discount code ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-8 h-max'>
                        <p className=' text-[#130395] text-sm py-8'>We occasionally offer promotional or discount codes for our programs and events. These codes are usually shared through our official communication channels, such as newsletters, social media, and community announcements. To stay updated and ensure you don't miss out on any special offers, make sure to subscribe to our newsletter and follow us on our social media platforms. Keep an eye out for these codes to make the most of your MEMOI AFRICA experience.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQs