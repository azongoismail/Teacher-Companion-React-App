import React from 'react'
import Links from './Links'
import Socials from './Socials'
import Email from './Email'

const Footer = () => {
  return (
    <>
    <div className='bg-blue-600 flex flex-col items-center justify-center p-6 sm:flex sm:flex-row sm:items-center sm:justify-around lg:justify-around'>
        <Email />
        <Socials />
        <Links/>

    </div>
    </>
    
  )
}

export default Footer
