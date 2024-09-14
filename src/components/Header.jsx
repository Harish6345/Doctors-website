import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='bg-primary  h-auto  2xl:h-[25vw] mt-20 flex flex-col justify-evenly flex-wrap 2xl:flex-nowrap  sm:flex sm:flex-row rounded-lg'>
      <div className="first-half px-4 sm:px-2  sm:w-[35%] lg:w-[45%] 2xl:w-[45%] py-16 flex flex-col gap-6 sm:gap-14">
     <h1 className='text-xl  2xl:text-4xl text-white font-bold sm:leading-[3vw] '>Book  Appointment <br /> with  Trusted Doctors</h1>
     <div className="profiles flex gap-2 items-center w-[fit-content]">
   <img  src={assets.group_profiles} alt=""  /> <span className='text-white'>simply browse through our extensive list of trusted doctors, <br />shedule your appointement hassle-free.</span></div>
   <button id="specalist" className='flex items-center gap-2 w-[fit-content] p-4 sm:p-4 bg-slate-200 rounded-full text-[#303030] hover:scale-105 duration-300'> <a href="#specalist">Book your Appointment</a>  <img src={assets.arrow_icon} alt="" /> </button>
     </div> 
     <div className="sec-half flex">
      <img className='w-[100%]' src={assets.header_img} alt="" />
     </div>
    </div>
   
  )
}

export default Header