import React, { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#fffff0] text-black shadow-md border-b px-6 md:px-20 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Farm<span className="text-green-500">Assist</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-x-10">
          <Link to="/">Home</Link>
          <Link to="/adverts">Products</Link>
          <Link to="/farmers">Farmers</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex gap-x-4">
          <Link
            to="/signup"
            className="px-4 py-2 bg-green-500 hover:bg-white hover:text-green-500 border border-green-500 rounded-lg font-semibold transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-green-500 hover:bg-white hover:text-green-500 border border-green-500 rounded-lg font-semibold transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white text-black shadow-md mt-4 rounded-lg py-6 flex flex-col gap-4 items-center">
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/adverts" onClick={toggleMenu}>
            Products
          </Link>
          <Link to="/farmers" onClick={toggleMenu}>
            Farmers
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link
            to="/signup"
            className="text-green-600 font-semibold"
            onClick={toggleMenu}
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="text-green-600 font-semibold"
            onClick={toggleMenu}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
