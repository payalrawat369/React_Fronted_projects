import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData]=useContext(AuthContext)
  console.log(userData.employees)
  return (
    <>
     
    <div className="mt-8 bg-[#1e293b]/95 backdrop-blur-lg border border-slate-700 p-6 rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.15)] text-white h-[550px]">

      {/* Heading */}
      <div className="flex items-center justify-between mb-6 sticky top-0 bg-[#1e293b] py-3 z-10">
        <h1 className="text-3xl font-bold">
          All Tasks
        </h1>

        <button className="bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
        </button>
      </div>

      {/* Table Header */}
      <div className="hidden md:flex bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl px-6 py-4 mb-4 font-semibold text-lg border border-slate-600">
        <h2 className="w-1/4">Employee Name</h2>
        <h3 className="w-2/4">New Task</h3>
        <h3 className="w-2/4">Active Task</h3>
        <h3 className="w-2/4">Completed Task Task</h3>
        <h3 className="w-2/4">Failed Task</h3>

      </div>

      <div className='overflow-y-auto'>
        {userData.map(function(elem , idx){
        return <div key={idx} className="hidden md:flex bg-[#334155]/80 border border-slate-700 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] rounded-2xl px-6 py-4 mb-4 font-semibold text-lg transition-all duration-300">
        <h2 className="w-1/4">{elem.firstName}</h2>
        <h3 className="w-2/4">{elem.taskNumbers.active}</h3>
        <h3 className="w-2/4">{elem.taskNumbers.newTask}</h3>
        <h3 className="w-2/4">{elem.taskNumbers.completed}</h3>
        <h3 className="w-2/4">{elem.taskNumbers.failed}</h3>
        
      </div>

      }


      )}
      </div>
      
      </div>
    </>
  )
}

export default AllTask