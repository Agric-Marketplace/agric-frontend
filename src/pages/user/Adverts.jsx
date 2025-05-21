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
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaLeaf } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";

const Adverts = () => {
  const { addToCart } = useCart();

  // Product data
  const products = [
    {
      id: 1,
      title: "Fresh Carrots",
      price: " ₵2.99",
      description: "Green Valley Farms",
      category: "Vegetables",
      image: carrot,
    },
    {
      id: 2,
      title: "Organic Apples",
      price: " ₵4.50",
      description: "Madison Farms",
      category: "Fruits",
      image: fruits,
    },
    {
      id: 3,
      title: "Basmati Rice",
      price: " ₵6.99",
      description: "Vivian Farms",
      category: "Grains",
      image: rice,
    },
    {
      id: 4,
      title: "Tomatoes",
      price: " ₵3.25",
      description: "Green State Gardens",
      category: "Vegetables",
      image: tomatoes,
    },
    {
      id: 5,
      title: "Bananas",
      price: " ₵1.99",
      description: "Hope Natural Products",
      category: "Fruits",
      image: banana,
    },
    {
      id: 6,
      title: "Dry Beans",
      price: " ₵5.00",
      description: "Peace Farms",
      category: "Legumes",
      image: beans,
    },
    {
      id: 7,
      title: "Spinach",
      price: " ₵2.25",
      description: "Green State Farms",
      category: "Vegetables",
      image: spinach,
    },
    {
      id: 8,
      title: "Lemons",
      price: " ₵3.00",
      description: "New Horizon Farms",
      category: "Fruits",
      image: lemon,
    },
    {
      id: 9,
      title: "Fresh Ginger",
      price: " ₵4.75",
      description: "Hillton Farms",
      category: "Herbs",
      image: ginger,
    },
  ];

  const heroSlides = [
    {
      title: "Fresh Carrots",
      image: carrot,
      price: " ₵2.99",
      description: "Green Valley Farms",
      tagline: "Crisp, sweet and locally grown!",
    },
    {
      title: "Fresh Fruits",
      image: fruits,
      price: " ₵4.50",
      description: "Madison Farms",
      tagline: "A basket full of vitamins!",
    },
    {
      title: "Local Rice",
      image: rice,
      price: " ₵6.99",
      description: "Vivian Farms",
      tagline: "Wholesome grains, farm to table.",
    },
  ];

  // Price formatting function
  const formatPrice = (price) => {
    if (typeof price === "string") {
      // Remove the "$" and parse the string to a float
      const numericPrice = parseFloat(price.replace("$", "").trim());
      return isNaN(numericPrice) ? 0 : numericPrice; // Return 0 if it's NaN
    } else if (typeof price === "number") {
      // If price is already a number, return it as-is
      return price;
    }
    return 0; // Return 0 if the price is neither a string nor a number
  };

  return (
    <section className="min-h-screen bg-gray-100">
      {/* ===== Hero Section ===== */}
      <div className="pt-28">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000 }}
          effect="fade"
          speed={1500}
          loop
          className="h-[50vh] relative -mt-10 w-full"
        >
          {heroSlides.map((item, index) => (
            <SwiperSlide key={index} className="bg-black">
              <div className="absolute inset-0">
                <div
                  className="relative h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>

                  {/* Text Overlay */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center text-white">
                    <span className="bg-green-700 text-white text-xs uppercase tracking-wide px-3 py-1 rounded-full mb-2">
                      Organic
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow mb-2">
                      {item.title}
                    </h1>
                    <p className="text-lg md:text-xl text-green-200 mb-2">
                      {item.tagline}
                    </p>
                    <span className="bg-white text-green-700 font-semibold px-4 py-1 rounded-full mb-2 shadow">
                      {item.price}
                    </span>
                    <p className="flex items-center justify-center text-sm text-gray-200 italic mb-4">
                      <FaLeaf className="mr-2 text-green-400" />
                      {item.description}
                    </p>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition-all">
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ===== Products Grid ===== */}
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
              <p className="text-md font-semibold text-green-300">
                {formatPrice(product.price) > 0
                  ? `$${formatPrice(product.price).toFixed(2)}`
                  : product.price}
              </p>
              <Link
                to="/cart"
                onClick={() => {
                  console.log("Add button clicked");
                  addToCart(product);
                }}
                className="mt-2 bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Adverts;
