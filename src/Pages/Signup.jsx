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

    const validateEmail = (email) => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(email)) {
      return setError("Invalid Email");
    } else if (regEmail.test(email)) {
      return true;
    }
  };

    const handleNewUser = async (e) =>{
        e.preventDefault();
        setLoading(true);
        if(!email) {
            setError('enter your email')
        }
        if(!password) {
            setError('enter password');
        }

        if(!validateEmail(email)) {
            setError('enter valide email');
        } else {
             alert('you have successfully sign up');
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
        setEmail('');
        setPassword('');

    };

  return (
    <div  className=' bg-gray-100 flex min-h-[50vh] p-8 justify-center items-center w-[50vw] m-auto shadow-lg rounded-md sm:min-w-[50vw] md:min-w-[20vw] lg:w-[10%]  ' >
        <form onSubmit={handleNewUser}>
            <h1 className='text-2xl'>Sign up</h1>
            <p> Already have an account? <Link to='/signin'><span className='text-blue-600/75 underline'>Sign in</span></Link></p>
            <div className='flex flex-col max-w-full'>
                <input onChange={(e)=>setEmail(e.target.value)} className=' bg-white py-4 px-3 mt-4 ' placeholder="email" type="email" />
                <input onChange={(e)=> setPassword(e.target.value)} className=' bg-[#ffffff] py-4 px-3 mt-4 ' placeholder=" password" type="password" />
                <button className=' bg-blue-600 py-4 px-3 mt-4 text-white ' disabled={loading} type="submit">Sign up</button>
                {error && <p className="text-red-600 p-4 text-center">{error}</p>}
            </div>
        </form>
    </div>
  )
}

export default Signup;
