import React from 'react'
import Button from './Button'

const Paper = ({subject, type, fileName, fileUrl}) => {
  return (
    <div className=' flex flex-col shadow-lg h-[40vh] w-[60vw] rounded-lg items-between text-center mx-auto my-4 sm:flex-col sm:w-[40vw] sm:text-center md:w-[40vw] md:flex-col lg:w-[40%]'>
        <div className='bg-[#169BD7] w-full h-[70%] rounded-t-lg' >
        </div>
        <h1>{subject}</h1>
        <p>{type}</p>
        <Button fileName={fileName} fileUrl={fileUrl}/>
    </div>
  )
}

export default Paper
