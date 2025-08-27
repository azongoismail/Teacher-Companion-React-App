import React,{useEffect, useState} from 'react'
import LessonPlan from '../components/LessonPlan'
import {supabase} from '../supabaseClient'


const LessonPlans = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // supabase.auth.getSession().then(({ data }) => {
    //   setSession(data.session);
    // });

    // supabase.auth.onAuthStateChange((_event, session) => {
    //   setSession(session);
    // });

    fetch("http://localhost:5000/api/files")
      .then(res => res.json())
      .then(data => {
     console.log(data)
        setFiles(data.data || [])
      });
 
  }, []);


  
  return (
    <>
    <div className='flex flex-1 flex-col justify-start gap-4 mx-auto sm:flex-row sm:flex-wrap md:flex-wrap lg:w-[60%]'>
  
  {files.map((file, index) => (
    <LessonPlan 
      key={index}
      subject="science" 
      topic="energy"
      fileName={file.file_name} 
      url={file.file_path} 
    />
  ))}
    </div>
    </>
   
  )
}

export default LessonPlans;


{/* <div className='flex flex-1 flex-col justify-start gap-4 mx-auto sm:flex-row sm:flex-wrap md:flex-wrap lg:w-[60%]'>
      <LessonPlan  subject="science" topic=" energy"fileName={files.data.data.file_name} url={files.data.file_path} />
      <LessonPlan subject="maths" topic="transformation" url="https://bptzzgsrpecbtpvskihl.supabase.co/storage/v1/object/sign/lessonplan/lesson%20plan/B8%20science_lesson_plan-term2.docx?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MmI5MTllNC0wMzUzLTQ4ZjgtOWUyNi05ODM2NDZjOTVmODIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsZXNzb25wbGFuL2xlc3NvbiBwbGFuL0I4IHNjaWVuY2VfbGVzc29uX3BsYW4tdGVybTIuZG9jeCIsImlhdCI6MTc1MTgwNzAyOSwiZXhwIjoyMDY3MTY3MDI5fQ.PWs4qhKNYVnp9Z7K0HqBEf_X1ISLFUXgM4MixI_8Jvc" />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
    </div> */}


    {/* <LessonPlan 
    subject="maths" 
    topic="transformation" 
    url="https://bptzzgsrpecbtpvskihl.supabase.co/storage/v1/object/sign/lessonplan/lesson%20plan/B8%20science_lesson_plan-term2.docx?token=..."
  /> */}