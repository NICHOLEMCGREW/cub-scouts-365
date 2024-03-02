// Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/imgs/logo.png';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const mainBlueColor = 'bg-blue-500'; // Replace with the appropriate Tailwind color class

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`shadow-md w-full fixed top-0 ${mainBlueColor}`}>
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center text-white">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <img src={logo} alt="Pack 365 Logo" className="w-8 h-8 text-white" />
          <span className="font-semibold">Cub Scouts Pack 365</span>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static left-1/2 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 transform -translate-x-1/2 text-center' : 'top-[-490px]'}`}>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="/" className="text-white hover:text-yellow-400 duration-500">Home</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="/" className="text-white hover:text-yellow-400 duration-500">About</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a href="/" className="text-white hover:text-yellow-400 duration-500">Events</a>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 border p-2 border-yellow-400 transition-all duration-500">
            <a href="/" className="text-white hover:text-yellow-400 duration-500">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
