import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeorder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Loginpopup from './components/Loginpopup/Loginpopup'
const App = () => {
  const [showLogin,setshowLogin] = useState(false)
  return (
    
      <>
      {showLogin?<Loginpopup setshowLogin={setshowLogin}/>:<></>}
      <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
      </>
     
  )
}

export default App
