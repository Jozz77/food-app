import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import Landing from './Home-com/landing';
import Login from './loginPage/loginBody';
import Register from './Register/registerBody'
import Dashboard from './dashboard/dashboardBody'

function appRouter() {
  return (
    

        <Routes>
            <Route path='/home' element={
                <Landing />
            } />

             <Route path='/login' element={
                <Login />
            } />
             <Route path='/register' element={
                <Register />
            } />
            <Route path='/dashboard' element={
                <Dashboard />
            } />
        </Routes>
    
  )
}
export default appRouter
