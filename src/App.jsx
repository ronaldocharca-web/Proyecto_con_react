import React from 'react'
import { NavBar } from './components/NavBar'

import { Navigate, Routes , Route } from 'react-router-dom'

import {HomeSrceen} from './routes/HomeSrceen'
import { AboutScreen } from './routes/AboutScreen'
import { ContactSrceen } from './routes/ContactSrceen'
const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
        <Route path='/' element={<HomeSrceen></HomeSrceen>}></Route>
        <Route path='/about' element={<AboutScreen></AboutScreen>}></Route>
        <Route path='/contact' element={<ContactSrceen></ContactSrceen>}></Route>
        <Route path='*' element={<Navigate to='/'></Navigate>}></Route>
    </Routes>
    </>
  )
}

export default App
