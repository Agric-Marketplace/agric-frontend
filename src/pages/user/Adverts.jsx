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

const Adverts = () => {
  const products = [
    {
      id: 1,
      title: "Fresh Carrots",
      price: "$2.99",
      category: "Vegetables",
      image: carrot,
    },
    {
      id: 2,
      title: "Organic Apples",
      price: "$4.50",
      category: "Fruits",
      image: fruits,
    },
    {
      id: 3,
      title: "Basmati Rice",
      price: "$6.99",
      category: "Grains",
      image: rice,
    },
    {
      id: 4,
      title: "Tomatoes",
      price: "$3.25",
      category: "Vegetables",
      image: tomatoes,
    },
    {
      id: 5,
      title: "Bananas",
      price: "$1.99",
      category: "Fruits",
      image: banana,
    },
    {
      id: 6,
      title: "Dry Beans",
      price: "$5.00",
      category: "Legumes",
      image: beans,
    },
    {
      id: 7,
      title: "Spinach",
      price: "$2.25",
      category: "Vegetables",
      image: spinach,
    },
    {
      id: 8,
      title: "Lemons",
      price: "$3.00",
      category: "Fruits",
      image: lemon,
    },
    {
      id: 9,
      title: "Fresh Ginger",
      price: "$4.75",
      category: "Herbs",
      image: ginger,
    },
  ];

  return (
    <section className="min-h-screen bg-gray-100">
      {/* ===== Hero Section ===== */}
      <div className="pt-28">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000 }}
          effect="fade"
          speed={1500} // 🔹 Transition duration
          loop={true}
          className="h-[60vh] relative -mt-10  w-full"
        >
          {[
            {
              title: "Fresh Carrots",
              image: carrot,
            },
            {
              title: "Fresh Fruits",
              image: fruits,
            },
            {
              title: "Local Rice",
              image: rice,
            },
          ].map((item, index) => (
            <SwiperSlide key={index} className="bg-black">
              <div className="absolute inset-0">
                <div
                  className="relative h-full w-full bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className="relative z-10 flex items-center justify-center h-full w-full px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
                      {item.title}
                    </h1>
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
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="w-full h-60 bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-5 space-y-2 text-center">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-green-700 font-medium">{product.price}</p>
              <p className="text-sm text-gray-500">{product.category}</p>

              <button className="mt-3 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition-colors">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Adverts;
