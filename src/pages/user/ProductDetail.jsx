import React from "react";
import banana from "../../assets/images/banana.jpg";
import { div } from "framer-motion/client";

const ProductDetail = () => {
  return (
    <div className=" bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-10 pt-28">
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          {/* Product Image */}
          <div className="bg-gray-100 md:w-1/2 h-96 flex justify-center items-center">
            <img
              src={banana}
              alt="Amazon Echo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 md:w-1/2">
            <p className="text-sm text-gray-500 mb-1">Hammonds Flycatcher</p>
            <h1 className="text-2xl font-semibold mb-4">
              Amazon Echo (2nd Gen) - Powered by Dolby
            </h1>

            <div className="text-xl font-bold text-gray-900 mb-2">
              $6,499
              <span className="line-through text-gray-500 ml-3 text-base">
                $11,890
              </span>
              <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-1 rounded">
                45% Off
              </span>
            </div>

            <ul className="text-sm text-gray-700 mt-4 space-y-2">
              <li>
                <span className="font-medium">Category:</span> Portable Wireless
                Speaker
              </li>
              <li>
                <span className="font-medium">Company:</span> Amazone
              </li>
              <li>
                <span className="font-medium">Brand:</span> Echo (2nd Gen)
              </li>
              <li>
                <span className="font-medium">Manufactured:</span> 11/05/2025
              </li>
            </ul>

            <div className="mt-6 flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md text-sm font-semibold">
                Add to Cart
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
