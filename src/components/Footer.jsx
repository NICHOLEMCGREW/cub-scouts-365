import React from 'react';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import bsaImage from '../assets/imgs/bsa.png';
import { Link } from 'react-router-dom'; // Assuming you are using React Router for navigation

const Footer = () => {
  return (
    <footer className="min-h-100px py-10 flex justify-center items-center flex-col border-t-2 border-yellow-400 bg-[#003f87]">
      <ul className="flex items-center mb-4">
        {/* Social Icons */}
        <li className="m-2">
          <a href="https://www.facebook.com/cubscoutpack365yukon?mibextid=dGKdO6" target="_blank" rel="noopener noreferrer" className="text-white text-3xl transition duration-500 hover:transform hover:-translate-y-2">
            <FaFacebook />
          </a>
        </li>
        <li className="m-2">
          <a href="#" className="text-white text-3xl transition duration-500 hover:transform hover:-translate-y-2">
            <img src={bsaImage} alt="BSA" className="w-8 h-8 object-contain" />
          </a>
        </li>
        <li className="m-2">
          <a href="mailto:pack365yukon@gmail.com" className="text-white text-3xl transition duration-500 hover:transform hover:-translate-y-2">
            <FaEnvelope />
          </a>
        </li>
      </ul>

      {/* Navigation Links */}
      <ul className="flex items-center">
        <li className="m-2 text-white text-lg hover:text-yellow-400 transition duration-500">
          <Link to="/">Home</Link>
        </li>
        <li className="m-2 text-white text-lg hover:text-yellow-400 transition duration-500">
          <Link to="/about">About</Link>
        </li>
        <li className="m-2 text-white text-lg hover:text-yellow-400 transition duration-500">
          <Link to="/events">Events</Link>
        </li>
        <li className="m-2 text-white text-lg hover:text-yellow-400 transition duration-500">
          <Link to="/contact">Contact</Link>
        </li>
        {/* Privacy Policy Link */}
        <li className="m-2 text-white text-lg hover:text-yellow-400 transition duration-500">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </li>
      </ul>

      {/* Additional HTML */}
      <hr className="border-white my-4" />

      {/* Copyright Section */}
      <div className="copyright text-left text-white">
        <p>&copy; 2024 Pack 365. All rights reserved | Site designed and maintained by <a href="https://nicholemcgrew.netlify.app" target="_blank" className="text-blue-500">Nichole McGrew.</a></p>
      </div>
    </footer>
  );
};

export default Footer;
