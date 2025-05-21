import React from "react";
import plantain from "../assets/images/plantain.png";
import { Link } from "react-router";

const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="relative w-80 h-[460px] rounded-3xl overflow-hidden shadow-md bg-white ">
      {/* Background Image */}
      <img
        src={image}
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
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
          <p className="mt-1 font-bold"> ₵{price}</p>

          <div className="flex gap-2 mt-4">
            <Link
              to="/adverts"
              className="flex-1 bg-white text-black text-center font-medium py-2 rounded-xl hover:bg-gray-200 transition"
            >
              Buy
            </Link>
            <Link
              to="/adverts"
              className="flex-1 border border-white text-white text-center font-medium py-2 rounded-xl hover:bg-white hover:text-black transition"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
