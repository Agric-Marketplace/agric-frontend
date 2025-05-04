import React from "react";
import carrot from "../../assets/images/carrots.png";
import fruits from "../../assets/images/fruits.png";
import rice from "../../assets/images/rice.png";
import tomatoes from "../../assets/images/tomatoes.png";
import banana from "../../assets/images/banana.jpg";
import beans from "../../assets/images/beans.png";
import spinach from "../../assets/images/spinach.png";
import lemon from "../../assets/images/lemon.png";
import ginger from "../../assets/images/ginger.png";

const FarmerAds = () => {
  const products = [
    {
      id: 1,
      title: "Fresh Carrots",
      price: "$2.99",
      description: "Green Valley Farms",
      category: "Vegetables",
      image: carrot,
    },
    {
      id: 2,
      title: "Organic Apples",
      price: "$4.50",
      description: "Madison Farms",
      category: "Fruits",
      image: fruits,
    },
    {
      id: 3,
      title: "Basmati Rice",
      price: "$6.99",
      description: "Vivian Farms",
      category: "Grains",
      image: rice,
    },
    {
      id: 4,
      title: "Tomatoes",
      price: "$3.25",
      description: "Green State Gardens",
      category: "Vegetables",
      image: tomatoes,
    },
    {
      id: 5,
      title: "Bananas",
      price: "$1.99",
      description: "Hope Natural Products",
      category: "Fruits",
      image: banana,
    },
    {
      id: 6,
      title: "Dry Beans",
      price: "$5.00",
      description: "Peace Farms",
      category: "Legumes",
      image: beans,
    },
    {
      id: 7,
      title: "Spinach",
      price: "$2.25",
      description: "Green State Farms",
      category: "Vegetables",
      image: spinach,
    },
    {
      id: 8,
      title: "Lemons",
      price: "$3.00",
      description: "New Horizon Farms",
      category: "Fruits",
      image: lemon,
    },
    {
      id: 9,
      title: "Fresh Ginger",
      price: "$4.75",
      description: "Hillton Farms",
      category: "Herbs",
      image: ginger,
    },
  ];
  return (
    <div className="p-4 pt-14 bg-[#F7F7F7] ">
      <div className="">
        <h1
          className="text-4xl mb-1 flex justify-center items-center 
font-bold text-gray-700 p-1.5  border-b-2 border-green-500 pb-2 
w-fit mx-auto"
        >
          My Products
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-2xl overflow-hidden h-[280px] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Background Image */}
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white space-y-1 text-center">
              <span className="bg-gray-800 text-xs px-3 py-1 rounded-full inline-block">
                Top Pick
              </span>
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-sm">{product.description}</p>
              <p className="text-sm italic text-gray-300">{product.category}</p>

              <button className="mt-2 bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerAds;
