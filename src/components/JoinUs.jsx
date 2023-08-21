import React from 'react'

// mui
import { IconButton } from '@mui/material'
import { Twitter, Mail,WhatsApp,LinkedIn } from '@mui/icons-material'
import { BsDiscord } from 'react-icons/bs'

const JoinUs = () => {
  return (
    <div className='grid lg:grid-cols-2 bg-joinUs p-6 lg:p-16 mt-2'>
        <div className='flex flex-col items-start gap-3 text-white'>
            <h1 className='font-extrabold lg:text-2xl md:text-2xl text-2xl text-white'>Join Us</h1>
            <p  className='ease-in duration-300 hover:text-white text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate, molestiae, labore natus commodi itaque aliquid ratione mollitia unde, tempora saepe. Quae saepe blanditiis neque aperiam eos officiis necessitatibus quidem.</p>
            {/* social media icons */}
            <div className='flex items-center gap-3'>
              <IconButton className='' style={{ background : '#3b83f6a3' }}>
                <Twitter className='text-white' />
              </IconButton>
              <IconButton className='' style={{ background : '#3b83f6a3' }}>
                <BsDiscord className='text-white' />
              </IconButton>
              <IconButton className='' style={{ background : '#3b83f6a3' }}>
                <LinkedIn className='text-white' />
              </IconButton>
              <IconButton className='' style={{ background : '#3b83f6a3' }}>
                <WhatsApp className='text-white' />
              </IconButton>
              <IconButton className='' style={{ background : '#3b83f6a3' }}>
                <Mail className='text-white text-sm' />
              </IconButton>
            </div>
        </div>
    </div>
  )
}

export default JoinUs