import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Calculate total price safely using parseFloat
  const totalPrice = cart.reduce(
    (total, item) => total + (parseFloat(item.price) || 0),
    0
  );

  return (
    <div className="pt-28 p-8 min-h-screen bg-white">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        Welcome to Your FarmAssist Cart
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Hello Buyer! Here's your recent activity:
      </p>
      <h1 className="text-3xl font-bold mb-6 text-green-700">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-6 border border-gray-200 p-4 rounded-xl shadow hover:shadow-md transition"
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-24 h-24 object-cover rounded border"
                />
              )}
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-green-700">
                  {item.title || item.name}
                </h2>
                {item.description && (
                  <p className="text-sm text-gray-600">{item.description}</p>
                )}
                <p className="text-sm text-gray-700">
                  ${parseFloat(item.price || 0).toFixed(2)}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="mt-3 px-4 py-1.5 text-sm text-red-600 border border-red-300 rounded hover:bg-red-50 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-8 border-t border-gray-300 pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
          <p className="text-lg text-gray-700">
            Total: ${totalPrice.toFixed(2)}
          </p>

          <button
            onClick={() => navigate("/paymentpage")}
            className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition"
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
