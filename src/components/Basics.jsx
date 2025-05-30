import React from 'react'


const BasicsCard = ({basic}) => {
  
  return (
    <>
    <div className='flex flex-col items-center justify-between mt-5 pb-4 text-center w-[50vw] drop-shadow-2xl h-[20vh] bg-gray-100 rounded-lg sm:flex md:flex md:w-[40%] md:h-[40%] lg:h-[50vh] lg:w-[40%]' >
        <div className='bg-orange-300 h-[50%] w-full rounded-t-lg md:h-[50%] '></div>
        <h1 className='mb-2'>{basic}</h1>
      <p className='mt-0'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus doloribus 
        dignissimos nesciunt non obcaecati cum quis omnis tenetur mollitia? Ullam, maiores aspernatur</p>
    </div>
    </>
    
  )
}

export default BasicsCard
