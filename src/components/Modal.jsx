import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-80 text-center">
        <p>{message}</p>
        <button
          className="mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
