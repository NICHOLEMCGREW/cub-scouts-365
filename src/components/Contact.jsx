import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook } from 'react-icons/fa';
import Form from './Form';

const Contact = () => {
  return (
    <section id="contact" className="contact flex items-center justify-center mb-1">
      <div className="contact-container flex flex-col md:flex-row items-center justify-around w-full max-w-screen-xl mx-auto">
        {/* Contact Details */}
        <div className="contact-details pr-8 text-left max-w-md mb-10 md:mb-0 p-6 border rounded-lg shadow-md">
          <h1 className="text-[#003f87] text-4xl font-bold mb-4">Contact Us</h1>
          <div className="line mb-7 w-16 border-t-4 border-yellow-400"></div>
          <div className="mb-4 flex items-center space-x-4">
            <FaPhone className="inline-block mr-2 text-[#003f87]" />
            <p className="text-gray-700">
              <a href="tel:YourPhoneNumber" className="text-[#003f87] hover:underline">555-555-555</a>
            </p>
          </div>
          <div className="mb-4 flex items-center space-x-4">
            <FaEnvelope className="inline-block mr-2 text-[#003f87]" />
            <p className="text-gray-700">
              <a href="mailto:pack365yukon@gmail.com" className="text-[#003f87] hover:underline">pack365yukon@gmail.com</a>
            </p>
          </div>
          <div className="mb-4 flex items-center space-x-4">
            <FaFacebook className="inline-block mr-2 text-[#003f87]" />
            <p className="text-gray-700">
              <a href="https://www.facebook.com/cubscoutpack365yukon/" target="_blank" rel="noopener noreferrer" className="text-[#003f87] hover:underline">cubscoutpack365yukon</a>
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="pr-8 max-w-md md:mb-0 w-full mx-auto p-6 bg-white border rounded-lg shadow-md mb-10">
          <h1 className="text-[#003f87] text-4xl font-bold mb-4">Join Us</h1>
          <div className="line mb-7 w-16 border-t-4 border-yellow-400"></div>
          <p className="font-semibold text-gray-600 mb-4 text-center">
            We invite you to join us at a meeting to try it out.
          </p>
          <p className="text-gray-700 mb-2">
            <FaClock className="inline-block mr-2 text-[#003f87]" />
            Tuesday's at 7:00 PM
          </p>
          <p className="text-gray-700 mb-2">
            <FaMapMarkerAlt className="inline-block mr-2 text-[#003f87]" />
            Grace Episcopal Church, 600 N Mustang Rd, Yukon, OK, 73099
            {' '}
            <a
              href="https://maps.google.com/?q=Grace+Episcopal+Church,600+N+Mustang+Rd,Yukon,OK,73099"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#003f87] hover:underline"
            >
              (Google Maps)
            </a>
          </p>
          <p className="text-center font-semibold mt-4 text-gray-600">
            Experience the fun and adventure of Cub Scouting. Contact us for more details!
          </p>
        </div>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
