import React from 'react'
import { FaDownload } from "react-icons/fa6";
const Button = () => {
  return (
    <div>
      <button className='flex justify-center items-center bg-[#009A00] w-[60%] mx-auto py-2 px-6 my-6  text-center text-white text-lg cursor-pointer sm:w-[80%] md:w-[80%]'>
                  Download
                <FaDownload className='ml-4'/>
      </button>
    </div>
  )
}

export default Button
