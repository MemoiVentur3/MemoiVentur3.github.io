import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

import { FaBars } from 'react-icons/fa'
import { BsX } from 'react-icons/bs'
// import Logo from '../logo-main.png'

// mui
import { Button } from '@mui/material'
import { Phone } from '@mui/icons-material'


const navigation = [
  { id: 'Home', name: 'Home', href: '#' },
  { id: 'About', name: 'About', href: '#' },
  { id: 'Service', name: 'Service', href: '#' },
  { id: 'Blog', name: 'Blog', href: '#' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-[#1E3A8A]/90 sticky top-0 backdrop-blur-sm z-50'>
      <div className='container mx-auto text-white px-[16px] '>
        <div className='py-2 justify-between items-center hidden md:flex'>
          {/* logo */}
          <p>Logo</p>
          <div className='flex gap-8'>
            {navigation.map((item) => (
              <Link key={item.id} to={item.id} smooth={true} duration={500} className="font-semibold hover:text-[#7394dc] cursor-pointer">
                {item.name}
              </Link>
            ))}
          </div>
          <Link className='w-[200px] px-2' to='Contact' smooth={true} duration={500}>
            <Button variant='outlined ' className='nav-btn '> <Phone /> Contact Us  </Button>
          </Link>
          {/* <button className='border-2 border-white  px-4 py-2 rounded-full text-white font-semibold'>Contact Us</button> */}
        </div>

        {/* Mobile Nav */}

        <div className='md:hidden py-4 justify-between flex items-center'>
          {/* mobile logo */}
          <p>Logo</p>
          {mobileMenuOpen === (true) ? (
            <button onClick={() => setMobileMenuOpen(false)}><BsX size={25} /></button>
          ) : (
            <FaBars onClick={() => setMobileMenuOpen(true)} />
          )}

        </div>
        {mobileMenuOpen && <div>
          <div className='w-full grid grid-row  text-slate-300 gap-4'>
            {navigation.map((item) => (
              <Link key={item.id} to={item.id} smooth={true} duration={500} className="font-semibold hover:text-[#7394dc] cursor-pointer">
                {item.name}
              </Link>
            ))}
          </div>
        </div>}

      </div>
    </div>
  )
}

