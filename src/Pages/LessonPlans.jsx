import React from 'react'
import LessonPlan from '../components/LessonPlan'

const LessonPlans = () => {
  return (
    <div className='flex flex-1 flex-col justify-start gap-4 mx-auto sm:flex-row sm:flex-wrap md:flex-wrap lg:w-[60%]'>
      <LessonPlan  subject="science" topic=" energy"fileName="B7-Lesson-Plan-Science.docx" url="https://bptzzgsrpecbtpvskihl.supabase.co/storage/v1/object/sign/lessonplan/lesson%20plan/B7-Lesson-Plan-Science.docx?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zOWM3MWExZC02ZGEzLTQ5ZWItOWU5Yy1jYTg3YjA3Zjc5YTMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsZXNzb25wbGFuL2xlc3NvbiBwbGFuL0I3LUxlc3Nvbi1QbGFuLVNjaWVuY2UuZG9jeCIsImlhdCI6MTc1MTE0OTgzNCwiZXhwIjoyMDY2NTA5ODM0fQ.4ukvyUojAwdGxTAIb57xKDU1ycZejNrHVlnvGOFXWPA" />
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
    </div>
  )
}

export default LessonPlans;
