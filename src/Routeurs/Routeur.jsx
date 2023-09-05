import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Shop from '../Pages/Shop'
import Signup from '../Pages/Signup'
import Checkout from '../Pages/Checkout'
import Proddetail from '../Pages/Proddetail'
import Cart from '../Pages/Cart'
export const Routeur = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/check' element={<Checkout/>}/>
            <Route path='/prod' element={<Proddetail/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}
export default Routeur
