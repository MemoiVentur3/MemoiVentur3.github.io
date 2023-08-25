import React, { useState, useEffect } from 'react';
import { Navbar, Services } from '../components'
import PagesFooter from '../components/PagesFooter';
import AllServices from '../components/Services/AllServices'

const ServicePage = () => {
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
          <AllServices />
          <PagesFooter />
        </>
      )}
    </>
  )
}

export default ServicePage