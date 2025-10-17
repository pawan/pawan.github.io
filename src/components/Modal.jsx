// components/Modal.jsx
import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-end">
          {/* <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button> */}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;