import React from "react";
import { Facebook, YoutubeIcon } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center ">
          <img
            loading="lazy"
            src={logo}
            alt="Logo"
            className="h-12 w-12 mb-4"
          />
        </div>

        <div className="flex justify-center space-x-8 mb-4">
          <Link
            to="/"
            className="text-sm hover:text-lime-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm hover:text-lime-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/tree-trimming-fort-collins"
            className="text-sm hover:text-lime-500 transition duration-300"
          >
            Tree Trimming
          </Link>
          <Link
            to="/tree-removal-fort-collins"
            className="text-sm hover:text-lime-500 transition duration-300"
          >
            Tree Removal
          </Link>
          <Link
            to="/contact"
            className="text-sm hover:text-lime-500 transition duration-300"
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/people/Fort-Collins-Tree-Service/61560891970271/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-500 transition duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@fortcollinstreeservice"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-500 transition duration-300"
            >
              <YoutubeIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-700 pt-6">
          <p className="text-center text-sm text-white">
            &copy; {new Date().getFullYear()} Fort Collins Tree Service. All
            rights reserved. Designed by
            <a href="https://www.pywebsolutions.ca"> Py Web Solutions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
