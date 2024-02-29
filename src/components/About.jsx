// About.jsx
import React from 'react';

const About = () => {
  return (
    <section className="flex flex-wrap items-center">
      {/* Text Section */}
      <div className="w-full md:w-1/2 p-4">
        <h2 className="text-3xl font-bold mb-4">About Cub Scouts Pack 365</h2>
        <p className="text-lg">
          Insert your Cub Scouts Pack 365 description here. Provide information about the history,
          mission, and values of the pack. You can customize this text to suit your needs.
        </p>
      </div>

      {/* Image Collage Section */}
      <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
          {/* Replace these image URLs with your own */}
          <img src="image1.jpg" alt="Cub Scout 1" className="w-full h-32 object-cover" />
          <img src="image2.jpg" alt="Cub Scout 2" className="w-full h-32 object-cover" />
          <img src="image3.jpg" alt="Cub Scout 3" className="w-full h-32 object-cover" />
          <img src="image4.jpg" alt="Cub Scout 4" className="w-full h-32 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default About;
