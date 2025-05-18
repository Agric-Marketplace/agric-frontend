"use client";

import { ArrowLeft, Check, CreditCard } from "lucide-react";
import { useState } from "react";
import banana from "../../assets/images/banana.jpg";
import troy from "../../assets/images/troy.png";
import visa from "../../assets/images/visa.png";
import mastercard from "../../assets/images/mastercard.png";
import { useCart } from "../../context/CartContext";

export default function PaymentPage() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [setAsDefault, setSetAsDefault] = useState(false);

  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + (parseFloat(item.price) || 0),
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white pt-28">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 -z-10" />
          {["Cart", "Addresses", "Payment", "Confirm"].map((step, i) => (
            <div key={i} className="flex items-center gap-1">
              <div
                className={`w-6 h-6 rounded-full ${
                  step === "Payment"
                    ? "border-2 border-gray-300 bg-white"
                    : "bg-green-500"
                } flex items-center justify-center`}
              >
                {step === "Payment" ? null : (
                  <Check className="w-4 h-4 text-white" />
                )}
              </div>
              <span
                className={`text-sm font-medium ${
                  step === "Payment" ? "text-gray-900" : ""
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="mb-6">
        <button className="flex items-center text-gray-700 font-medium">
          <ArrowLeft className="w-5 h-5 mr-1" />
          Back to Addresses
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left Side - Payment Info */}
        <div className="md:col-span-3">
          {/* Registered Cards */}
          <div className="border border-gray-200 rounded-lg p-4 mb-6">
            <div className="flex items-center mb-4">
              <CreditCard className="w-5 h-5 mr-2 text-gray-700" />
              <h2 className="font-medium">Registered Cards</h2>
            </div>

            {[
              {
                bank: "GCB",
                number: "**** **** **** 1234",
                expiry: "12/34",
              },
              {
                bank: "CBG",
                number: "**** **** **** 5678",
                expiry: "11/30",
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`border ${
                  selectedCard === i ? "border-green-500" : "border-gray-200"
                } rounded-lg p-3 mb-3 cursor-pointer`}
                onClick={() => setSelectedCard(i)}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    {selectedCard === i && (
                      <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    )}
                    <span className="text-gray-600">Bank</span>
                  </div>
                  <div className="text-gray-600">Expiry</div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 mr-2 text-gray-500" />
                    <div>
                      <div className="text-sm font-medium">{card.bank}</div>
                      <div className="text-sm text-gray-500">{card.number}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{card.expiry}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Add New Card */}
          <div className="bg-green-50 border border-green-100 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                <Check className="w-3 h-3 text-white" />
              </div>
              <h2 className="font-medium">Add New Card</h2>
              <div className="ml-auto flex items-center gap-2">
                <img src={mastercard} alt="Mastercard" className="h-6" />
                <img src={visa} alt="Visa" className="h-6" />
                <img src={troy} alt="Troy" className="h-6" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 pl-8"
                    placeholder="Enter card number"
                  />
                  <CreditCard className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Owner
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Enter name on card"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2 text-center"
                      placeholder="MM"
                      maxLength={2}
                    />
                    <div className="flex items-center justify-center">/</div>
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-2 text-center"
                      placeholder="YY"
                      maxLength={2}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV2
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md p-2 text-center"
                    placeholder="CVV"
                    maxLength={3}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Set as Default */}
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="setAsDefault"
              className="h-4 w-4 text-green-500 border-gray-300 rounded"
              checked={setAsDefault}
              onChange={() => setSetAsDefault(!setAsDefault)}
            />
            <label
              htmlFor="setAsDefault"
              className="ml-2 text-sm text-gray-700"
            >
              Set as default payment method
            </label>
          </div>
        </div>

        {/* Right Side - Summary */}
        <div className="md:col-span-2">
          <div className="border border-gray-200 rounded-lg p-4">
            <h2 className="font-medium mb-4">Order Summary</h2>

            <div className="mb-4">
              <div className="grid grid-cols-3 mb-2 text-gray-600">
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
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-gray-200">
              <span className="font-medium">Total:</span>
              <span className="text-xl font-bold">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg mt-4 transition-colors">
            Review Your Order
          </button>
        </div>
      </div>
    </div>
  );
}
