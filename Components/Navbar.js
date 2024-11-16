// components/Navbar.js
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">My Vercel App</div>
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleModal}
        >
          <div className="space-y-1">
            <div className="w-8 h-1 bg-gray-800"></div>
            <div className="w-8 h-1 bg-gray-800"></div>
            <div className="w-8 h-1 bg-gray-800"></div>
          </div>
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <button onClick={toggleModal} className="absolute top-2 right-2">
              &times;
            </button>
            <div className="flex flex-col">
              <a href="#login" className="py-2">Login</a>
              <a href="#register" className="py-2">Register</a>
              <a href="#features" className="py-2">Features</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;