import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
  const [userData,setUserData]=useContext(AuthContext)

  const [tasktitle,setTaskTitle]=useState('')
  const [taskDescription,setTaskdescription]=useState('')
  const [taskDate,setTaskDate]=useState('')
  const [assignTo,setAsignTo]=useState('')
  const [category,setCategory]=useState('')

  const [newTask,setNewTask]=useState({})


  const submitHandler=(e)=>{
    e.preventDefault()

    setNewTask({tasktitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
  //  console.log(task)

  const data=userData
  console.log(data)
  data.forEach(function(elem){
    if(assignTo==elem.firstName){
    elem.tasks.push(newTask)

    console.log(elem)
  }
  })

  setUserData(data)
  console.log(data)

  

  setTaskTitle('')
  setCategory('')
  setAsignTo('')
  setTaskDate('')
  setTaskdescription('')
    
  }
  return (
   <div className="min-h-screen bg-[#0f172a] text-white p-6">
         
         {/* Main Container */}
         <div className="mt-10 flex items-center justify-center">
           
           {/* Form Card */}
           <div className="w-full max-w-5xl bg-[#1e293b]/90 backdrop-blur-lg border border-slate-700 rounded-3xl shadow-[0_0_40px_rgba(6,182,212,0.15)] p-8">
             
             <h1 className="text-4xl font-bold mb-8 text-center">
               Create New Task
             </h1>
   
             <form onSubmit={(e)=>{
              submitHandler(e)
             }

             } className="grid grid-cols-1 md:grid-cols-2 gap-8">
               
               {/* Left Side */}
               <div className="space-y-6">
   
                 <div>
                   <h3 className="text-lg font-semibold mb-2">
                     Task Title
                   </h3>
   
                   <input value={tasktitle} className="w-full bg-[#334155] border border-slate-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none rounded-xl px-4 py-3 text-white placeholder:text-gray-400 transition-all duration-300"
                   onChange={(e)=>{
                   setTaskTitle(e.target.value)
                   }}
                     type="text"
                     placeholder="Enter task title"
                     
                   />
                 </div>
   
                 <div>
                   <h3 className="text-lg font-semibold mb-2">
                     Date
                   </h3>
   
                   <input value={taskDate}
                   onChange={(e)=>{
                   setTaskDate(e.target.value)
                   }}
                     type="date"
                     className="w-full bg-[#334155] border border-slate-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none rounded-xl px-4 py-3 text-white placeholder:text-gray-400 transition-all duration-300"
                   />
                 </div>
   
                 <div>
                   <h3 className="text-lg font-semibold mb-2">
                     Assign To
                   </h3>
   
                   <input value={assignTo}
                   onChange={(e)=>{
                   setAsignTo(e.target.value)
                   }}
                     type="text"
                     placeholder="Employee name"
                     className="w-full bg-[#334155] border border-transparent focus:border-blue-500 outline-none rounded-xl px-4 py-3 text-white placeholder:text-gray-400"
                   />
                 </div>
   
                 <div>
                   <h3 className="text-lg font-semibold mb-2">
                     Category
                   </h3>
   
                   <input value={category}
                   onChange={(e)=>{
                   setCategory(e.target.value)
                   }}
                     type="text"
                     placeholder="Design, Dev, Marketing..."
                     className="w-full bg-[#334155] border border-slate-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none rounded-xl px-4 py-3 text-white placeholder:text-gray-400 transition-all duration-300"
                   />
                 </div>
   
               </div>
   
               {/* Right Side */}
               <div className="flex flex-col justify-between">
   
                 <div>
                   <h3 className="text-lg font-semibold mb-2">
                     Description
                   </h3>
   
                   <textarea value={taskDescription}
                   onChange={(e)=>{
                   setTaskdescription(e.target.value)
                   }}
                     cols="30"
                     rows="10"
                     placeholder="Write task details here..."
                    className="w-full bg-[#334155] border border-slate-600 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 outline-none rounded-xl px-4 py-3 text-white placeholder:text-gray-400 resize-none transition-all duration-300"
                   ></textarea>
                 </div>
   
                 <button
                   className="mt-6 w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:scale-[1.03] transition-all duration-300 text-white font-bold py-4 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.3)]"
                 >
                   Create Task
                 </button>
   
               </div>
   
             </form>
           </div>
         </div>
         
       </div>
  )
}

export default CreateTask
