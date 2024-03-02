// Home.jsx
import React from 'react';
import home from '../assets/imgs/home.jpg';

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-black">
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-screen-lg">
        <div className="text-center mb-8 md:mb-0">
          <h1 className="text-blue-500 text-4xl font-bold mb-8">Welcome to Cub Scouts<br />Pack 365</h1>
          <p className="text-blue-500 text-lg mb-4">Explore the world of adventure and learning with us!</p>
          <button className="py-2 px-4 border mt-2 bg-blue-500 text-white hover:bg-yellow-500 hover:text-white rounded-md font-semibold" type="button">
            Join Pack 365
          </button>
        </div>
        <div className="md:ml-8">
          <img
            src={home} // Update the path to your actual image
            alt="Cub Scouts Pack 365"
            className="max-w-md rounded-lg" // Adjust max-width and add rounded-lg for a different shape
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
