import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPop from './components/LoginPopup/LoginPop'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {setShowLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/Cart' element={<Cart/>}/>
         <Route path='/PlaceOrder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
    
  )
}

export default App