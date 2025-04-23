import React from "react";

const Adverts = () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      price: "$9.99",
      category: "Vegetables",
      image: "https://via.placeholder.com/150",
    },
    // Add more product objects as needed
  ];

  return (
    <section className="min-h-screen bg-gray-100">
      {/* ===== Hero Section ===== */}
      <div className="pt-28">
        <div className="relative h-[50vh] bg-[url('assets/images/advertsbg.png')] bg-no-repeat bg-center bg-cover -mt-16">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-65"></div>
          <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-md">
              Our Products
            </h1>
          </div>
        </div>
      </div>

      {/* ===== Products Grid ===== */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-md overflow-hidden"
          >
            {/* Product Image */}
            <div className="bg-gray-300 h-48 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-contain h-full"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 space-y-2">
              <h3 className="text-lg font-semibold text-center">
                {product.title}
              </h3>
              <p className="text-center">{product.price}</p>
              <p className="text-center text-sm text-gray-500">
                {product.category}
              </p>

              {/* View Button */}
              <div className="flex justify-center mt-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Adverts;
