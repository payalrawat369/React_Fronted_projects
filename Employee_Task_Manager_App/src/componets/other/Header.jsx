import React, { useState } from 'react'
import { setLocalstorage } from '../../utilis/localStorage'

const Header = (props) => {
 /* const [username,setUsername]=useState('')

  if(!data){
    setUsername('admin')
  }else{
    setUsername(data.firstName)
  }
    */

const logOutUser=()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
 // window.location.reload()
}

  return (
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 bg-[#1e293b] p-6 rounded-3xl shadow-xl border border-slate-700">

    <div>
      <h1 className="text-gray-300 text-lg font-medium">
        Welcome Back 👋
      </h1>

      <h2 className="text-4xl font-bold mt-1 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        Username
      </h2>
    </div>

    <button
      onClick={logOutUser}
      className="bg-gradient-to-r from-red-500 to-rose-600 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
    >
      Logout
    </button>

  </div>
)
}

export default Header
