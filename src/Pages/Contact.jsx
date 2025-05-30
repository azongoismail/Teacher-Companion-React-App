import React from 'react'
import Email from '../components/Email'
import Socials from '../components/Socials'
import Form from '../components/Form'


const Contact = () => {
  return (
    <>
    <section className=' flex flex-col  flex-grow-1 items-center justify-between gap-4 sm:flex  sm:items-center sm:justify-around sm:flex-row lg:w-[60%] lg:mx-auto lg:justify-center'>
      {/* <h1 className='text-[32px] font-bold'>Contact Us</h1> */}
      <Form />
      <Email/>
      <Socials />
    </section>
    </>
  )
}

export default Contact
