import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaLeaf } from "react-icons/fa";
import { apiGetAllAdverts } from "../../services/products";

const Adverts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const response = await apiGetAllAdverts();
        setProducts(response.data.products); // adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching adverts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAdverts();
  }, []);

  return (
    <section className="min-h-screen bg-gray-100">
      {/* ===== Hero Section ===== */}
      <div className="pt-28">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 4000 }}
          effect="fade"
          speed={1500}
          loop={true}
          className="h-[50vh] relative -mt-10 w-full"
        >
          {products.slice(0, 3).map((item, index) => (
            <SwiperSlide key={index} className="bg-black">
              <div className="absolute inset-0">
                <div
                  className="relative h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
                  <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center text-white">
                    <span className="bg-green-700 text-white text-xs uppercase tracking-wide px-3 py-1 rounded-full mb-2">
                      Organic
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow mb-2">
                      {item.title}
                    </h1>
                    <p className="text-lg md:text-xl text-green-200 mb-2">
                      {item.tagline || "Locally sourced and fresh!"}
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
        {loading ? (
          <p className="col-span-full text-center text-gray-500">
            Loading products...
          </p>
        ) : products.length === 0 ? (
          <p className="col-span-full text-center text-red-500">
            No products found.
          </p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="relative rounded-2xl overflow-hidden h-[280px] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white space-y-1 text-center">
                <span className="bg-gray-800 text-xs px-3 py-1 rounded-full inline-block">
                  Top Pick
                </span>
                <h3 className="text-lg font-bold">{product.title}</h3>
                <p className="text-sm">{product.description}</p>
                <p className="text-sm italic text-gray-300">
                  {product.category}
                </p>
                <p className="text-md font-semibold text-green-300">
                  {product.price}
                </p>
                <button className="mt-2 bg-white text-black font-semibold px-6 py-2 rounded-full shadow-md hover:bg-gray-100">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Adverts;
