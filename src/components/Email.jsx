import React from 'react'
import { FiMail,FiPhone } from "react-icons/fi";

const Email = () => {
  return (
    <>
    <div className=''>
        <h2 className='flex flex-row items-center gap-3 text-white text-lg' ><span><FiMail /></span>Teacherhub@gmail.com</h2>
        <h2 className='flex flex-row items-center gap-3 text-white text-lg'><span><FiPhone /></span>+233268903627</h2>

    </div>

    </>
  )
}

export default Email
