import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

const LessonPlan = ({subject, topic, url, fileName}) => {
 
  return (
    <>
    <div className=' flex flex-col items-between text-center shadow-lg h-[40vh] w-[60vw] mx-auto my-4 rounded-lg sm:flex-col sm:w-[40vw] sm:text-center md:w-[40vw] md:flex-col lg:w-[40%]'>
        <div className='bg-[#169BD7] w-full h-[70%] rounded-t-lg'></div>
        <h1> Subject: {subject}</h1>
        <p>Topic: {topic}</p>
        <p>{fileName}</p>
          <Button fileUrl={url} fileName={fileName} />
        
      
    </div>
    </>
  )
}

export default LessonPlan
   