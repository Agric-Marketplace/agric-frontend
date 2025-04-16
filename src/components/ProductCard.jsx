import React from "react";
import plantain from "../assets/images/plantain.png";

const ProductCard = () => {
  return (
    <div className="relative w-80 h-[460px] rounded-3xl overflow-hidden shadow-md bg-white ">
      {/* Background Image */}
      <img
        src={plantain}
        alt=""
        className="w-full h-full object-cover absolute inset-0 z-0 pointer-events-none"
      />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between p-4">
        {/* Optional top icons */}
        <div className="flex justify-between">
          <div className="bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            ⭐ 4.5
          </div>
          <div className="bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            💬 120
          </div>
        </div>

        {/* Bottom overlay box */}
        <div
          className="bg-black/60 backdrop-blur-md rounded-2xl p-4 text-white pointer-events: none;
z-index: 0;"
        >
          <h3 className="text-lg font-semibold">Plantain</h3>
          <p className="text-sm text-gray-300">Fresh Plantain</p>
          <p className="mt-1 font-bold">$50</p>

          <div className="flex gap-2 mt-4">
            <button className="flex-1 bg-white text-black font-medium py-2 rounded-xl hover:bg-gray-200 transition">
              Buy
            </button>
            <button className="flex-1 border border-white text-white font-medium py-2 rounded-xl hover:bg-white hover:text-black transition">
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
