// src/pages/VerifyEmail.jsx
import { useSearchParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { apiVerifyEmail } from "../../services/auth";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const [statusMessage, setStatusMessage] = useState("Verifying…");

  useEffect(() => {
    if (!token) {
      setStatusMessage("❌ No verification token provided.");
      return;
    }

    apiVerifyEmail(token)
      .then((res) => {
        // res.data.message should be something like "Email successfully verified."
        setStatusMessage(`✅ ${res.data.message}`);
        // Optionally redirect after a short delay:
        setTimeout(() => navigate("/login"), 3000);
      })
      .catch((err) => {
        console.error(err);
        const msg =
          err.response?.data?.message ||
          "Verification failed. Please try again.";
        setStatusMessage(`❌ ${msg}`);
      });
  }, [token, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Email Verification</h1>
      <p className="text-lg mb-6">{statusMessage}</p>
      {statusMessage.startsWith("✅") && (
        <button
          onClick={() => navigate("/login")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Go to Login
        </button>
      )}
    </div>
  );
}
