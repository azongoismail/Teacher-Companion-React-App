import React from 'react'
import LessonPlan from '../components/LessonPlan'
// import Image from '/Downloads/project.pdf';
const EnglishPage = () => {
  return (
    <div className='flex flex-1 fex-row gap-4 flex-wrap mx-auto lg:w-[60%]'>
      <LessonPlan  subject="English Lang." topic="Nouns" />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
    </div>
  )
}

export default EnglishPage
