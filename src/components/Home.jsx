// Home.jsx
import React from 'react';
import { Link } from 'react-scroll';
import home from '../assets/imgs/home.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center  text-[#003f87]">
      <div className="mt-20 flex flex-col md:flex-row items-center justify-around w-full max-w-screen-lg  gap-40">
        <div className="text-center mb-8 md:mb-0">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">Welcome to Cub Scouts Pack 365</h1>
          <p className="text-lg mb-8 text-gray-500">Explore the world of adventure and learning with us!</p>
          <Link to="about" smooth="true" duration={500} className="py-2 px-6 border mt-2 bg-[#003f87] text-yellow-400 hover:bg-yellow-400 hover:text-blue-800 rounded-full font-semibold text-lg transition duration-300 ease-in-out cursor-pointer" type="button">
            Join Pack 365
          </Link>
        </div>
        <div className="md:ml-8">
          <img
            src={home} // Update the path to your actual image
            alt="Cub Scouts Pack 365"
            className="max-w-md rounded-lg shadow-lg" // Adjust max-width, add rounded-lg for a different shape, and shadow for depth
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
