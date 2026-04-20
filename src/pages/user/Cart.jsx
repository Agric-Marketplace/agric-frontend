import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; 

const Cart = () => {

  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  
  const displayTotal = cartTotal || cart.reduce((total, item) => {
    return total + (parseFloat(item.price) || 0) * (parseInt(item.quantity, 10) || 1);
  }, 0);

  return (
    <div className="pt-28 p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        Welcome to Your FarmAssist Cart
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Hello Buyer! Here's your recent activity:
      </p>
      <h1 className="text-3xl font-bold mb-6 text-green-700">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-500 py-12 bg-white rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
          <p className="text-xl font-medium">Your cart is empty.</p>
          <button 
            onClick={() => navigate("/adverts")}
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => {
            
            const productInfo = item.product || {};
            const productId = productInfo._id; 
            const title = productInfo.title || "Unnamed Produce";
            const image = productInfo.image; 
            const maxStock = productInfo.quantity || 99; 
            
            const itemPrice = parseFloat(item.price) || 0;
            const itemQuantity = parseInt(item.quantity, 10) || 1;

            
            if (!productId) return null;

            return (
              <div
                key={productId || index}
                className="flex items-center gap-6 border border-gray-200 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white max-w-4xl mx-auto"
              >
                {/* Image Setup */}
                <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=No+Image" }}
                  />
                </div>

                {/* Info Setup */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-green-700 truncate">
                    {title}
                  </h2>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <p className="text-lg font-bold text-gray-800">
                        ₵{itemPrice.toFixed(2)}
                      </p>
                      
                      
                      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-gray-50">
                        <button
                          onClick={() => {
                            if (itemQuantity > 1) {
                              updateQuantity(productId, itemQuantity - 1);
                            }
                          }}
                          className={`px-4 py-1.5 font-bold transition-colors ${
                            itemQuantity <= 1 ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-200 cursor-pointer"
                          }`}
                        >
                          -
                        </button>
                        <span className="px-4 py-1.5 font-medium text-black bg-white border-x border-gray-300 min-w-[3rem] text-center">
                          {itemQuantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(productId, itemQuantity + 1)}
                          disabled={itemQuantity >= maxStock}
                          className={`px-4 py-1.5 font-bold transition-colors ${
                            itemQuantity >= maxStock ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:bg-gray-200 cursor-pointer"
                          }`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="flex flex-col items-end justify-between h-full gap-4">
                  <p className="font-bold text-green-800 text-lg">
                    ₵{(itemPrice * itemQuantity).toFixed(2)}
                  </p>
                  <button
                    onClick={() => removeFromCart(productId)}
                    className="px-4 py-2 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50 hover:text-red-700 transition font-medium"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Summary Section */}
      {cart.length > 0 && (
        <div className="mt-8 border-t border-gray-300 pt-6 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Order Summary</h2>
            <p className="text-2xl text-gray-700">
              Total:{" "}
              <span className="font-bold text-green-700">
                ₵{displayTotal.toFixed(2)}
              </span>
            </p>
          </div>

          <button
            onClick={() => navigate("/paymentpage")}
            className="mt-4 md:mt-0 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300 font-bold shadow-lg text-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
