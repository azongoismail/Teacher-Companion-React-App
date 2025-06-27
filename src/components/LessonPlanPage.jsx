import React from 'react'
import { Link} from 'react-router-dom'

const LessonPlanPage = () => {
  return (
    <>
    <div className=' flex flex-col ml-4 mt-4 w-[60vw] h-[30vh] text-center shadow-lg rounded-lg sm:w-[20vw] sm:h-[50vh] '>
    <div className='bg-[#009A00] w-full h-[50%] mb-6 rounded-t-lg' ></div>
      <h1><Link to="/basicLessonPlanPage">Lesson Plans</Link></h1>
      <h3>120resources</h3>
    </div>
    </>
    
  )
}

export default LessonPlanPage
