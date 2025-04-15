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
      <section className="w-[100%] ">
        <div className="h-[100vh] bg-white p-[30px]  ">
          <div className="flex flex-col justify-center items-center p-[30px] ">
            <h2 className="font-bold text-4xl">Popular Categories</h2>
            <div className="w-12 h-[3px] bg-green-500 mx-auto mt-2"></div>
          </div>
          <div className="max-w-6xl mx-auto p-[50px]">
            <div className="grid grid-cols-3 gap-4">
              <div className=" relative row-span-2">
                <img
                  src={p6}
                  alt="night life"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Fresh Vegetables</h3>
                  {/* <p className="text-sm">210 Listings</p> */}
                </div>
              </div>
              <div className="relative">
                <img
                  src={p6}
                  alt="Restaurant"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Fruits</h3>
                  {/* <p className="text-sm">385 Listings</p> */}
                </div>
              </div>
              <div className="relative">
                <img
                  src={p6}
                  alt="Hotels"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Grains </h3>
                  {/* <p className="text-sm">577 Listings</p> */}
                </div>
              </div>
              <div className="relative">
                <img
                  src={p6}
                  alt="Outdoors"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Cereals</h3>
                  {/* <p className="text-sm">114 Listings</p> */}
                </div>
              </div>
              <div className="relative">
                <img
                  src={p6}
                  alt="Arts"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">Diary & Egg</h3>
                  {/* <p className="text-sm">79 Listings</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
