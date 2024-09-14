  import React, { useContext } from 'react';

  import { useNavigate } from 'react-router-dom';
  import { AppContext } from '../context/AppContext';


  const Topdoctors = () => {
    const navigate =useNavigate();
    const {doctors} =useContext(AppContext)
    return (
      <div className='flex flex-col gap-4 justify-center items-center '>
        <h1 className='text-3xl text-center py-2'>Top Doctors to Book</h1>
        <p className='text-center'>Simply browse through our extensive list of doctors</p>
        <div className="container w-full grid grid-cols-auto gap-6 py-6 "> {/* Use your custom grid class here */}
          {doctors.slice(0, 10).map((props, index) => (
            <div key={index} onClick={()=>navigate(`./appointement${props._id}`)} className="flex items-center flex-col ">
              <img className="bg-slate-200 hover:translate-y-[-10px] hover:bg-blue-500 rounded-lg duration-300 overflow-hidden border border-[#c0c0c0c0]" src={props.image} alt={props.name} />
              <div className="available flex items-center gap-2">
                <p className="w-2 h-2 bg-green-600 rounded-full"></p>
                <p className="text-green-600">Available</p>
              </div>
              <p>{props.name}</p>
              <p>{props.speciality}</p>
            </div>
          ))}
        </div>
        <button onClick={()=>navigate('./doctors',scroll(0,0))} className=' bg-[#c0c0c0c0] px-12 py-4 rounded-full my-10 border '>More</button>
      </div>
    );
  }

  export default Topdoctors;
