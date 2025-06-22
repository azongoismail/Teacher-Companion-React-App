import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='flex min-h-[70vh] justify-center'>
        <form >
            <h1>Sign up</h1>
            <p> Already have an account? <Link to='/signin'>Sign in</Link></p>
            <div className='flex flex-col max-w-full'>
                <input className=' bg-white py-4 px-3 mt-4 ' placeholder='name' type="text" />
                <input className=' bg-white py-4 px-3 mt-4 ' placeholder="email" type="email" />
                <input className=' bg-white py-4 px-3 mt-4 ' placeholder=" password" type="password" />
                <button className=' bg-blue-600 py-4 px-3 mt-4 text-white ' type="submit"><Link to='/'>Sign up</Link></button>
            </div>
        </form>
    </div>
  )
}

export default Signup
