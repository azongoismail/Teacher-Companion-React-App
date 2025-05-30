import React from 'react'
import LessonPlanPage from '../components/LessonPlanPage'
import Assessment from '../components/Assessment'
import { Link } from 'react-router-dom'


const BasicSev = () => {
  return (
    <>
    <div className=' flex flex-1 items-center justify-center flex-col mx-auto py-4 sm:flex-row md:gap-10'>
      <Link to='/lessonPlans'> 
      <LessonPlanPage />
      </Link>  
      <Link to='/basic7AssessmentPage'>
      <Assessment/>
      </Link>
      
    </div>
    </>
    
  )
}

export default BasicSev
