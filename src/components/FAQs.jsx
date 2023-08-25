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
        <div className='bg-white w-full'>
            <div className='flex items-center justify-center flex-col p-8 '>
                <div className='flex flex-col items-center justify-center py-8 lg:w-[80%]'>
                    <h1 className='font-extrabold lg:text-5xl md:text-4xl text-3xl text-[#1E3A8A]'>FAQs</h1>
                </div>
                <div className='flex flex-col items-center justify-center gap-4 w-full'>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel1bh-content"
                            sx={{ width : '100%', background : '#1E3A8A', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel1bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className="pages-font lg:text-base text-white">What is Memoi Africa ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-24 h-max'>
                            <p className='pages-font text-[#1E3A8A] text-xs py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas iusto ipsam assumenda ad. Rem labore nostrum omnis, odit dolorem rerum nobis a, at, iusto perferendis sed veniam nisi praesentium.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel2bh-content"
                            sx={{ width : '100%', background : '#1E3A8A', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel2bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className="pages-font lg:text-base text-white">How can i apply for your programs ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-8 h-max'>
                            <p className='pages-font text-[#1E3A8A] text-xs  py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas iusto ipsam assumenda ad. Rem labore nostrum omnis, odit dolorem rerum nobis a, at, iusto perferendis sed veniam nisi praesentium.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel3bh-content"
                            sx={{ width : '100%', background : '#1E3A8A', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel3bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className="pages-font lg:text-base text-white">Are there bootcamps available to the public ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-8 h-max'>
                        <p className='pages-font text-[#1E3A8A] text-xs py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas iusto ipsam assumenda ad. Rem labore nostrum omnis, odit dolorem rerum nobis a, at, iusto perferendis sed veniam nisi praesentium.</p>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion style={{ boxShadow: 'none' }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: 'white',borderRadius : '10px' }} className="lg:w-[80%] z-10  ease-in duration-300 ">
                        <AccordionSummary 
                            aria-controls="panel4bh-content"
                            sx={{ width : '100%', background : '#1E3A8A', display : 'flex', justifyItems : 'space-around', alignItems : 'center',borderRadius : '10px' }}
                            id="panel4bh-header">
                            <div className='w-full flex items-center justify-between'>
                                <p className="pages-font lg:text-base text-white">Can i get a promotional or discount code ?</p>
                                <ExpandMoreIcon  className='text-white font-bold ' />
                            </div>
                        </AccordionSummary>
                        <AccordionDetails className='shadow-2xl shadow-black/50 rounded-b-lg p-4 py-8 h-max'>
                        <p className='pages-font text-[#1E3A8A] text-xs py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptas iusto ipsam assumenda ad. Rem labore nostrum omnis, odit dolorem rerum nobis a, at, iusto perferendis sed veniam nisi praesentium.</p>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default FAQs