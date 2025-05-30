import React from 'react'

const Form = () => {
  return (
    <>
    <form action="" className='flex flex-col'>
        <input className='bg-white px-4 py-5 mt-6' type="text" placeholder=' Your name' />
        <input className='bg-white px-4 py-5 mt-6' type="email" placeholder='Your email address' />
        <textarea name="" id="" className='bg-white mt-6'>
           
        </textarea>
        <button className='bg-blue-600 mt-6 px-4 py-4 text-lg text-white font-bold mb-4' >Send</button>
    </form>
    </>
  )
}

export default Form
