import React from 'react'
import LessonPlanCard from '../components/LessonPlanCard'
import { Link } from 'react-router-dom'

const lessonPlan = () => {
  return (
    <div className='flex flex-1 flex-col items-center gap-3 mx-auto sm:justify-center md:flex-row md:flex-wrap md:w-[60%] lg:w-[60%] '>

        <LessonPlanCard subject={'Science'} src="/SciencePage"   />
        <LessonPlanCard subject={'Maths'} src="/mathPage" />
        <LessonPlanCard subject={'English Lang.'} src="/EnglishPage" />
        <LessonPlanCard subject={'Social Studies'} src="/SocialStudiesPage" />
        <LessonPlanCard subject={'RME'} src="/RMEpage"/>
        <LessonPlanCard subject={'CAD'} src="/CADpage" />
        <LessonPlanCard subject={'Career tech.'} src="/CareerTechPage" />
        <LessonPlanCard subject={'Computing'} src="/ComputingPage" />
    </div>
  );
};

export default lessonPlan;
