import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [relatedDoctors, setRelatedDoctors] = useState([]); // Related doctors state
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [isBooking, setIsBooking] = useState(false);

  // Fetch the doctor's info based on the provided doctor ID
  const fetchDocInfo = async () => {
    if (docId && Array.isArray(doctors)) {
      const foundDoc = doctors.find(doc => doc._id === docId);
      setDocInfo(foundDoc);
      if (foundDoc) {
        fetchRelatedDoctors(foundDoc.speciality); // Fetch related doctors with the same specialty
      }
    } else {
      console.error("Invalid docId or doctors array");
    }
  };

  // Fetch related doctors based on the specialty
  const fetchRelatedDoctors = (speciality) => {
    if (speciality && Array.isArray(doctors)) {
      const filteredDoctors = doctors.filter(
        doc => doc.speciality === speciality && doc._id !== docId // Exclude current doctor
      );
      setRelatedDoctors(filteredDoctors);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = async () => {
    if (!selectedDay || !selectedTime) {
      toast.warn('Please select both a day and time slot to book an appointment.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setIsBooking(true); // Start booking state (loading)

    // Simulate API call or appointment saving
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay for booking

    setIsBooking(false); // End booking state

    // Show booking confirmation toast
    toast.success(`Appointment booked with Dr. ${docInfo.name} on ${selectedDay} at ${selectedTime}.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Reset selection
    setSelectedDay('');
    setSelectedTime('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer /> {/* Toast container for notifications */}

      {docInfo ? (
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left section (Doctor Image) */}
          <div className="w-40 h-40 lg:w-52 lg:h-52 bg-blue-500 rounded-lg hover:scale-110 hover:bg-primary duration-300 overflow-hidden my-6">
            <img src={docInfo.image} alt={docInfo.name} className="w-full h-full object-cover" />
          </div>

          {/* Right section (Doctor Information) */}
          <div className="ml-6 flex-1 border border-[#d0d0d0] rounded-lg p-2">
            <h2 className="text-2xl font-bold mb-2">{docInfo.name}</h2>
            <p className="text-gray-500 text-sm mb-1">{docInfo.degree} - {docInfo.speciality}</p>
            <p className="text-gray-500 text-sm mb-3 border">{docInfo.experience} Years Experience</p>

            {/* About Doctor */}
            <p className="text-gray-700 mb-4">{docInfo.about}</p>

            {/* Appointment Fee */}
            <p className="text-lg">Appointment fee: <span className='font-semibold text-blue-600'>${docInfo.fees}</span></p>
          </div>
        </div>
      ) : (
        <p>Loading doctor information...</p>
      )}

      {/* Booking Slots */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Booking slots</h3>
        <div className="flex space-x-4">
          <div className="flex space-x-2">
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
              <button
                key={day}
                onClick={() => handleDaySelect(day)}
                className={`text-black border border-[#d0d0d0] px-3 py-2 rounded-lg ${selectedDay === day ? 'bg-blue-600 text-white' : ''}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {['8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am'].map(time => (
            <button
              key={time}
              onClick={() => handleTimeSelect(time)}
              className={`text-black border border-[#d0d0d0] px-3 py-2 rounded-lg ${selectedTime === time ? 'bg-blue-600 text-white' : ''}`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      {/* Book Appointment Button */}
      <div className="mt-8">
        <button
          onClick={handleBooking}
          disabled={isBooking} // Disable button while booking
          className={`bg-blue-600 text-white w-full py-3 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 ${isBooking ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isBooking ? 'Booking...' : 'Book an appointment'}
        </button>
      </div>

      {/* Related Doctors */}
      {relatedDoctors.length > 0 && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-4">Related Doctors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDoctors.map((doctor) => (
              <div key={doctor._id} className="border border-gray-200 p-4 rounded-lg shadow-sm my-6 cursor-pointer ">
                <img src={doctor.image} alt={doctor.name} className="w-full 2xl:h-52 h-full object-cover rounded-lg mb-4 hover:bg-primary hover:scale-90 duration-300" />
                <h4 className="text-lg font-semibold mb-1">{doctor.name}</h4>
                <p className="text-sm text-gray-500">{doctor.speciality}</p>
                <p className="text-sm text-gray-500">{doctor.experience} of Experience</p>
              
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
