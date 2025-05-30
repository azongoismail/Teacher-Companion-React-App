import React, { use } from 'react'
import BasicsCard from '../components/Basics'
import {Link } from 'react-router-dom'


const Basics = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center mx-auto  sm:flex-col sm:justify-center md:flex-row  
   lg:flex-row lg:w-[60%]'>
      <Link to='/basicSev' className='flex justify-center lg:w-[100vw]'>
      <BasicsCard basic="Basic 7"/>
      </Link>
      <Link to='/basic8' className='flex justify-center lg:w-[100vw]'>
      <BasicsCard basic="Basic 8"/>
      </Link>
      <Link to='/basic9' className='flex justify-center lg:w-[100vw]'>
      <BasicsCard basic="Basic 9"/>
      </Link>
    </div>
  )
}

export default Basics
