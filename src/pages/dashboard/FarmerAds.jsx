import React, { useState, useEffect } from "react";
import { apiGetVendorAdverts, apiDeleteAdvert } from "../../services/products";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const FarmerAds = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch only the logged-in farmer's ads
  const fetchMyAds = async () => {
    try {
      const response = await apiGetVendorAdverts();
      // Based on your backend controller, the array is inside response.data.products
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Full error:", error);
      toast.error("Failed to load your products.");
    } finally {
      setLoading(false);
    }
  };

  // Run the fetch once when the page loads
  useEffect(() => {
    fetchMyAds();
  }, []);

  // Handle deleting an ad
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this advert?")) return;
    
    try {
      await apiDeleteAdvert(id);
      toast.success("Advert deleted successfully!");
      // Instantly remove the deleted product from the screen without reloading
      setProducts(products.filter((product) => product._productId !== id));
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Failed to delete advert.");
    }
  };

  return (
    <div className="p-4 pt-14 bg-[#F7F7F7] min-h-screen">
      <div className="">
        <h1 className="text-4xl mb-1 flex justify-center items-center font-bold text-gray-700 p-1.5 border-b-2 border-green-500 pb-2 w-fit mx-auto">
          My Products
        </h1>
      </div>

      {loading ? (
        <div className="flex justify-center items-center mt-20">
          <p className="text-xl font-semibold text-gray-500 animate-pulse">Loading your inventory...</p>
        </div>
      ) : products.length === 0 ? (
        <div className="flex justify-center items-center mt-20 text-center">
          <div>
            <p className="text-xl font-semibold text-gray-500 mb-4">You haven't posted any adverts yet.</p>
            <button 
              onClick={() => navigate("/dashboard/create-ad")}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
              Create Your First Ad
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.productId}
              className="relative rounded-2xl overflow-hidden h-[280px] shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Background Image */}
            <img
              src={product.image} 
              alt={product.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found" }} 
            />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Text Overlay */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white space-y-2 text-center p-4">
                <span className="bg-green-600 text-sm px-3 py-1 rounded-full inline-block font-bold shadow-md border border-white/20">
                  ${product.price}
                </span>
                <h3 className="text-xl font-bold">{product.title}</h3>
                
                <p className="text-sm line-clamp-2 px-2 text-gray-200">{product.description}</p>
                
                <p className="text-sm italic text-gray-300 mt-1">
                  {product.category} • Qty: {product.quantity || 0}
                </p>

                <div className="flex gap-3 mt-4">
                  <button 
                    onClick={() => navigate(`/dashboard/edit-ad/${product.productId}`)}
                    className="bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(product.productId)}
                    className="bg-red-500 text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FarmerAds;

