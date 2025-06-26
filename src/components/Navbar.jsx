import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Frame from '../assets/Frame.png';
import { FaAlignJustify, FaX } from "react-icons/fa6";
import  {UserAuth} from '../context/AuthContext'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {signOut, user}= UserAuth();
  console.log(user);
  return (
    <>
    <nav className=' bg-blue-600 flex  items-center justify-between  p-4 w-[100vw] h-[25vh] sm:flex sm:h-[15vh]'>
     <Link to='/' className=' hidden sm:block  '><img src={Frame} alt="" className='w-2xl' /></Link> 
     <button className=' block mx-[100px] sm:hidden cursor-pointer m-6 sm:absolute' onClick={ ()=>setShowMenu(!showMenu)}>
    {showMenu ? <FaAlignJustify className='size-10 absolute right-5 top-5'/> : <FaX className='size-10 mr-3 absolute right-5 top-5'/>}
  </button>
      <div className={`${showMenu ? 'hidden' : 'block mr-10'} sm:block sm:flex sm:items-center `} >
              <ul className='sm:flex sm:flex-row sm:space-x-5'>
                  <li >
                      <Link to="/" className='text-base text-white font-medium sm:text-base font-sans'>Home</Link>
                    
                  </li>
                  <li>
                      <Link to="/basics" className='text-base text-white font-medium sm:text-base font-sans'>Basics</Link>
                    
                  </li>
                  <li>
                      <Link to="/lesson plan" className='text-base text-white  sm:text-base font-sans'>Lesson Plan</Link>
                      
                  </li>
                  <li>
                      <Link to="/contact" className='text-base text-white  sm:text-lg font-roboto'>Contact</Link>
                      
                  </li>
                  <li>
                      <Link to="/signup" className=' bg-red-600 text-base color-black text-white font-medium  inline-block py-2 px-4 sm:text-base '>Sign up</Link>
                      
                  </li>
                 {
                    user && (<p onClick={signOut} className=' inline-block border px-4 py-2 cursor-pointer text-base mt-4 sm:mt-0 md:mt-0 '>Sign Out</p>)
                 } 
              </ul>
      </div>   
   </nav>
    </>
  )
}

export default Navbar
