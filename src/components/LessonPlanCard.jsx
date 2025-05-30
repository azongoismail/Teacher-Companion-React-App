import React from 'react'

const LessonPlanCard = ({subject}) => {
  return (
   <>
   <div className='bg-orange-300 w-[70vw] h-[30vh] rounded-lg ml-6 my-6 text-center drop-shadow-2xl flex items-center justify-center sm:w-2/3 lg:w-[40%] lg:h-[40vh]' >
    <h2>{subject}</h2>
   </div>
   </>
  )
}

export default LessonPlanCard
