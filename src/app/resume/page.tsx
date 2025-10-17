// pages/index.js or any other component
"use client"
import React, { useState } from 'react';
import Modal from '@/components/Modal';
import MyButton from '@/components/MyButton';
//import { cookies } from 'next/headers'

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');

  //const checkCookie = document.cookie.indexOf("login=yes"); 
    // If the cookie is found, do not render the modal

  

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  //checkCookie !== -1 ? handleCloseModal() : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted value:', inputValue);
    // You can send this data to an API or perform other actions
    if(inputValue=='test'){
    handleCloseModal();
    //setCookieForTwoMinutes('login', 'yes');
    }
  };

  function setCookieForTwoMinutes(name, value) {
  const twoMinutesInSeconds = 1 * 60; // Calculate 2 minutes in seconds
  document.cookie = `${name}=${value}; max-age=${twoMinutesInSeconds}; path=/`;
}

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to Next.js with Tailwind!</h1>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Popup
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit}>
        <h2 className="text-xl font-semibold mb-4">Enter Information</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="inputField" className="block text-gray-700 text-sm font-bold mb-2">
              Your Input:
            </label>
            <input
              type="text"
              id="inputField"
              autoComplete="off"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            {/* <button
              type="button"
              onClick={handleCloseModal}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            >
              Cancel
            </button> */}
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
            {/* <MyButton text="Get Resume" className={"bg-green-500 font-bold hover:bg-green-700"}/> */}
          </div>
        </form>
      </Modal>
    </div>
  );
}
