import React, { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/adverts" },
    { name: "Farmers", path: "/farmers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  const linkBaseClass =
    "relative px-2 py-1 transition duration-200 hover:text-green-500";
  const activeLinkClass =
    "text-green-600 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-1 after:bg-green-500 after:rounded-full";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md border-b px-6 md:px-20 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Farm<span className="text-green-500">Assist</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`${linkBaseClass} ${
                isActive(link.path) ? activeLinkClass : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
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

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-4 rounded-lg bg-white py-6 shadow-md flex flex-col gap-4 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleMenu}
              className={`text-lg ${
                isActive(link.path)
                  ? "text-green-600 font-semibold underline"
                  : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
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
