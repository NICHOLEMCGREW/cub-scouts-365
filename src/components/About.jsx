// About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import zoo from '../assets/imgs/zoo.jpg';
import hike from '../assets/imgs/hike.jpg';
import popcorn from '../assets/imgs/popcorn.jpg';
import parade from '../assets/imgs/parade.jpg';

const About = () => {
  return (
    <section id="about" className="about min-h-screen flex items-center justify-center">
      <div className="about-container flex justify-center items-center">
        <div className="about-content pr-8 text-center max-w-screen-xl mx-auto">
          <h1 className="text-[#003f87] text-4xl font-bold mb-4">About Us</h1>
          <div className="line mb-7 w-16 border-t-4 border-yellow-400 mx-auto"></div>
          <p className="ml-20 text-gray m-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque voluptatibus incidunt architecto
            id magni, maxime sed, aliquam voluptatum voluptates quas possimus. Inventore voluptas nostrum fuga accusantium
            debitis dolorem labore.
          </p>
          <Link to="about" smooth={true} duration={500} className="py-2 px-6 border mt-2 bg-[#003f87] text-yellow-400 hover:bg-yellow-400 hover:text-blue-800 rounded-full font-semibold text-lg transition duration-300 ease-in-out cursor-pointer" type="button">
            Learn More
          </Link>
        </div>
        <div className="image-grid grid grid-cols-2 gap-5 mr-40 mt-8">
          <img src={zoo} alt="Zoo" className="max-w-full w-[800px]" />
          <img src={hike} alt="hike" className="max-w-full w-[500px]" />
          <img src={popcorn} alt="Popcorn" className="max-w-full w-[500px]" />
          <img src={parade} alt="Parade" className="max-w-full w-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default About;
