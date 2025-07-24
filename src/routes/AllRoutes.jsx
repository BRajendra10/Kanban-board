import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Activity from '../components/Activity'
import Team from '../components/Team'
import Message from '../components/Message'
import Setting from '../components/Setting'
import { SignUp, ToDoForm } from '../components/Form'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Activity />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-to-do" element={<ToDoForm />} />
    </Routes>
  )
}

export default AllRoutes