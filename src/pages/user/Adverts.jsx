import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { FaLeaf } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router";
import { apiGetAllAdverts } from "../../services/products";
import { toast } from "react-toastify";

const Adverts = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [heroSlides, setHeroSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all live products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiGetAllAdverts();
        // Based on your backend controller, data is inside response.products
        const liveProducts = response.products || [];
        
        setProducts(liveProducts);
        // Automatically feature the 3 newest/top products in the hero slider
        setHeroSlides(liveProducts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching adverts:", error);
        toast.error("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <p className="text-2xl font-bold text-green-600 animate-pulse">Harvesting fresh products...</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-100">
      {/* ===== Hero Section ===== */}
      {heroSlides.length > 0 && (
        <div className="pt-28">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{ delay: 4000 }}
            effect="fade"
            speed={1500}
            loop
            className="h-[50vh] relative -mt-10 w-full"
          >
            {heroSlides.map((item) => (
              <SwiperSlide key={item._id || item.productId} className="bg-black">
                <div className="absolute inset-0">
                  <div
                    className="relative h-full w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`, // ✅ Cloudinary URL
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>

                    {/* Text Overlay */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 text-center text-white">
                      <span className="bg-green-700 text-white text-xs uppercase tracking-wide px-3 py-1 rounded-full mb-2">
                        Featured {item.category}
                      </span>
                      <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow mb-2">
                        {item.title}
                      </h1>
                      <span className="bg-white text-green-700 font-bold text-xl px-4 py-1 rounded-full mb-2 shadow">
                        ₵{(parseFloat(item.price) || 0).toFixed(2)}
                      </span>
                      <p className="flex items-center justify-center text-sm text-gray-200 italic mb-4 max-w-md line-clamp-2">
                        <FaLeaf className="mr-2 text-green-400 flex-shrink-0" />
                        {item.description}
                      </p>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition-all shadow-lg">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* ===== Products Grid ===== */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-500">No products available right now.</h2>
            <p className="text-gray-400 mt-2">Check back later for fresh farm produce!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const safePrice = parseFloat(product.price) || 0;
              const safeId = product._id || product.productId || index;
              return (
                <div
                  key={safeId}
                  className="relative rounded-2xl overflow-hidden h-[280px] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Background Image - Cloudinary URL */}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-cover bg-white"
                    loading="lazy"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image" }}
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/50 hover:bg-black/40 transition-colors" />

                  {/* Text Overlay */}
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white space-y-1 text-center p-4">
                    <span className="bg-gray-800/80 backdrop-blur-sm text-xs px-3 py-1 rounded-full inline-block border border-gray-600">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-bold text-shadow">{product.title}</h3>
                    <p className="text-sm line-clamp-2 px-2 text-gray-200">{product.description}</p>
                    
                    <p className="text-lg font-bold text-green-400 mt-1 drop-shadow-md">
                      ₵{safePrice.toFixed(2)}
                    </p>
                    
                    <button
                      onClick={() => {
                        const productToAdd = {
                          ...product,
                          price: safePrice, 
                        };
                        addToCart(productToAdd);
                        toast.success(`${product.title} added to cart!`);
                      }}
                      className="mt-3 bg-white text-green-700 font-bold px-6 py-2 rounded-full shadow-lg hover:bg-green-50 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Adverts;


