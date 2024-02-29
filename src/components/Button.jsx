// Button.jsx
import React from 'react';

const Button = ({ children, buttonStyle }) => {
  const mainBlueColor = '#003f87';
  const yellowColor = '#ffb225';

  const buttonStyles = {
    'btn-outline': `border border-white text-white hover:bg-white hover:text-${yellowColor} py-2 px-4 rounded-md font-semibold`,
    // Add more styles as needed
  };

  return (
    <button className={`btn ${buttonStyles[buttonStyle]}`} type="button">
      {children}
    </button>
  );
};

export default Button;

