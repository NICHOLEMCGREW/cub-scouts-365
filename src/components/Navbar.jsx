// Navbar.jsx
import React, { useState } from 'react';
import logo from '../assets/imgs/logo.png';
import { FaBars, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Events", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const mainBlueColor = '#003f87';

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0">
      <div className={`md:px-10 py-4 px-7 md:flex justify-between items-center bg-${mainBlueColor} text-white`}>
        {/* logo  */}
        <div className="flex text-2xl cursor-pointer items-center gap-2">
          <img
            src={logo}
            alt="Pack 365 Logo"
            className="w-8 h-8 text-white"
          />
          <span className="font-semibold">Cub Scouts Pack 365</span>
        </div>

        {/* menu icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </div>

        {/* nav links  */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-${mainBlueColor} md:z-auto z-[-1] left-1/2 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 transform -translate-x-1/2 text-center' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className={`md:ml-8 text-xl md:my-0 my-7 ${link.name === 'Contact' ? 'border p-2 border-yellow-400 transition-all duration-500' : ''}`}>
              <a href={link.link} className={`text-white hover:text-yellow-400 duration-500`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
