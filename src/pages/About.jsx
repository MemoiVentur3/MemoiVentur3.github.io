import React, { useState, useEffect } from 'react';

import { Navbar, Objective, HowItWorks, Team, FAQs } from '../components'
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
            <FAQs />
            <PagesFooter />
          </div>
        </>

      )}
    </>
  )
}

export default AboutPage