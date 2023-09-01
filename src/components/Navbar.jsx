import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { BsX } from 'react-icons/bs'
import contactBtn from '../assets/Buttons/Contact Us.png'
import Logo from '../assets/Buttons/logo.png'

// mui
import { Button } from '@mui/material'
import { Phone } from '@mui/icons-material'


const navigation = [
  { id: '/', name: 'Home', href: '#' },
  { id: '/about', name: 'About', href: '#' },
  { id: '/service', name: 'Services', href: '#' },
  { id: '/blog', name: 'Portfolio', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-[#130395] sticky top-0 backdrop-blur-sm z-50'>
      <div className='container mx-auto text-white px-[16px] '>
        <div className='py-2 justify-between items-center hidden md:flex'>
          {/* logo */}
          <Link to='/'>
            <img className='w-[50px]' src={Logo} alt="" />
          </Link>
          <div className='flex gap-8'>
            {navigation.map((item) => (
              <Link key={item.id} to={item.id} className=" text-sm hover:text-[#7394dc] cursor-pointer">
                <p className='pages-font'>{item.name}</p>
              </Link>
            ))}
          </div>
          <Link className='px-2' to='/contact' >
            <img src={contactBtn} className='w-[150px]' alt="" />
          </Link>
        </div>

        {/* Mobile Nav */}

        <div className='md:hidden py-4 justify-between flex items-center'>
          {/* mobile logo */}
          <Link to='/'>
            <img className='w-[30px]' src={Logo} alt="" />
          </Link>
          
          {mobileMenuOpen === (true) ? (
            <button onClick={() => setMobileMenuOpen(false)}><BsX size={25} /></button>
          ) : (
            <FaBars onClick={() => setMobileMenuOpen(true)} />
          )}

        </div>
        {mobileMenuOpen && <div>
          <div className='w-full grid grid-row  text-white pb-6 gap-4'>
            {navigation.map((item) => (
              <Link key={item.id} to={item.id} className=" hover:text-[#7394dc] cursor-pointer">
                <p className='pages-font'>{item.name}</p>
              </Link>
            ))}
          </div>
          <Link className='px-2' to='/contact' >
            <img  src={contactBtn} className='w-[150px]' alt="" />
          </Link>
        </div>}

      </div>
    </div>
  )
}

