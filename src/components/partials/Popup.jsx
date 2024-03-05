import React from 'react'

const Popup = ({ imageUrl, onClose }) => {
  return (
    <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-content bg-white p-6 rounded-lg relative">
        <img src={imageUrl} alt="Certificate" className="w-udemy h-auto z-50" />
        <button
          className="close-button absolute top-2 right-2 bg-transparent border-none cursor-pointer text-gray-600 hover:text-red-500"
          onClick={onClose}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default Popup
