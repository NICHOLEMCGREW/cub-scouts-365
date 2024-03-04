import React from 'react';
import { FaFacebook, FaTwitter, FaEnvelope } from 'react-icons/fa';
import bsaImage from '../assets/imgs/bsa.png';

const Footer = () => {
  const footerStyle = {
    position: 'relative',
    width: '100%',
    backgroundColor: '#003f87',
    minHeight: '100px',
    padding: '20px 50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderTop: '4px solid white',
  };

  const socialIconStyle = {
    fontSize: '2em',
    color: 'white',
    margin: '0 10px',
    display: 'inline-block',
    transition: '0.5s',
  };

  const bsaIconStyle = {
    width: '2em', // Adjust the width as needed
    height: '2em', // Adjust the height as needed
    margin: '0 10px',
    display: 'inline-block',
    transition: '0.5s',
  };

  const menuLinkStyle = {
    fontSize: '1.2em',
    color: 'white',
    margin: '0 10px',
    display: 'inline-block',
    opacity: 0.75,
    transition: 'opacity 0.5s',
  };

  const hoverMenuLinkStyle = {
    opacity: 1,
  };

  return (
    <footer className="min-h-100px py-10 flex justify-center items-center flex-col border-t-2 border-yellow-400 bg-[#003f87]">
      <ul style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
        <li style={{ margin: '0 10px' }}>
          <a href="https://www.facebook.com/cubscoutpack365yukon?mibextid=dGKdO6" target="_blank" rel="noopener noreferrer" style={socialIconStyle} className="text-white text-2xl transition duration-500 hover:transform hover:-translate-y-2">
            <FaFacebook />
          </a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a href="#" style={bsaIconStyle} className="text-white text-2xl transition duration-500 hover:transform hover:-translate-y-2">
            <img src={bsaImage} alt="BSA" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </a>
        </li>
        <li style={{ margin: '0 10px' }}>
          <a href="mailto:pack365yukon@gmail.com" style={socialIconStyle} className="text-white text-2xl transition duration-500 hover:transform hover:-translate-y-2">
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <ul style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
        <li style={{ margin: '0 10px', ...menuLinkStyle, ...hoverMenuLinkStyle }}>
          <a href="#" className="text-white text-lg  hover:text-yellow-400 transition duration-500">Home</a>
        </li>
        <li style={{ margin: '0 10px', ...menuLinkStyle, ...hoverMenuLinkStyle }}>
          <a href="#" className="text-white text-lg  hover:text-yellow-400 transition duration-500">About</a>
        </li>
        <li style={{ margin: '0 10px', ...menuLinkStyle, ...hoverMenuLinkStyle }}>
          <a href="#" className="text-white text-lg hover:text-yellow-400 transition duration-500">Events</a>
        </li>
        <li style={{ margin: '0 10px', ...menuLinkStyle, ...hoverMenuLinkStyle }}>
          <a href="#" className="text-white text-lg  hover:text-yellow-400 transition duration-500">Contact</a>
        </li>
      </ul>
      <p style={{ color: 'white', textAlign: 'center', marginTop: '15px', marginBottom: '10px', fontSize: '1.1em' }}>
        © 2024 Designed and Created by Nichole McGrew | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
