import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { Menu, X, ShoppingCart } from "lucide-react"; 
import { toast } from "react-toastify";
import { apiLogout } from "../services/auth"; 
import { useAuth } from "../context/AuthContext"; 
import { useCart } from "../context/CartContext"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logoutAction } = useAuth();
  const { cart } = useCart(); 

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleLogout = () => {
   
    logoutAction(); 

   
    navigate("/");
    toast.success("Successfully logged out!");

    
    apiLogout().catch((error) => {
      console.error("Backend session cleanup failed:", error);
    });
  };

  const allNavLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/adverts" },
    { name: "Farmers", path: "/farmers" },
    { name: "Contact", path: "/contact" },
  ];

  
  const visibleLinks = user 
    ? allNavLinks.filter((link) => link.name !== "Home") 
    : allNavLinks;

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
          {visibleLinks.map((link) => (
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

        {/* Auth & Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-x-6">
          {user ? (
            <>
              {/* Profile Link */}
              <Link 
                to={user.role === "vendor" ? "/dashboard/profile" : "/buyer-dashboard"} 
                title="My Profile"
                className="flex items-center gap-2 hover:opacity-80 transition"
              >
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xl font-bold uppercase shadow-md">
                  {user.fullName ? user.fullName.charAt(0) : "U"}
                </div>
                <span className="font-semibold text-gray-700 hidden lg:block">
                  {user.fullName?.split(" ")[0]}
                </span>
              </Link>

              {/* Cart Icon with Notification Bubble */}
              <Link 
                to="/cart" 
                className="relative text-gray-600 hover:text-green-500 transition"
                title="Go to Cart"
              >
                <ShoppingCart size={28} />
                {cart?.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-red-500 hover:bg-red-50 border border-red-500 rounded-lg font-semibold transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-4 py-2 bg-green-500 text-white hover:bg-white hover:text-green-500 border border-green-500 rounded-lg font-semibold transition"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="px-4 py-2 bg-white text-green-500 hover:bg-green-50 border border-green-500 rounded-lg font-semibold transition"
              >
                Login
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden mt-4 rounded-lg bg-white py-6 shadow-md flex flex-col gap-4 items-center">
          {visibleLinks.map((link) => (
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
          
          <hr className="w-3/4 border-gray-200 my-2" />

          {/* Mobile Auth Buttons */}
          {user ? (
             <>
               <div className="flex items-center gap-3 text-gray-700 font-semibold mb-2">
                 <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold uppercase">
                    {user.fullName ? user.fullName.charAt(0) : "U"}
                 </div>
                 <span>Hi, {user.fullName?.split(" ")[0]}</span>
               </div>
               
               <Link
                 to={user.role === "vendor" ? "/dashboard/profile" : "/buyer-dashboard"}
                 className="text-gray-700 hover:text-green-600 font-semibold text-lg"
                 onClick={toggleMenu}
               >
                 Profile
               </Link>

               <Link
                 to="/cart"
                 className="text-gray-700 hover:text-green-600 font-semibold text-lg flex items-center gap-2"
                 onClick={toggleMenu}
               >
                 Cart 
                 {cart?.length > 0 && (
                   <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                     {cart.length}
                   </span>
                 )}
               </Link>

               <button
                 onClick={() => {
                   handleLogout();
                   toggleMenu();
                 }}
                 className="text-red-500 font-semibold text-lg mt-2"
               >
                 Logout
               </button>
             </>
          ) : (
             <>
                <Link
                  to="/signup"
                  className="text-green-600 font-semibold text-lg"
                  onClick={toggleMenu}
                >
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="text-green-600 font-semibold text-lg"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
             </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
