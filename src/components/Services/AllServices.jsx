import React from 'react'

// components
import { Hackathon,Bootckathon,Incubate,UniversityChapters } from './index'

const AllServices = () => {
  return (
    <div>
        <UniversityChapters />
        <Bootckathon />
        <Hackathon />
        <Incubate />
    </div>
  )
}

export default AllServices