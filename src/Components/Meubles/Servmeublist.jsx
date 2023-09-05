import React from 'react'
import Servmeubcard from './Servmeubcard'

const Servmeublist = ({Sells}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 pr-10 lg:grid-cols-4  overflow-hidden'>
      {Sells.map((sell)=>(
        <Servmeubcard sell={sell} />
      ))}
    </div>
  )
}

export default Servmeublist