// components/MyForm.jsx
"use client"
import React, { useState } from 'react';

const MyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    client_ip: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);
    console.log('Form submitted:', formData);
    // You can handle form submission logic here, e.g., send data to an API
    //alert('Form submitted! Check console for data.');

    console.log(JSON.stringify(formData));

    try {
      const response = await fetch('https://pawanlabs.com/api/login', {
        method: 'POST',
        headers: {
          'accept': 'application/ld+json',
          'Content-Type': 'application/ld+json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setShowError(true);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Success:', result);
      setShowSuccess(true);
      // Handle success, e.g., show a success message, clear form
    } catch (error) {
      setShowError(true);
      console.error('Error submitting form:', error);
      // Handle error, e.g., show an error message
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
      {showSuccess && (
          <div className="mb-4 p-4 rounded bg-green-100 text-green-800 font-semibold text-center">
            Your message was sent successfully!
          </div>
        )}
        {/* Error Message */}
        {showError && (
          <div className="mb-4 p-4 rounded bg-red-100 text-red-800 font-semibold text-center">
            There was an error sending your message. Please try again.
          </div>
        )}
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

        <input type='hidden' name='client_ip' value="1234" />

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 text-sm font-semibold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default MyForm;
