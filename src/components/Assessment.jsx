import React from 'react'
import {Link} from 'react-router-dom'

const Assessment = ({src}) => {
  return (
    <div className=' ml-4 mt-4 w-[60vw] h-[30vh] text-center rounded-lg shadow-lg sm:w-[20vw] sm:h-[50vh]'>
        <div className='bg-[#009A00] w-full h-[50%] mb-6 rounded-t-lg'></div>
       <h1> <Link to={src}>Assessment</Link></h1>
        <p>10 Resources</p>
      
    </div>
  )
}

export default Assessment
