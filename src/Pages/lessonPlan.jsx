import React from 'react'
import LessonPlanCard from '../components/LessonPlanCard'
import { Link } from 'react-router-dom'

const lessonPlan = () => {
  return (
    <div className='flex flex-1 flex-col items-center gap-3 mx-auto sm:justify-center md:flex-row md:flex-wrap md:w-[60%] lg:w-[60%] '>
      <Link key='Science' to='/SciencePage'className='flex justify-center sm:w-[40%] md:w-[40%]'>
        <LessonPlanCard subject={'Science'} />
      </Link>
      <Link key='Maths' to='/MathPage' className='flex justify-center sm:w-[40%] md:w-[40%]'>
        <LessonPlanCard subject={'Maths'} />
      </Link>
      <Link key='English' to='/EnglishPage'className='flex justify-center sm:w-[40%] md:w-[40%]'>
        <LessonPlanCard subject={'English Lang.'} />
      </Link>
      <Link key='Social' to='/SocialStudiesPage' className='flex  justify-center sm:w-[40%] md:w-[40%] '>
        <LessonPlanCard subject={'Social Studies'} />
      </Link>
      <Link key='RME' to='/RMEPage' className='flex justify-center sm:w-[40%] md:w-[40%]'>
        <LessonPlanCard subject={'RME'} />
      </Link>
      <Link key='CAD' to='/CADPage'className='flex justify-center sm:w-[40%] md:w-[40%]'>
        <LessonPlanCard subject={'CAD'} />
      </Link>
      <Link key='CareerTech' to='/CareerTechPage' className='flex justify-center sm:w-[40%] md:w-[40%] '>
        <LessonPlanCard subject={'Career tech.'} />
      </Link>
      <Link key='Computing' to='/ComputingPage' className='flex justify-center sm:w-[40%] md:w-[40%] '>
        <LessonPlanCard subject={'Computing'} />
      </Link>
    </div>
  );
};

export default lessonPlan;
