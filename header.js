// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-red-400 to-pink-500 shadow-md">
      <header className="container mx-auto py-4 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">Sneha Patra</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link to="/" className="text-white text-lg font-medium hover:text-gray-200 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white text-lg font-medium hover:text-gray-200 transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-white text-lg font-medium hover:text-gray-200 transition duration-300">
                  Skills
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
