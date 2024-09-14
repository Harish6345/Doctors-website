import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
const Navlink = () => {
  const navigate = useNavigate();
  const [token, settoken] = useState(true);
  return (
    <div className="flex justify-between h-[10%] items-center py-4 border-b-[1px] border-[#cccc]">
      <img onClick={(()=>navigate('./'))} className="w-44" src={assets.logo} alt="" />
      <ul className="md:flex gap-4 hidden">
        <NavLink to="/">
          <li>Home</li>
          <hr className="bg-blue-500 h-[4px] w-100 hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li>All Doctors</li>
          <hr className="bg-blue-500 h-[4px] w-100 hidden" />
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
          <hr className="bg-blue-500 h-[4px] w-100  hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li>Contact</li>
          <hr className="bg-blue-500 h-[4px] w-100  hidden" />
        </NavLink>
      </ul>
      {token ? (
        <div className="w-20 relative group flex items-center gap-2">
          <img className="w-12 rounded-full" src={assets.profile_pic} alt="" />
          <img  src={assets.dropdown_icon} alt="" />
          <div className="pop-up absolute bottom-[-95px] left-[-90px] pt-24 z-20 border-[1px]  px-4 hidden group-hover:block duration-300">
            <p onClick={()=>navigate('./Myprofile')}  className="cursor-pointer text-[#303030] hover:text-black hover:font-semibold">My-Profile</p>
            <p onClick={()=>navigate('./Myappointements')} className="cursor-pointer text-[#303030] hover:text-black hover:font-semibold">Appointments</p>
            <p onClick={()=>settoken(false)} className="cursor-pointer Hover:text-black text-[#303030] hover:text-black hover:font-semibold">Logout</p>
          </div>
        </div>
      ) : (
        <button onClick={()=>settoken(true)} className="bg-blue-500 text-xs sm:text-md px-4 py-4 rounded-full text-white">
          Create Account
        </button>
      )}
    </div>
  );
};

export default Navlink;
