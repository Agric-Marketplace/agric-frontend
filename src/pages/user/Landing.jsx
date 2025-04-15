import React from "react";
import herobg from "../../assets/images/herobg2.mp4";
import p6 from "../../assets/images/p6.png";

const Landing = () => {
  return (
    <div>
      <div className="h-screen relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={herobg} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
          <div className="text-white p-4 sm:p-6 md:p-8 w-full max-w-3xl text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Sell Fresh. Buy Fresh. Stay Fresh.
            </h1>
            <p className="text-[22px] sm:text-lg md:text-xl text-gray-200">
              FarmAssist is your one-stop agri-tech marketplace where farmers
              sell fresh produce straight to consumers—no middlemen, just trust.
              Safe payments, real-time listings, and farm-to-fork convenience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 justify-center items-center">
              <button className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg border border-green-500 bg-transparent rounded-lg font-semibold transition duration-300">
                Post a Product
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg border border-white bg-green-500 rounded-lg font-semibold transition duration-300">
                Browse Produce
              </button>
              <button className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg border border-white bg-green-500 rounded-lg font-semibold transition duration-300">
                View Auctions
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full bg-white py-12">
        <div className="text-center px-4 md:px-0">
          <h2 className="font-bold text-3xl md:text-4xl">Popular Categories</h2>
          <div className="w-12 h-[3px] bg-green-500 mx-auto mt-2"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative row-span-2 sm:row-span-1 rounded-lg overflow-hidden">
              <img
                src={p6}
                alt="Fresh Vegetables"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                <h3 className="text-lg font-semibold">Fresh Vegetables</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src={p6}
                alt="Fruits"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                <h3 className="text-lg font-semibold">Fruits</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src={p6}
                alt="Grains"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                <h3 className="text-lg font-semibold">Grains</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src={p6}
                alt="Cereals"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                <h3 className="text-lg font-semibold">Cereals</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src={p6}
                alt="Dairy & Egg"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white drop-shadow-md">
                <h3 className="text-lg font-semibold">Dairy & Egg</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
