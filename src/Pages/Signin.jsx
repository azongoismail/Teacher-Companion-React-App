import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {UserAuth} from '../context/AuthContext';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const {session, signInUser} = UserAuth();
    const navigate = useNavigate();
    console.log(session)

    const handleSignIn = async (e) => {
        e.preventDefault()
        setLoading(true);
        try {
            const result = await signInUser(email, password)
            if(result.success) {
                navigate('/');
            }
        } catch(error) {
            setError("an error occurred");
        } finally {
            setLoading(false);
        }


    }

  return (
    <div className='flex min-h-[70vh] justify-center'>
        <form onSubmit={handleSignIn} >
            <h1>Sign in</h1>
            <p> Don't have an account? <Link to='/signup'>Sign up</Link></p>
            <div className='flex flex-col max-w-full'>
                <input onChange={(e)=>setEmail(e.target.value)} className=' bg-white py-4 px-3 mt-4 ' placeholder="email" type="email" />
                <input onChange={(e)=> setPassword(e.target.value)} className=' bg-white py-4 px-3 mt-4 ' placeholder=" password" type="password" />
                <button className=' bg-blue-600 py-4 px-3 mt-4 text-white' disabled={loading} type="submit">Sign in</button>
                {error && <p className=" text-red-600 p-4 text-center">{error}</p>}
            </div>
        </form>
    </div>
  )
}

export default Signin
