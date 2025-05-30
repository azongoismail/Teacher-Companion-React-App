import React from 'react'
import LessonPlanPage from '../components/LessonPlanPage'
import Assessment from '../components/Assessment'
import { Link } from 'react-router-dom'

const Basic8 = () => {
  return (
    <div className='flex flex-1 flex-col mx-auto py-4 sm:flex-row md:gap-10 '>
     <Link to='/basicLessonPlanPage'>
     <LessonPlanPage />
     </Link> 
      <Link to='/basic8AssessmentPage'>
      <Assessment />
      </Link>
    </div>
  )
}

export default Basic8
