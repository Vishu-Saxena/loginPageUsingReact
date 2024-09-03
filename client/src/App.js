import React from 'react'
import Navbar from './Navbar'
import Registration from './Registration'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/register' element={<Registration/>}  />
        <Route path='/login' element={<Login/>} />
      </Routes>
      
    </div>
  )
}

export default App
