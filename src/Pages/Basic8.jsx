import React from 'react'
import LessonPlanPage from '../components/LessonPlanPage'
import Assessment from '../components/Assessment'


const Basic8 = () => {
  return (
    <div className='flex flex-1 flex-col mx-auto py-4 sm:flex-row md:gap-10 '>
     <LessonPlanPage />
     <Assessment />
    </div>
  )
}

export default Basic8
