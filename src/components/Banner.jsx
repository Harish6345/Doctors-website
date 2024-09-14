import React from 'react'
import {assets} from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate =useNavigate()
  return (
    <div className='bg-primary flex py-16 px-14 relative rounded-lg'>
    <div className="main-container w-[45%] flex-1 2xl:block">
    <h1 className='text-white text-4xl font-extrabold 2xl:leading-[3vw]'>Book Appointment <br /> With 100+ Trusted Doctors</h1>
    <button onClick={()=>navigate('./login',scroll(0,0))} className='bg-white rounded-full p-4  my-4'>Create Account</button>
</div>
<div className="hidden 2xl:block secondary-container absolute top-[-80px] right-[4%]  py-12 ">
  <img className='w-[50%] float-right'  src={assets.appointment_img} alt="" />
</div>
    </div>
  )
}

export default Banner