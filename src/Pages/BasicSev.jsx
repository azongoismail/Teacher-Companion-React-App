import React from 'react'
import LessonPlanPage from '../components/LessonPlanPage'
import Assessment from '../components/Assessment'
import { Link } from 'react-router-dom'


const BasicSev = () => {
  return (
    <>
    <div className=' flex flex-1 items-center justify-center flex-col mx-auto py-4 sm:flex-row md:gap-10'>
      <LessonPlanPage src="/lessonPlans" />
      <Assessment src="/basic7AssessmentPage"/>
    </div>
    </>
    
  )
}

export default BasicSev
