import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import { useCart } from "../../context/CartContext";
import { apiGetProductById } from "../../services/products"; 
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const { addToCart } = useCart();
  

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiGetProductById(id);
        // Depending on your backend, it might be response.data or response.data.data
        setProduct(response.data.data || response.data); 
      } catch (error) {
        console.error("Failed to fetch product:", error);
        toast.error("Could not load product details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  // Quantity Handlers
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  const handleIncrease = () => setQuantity((prev) => prev + 1);

  // 1. If we are still waiting for the backend...
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-center pt-28">
        <p className="text-2xl font-bold text-green-600 animate-pulse">Loading fresh details...</p>
      </div>
    );
  }

 
  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center pt-28 space-y-4">
        <h2 className="text-2xl font-bold text-gray-700">Product not found!</h2>
        <button onClick={() => navigate("/adverts")} className="text-green-600 hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }


  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-10 pt-28">
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden">
          
          {/* Dynamic Image */}
          <div className="bg-gray-50 md:w-1/2 h-[400px] flex justify-center items-center relative">
            <img
              src={product.image}
              alt={product.title || product.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/400?text=No+Image" }} // Fallback if image fails
            />
          </div>

          {/* Dynamic Product Info */}
          <div className="p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-sm text-green-600 font-bold tracking-wider uppercase mb-1">
                {product.category || "General Farm Produce"}
              </p>
              <h1 className="text-3xl font-semibold mb-4 text-gray-800">
                {product.title || product.name}
              </h1>

              <div className="text-2xl font-bold text-green-700 mb-4">
                ₵{parseFloat(product.price).toFixed(2)}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description || "Fresh, high-quality produce straight from the farm to your table."}
              </p>

              {/* Dynamic Stock Indicator */}
              {product.quantity > 0 ? (
                <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold mb-6">
                  {product.quantity} In Stock
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full font-semibold mb-6">
                  Out of Stock
                </span>
              )}
            </div>

            {/* The Counter */}
            <div className="mt-auto">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity
              </label>
              <div className="flex items-center border border-gray-300 rounded-md w-max mb-6">
                <button 
                  onClick={handleDecrease}
                  className="px-4 py-2 bg-gray-50 hover:bg-gray-200 text-gray-600 border-r border-gray-300 transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 font-medium text-gray-800 text-center w-16">
                  {quantity}
                </span>
                <button 
                  onClick={handleIncrease}
                  // Don't let them select more than what's in stock!
                  disabled={quantity >= product.quantity} 
                  className={`px-4 py-2 border-l border-gray-300 transition-colors ${
                    quantity >= product.quantity ? "bg-gray-100 text-gray-300 cursor-not-allowed" : "bg-gray-50 hover:bg-gray-200 text-gray-600"
                  }`}
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button 
                onClick={() => addToCart(product, quantity)}
                disabled={product.quantity === 0}
                className={`w-full py-3 rounded-md text-white font-semibold transition-colors shadow-md ${
                  product.quantity === 0 
                    ? "bg-gray-400 cursor-not-allowed" 
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {product.quantity === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
