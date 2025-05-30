import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Frame from '../assets/Frame.png';
import { FaAlignJustify, FaX } from "react-icons/fa6";




const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <nav className=' bg-blue-600 flex  items-center justify-between  p-4 w-[100vw] h-[15vh] sm:flex '>
     <Link to='/' className=' hidden sm:block  '><img src={Frame} alt="" className='w-2xl' /></Link> 
     <button className=' block mx-[100px] sm:hidden cursor-pointer m-6 sm:absolute' onClick={ ()=>setShowMenu(!showMenu)}>
    {showMenu ? <FaAlignJustify className='size-10 absolute right-5 top-5'/> : <FaX className='size-10 mr-3 absolute right-5 top-5'/>}
  </button>
      <div className={`${showMenu ? 'hidden' : 'block mr-10'} sm:block sm:flex sm:items-center `} >
              <ul className='sm:flex sm:flex-row sm:space-x-5'>
                  <li >
                      <Link to="/" className='text-[20px] text-white font-medium sm:text-lg'>Home</Link>
                    
                  </li>
                  <li>
                      <Link to="/basics" className='text-[20px] text-white font-medium sm:text-lg'>Basics</Link>
                    
                  </li>
                  <li>
                      <Link to="/lesson plan" className='text-[20px] text-white font-medium sm:text-lg'>Lesson Plan</Link>
                      
                  </li>
                  <li>
                      <Link to="/contact" className='text-[20px] text-white font-medium sm:text-lg'>Contact</Link>
                      
                  </li>
              </ul>
      </div>   
   </nav>
    </>
  )
}

export default Navbar
