import React from 'react'
import {Link} from 'react-router-dom'

const Links = () => {
  return (
   <>
   <div>
    <p> <Link to='/' className='cursor-pointer text-white text-lg'>Home</Link></p>
    <p> <Link to='basics'className='cursor-pointer text-white text-lg'>Basics</Link></p>
    <p> <Link to='lesson plan'className='cursor-pointer text-white text-lg'>Lesson Plan</Link></p>
    <p> <Link to='contact'className='cursor-pointer text-white text-lg'>Contact</Link></p>
    
   </div>
   </>
  )
}

export default Links
