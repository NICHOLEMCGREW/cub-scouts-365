// Home.jsx
import React from 'react';
import Button from './Button';

const Home = () => {
  const mainBlueColor = '#003f87';

  return (
    <section className={`bg-${mainBlueColor} text-white min-h-screen flex items-center justify-center flex-col mb-8`}>
      {/* Add margin-bottom to create space */}
      <h1 className="text-4xl font-bold mb-4">Welcome to Cub Scouts Pack 365</h1>
      <p className="text-lg mb-8">Explore the world of adventure and learning with us!</p>
      <Button buttonStyle="btn-outline">Get Started</Button>
    </section>
  );
};

export default Home;
