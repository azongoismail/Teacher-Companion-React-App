import React, { use } from 'react'
import BasicsCard from '../components/Basics'
import {Link } from 'react-router-dom'


const Basics = () => {
  return (
    <div className='flex flex-1 flex-col items-center justify-center mx-auto  sm:flex-col sm:justify-center md:flex-row  
   lg:flex-row lg:w-[60%]'>
      <BasicsCard basic="Basic 7" src="/basicSev" />
      <BasicsCard basic="Basic 8" src="/basic8"/>
      <BasicsCard basic="Basic 9" src="/basic9"/>
    
    </div>
  )
}

export default Basics
