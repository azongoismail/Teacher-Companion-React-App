import React from 'react'
import LessonPlanPage from '../components/LessonPlanPage'
import Assessment from '../components/Assessment'
import { Link } from 'react-router-dom'


const Basic9 = () => {
  return (
    <div className='flex flex-1 flex-col  py-4  mx-auto sm:flex-row md:gap-10 '>
      <LessonPlanPage src="/basic9LessonPlanPage" />
      <Assessment src="/basic9AssessmentPage"/>
    </div>
  )
}

export default Basic9
