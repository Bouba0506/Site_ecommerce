import React, { useState } from 'react'
import logo from "../../assets/images/eco-logo.png"
import user from "../../assets/images/user-icon.png"
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
const Header = () => {
    const total=useSelector(state=>state.cart.totalquantite)
    const [users,setUsers]=useState(false)
    const handlclick=()=>{
        setUsers(!users)
    }
    return (
        <div className='mt-2 w-full bg-white shadow-2xl cursor-pointer  relative'>
            <div className=' flex items-center w-full bg-white gap-5 z-50 h-16 md:gap-12 px-8 md:px-20 fixed top-0 right-0 left-0 '>
                <div className='flex items-center gap-3'>
                    <div className='w-6 md:w-12'><img src={logo} alt="" /> </div>
                    <h1 className='text-xl font-bold'>Multimarket</h1>
                </div>
                <div className='flex items-center w-full ml-0 lg:ml-36 justify-between'>
                    <ul className='hidden md:flex  gap-5  items-center'>
                        <li className='text-2xl font-medium hover:text-gray-400 hover:-translate-y-1 duration-500'><Link to="/"> Home</Link></li>
                        <li className='text-2xl font-medium hover:text-gray-400 hover:-translate-y-1 duration-500'><Link to="/shop"> Shop</Link></li>
                        <li className='text-2xl font-medium hover:text-gray-400 hover:-translate-y-1 duration-500'><Link to="/cart"> Cart</Link></li>
                        
                    </ul>
                    <div className='flex items-center relative gap-4'>
                        <span><i class="ri-heart-line"></i><span className='absolute top-0 text-white rounded-full h-[15px] w-[15px] text-[0.7rem] flex items-center justify-center bg-red-800'>3</span></span>
                        <span><i class="ri-shopping-bag-fill"></i><span  className='absolute top-0 text-white rounded-full h-[15px] w-[15px] text-[0.7rem] flex items-center justify-center bg-red-800'>{total}</span></span>
                        <div className='w-12'><img src={user} alt="user" className='w-full hover:scale-75 duration-500'/> </div>
                    </div>
                </div>
                    <div className='flex md:hidden cursor-pointer text-2xl' onClick={handlclick}>
                        {users ? <i class="ri-close-line"></i> :<i class="ri-menu-line"></i> }
                        <span></span>
                    </div>


                <ul className={users ? 'flex flex-col md:hidden fixed left-0 top-[4rem]  bg-white shadow-lg py-10 h-screen gap-8 w-[30%] items-center': 'fixed left-[-100%] duration-500 top-[4rem]'}>
                <li className='text-2xl font-medium hover:text-gray-400 hover:-translate-y-1 duration-500'><Link to="/"> Home</Link></li>
                        <li className='text-2xl font-medium hover:text-gray-400 hover:-translate-y-1 duration-500'><Link to="/shop"> Shop</Link></li>
                        <li className='text-2xl font-medium hover:text-gray-400 hover:-translate-y-1 duration-500'><Link to="/cart"> Cart</Link></li>
                    </ul>
                    
            </div>
        </div>
    )
}

export default Header
