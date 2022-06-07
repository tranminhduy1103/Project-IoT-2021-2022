import React from 'react'
import { Router, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import MainPage from './components/MainPage/MainPage'
import Data from './components/Data/Data'
import { BrowserRouter ,  Route, Link } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      {/* <div className="page-container"> */}
        <Routes>
          <Route path='/' element = {<Login/>} exact/>
          <Route path='/sign-up' element = {<Logout/>}/>
          <Route path='/main' element = {<MainPage/>}/>
          <Route path='/data' element = {<Data/>}/>
        </Routes>
      {/* </div> */}
    </BrowserRouter>
    
  )
}

export default App