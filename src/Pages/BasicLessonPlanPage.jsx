import React from 'react'
import LessonPlan from '../components/LessonPlan'

const BasicLessonPlanPage = () => {
  return (
    <div className='flex flex-1 flex-wrap gap-4 mx-auto lg:w-[40vw]'>
        <LessonPlan subject="Science" topic="Reproduction"/>
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

export default BasicLessonPlanPage
