import React from 'react'
import {Route,Routes} from 'react-router-dom'

import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import './style.css';

const Routing = () => {
  return (
    <>
      <Routes>

    <Route path='/Cart' element={<Cart/>} />
    <Route path='/' element={<PlaceOrder/>} />
   </Routes>
    </>
  )
}

export default Routing
