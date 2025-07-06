import React from 'react'
import { FaDownload } from "react-icons/fa6";
const Button = ({fileUrl, fileName}) => {
const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  return (
    <div>

      <button  onClick={handleDownload} className='flex flex-row justify-center items-center bg-[#009A00] w-[60%] mx-auto py-2 my-6  text-center text-white text-lg cursor-pointer sm:w-[50%] md:w-[50%]'>
                  Download
                <FaDownload className='ml-4'/>
      </button>
    </div>
  )
}

export default Button
