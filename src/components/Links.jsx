import React from 'react'
import {Link} from 'react-router-dom'

const Links = () => {
  return (
   <>
   <div>
    <p> <Link to='/' className='cursor-pointer text-white text-2xl'>Home</Link></p>
    <p> <Link to='basics'className='cursor-pointer text-white text-2xl'>Basics</Link></p>
    <p> <Link to='lesson plan'className='cursor-pointer text-white text-2xl'>Lesson Plan</Link></p>
    <p> <Link to='contact'className='cursor-pointer text-white text-2xl'>Contact</Link></p>
    
   </div>
   </>
  )
}

export default Links
