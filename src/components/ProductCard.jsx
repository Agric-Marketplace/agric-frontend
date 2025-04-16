import React from "react";
import plantain from "../assets/images/plantain.png";

const ProductCard = () => {
  return (
    <div className="relative w-80 h-[460px] rounded-3xl overflow-hidden shadow-md bg-white">
      {/* Background Image */}
      <img src={plantain} alt="" className="w-full h-full object-cover" />

      {/* Optional top icons */}
      <div className="absolute top-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
        ⭐ 4.5
      </div>
      <div className="absolute top-4 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
        💬 120
      </div>

      {/* Bottom overlay box */}
      <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-2xl p-4 text-white">
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
  );
};

export default ProductCard;
