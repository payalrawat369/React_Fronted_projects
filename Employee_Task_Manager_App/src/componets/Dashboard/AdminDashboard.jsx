import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  return (
    <>
    <Header changeUser={props.changeUser}/>
    <CreateTask/>
    <AllTask/> 

    </>
  )
}

export default AdminDashboard