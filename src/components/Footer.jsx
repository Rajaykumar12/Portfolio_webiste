import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#112255] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          
          {/* Social Media Icons */}
          <div className="flex space-x-8">
            <a
              href="mailto:rajaykumar12959@gmail.com"
              className="text-[#95B1C9] hover:text-[#F5E6EB] transition-colors duration-300 backdrop-blur-sm bg-[#F5E6EB]/5 p-3 rounded-full border border-[#95B1C9]/20"
            >
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/r-ajay-kumar-ab8859289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#95B1C9] hover:text-[#F5E6EB] transition-colors duration-300 backdrop-blur-sm bg-[#F5E6EB]/5 p-3 rounded-full border border-[#95B1C9]/20"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://github.com/Rajaykumar12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#95B1C9] hover:text-[#F5E6EB] transition-colors duration-300 backdrop-blur-sm bg-[#F5E6EB]/5 p-3 rounded-full border border-[#95B1C9]/20"
            >
              <FaGithub size={20} />
            </a>
          </div>
          
          {/* Copyright Text */}
          <div className="text-center text-sm text-[#95B1C9] mt-4">
            <p>© 2024 Rajay Kumar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;