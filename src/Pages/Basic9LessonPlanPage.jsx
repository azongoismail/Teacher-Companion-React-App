import React from 'react'
import LessonPlan from '../components/LessonPlan'

const Basic9LessonPlanPage = () => {
  return (
    <div className='flex flex-1 fex-row gap-4 flex-wrap mx-auto lg:w-[60%]'>
        <LessonPlan subject="Maths" topic="Sets" src="https://drive.google.com/file/d/1-UeMDtcaXfofWs0V-d_eJecMCoJDaDI1/view?usp=drive_link"/>
        <LessonPlan subject="Science" topic="Reproduction in Animal" src="https://drive.google.com/file/d/10DWpTbi3Tz7aLLfLU0k9aY3JeNqT_JNE/view?usp=drive_link" />
        <LessonPlan />
        <LessonPlan />
        <LessonPlan />
        <LessonPlan />
        <LessonPlan />
        <LessonPlan />
    </div>
  )
}

export default Basic9LessonPlanPage
