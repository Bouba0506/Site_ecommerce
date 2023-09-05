import React from 'react'
import {motion} from "framer-motion"
import serviceData from '../../assets/data/serviceData'
export const Service = () => {
  return (
    <div>
       <div className='mt-4 grid grid-cols-1 md:flex gap-5 px-8 md:px-5 items-center justify-center'>
        {serviceData.map((servic,index)=>(
             <motion.div whileHover={{scale:1.1}} className='flex items-center gap-2  w-80 md:w-60 rounded-md px-3' key={index} style={{background: `${servic.bg}`}}>
             <div className=' bg-black p-1.5 h-10 w-10 text-xl flex items-center justify-center text-white rounded-full'><i class={servic.icon} ></i></div>
             <div className='flex flex-col'>
                 <h3 className='text-xl '>{servic.title}</h3>
                 <p className='text-xs py-1 text-black'>{servic.subtitle}</p>
             </div>
             </motion.div>
        ))}
      
       </div>
    </div>
  )
}
