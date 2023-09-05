import React from 'react'
import { motion } from "framer-motion"
// import Logo from "../../assets/images/eco-logo.png"
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='w-full bg-[#232b54] mt-5'>
      <div className='flex flex-col px-16 py-5'>
        <div className='flex items-center flex-wrap gap-9 lg:gap-3  w-full text-white '>
          <div className='flex flex-col w-80 gap-2'>
              <h3 className='font-bold'>Multimarket</h3>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla sed sapiente totam voluptatibus. Doloremque.</p>
            <motion.button whileHover={{ scale: 0.9 }} className='p-2 bg-black text-white rounded-md w-52'>Contactez-Nous</motion.button>
          </div>
          <div className='flex flex-col w-60 gap-2'>
            <h3 className=' font-bold'>Nos Produits</h3>
            <span><Link to="/shop">Shop</Link></span>
            <span><Link to="/login">Login</Link></span>
            <span><Link to="/cart">Cart</Link></span>
            <span><Link to="/prod">Produits</Link></span>
          </div>
          <div className='flex flex-col w-60 gap-2'>
            <h3 className=' font-bold'>Nos Service</h3>
            <span>Dev Web</span>
            <span>FrontEnd</span>
            <span>BackEnd</span>
            <span>Full Stack</span>
          </div>
          <div className='flex flex-col w-60 gap-2'>
            <h3 className=' font-bold'>Reseaux Socio</h3>
            <span className='flex items-center gap-1'><i class="ri-linkedin-box-fill"></i> Linkedin</span>
            <span className='flex items-center gap-1'><i class="ri-instagram-line"></i> Instagram</span>
            <span className='flex items-center gap-1'><i class="ri-twitter-fill"></i> Twitter</span>
            <span className='flex items-center gap-1'><i class="ri-facebook-box-fill"></i> Facebook</span>
          </div>
        </div>
        <p className='lg:text-center py-2 mt-2'>CopyWrite developed by bahboubacar &copy; 2023</p>
      </div>
    </div>
  )
}
