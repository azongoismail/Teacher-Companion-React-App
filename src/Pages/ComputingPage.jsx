import React from 'react'
import LessonPlan from '../components/LessonPlan'
import Image from '/Downloads/Computing BS7.pdf';
const ComputingPage = () => {
  return (
    <div className='flex flex-1 fex-row gap-4 flex-wrap mx-auto lg:w-[60%] '>
      <LessonPlan subject="Computing" topic="Input Devices" src={Image} filename="Computing BS7.pdf"/>
      <LessonPlan />
      <LessonPlan />
      <LessonPlan />
    </div>
  )
}

export default ComputingPage
