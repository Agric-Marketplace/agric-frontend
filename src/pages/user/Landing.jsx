import React from "react";
import herobg from "../../assets/images/herobg2.mp4";

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
            <p className="text-base sm:text-lg md:text-xl text-gray-200 font-semibold">
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
    </div>
  );
};

export default Landing;
