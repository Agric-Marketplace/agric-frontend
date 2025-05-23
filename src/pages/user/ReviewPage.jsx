import React from "react";
("use client");

import { useNavigate } from "react-router";
import { Check, CreditCard } from "lucide-react";
import { useCart } from "../../context/CartContext";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + (parseFloat(item.price) || 0),
    0
  );
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white pt-28">
      <h1 className="text-2xl font-semibold mb-6">Review Your Order</h1>

      {/* Order Summary */}
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-medium mb-4">Cart Items</h2>

        <div className="grid grid-cols-3 text-gray-600 font-medium mb-2">
          <span>Product</span>
          <span className="text-center">Qty</span>
          <span className="text-right">Price</span>
        </div>

        {cart.map((product, idx) => (
          <div
            key={idx}
            className="grid grid-cols-3 items-center py-2 border-b border-gray-100"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                <img
                  src={product.image}
                  alt={product.title || product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>{product.title || product.name}</span>
            </div>
            <div className="text-center">(x1)</div>
            <div className="text-right font-medium">
              ${(parseFloat(product.price) || 0).toFixed(2)}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-4">
          <span className="font-medium">Total:</span>
          <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      {/* Payment Info Summary (Mocked) */}
      <div className="border border-gray-200 rounded-lg p-4 mb-6">
        <h2 className="text-lg font-medium mb-4">Payment Method</h2>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="w-3 h-3 text-white" />
          </div>
          <CreditCard className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">
            **** **** **** 1234 (GCB)
          </span>
        </div>
      </div>

      {/* Confirm Button */}
      <button
        onClick={() => navigate("/confirm")}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
      >
        Place Order
      </button>
    </div>
  );
};

export default ReviewPage;
