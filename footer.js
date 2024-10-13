import React from 'react';

const Footer = () => {
  return (
    <div className="footer-bg bg-gray-800 text-white py-6 bottom-0 sticky w-full">
      <footer className="container mx-auto text-center">
        <p className="text-lg font-semibold mb-4">Follow me on social media:</p>
        <ul className="flex justify-center space-x-8 mb-6">
          <li>
            <a href="https://linkedin.com" className="hover:text-blue-400 transition duration-300">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com" className="hover:text-gray-400 transition duration-300">
              GitHub
            </a>
          </li>
        </ul>
        <p className="text-sm">&copy; 2024 Sneha Patra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
