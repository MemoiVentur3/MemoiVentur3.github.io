import React from 'react'
import { Fade } from 'react-reveal'

import PagesFooter from '../components/PagesFooter'
import { Navbar } from '../components'

const ComingSoon = () => {
  return (
    <>
    <Navbar />
    <Fade><div className='text-center flex items-center justify-center h-[100vh] bg-main text-white text-2xl pages-font'> Coming Soon! <br /> Stay Tuned.</div></Fade>
    <PagesFooter />
    </>
  )
}

export default ComingSoon