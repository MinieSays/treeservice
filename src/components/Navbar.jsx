import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Lucide React icons
import Button from "../components/ui/Button";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-4 md:px-12">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/">
            <img src={logo} className="h-10 w-10" alt="Logo" />{" "}
            {/* Logo image */}
          </a>
          <h1 className="ml-3 text-xl font-bold text-gray-900">
            FC Tree Service
          </h1>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link to="/" className="hover:text-lime-600 transition-all py-2">
            Home
          </Link>
          <Link
            to="/tree-trimming-fort-collins"
            className="hover:text-lime-600 transition-all py-2"
          >
            Tree Trimming
          </Link>

          <Link
            to="/tree-removal-fort-collins"
            className="hover:text-lime-600 transition-all py-2"
          >
            Tree Removal
          </Link>

          <Button label="Get a Quote" backgroundColor="#a4cc2c" />
        </nav>

        <div className="md:hidden">
          {menu ? (
            <X size={25} onClick={handleChange} className="text-gray-900" />
          ) : (
            <Menu size={25} onClick={handleChange} className="text-gray-900" />
          )}
        </div>
      </div>

      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } fixed top-0 left-0 w-3/4 h-full bg-gray-900 text-white flex flex-col items-center pt-20 transition-transform duration-300 z-40`}
      >
        <Link to="/" className="py-2 text-2xl font-medium" onClick={closeMenu}>
          Home
        </Link>
        <Link
          to="/about"
          className="py-2 text-2xl font-medium"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          to="/tree-trimming-fort-collins"
          className="py-2 text-2xl font-medium"
          onClick={closeMenu}
        >
          Tree Trimming
        </Link>
        <Link
          to="/tree-removal-fort-collins"
          className="py-2 text-2xl font-medium"
          onClick={closeMenu}
        >
          Tree Removal
        </Link>
        <button
          className="py-2 px-6 mt-4 rounded-xl font-semibold bg-white text-gray-900"
          style={{ maxWidth: "200px" }}
        >
          Call Today
        </button>
      </div>
    </header>
  );
};

export default Navbar;
