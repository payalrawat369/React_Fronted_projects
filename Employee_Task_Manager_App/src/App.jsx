
import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './componets/Auth/Login'
import AdminDashboard from './componets/Dashboard/AdminDashboard.jsx'
import EmployeeDashboard from './componets/Dashboard/EmployeeDashboard.jsx'
//import { getLocalStorage, setLocalstorage } from './utilis/localStorage.jsx'
import { AuthContext } from './context/AuthProvider.jsx'


function App() {

  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData]=useState(null)
  const [userData]=useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
  

 /*useEffect(()=>{
    if(authData){
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }


  },[authData] )

  
*/
 // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
 // const userRole = loggedInUser?.role;

  const handleLogin = (email,password)=>{
    if(email=='admin@gmail.com' && password=='123'){
      setUser({role:'admin'})
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(userData){
      const employee=userData.find((e)=>email == e.email && e.password == password)
      if(employee){
      setUser({role:'employee'})
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
      }
      }

    else{
      alert('invalid credentials')
    }
  }

  

  
  return (
    <>

    {!user ? <Login handleLogin={handleLogin} /> : ' '}

    {user?.role === 'admin' && <AdminDashboard changeUser={setUser}/>}

{user?.role === 'employee' && (
  <EmployeeDashboard data={loggedInUserData} changeUser={setUser} />
)}


   
    </>
  )
}

export default App
