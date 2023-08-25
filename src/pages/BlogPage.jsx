import React, { useState, useEffect } from 'react';
import PagesFooter from '../components/PagesFooter';
import { Navbar, Blog } from '../components'

const BlogPage = () => {
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
          <Blog />
          <PagesFooter />
        </>
      )}
    </>
  )
}

export default BlogPage