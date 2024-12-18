// components/Navbar.js
import { useEffect, useState } from 'react';
import Switch from './Switch';
function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Cek status mode dari localStorage saat komponen dimuat
    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('darkMode', !isDarkMode); // Simpan status mode di localStorage
    if (!isDarkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
    }
  };

  return (
    <nav className={`bg-white shadow ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
          <div className="text-xl font-bold text-gray-800">My Vercel App</div>
        </div>
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
        <div className="hidden md:flex md:items-center">
          <a href="#login" className="ml-6 flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/login-rounded-right.png" alt="Login" className="mr-2" />
            Login
          </a>
          <a href="#register" className="ml-6 flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/user-plus.png" alt="Register" className="mr-2" />
            Register
          </a>
          <a href="#features" className="ml-6 flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            <img src="https://img.icons8.com/material-outlined/24/ffffff/features.png" alt="Features" className="mr-2" />
            Features
          </a>
          <Switch />
        </div>
      </div>

      {/* Modal */}
      { isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Menu</h2>
            <button onClick={toggleModal} className="absolute top-2 right-2">
              &times;
            </button>
            <div className="flex flex-col">
              <a href="#login" className="py-2 flex items-center text-blue-500 hover:underline">
                <img src="https://img.icons8.com/material-outlined/24/000000/login-rounded-right.png" alt="Login" className="mr-2" />
                Login
              </a>
              <a href="#register" className="py-2 flex items-center text-blue-500 hover:underline">
                <img src="https://img.icons8.com/material-outlined/24/000000/user-plus.png" alt="Register" className="mr-2" />
                Register
              </a>
              <a href="#features" className="py-2 flex items-center text-blue-500 hover:underline">
                <img src="https://img.icons8.com/material-outlined/24/000000/features.png" alt="Features" className="mr-2" />
                Features
              </a>
              <Switch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;