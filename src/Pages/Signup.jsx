import React,  {  useState } from 'react';

import { UserAuth } from '../context/AuthContext';
import {Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const {session, signUpNewUser} = UserAuth();
    const navigate = useNavigate();
    console.log(session);

    const handleNewUser = async (e) =>{
        e.preventDefault();
        setLoading(true);
        if(!email) {
            setError('enter your email')
        }
        if(!password) {
            setError('enter password');
        }
        try {
            const result = await signUpNewUser( email, password);
            if(result.success){
                navigate('/');
            }


        } catch(error) {
            setError('an error occurred');

        } finally{
            setLoading(false);
        }

    };

  return (
    <div  className='bg-[#B1B2B5] flex min-h-[50vh] p-8 justify-center items-center w-[50vw] m-auto shadow-lg rounded-md ' >
        <form onSubmit={handleNewUser}>
            <h1>Sign up</h1>
            <p> Already have an account? <Link to='/signin'>Sign in</Link></p>
            <div className='flex flex-col max-w-full'>
                <input onChange={(e)=>setEmail(e.target.value)} className=' bg-white py-4 px-3 mt-4 ' placeholder="email" type="email" />
                <input onChange={(e)=> setPassword(e.target.value)} className=' bg-white py-4 px-3 mt-4 ' placeholder=" password" type="password" />
                <button className=' bg-blue-600 py-4 px-3 mt-4 text-white ' disabled={loading} type="submit">Sign up</button>
                {error && <p className="text-red-600 p-4 text-center">{error}</p>}
            </div>
        </form>
    </div>
  )
}

export default Signup;
