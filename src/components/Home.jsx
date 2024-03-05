import React from 'react';
import { Link } from 'react-scroll';
import home from '../assets/imgs/home.jpg';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-[#003f87] bg-gray-50">
      <div className="mt-10 flex flex-col md:flex-row items-center justify-around w-full max-w-screen-lg md:gap-8">
        <div className="text-center mb-8 md:mb-0 md:max-w-md">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">Welcome to Cub Scouts Pack 365</h1>
          <p className="text-base md:text-lg mb-4 md:mb-8 text-gray-500">Explore the world of adventure and learning with us!</p>
          <Link
            to="about"
            smooth="true"
            duration={500}
            className="py-2 px-6 border mt-2 md:mt-4 bg-[#003f87] text-[#ffb225] hover:bg-[#ffb225] hover:text-blue-800 rounded-full font-semibold text-md md:text-lg transition duration-300 ease-in-out cursor-pointer"
            type="button"
          >
            Join Pack 365
          </Link>
        </div>
        <div className="md:ml-8">
          <img
            src={home}
            alt="Cub Scouts Pack 365"
            className="w-full max-w-md md:max-w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
