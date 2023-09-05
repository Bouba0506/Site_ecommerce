import React from 'react'
import Serprod from './Serprod'

const Serprdlist = ({data}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pr-12 overflow-hidden '>
        {data.map((item)=>(
            <Serprod item={item}/>
        ))}
       
    </div>
  )
}

export default Serprdlist