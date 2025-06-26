import React from 'react'
import {useNavigate, Link} from 'react-router-dom';

const LessonPlanCard = ({subject, src}) => {
  const navigate = useNavigate();

  return (
   <>
   <div className='bg-[#fff] border-[#fff] shadow-lg w-[70vw] h-[30vh] rounded-lg ml-6 my-6 text-center drop-shadow-xl flex flex-col items-center justify-start text-center sm:w-2/3 lg:w-[40%] lg:h-[40vh]' >
   <div className='bg-orange-600 w-[100%] h-[50%] rounded-t-lg'>

   </div>
    <h2 className='text-lg font-bold color-silver'><Link to={src}>{subject}</Link></h2>
   </div>
   </>
  )
}

export default LessonPlanCard
