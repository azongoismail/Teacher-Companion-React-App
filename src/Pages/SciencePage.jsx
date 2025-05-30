import React from 'react'
import LessonPlan from '../components/LessonPlan'

const SciencePage = () => {
  return (
    <div className='flex flex-1 mx-auto lg:w-[60%]'>
      <LessonPlan subject="Science" topic="Crop Production" src="https://drive.google.com/file/d/1-rqwMp_y6aXeZnG8MlsBBKiRwEGyLnbo/view?usp=drive_link"/>
      <LessonPlan subject="science" topic="Animal Production" src="https://drive.google.com/file/d/1-rqwMp_y6aXeZnG8MlsBBKiRwEGyLnbo/view?usp=drive_link"/>
     
    </div>
  )
}

export default SciencePage
