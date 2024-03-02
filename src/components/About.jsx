import React from 'react';
import { Link } from 'react-router-dom';
import zoo from '../assets/imgs/zoo.jpg';
import hike from '../assets/imgs/hike.jpg';
import popcorn from '../assets/imgs/popcorn.jpg';
import parade from '../assets/imgs/parade.jpg';

const About = () => {
  return (
    <section className="about text-center">
      <div className="about-container flex justify-center items-center">
        <div className="about-content pr-8 text-center">
      <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <div className="line mb-7 w-16 border-t-4 border-primary-color mx-auto"></div>
          <p className="ml-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, cumque voluptatibus incidunt architecto
            id magni, maxime sed, aliquam voluptatum voluptates quas possimus. Inventore voluptas nostrum fuga accusantium
            debitis dolorem labore.
          </p>
          <Link to="/learn-more" className="ctn inline-block px-6 py-2 bg-primary-color text-white rounded-full">
            Learn More
          </Link>
        </div>
        <div className="image-grid grid grid-cols-2 gap-5 mr-40">
          <img src={zoo} alt="Zoo" className="max-w-full  w-[800px]" />
          <img src={hike} alt="hike" className="max-w-full w-[500px]" />
          <img src={popcorn} alt="Popcorn" className="max-w-full w-[500px]" />
          <img src={parade} alt="Parade" className="max-w-full w-[500px]" />
        </div>
      </div>
    </section>
  );
};

export default About;
