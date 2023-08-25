import React, { useState, useEffect } from 'react';
import { Navbar, Contact, Location } from '../components'
import PagesFooter from '../components/PagesFooter';

const ContactPage = () => {
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
          <Contact />
          <Location />  
          <PagesFooter />
        </>
      )}
    </>
  )
}

export default ContactPage