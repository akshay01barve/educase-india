import React from 'react'
import LandingScreen from './Componet/LandingScreen'
import LoginScreen from './Componet/LoginScreen'
import SignupScreen from './Componet/SignupScreen'
import AccountSettings from './Componet/AccountSettings'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div>
         <BrowserRouter>
         <Routes>
           <Route path='/' element={<LandingScreen/>}/>
           <Route path='/LoginScreen' element={<LoginScreen/>}/>
           <Route path='/SignupScreen' element={<SignupScreen/>}/>
           <Route path='/AccountSettings' element={<AccountSettings/>}/>
           
         
          </Routes>
          </BrowserRouter>
      </div>
    </div>
  )
}

export default App