import React, { useEffect, useState } from 'react'
import hero from "../assets/images/hero-img.png"
import { Link } from 'react-router-dom'
import { Service } from '../Components/Services/Service'
import Serprdlist from '../Components/ProduitTendance/Serprdlist'
import products from "../assets/data/products"
import Servmeublist from '../Components/Meubles/Servmeublist'
import Populairlist from '../Components/Prodwacth/Populairlist'
import { Phoneliste } from '../Components/Phones/Phoneliste'

const Home = () => {
  
  const[data,setData]=useState([])
  const[Sells,setSells]=useState([])
  const[phone,setPhone]=useState([])
  const[watch,setWatch]=useState([])

  useEffect(()=>{
    const filteProd=products.filter((item)=>item.category==="chair");
    const filtesels=products.filter((item)=>item.category==="sofa");
    const filphone=products.filter((item)=>item.category==="mobile");
    const filwatch=products.filter((item)=>item.category==="watch");

    setData(filteProd);
    setSells(filtesels);
    setPhone(filphone);
    setWatch(filwatch)
  },[])
  const ann= new Date().getFullYear()
  return (
    <div >
    <div className='bg-[#9aaebc] w-full h-[80vh] md:h-[40vh] lg:h-[80vh] '>
      <div className='flex items-center justify-between px-12 md:px-24 py-24  '>
        {/* ------------------left---------------------- */}
        <div className='flex flex-col w-96 gap-3'>
        <p className='text-white font-bold text-xs'>Produit Tendance en {ann}</p>
        <h1 className='font-bold'>Make Your interior More Minimalist & Moderne</h1>
        <p className='text-white font-bold text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam numquam incidunt. Tenetur, molestiae placeat.</p>
        <button className='p-2 rounded-sm w-28 bg-black text-white hover:translate-y-1 duration-500'><Link to="/shop"> Shop Now</Link></button>
        </div>
        {/* ----------right------------------- */}
        <div className='hidden md:flex w-[40%] '>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
      <Service />
      {/* ------------------serprod---------------- */}
      <div className='mt-16'>
      <h2 className='text-center '>Produit Tendance en {ann}</h2>
      <Serprdlist data={data}/>
      </div>
      {/* -------------------listprod---------------- */}
      <div className='mt-16'>
      <h2 className='text-center '>Best sells in {ann}</h2>
      <Servmeublist Sells={Sells} />
      </div>
       {/* -------------------Phone---------------- */}
       <div className='mt-16'>
      <h2 className='text-center '>New arrival in {ann}</h2>
      <Phoneliste phone={phone}/>
      </div>
       {/* -------------------produitpopulairewatch---------------- */}
       <div className='mt-16'>
      <h2 className='text-center '>Produit Populaire en {ann}</h2>
      <Populairlist watch={watch}/>
      </div>
    </div>
  )
}

export default Home
