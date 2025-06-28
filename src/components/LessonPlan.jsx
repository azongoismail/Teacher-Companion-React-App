import React from 'react'
import { Link } from 'react-router-dom';
import Button from './Button';

const LessonPlan = ({subject, topic}) => {
  const url ="https://bptzzgsrpecbtpvskihl.supabase.co/storage/v1/object/sign/lessonplan/lesson%20plan/B7-Lesson-Plan-Science.docx?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zOWM3MWExZC02ZGEzLTQ5ZWItOWU5Yy1jYTg3YjA3Zjc5YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsZXNzb25wbGFuL2xlc3NvbiBwbGFuL0I3LUxlc3Nvbi1QbGFuLVNjaWVuY2UuZG9jeCIsImlhdCI6MTc1MTE0OTgzNCwiZXhwIjoyMDY2NTA5ODM0fQ.4ukvyUojAwdGxTAIb57xKDU1ycZejNrHVlnvGOFXWPA"
  return (
    <>
    <div className=' flex flex-col items-between text-center shadow-lg h-[40vh] w-[60vw] mx-auto my-4 rounded-lg sm:flex-col sm:w-[40vw] sm:text-center md:w-[40vw] md:flex-col lg:w-[40%]'>
        <div className='bg-[#169BD7] w-full h-[70%] rounded-t-lg'></div>
        <h1>{subject}</h1>
        <p>{topic}</p>
        <Button url={url}  fileName="B7-Lesson-Plan-Science.docx" />
    </div>
    </>
  )
}

export default LessonPlan
   