import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaTag, FaPhone, FaUser } from 'react-icons/fa'; // استيراد الأيقونات
import { IoMdMoon, IoMdSunny } from 'react-icons/io'; // استيراد الأيقونات للتبديل بين الوضع الليلي والوضع النهاري

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className={`p-4 shadow-md ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className={`text-2xl font-bold flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <FaHome className={`text-3xl mr-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
          Real Estate
        </Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className={`flex items-center hover:text-gray-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <FaHome className={`mr-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            Home
          </Link>
          <Link to="/about" className={`flex items-center hover:text-gray-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <FaInfoCircle className={`mr-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            About
          </Link>
          <Link to="/products" className={`flex items-center hover:text-gray-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <FaTag className={`mr-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            Products
          </Link>
          <Link to="/contact" className={`flex items-center hover:text-gray-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <FaPhone className={`mr-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            Contact Us
          </Link>
          <Link to="/auth" className={`flex items-center hover:text-gray-400 transition duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            <FaUser className={`mr-1 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
            Login/Register
          </Link>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'} hover:text-gray-400 transition duration-300`}
          >
            {isDarkMode ? <IoMdSunny className="text-2xl" /> : <IoMdMoon className="text-2xl" />}
          </button>
        </div>
        <button
          className={`md:hidden ${isDarkMode ? 'text-white' : 'text-gray-800'} focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <Link to="/" className={`block py-3 px-5 hover:bg-gray-700 transition duration-300 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <FaHome className={`mr-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
          Home
        </Link>
        <Link to="/about" className={`block py-3 px-5 hover:bg-gray-700 transition duration-300 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <FaInfoCircle className={`mr-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
          About
        </Link>
        <Link to="/products" className={`block py-3 px-5 hover:bg-gray-700 transition duration-300 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <FaTag className={`mr-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
          Products
        </Link>
        <Link to="/contact" className={`block py-3 px-5 hover:bg-gray-700 transition duration-300 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <FaPhone className={`mr-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
          Contact Us
        </Link>
        <Link to="/auth" className={`block py-3 px-5 hover:bg-gray-700 transition duration-300 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
          <FaUser className={`mr-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} />
          Login/Register
        </Link>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`block py-3 px-5 hover:bg-gray-700 transition duration-300 flex items-center ${isDarkMode ? 'text-white' : 'text-gray-800'}`}
        >
          {isDarkMode ? <IoMdSunny className="mr-2 text-2xl" /> : <IoMdMoon className="mr-2 text-2xl" />}
          Toggle Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
