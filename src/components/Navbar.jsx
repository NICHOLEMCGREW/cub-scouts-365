// Navbar.jsx
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/imgs/logo.png';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const mainBlueColor = 'bg-[#003f87]'; // Replace with the appropriate Tailwind color class

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`shadow-md w-full fixed top-0 ${mainBlueColor}`}>
      <div className="md:px-10 py-4 px-7 md:flex justify-between items-center text-white">
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <ScrollLink to="home" smooth={true} duration={500} className="flex items-center text-white hover:text-yellow-400 duration-500 cursor-pointer">
            <img src={logo} alt="Pack 365 Logo" className="w-9 h-9 text-white" />
            <span className="font-semibold ml-3">Cub Scouts Pack 365</span>
          </ScrollLink>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static left-1/2 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 transform -translate-x-1/2 text-center' : 'top-[-490px]'}`}>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <ScrollLink to="home" smooth={true} duration={500} className="text-white hover:text-yellow-400 duration-500 cursor-pointer">Home</ScrollLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <ScrollLink to="about" smooth={true} duration={500} className="text-white hover:text-yellow-400 duration-500 cursor-pointer">About</ScrollLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <ScrollLink to="events" smooth={true} duration={500} className="text-white hover:text-yellow-400 duration-500 cursor-pointer">Events</ScrollLink>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 p-2 transition-all duration-500">
            <ScrollLink to="contact" smooth={true} duration={500} className="text-white hover:text-yellow-400 duration-500 cursor-pointer py-2 px-6 mt-2 text-[#003f87]  bg-yellow-400 hover:bg-[#003f87] border border-yellow-400 hover:border-yellow-400 rounded-full font-semibold text-lg transition duration-300 ease-in-out">
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
