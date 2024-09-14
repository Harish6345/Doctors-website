import React from "react";
import { assets, doctors, specialityData } from "../assets/assets_frontend/assets";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
    {/* Hero Section */}
    <div className="container mx-auto text-center px-6">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4 leading-tight">
        About <span className="text-blue-600"></span>
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        We're more than a healthcare provider. We are a team committed to your wellness, combining expertise, cutting-edge technology, and compassionate care to deliver world-class medical services.
      </p>
      <div className="mt-8">
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>

    {/* Our Story Section */}
    <div className="bg-white py-16 mt-12">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/4">
          <img
            src={assets.about_image}
            alt="Our Story"
            className="rounded-lg shadow-lg w-full hover:scale-105 transform transition duration-300"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Established over two decades ago,  has grown from a small practice into a leading healthcare provider. Our commitment to excellence is reflected in our state-of-the-art facilities, experienced doctors, and a deep understanding of patient needs.
          </p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Today, we continue to deliver personalized and comprehensive care, ensuring every patient receives the treatment they deserve. Your health is our priority, and we’re with you every step of the way.
          </p>
        </div>
      </div>
    </div>

    {/* Mission & Values Section */}
    <div className="bg-gradient-to-b from-blue-600 to-blue-400 text-white py-16 mt-12">
      <div className="container mx-auto text-center px-6 lg:px-12">
        <h2 className="text-4xl font-bold mb-8">Our Mission & Core Values</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Mission */}
          <div className="bg-white text-blue-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg">
              To offer compassionate and reliable healthcare services through innovation, expertise, and dedication to improving lives, one patient at a time.
            </p>
          </div>
          {/* Values */}
          <div className="bg-white text-blue-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Integrity & Compassion</li>
              <li>Commitment to Excellence</li>
              <li>Patient-Centered Care</li>
              <li>Innovation & Adaptability</li>
              <li>Community Responsibility</li>
            </ul>
          </div>
          {/* Vision */}
          <div className="bg-white text-blue-600 p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg">
              To be a global leader in healthcare, where every patient has access to the best medical treatments, with a focus on well-being, technology, and trust.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Our Team Section */}
    <div className="container mx-auto py-16 px-6 lg:px-12 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Meet Our Experts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Team Member 1 */}
        {['Dr. Amelia Green', 'Dr. James Brown', 'Dr. Sarah Lee'].map((doctor, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105"
          >
     
            <h4 className="text-xl font-semibold text-gray-800">{doctor}</h4>
            <p className="text-gray-500">Specialist </p>
            <p className="text-gray-600 mt-4">
              With over 10 years of experience, {doctor} is dedicated to providing personalized care and the latest medical treatments.
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* Why Choose Us Section */}
    <div className="bg-gray-100 py-16 mt-12">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose ?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          At , we are committed to providing the highest standard of care. Our team of specialists, state-of-the-art technology, and compassionate approach ensures that every patient is treated with respect and dedication. Your health and well-being are our top priority.
        </p>
        <button className="bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
          Book an Appointment
        </button>
      </div>
    </div>
  </div>
  );
};

export default About;
