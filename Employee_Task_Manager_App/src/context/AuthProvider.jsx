import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getLocalStorage , setLocalstorage} from '../utilis/localStorage'

export const AuthContext=createContext()


const AuthProvider = ({children}) => {
  const [userData,setUserData]=useState(null)

  useEffect(()=>{
    setLocalstorage()
    const {employees}=getLocalStorage()
    setUserData(employees)
  },[])


    
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
             {children}

        </AuthContext.Provider>
     
    </div>
  )
}

export default AuthProvider
