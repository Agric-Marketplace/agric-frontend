import React, { useState, useEffect } from "react";
import { Link } from "react-router"; // fixed typo from 'react-router' to 'react-router-dom'
import { Menu, X } from "lucide-react"; // for hamburger and close icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav
      className={`flex items-center justify-between px-6 md:px-20 py-4 w-full fixed z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <Link className="font-bold text-2xl flex" to="/">
        Farm <span className="text-green-500">Assist</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-x-10">
        <Link to="/">Home</Link>
        <span>Products</span>
        <Link to="/doctors">Farmers</Link>
        <span>Contact</span>
      </div>

      {/* Auth Buttons (Desktop) */}
      <div className="hidden md:flex gap-x-4">
        <Link
          to="/signup"
          className="px-4 py-2 bg-green-500 hover:bg-white hover:text-green-500 rounded-lg font-semibold transition duration-300"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="px-4 py-2 bg-green-500 hover:bg-white hover:text-green-500 rounded-lg font-semibold transition duration-300"
        >
          Login
        </Link>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`absolute top-[64px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 transition-all duration-300 text-black md:hidden`}
        >
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <span onClick={toggleMenu}>Products</span>
          <Link to="/doctors" onClick={toggleMenu}>
            Farmers
          </Link>
          <span onClick={toggleMenu}>Contact</span>
          <Link
            to="/signup"
            onClick={toggleMenu}
            className="px-4 py-2 bg-green-500 hover:bg-white hover:text-green-500 rounded-lg font-semibold transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            onClick={toggleMenu}
            className="px-4 py-2 bg-green-500 hover:bg-white hover:text-green-500 rounded-lg font-semibold transition duration-300"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
