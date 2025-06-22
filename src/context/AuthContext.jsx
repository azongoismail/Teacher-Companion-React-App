import React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
const AuthContext = createContext();

const AuthContextProvider = ({children}) =>{
    const [session, setSession] = useState(undefined);

    return(
        <AuthContext.Provider value={session}>
        {children}
        </AuthContext.Provider>
    ) 
}

 export const UserAuth = () =>{
    return useContext(AuthContext)
}