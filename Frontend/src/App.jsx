import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './components/Signup'



function App() {
  return (
    <>
    {/* </Home>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/courses" element={<Courses/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App