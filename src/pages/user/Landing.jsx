import React from "react";
import herobg from "../../assets/images/herobg2.mp4";
import p6 from "../../assets/images/p6.png";
import banana from "../../assets/images/banana.jpg";
import plantain from "../../assets/images/plantain.png";
import ProductCard from "../../components/ProductCard";
import fruits from "../../assets/images/fruits.png";
import p1 from "../../assets/images/p1.png";
import p2 from "../../assets/images/p2.png";
import p3 from "../../assets/images/p3.png";
import p4 from "../../assets/images/p4.png";
import p5 from "../../assets/images/p5.png";

const Landing = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
        >
          <source src={herobg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none"></div>
        <div className="relative z-10 flex items-center justify-center h-full w-full px-4 sm:px-8">
          <div className="text-white max-w-4xl text-center space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Sell Fresh. Buy Fresh. Stay Fresh.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              FarmAssist is your one-stop agri-tech marketplace where farmers
              sell fresh produce straight to consumers—no middlemen, just trust.
              Safe payments, real-time listings, and farm-to-fork convenience.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border border-green-500 bg-transparent rounded-lg font-semibold hover:bg-green-500 hover:text-white transition duration-300">
                Post a Product
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border border-white bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
                Browse Produce
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border border-white bg-green-500 rounded-lg font-semibold hover:bg-green-600 transition duration-300">
                View Auctions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <section className="w-full bg-white py-12">
        <div className="text-center px-4 md:px-0">
          <h2 className="font-bold text-3xl md:text-4xl">Popular Categories</h2>
          <div className="w-12 h-[3px] bg-green-500 mx-auto mt-2"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { img: p1, label: "Fresh Vegetables" },
              { img: fruits, label: "Fruits" },
              { img: p2, label: "Grains" },
              { img: p3, label: "Cereals" },
              { img: p4, label: "Dairy & Egg" },
              { img: p5, label: "Herbal Products" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden group"
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="w-full bg-[#fcfcf7] py-12">
        <div className="text-center px-4 md:px-0 mb-10">
          <h2 className="font-bold text-3xl md:text-4xl">Trending Now</h2>
          <div className="w-12 h-[3px] bg-green-500 mx-auto mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-25 justify-items-center">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
    </div>
  );
};

export default Landing;
