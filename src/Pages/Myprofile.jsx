import React, { useState } from 'react';
import {assets} from '../assets/assets_frontend/assets';

const Myprofile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Meduru H.T.G',
    email: 'Meduruharish77@gmail.com',
    phone: '123-456-7890',
    address: '1234 Elm Street, Some City, CA',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Simulate API call to save changes
    console.log('Profile updated:', formData);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 lg:py-16">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">My Profile</h1>
        <button
          onClick={handleEditToggle}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          {isEditing ? 'Cancel Edit' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Profile Image */}
        <div className="relative w-40 h-40 lg:w-52 lg:h-52 bg-blue-500 rounded-full overflow-hidden">
          <img
            src={assets.profile_pic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile Info / Form */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-6 lg:p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Personal Information</h2>
          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
              >
                Save Changes
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-600 font-medium">Name</h3>
                <p className="text-lg font-semibold">{formData.name}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">Email</h3>
                <p className="text-lg font-semibold">{formData.email}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">Phone</h3>
                <p className="text-lg font-semibold">{formData.phone}</p>
              </div>
              <div>
                <h3 className="text-gray-600 font-medium">Address</h3>
                <p className="text-lg font-semibold">{formData.address}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Account Settings */}
      <div className="mt-12 bg-white shadow-lg rounded-lg p-6 lg:p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Account Settings</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Change Password</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Reset Password
            </button>
          </div>
          <div className="flex justify-between items-center">
            <span>Delete Account</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myprofile;
