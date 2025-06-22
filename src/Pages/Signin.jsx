import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div>
        <form >
            <h1>Sign in</h1>
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
            <div>
                <input placeholder='name' type="text" />
                <input placeholder="email" type="email" />
                <input placeholder=" password" type="password" />
                <button type="submit"><Link to='/'>Sign in</Link></button>
            </div>
        </form>
    </div>
  )
}

export default Signin
