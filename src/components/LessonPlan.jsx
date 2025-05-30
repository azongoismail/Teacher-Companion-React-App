import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

const LessonPlan = ({subject, topic, src, filename}) => {
  return (
    <>
    <div className=' flex flex-col items-between text-center border border-black h-[40vh] w-[60vw] mx-auto my-4 rounded-lg sm:flex-col sm:w-[20vw] sm:text-center md:w-[20vw] md:flex-col lg:w-[15%]'>
        <div className='bg-[#169BD7] w-full h-[70%] rounded-t-lg'></div>
        <h1>{subject}</h1>
        <p>{topic}</p>
        <Link to={src} download={filename} className=' flex items-center mx-auto ' target='blank'>
        <Button />
        </Link>
    </div>
    {/* <button className='flex justify-center  items-center bg-[#009A00] w-[60%] mx-auto py-2 px-2  text-center text-white text-lg cursor-pointer sm:w-[80%] md:w-[80%]'>
            Download
            <FaDownload className='ml-4' />
        </button> */}
    </>
  )
}

export default LessonPlan
   