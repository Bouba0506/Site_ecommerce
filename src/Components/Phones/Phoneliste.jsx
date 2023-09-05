import React from 'react'
import { Phonecard } from './Phonecard'

export const Phoneliste = ({phone}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pr-12 '>
        {phone.map((phonelist)=>(
            <Phonecard phonelist={phonelist}/>
        ))}
    </div>
  )
}
