import React from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="text-white font-bold text-xl">
              ReactMusic
            </a>
          </div>
          <div className="flex items-center md:ml-auto">
            <a
              href="https://github.com/Sundaram-Agnihotri/Reactmusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              <FaGithub className="h-6 w-6 fill-current" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
