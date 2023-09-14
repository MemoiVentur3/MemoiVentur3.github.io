import React from 'react'

// components
import { Hackathon,Bootckathon,Incubate,UniversityChapters } from './index'

const AllServices = () => {
  return (
    <div>
        <Incubate />
        <UniversityChapters />
        <Bootckathon />
        <Hackathon />
        
    </div>
  )
}

export default AllServices