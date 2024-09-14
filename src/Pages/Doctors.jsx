import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Doctors() {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterdoc, setfilterdoc] = useState([]);
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setfilterdoc(doctors.filter(d => d.speciality === speciality));
    } else {
      setfilterdoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className='my-20'>
      <p className='text-center   text-xl'>
        Browse Through the Doctors Specialist
      </p>
      <div className='flex flex-col  gap-6 my-2 text-gray-600 sm:flex-row sm:flex-auto '>
        <div className='2xl:w-[15%] flex flex-col gap-2 py-6 flex-1 sm:flex-auto'>
          <p
            onClick={() =>
              navigate(speciality === 'General physician' ? '/doctors' : '/doctors/General physician')
            }
            className={`border-[#d0d0d0] border p-2 cursor-pointer ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              navigate(speciality === 'Gynecologist' ? '/doctors' : '/doctors/Gynecologist')
            }
            className={`border-[#d0d0d0] border p-2 cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              navigate(speciality === 'Dermatologist' ? '/doctors' : '/doctors/Dermatologist')
            }
            className={`border-[#d0d0d0] border p-2 cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              navigate(speciality === 'Pediatricians' ? '/doctors' : '/doctors/Pediatricians')
            }
            className={`border-[#d0d0d0] border p-2 cursor-pointer ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              navigate(speciality === 'Neurologist' ? '/doctors' : '/doctors/Neurologist')
            }
            className={`border-[#d0d0d0] border p-2 cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              navigate(speciality === 'Gastroenterologist' ? '/doctors' : '/doctors/Gastroenterologist')
            }
            className={`border-[#d0d0d0] border p-2 cursor-pointer`}
          >
            Gastroenterologist
          </p>
        </div>
        <div className='container w-full grid grid-cols-auto gap-6 py-6 cursor-pointer'>
          {filterdoc.map((doc) => (
            <div
              key={doc._id}
              onClick={() => navigate(`/appointments/${doc._id}`)}
              className="flex items-center flex-col"
            >
              <img
                className="bg-slate-200 hover:translate-y-[-10px] hover:bg-blue-500 rounded-lg duration-300 overflow-hidden border border-[#c0c0c0c0]"
                src={doc.image}
                alt={doc.name}
              />
              <div className="available flex items-center gap-2">
                <p className="w-2 h-2 bg-green-600 rounded-full"></p>
                <p className="text-green-600">Available</p>
              </div>
              <p>{doc.name}</p>
              <p>{doc.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;
