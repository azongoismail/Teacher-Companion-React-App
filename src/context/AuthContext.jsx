import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react';
import {supabase} from '../supabaseClient';
const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [session, setSession] = useState(undefined);
    // const [signout, setSignOut]= useState(true)
    const [user, setUser] = useState(null)

    //sign up new user
    const signUpNewUser = async (email, password) =>{
        const { data, error} = await supabase.auth.signUp({
            email:email,
            password:password,
        }); 

        if(error) {
            console.error("sign up error:",error)
            return { success: false, error}
        }
        return {success:true, data}

    }
    // useEffect
    useEffect(()=>{
    supabase.auth.getSession().then(({data: {session} })=>{
      setSession(session)
      setUser(session?.user || null)
     
     
      
    });

    supabase.auth.onAuthStateChange(( _event, session) =>{
      setSession(session);
     setUser(session?.user || null)
     
    });
  
     
  },[]);

  // sign in user
  const signInUser = async  (email, password) =>{
    try {
        const { data, error} = await supabase.auth.signInWithPassword({
            email:email,
            password:password,
        });
        if (error) {
            console.error("sign in error occurred:", error)
            return { success:false, error: error.message}
        }
        console.log("sign-in success:", data);
        return { success:true, data};
    } catch (error) {
        console.error("an error occurred:", error);

    }


  }

  // sign out 

  const signOut = () =>{
    const { error}= supabase.auth.signOut();
    if(error) {
        console.error("there was an error:",error)
    }
    // setSignOut(false);
    setUser(null)
  };

    return(
        <AuthContext.Provider value={{session,signUpNewUser, signInUser, signOut, user}}>
        {children}
        </AuthContext.Provider>
    ) 
}







 export const UserAuth = () =>{
    return useContext(AuthContext)
}