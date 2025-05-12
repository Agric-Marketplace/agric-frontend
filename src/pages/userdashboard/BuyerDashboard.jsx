import React, { useEffect, useState } from "react";
import { ChevronDown, ShoppingCart, LogOut, User } from "lucide-react";
import { Link } from "react-router";
import banana from "../../assets/images/banana.jpg";
import carrot from "../../assets/images/carrots.png";
import rice from "../../assets/images/rice.png";

const BuyerDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  // Mock data
  const purchases = [
    {
      _id: "1",
      name: "Organic Fertilizer",
      quantity: 2,
      price: 30,
      image: "/fertilizer.jpg",
    },
    {
      _id: "2",
      name: "Hybrid Maize Seeds",
      quantity: 1,
      price: 15,
      image: "/maize.jpg",
    },
  ];

  const cartItems = [
    {
      _id: "3",
      name: "Carrots",
      price: 12,
      image: "/dripkit.jpg",
    },
  ];

  const recommendations = [
    {
      _id: "4",
      name: "Rice",
      price: 25,
      image: "/pestcontrol.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 shadow-sm bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-green-700">
            Farm<span className="text-lime-500">Assist</span>
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/farmer-avatar.png"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <Link
                  to="/profile"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  My Profile
                </Link>
                <Link
                  to="/cart"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  My Cart
                </Link>
                <Link
                  to="/logout"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-green-700">
          Welcome to Your FarmAssist Dashboard
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Hello {user?.firstname || "Buyer"}! Here's your recent activity:
        </p>

        {/* Purchases */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Purchased Products
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {purchases.map((item) => (
              <div
                key={item._id}
                className="border border-gray-200 rounded-xl p-4 flex items-center gap-6 shadow hover:shadow-md transition-shadow"
              >
                <img
                  src={banana}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md border"
                />
                <div>
                  <h3 className="font-medium text-lg text-green-700">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <p className="text-sm text-gray-700">${item.price}</p>
                  <button className="mt-2 px-4 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition">
                    Buy Again
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cart */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Items in Your Cart
          </h2>
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="border border-gray-200 rounded-xl p-4 flex items-center gap-6 shadow hover:shadow-md transition-shadow"
                >
                  <img
                    src={carrot}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md border"
                  />
                  <div>
                    <h3 className="font-medium text-lg text-green-700">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-700">${item.price}</p>
                    <div className="flex gap-2 mt-2">
                      <button className="px-3 py-1 text-sm bg-lime-500 text-white rounded hover:bg-lime-600">
                        Checkout
                      </button>
                      <button className="px-3 py-1 text-sm border border-gray-300 text-red-600 rounded hover:bg-gray-50">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Recommended for You
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {recommendations.map((item) => (
              <div
                key={item._id}
                className="border border-gray-200 rounded-xl p-4 flex items-center gap-6 shadow hover:shadow-md transition-shadow"
              >
                <img
                  src={rice}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md border"
                />
                <div>
                  <h3 className="font-medium text-lg text-green-700">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-700">${item.price}</p>
                  <button className="mt-2 px-4 py-1.5 text-sm bg-emerald-600 text-white rounded hover:bg-emerald-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BuyerDashboard;
