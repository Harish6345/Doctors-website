import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4">Get In Touch With Us</h1>
          <p className="text-white text-lg lg:text-xl">
            We are here to assist you with any queries or concerns. Feel free to reach out!
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-lg mb-4">You can also reach us through the following details:</p>

            {/* Address Section */}
            <div className="flex items-center mb-6">
              <div className="p-4 bg-white rounded-full text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-7 8-11a8 8 0 10-16 0c0 4 8 11 8 11z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M12 14a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Address</h4>
                <p>1234 Medical Avenue, Health City, CA 90001</p>
              </div>
            </div>

            {/* Phone Section */}
            <div className="flex items-center mb-6">
              <div className="p-4 bg-white rounded-full text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.516l.65 2.605a2 2 0 01-.491 1.9l-1.036 1.036a16 16 0 006.586 6.586l1.036-1.036a2 2 0 011.9-.491l2.605.65a2 2 0 011.516 1.94V19a2 2 0 01-2 2h-1a16.001 16.001 0 01-16-16v-1z"></path></svg>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Phone</h4>
                <p>(123) 456-7890</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center">
              <div className="p-4 bg-white rounded-full text-blue-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12h.01M12 12h.01M8 12h.01M21 16.5A4.5 4.5 0 0116.5 21h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3h9A4.5 4.5 0 0121 7.5v9z"></path></svg>
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-lg">Email</h4>
                <p>Meduruharish77@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
