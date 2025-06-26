import React from 'react'
import { Link} from 'react-router-dom';

const LessonPlanCard = ({subject, src}) => {
 

  return (
   <>
   <div className='bg-[#fff] border-[#fff] shadow-lg w-[50vw] h-[40vh] rounded-lg ml-6 my-6 text-center  flex flex-col items-center justify-start text-center sm:w-2/3 lg:w-[20%] lg:h-[40vh]' >
   <div className='bg-orange-600 w-[100%] h-[50%] rounded-t-lg'>

   </div>
    <h2 className='text-xl font-open-sans color-red-600'><Link to={src}>{subject}</Link></h2>
   </div>
   </>
  )
}

export default LessonPlanCard
