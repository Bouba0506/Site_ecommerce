import React from 'react'
import { motion } from "framer-motion"


const Populaircard = ({ watchlist }) => {

  return (
    <div className='px-16 flex gap-5 mt-5'>
      <div className='flex flex-col pb-5  bg-white shadow-lg w-60 '>
        <div className='w-60 mb-3'><motion.img whileHover={{ scale: 0.9 }} src={watchlist.imgUrl} alt="" /> </div>
        <h5 className='px-5 font-bold'>{watchlist.productName}</h5>
        <span className='px-5'>{watchlist.category}</span>
        <div className='flex w-full items-center justify-between px-5 pb-3'>
          <p className='font-bold'>${watchlist.price}</p>
          <motion.div whileHover={{ scale: 0.9 }} className=' bg-black p-1 flex items-center justify-center  h-8 w-8 text-xl text-white rounded-full' ><i class="ri-add-line"></i></motion.div>
        </div>
      </div>

    </div>
  )
}

export default Populaircard