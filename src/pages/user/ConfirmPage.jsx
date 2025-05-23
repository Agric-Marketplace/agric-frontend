import React from "react";
import { useNavigate } from "react-router";
import { CheckCircle } from "lucide-react";

const ConfirmPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      <CheckCircle className="w-20 h-20 text-green-500 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
      <p className="text-gray-600 mb-6 text-center">
        Thank you for your purchase. Your order is being processed.
      </p>
      <button
        onClick={() => navigate("/adverts")}
        className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-lg transition-colors"
      >
        Back to Products
      </button>
    </div>
  );
};

export default ConfirmPage;
