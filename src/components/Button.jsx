import React from 'react'
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa6";
const Button = ({url, fileName}) => {
  return (
    <div>
      <Link to={url} download>
      <button  className='flex flex-row justify-center items-center bg-[#009A00] w-[60%] mx-auto py-2 my-6  text-center text-white text-lg cursor-pointer sm:w-[50%] md:w-[50%]'>
                  Download
                <FaDownload className='ml-4'/>
      </button>
      
      </Link>
      
    </div>
  )
}

export default Button
