import React from 'react'
import { specialityData } from '../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

const SpecalityMenu = () => {
  return (
    <div id='#specalist' className='flex flex-col mx-4 my-16 gap-12 items-center ' >
      <h1 className='text-2xl'>Find Your Specalist </h1>
      <p>Simply dolor sit amet consectetur adipisicing elit. Ipsa, saepe. </p>
      <div className='flex gap-12  items-center sm:gap-6 overflow-x-scroll w-[90%] sm:w-auto p-4'>
        {specialityData.map((item,index)=>(
          <Link key={index} to={`/doctors/${item.speciality}`}>
            <img className='hover:translate-y-[-10px] duration-300' src={item.image} alt="" />
            <p className='text-xs text-center'>{item.speciality}</p>
   
          </Link>

        ))}
      </div>

  


    </div>
  )
}

export default SpecalityMenu