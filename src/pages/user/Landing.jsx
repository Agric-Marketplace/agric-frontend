import React from "react";
import herobg from "../../assets/images/herobg2.mp4";
import herobg3 from "../../assets/images/herobg3.png";
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
import thumbnail from "../../assets/images/thumbnail.png";
import LiveAuctions from "../../components/LiveAuctions";
import AuctionSection from "../../components/AuctionSection";
import { Link } from "react-router";
import commodity from "../../assets/images/commodity.png";
import agriculture from "../../assets/images/agriculture.png";
import planting from "../../assets/images/planting.png";
import { ChevronDown } from "lucide-react";

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
          poster={herobg3}
        >
          {/* <source src={herobg} type="video/mp4" /> */}
        </video>
        {/* Dark overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />
        <div className="relative z-10 flex items-center justify-center h-full w-full px-4 sm:px-8">
          <div className="text-white max-w-4xl text-center space-y-6">
            {/* <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold 
            // leading-tight text-gradient shadow-lg
            "
            >
              Sell Fresh. Buy Fresh. Stay Fresh.
            </h1> */}
            <p className="text-green-400 text-sm sm:text-base uppercase tracking-widest font-semibold">
              Trusted by thousands of farmers
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white shadow-lg">
              Sell Fresh. Buy Fresh. Stay Fresh.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              FarmAssist is your one-stop agri-tech marketplace where farmers
              sell fresh produce straight to consumers—no middlemen, just trust.
              Safe payments, real-time listings, and farm-to-fork convenience.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
              {/* Post a Product */}
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border border-green-400 bg-transparent backdrop-blur-md rounded-xl font-semibold text-white hover:bg-green-500 hover:text-white shadow-md hover:shadow-green-400/50 transition-all duration-300 flex items-center gap-3 group transform hover:scale-105">
                <span className="...">
                  <img
                    src={agriculture}
                    alt="Browse Produce"
                    className="w-5 h-5 filter invert brightness-0"
                  />
                </span>
                Post a Product
              </button>

              {/* Browse Produce */}
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border border-green-400 bg-transparent backdrop-blur-md rounded-xl font-semibold text-white hover:bg-green-500 hover:text-white shadow-md hover:shadow-green-400/50 transition-all duration-300 flex items-center gap-3 group transform hover:scale-105">
                <span className="...">
                  <img
                    src={commodity}
                    alt="Browse Produce"
                    className="w-5 h-5 filter invert brightness-0"
                  />
                </span>
                Browse Produce
              </button>

              {/* View Auctions */}
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border border-green-600 bg-transparent backdrop-blur-md rounded-xl font-semibold text-white hover:bg-green-500 hover:text-white shadow-md hover:shadow-green-400/50 transition-all duration-300 flex items-center gap-3 group transform hover:scale-105">
                <span className="...">
                  <img
                    src={planting}
                    alt="Browse Produce"
                    className="w-5 h-5 filter invert brightness-0"
                  />
                </span>
                View Auctions
              </button>
            </div>
            <a
              href="#next-section"
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 group"
            >
              <div className="animate-bounce bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 shadow-lg transition-transform group-hover:scale-110">
                <ChevronDown
                  size={36}
                  className="text-white group-hover:text-green-300"
                />
              </div>
            </a>
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
                {/* Always visible dark overlay */}
                <div className="absolute inset-0 bg-black/40 z-10 opacity-100"></div>

                {/* Always visible label */}
                <div className="absolute bottom-4 left-4 text-white z-20 opacity-100">
                  <h3 className="text-lg font-semibold">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="w-full bg-[#f0fdf4] py-16 lg:py-24 sm:min-h-screen overflow-x-hidden">
        <div className="text-center px-4 md:px-0 mb-10">
          <h2 className="font-bold text-3xl md:text-4xl">Trending Now</h2>
          <div className="w-12 h-[3px] bg-green-500 mx-auto mt-2"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-center">
          <ProductCard
            image={banana}
            title="Fresh Banana"
            description="Naturally ripened farm bananas."
            price="2.99"
          />
          <ProductCard
            image={plantain}
            title="Organic Plantain"
            description="Organically grown plantains."
            price="3.49"
          />
          <ProductCard
            image={p6}
            title="Red Apples"
            description="Crisp and juicy red apples."
            price="4.99"
          />
          <ProductCard
            image={fruits}
            title="Mixed Fruits Basket"
            description="A handpicked selection of fresh fruits."
            price="12.99"
          />
        </div>
      </section>

      {/* <section>
        <LiveAuctions />
      </section> */}
      <section>
        <AuctionSection />
      </section>
    </div>
  );
};

export default Landing;
