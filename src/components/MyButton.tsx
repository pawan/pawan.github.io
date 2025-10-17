 // components/MyButton.js
 //import React from 'react';
const MyButton = ({ text, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    >
      {text}
    </button>
  );
};

export default MyButton;