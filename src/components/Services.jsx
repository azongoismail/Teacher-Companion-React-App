import React from 'react'

const Services = () => {
  return (
    <>
    <section className='bg-[#EFDB96] p-6'>
       <div className='flex items-center justify-center '>
        <h1 className='text-[32px] font-bold'>Our Service</h1>
       </div>
       <div className='flex items-center justify-center gap-3 flex-col sm:flex sm:flex-row sm:text-lg md:flex md:flex-row md:items-center md:justify-around'>
        <h2 className='text-lg'> Lesson Plans</h2>
        <h2 className='text-lg'> Exam Tools</h2>
        <h2 className='text-lg'> GES Letters</h2>
       </div>
       <div className='flex items-center justify-center gap-3 flex-col sm:flex sm:flex-row sm:text-lg md:flex md:flex-row md:items-center md:justify-around'>
        <h2 className='text-lg'> Assessment</h2>
        <h2 className='text-lg'> Pass Papers</h2>
        <h2 className='text-lg'> TextBooks</h2>
       </div>
    </section>
    </>
  )
}

export default Services;
