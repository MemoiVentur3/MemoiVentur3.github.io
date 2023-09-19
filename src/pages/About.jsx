import React, { useState, useEffect } from 'react';

import { Navbar, CTA, Objective, HowItWorks, Team } from '../components'
import PagesFooter from '../components/PagesFooter';

const AboutPage = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <div className='w-[100%]'>
            <HowItWorks />
            <Objective />
            <Team />
            <CTA/>
            <PagesFooter />
          </div>
        </>

      )}
    </>
  )
}

export default AboutPage