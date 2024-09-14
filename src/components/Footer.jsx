import React from 'react'
import {assets} from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className=''> 
    <div className='2xl:grid 2xl:grid-cols-[3fr_1fr_1fr] flex flex-col flex-wrap px-8 md:p-0 gap-8 my-8 border border-b-[#c0c0c0]'>
     <div className="logo-container ">
      <img className='py-4' src={assets.logo} alt="" />

      <p className='2xl:w-[70%] py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt iusto delectus officia dicta facere rem hic commodi sed, assumenda ad? Odit ratione aut ut, unde ducimus aspernatur magnam ipsum tenetur.</p>
     </div>
     <div className="text">
       <strong className='uppercase'>Company</strong>
       <ul className='my-6'>
        <li className='text-[#303030] py-1'>Home</li>
        <li className='text-[#303030] py-1'>About us</li>
        <li className='text-[#303030] py-1'>Contact us</li>
        <li className='text-[#303030] py-1'>Privacy Policy</li>
       </ul>
     </div>
   
     <div className="text">
       <strong className='uppercase'>Get in Touch</strong>
       <ul className='my-6'>
        <li className='text-[#303030] py-1'>+1 644-262-99988</li>
        <li className='text-[#303030] py-1'>Meduruharish77@gmail.com</li>
    
       </ul>
     </div>
    </div>
    <p className='text-center my-4'>Copyright 2024@ prescripto - All Rights Reccived </p>
    </div>
  )
}

export default Footer