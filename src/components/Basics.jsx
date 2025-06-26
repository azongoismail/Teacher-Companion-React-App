import React from 'react'
import { Link } from 'react-router-dom'


const BasicsCard = ({basic, src}) => {
  
  return(
    <>
    <div className='flex flex-col items-center justify-start mt-5 pb-4 text-center w-[50vw] shadow-xl h-[20vh] bg-gray-100 rounded-lg sm:flex md:flex md:w-[40%] md:h-[40%] lg:h-[50vh] lg:w-[40%]' >
        <div className='bg-orange-600 h-[50%] w-full rounded-t-lg md:h-[50%] '></div>
        <h1 className='mb-2 text-xl font-sans'><Link to={src}>{ basic}</Link> </h1>
      <p className='mt-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus doloribus </p>
    </div>
    </>
    
  )
}

export default BasicsCard
