import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price safely using parseFloat
  const totalPrice = cart.reduce((total, item) => {
    const itemPrice = parseFloat(item.price);
    const itemQuantity = item.quantity ? parseInt(item.quantity, 10) : 1;
    return total + (itemPrice || 0) * itemQuantity;
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
        <div className="text-center text-gray-500 py-12">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => {
            const itemPrice = parseFloat(item.price) || 0;
            const itemQuantity = item.quantity
              ? parseInt(item.quantity, 10)
              : 1;

            return (
              <div
                key={index}
                className="flex items-center gap-6 border border-gray-200 p-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 bg-white max-w-4xl mx-auto" // Added max-width and center alignment
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-green-700 truncate">
                    {item.title || item.name}
                  </h2>
                  {item.description && (
                    <p className="text-sm text-gray-600 truncate">
                      {item.description}
                    </p>
                  )}
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <p className="text-sm text-gray-700">
                        ₵{itemPrice.toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="text-gray-600">Qty:</span>
                        <span className="font-semibold">{itemQuantity}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 px-4 py-2 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50 transition"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 border-t border-gray-300 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
          <p className="text-lg text-gray-700 mb-6">
            Total:{" "}
            <span className="font-semibold text-green-700">
              ₵{totalPrice.toFixed(2)}
            </span>
          </p>

          <button
            onClick={() => navigate("/paymentpage")}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-300"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
