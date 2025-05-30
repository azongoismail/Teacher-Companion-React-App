import React from 'react'
import LessonPlan from '../components/LessonPlan'

const MathPage = () => {
  return (
    <div className='flex flex-1 fex-row gap-4 flex-wrap mx-auto lg:w-[60%]'>
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
    </div>
  )
}

export default MathPage
