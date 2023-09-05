import React from 'react'
import Populaircard from './Populaircard'

const Populairlist = ({watch}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pr-12'>
        {watch.map((watchlist,index)=>(
            <Populaircard watchlist={watchlist} key={index}/>
        ))}
    </div>
  )
}

export default Populairlist