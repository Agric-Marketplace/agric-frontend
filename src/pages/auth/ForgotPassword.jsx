import React, { useState } from "react";
import rain from "../../assets/images/formbg.mp4";
import formthumb from "../../assets/images/formthumb.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { apiForgotPassword } from "../../services/auth"; 

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await apiForgotPassword({ email });
      
      toast.success(response.data.message || "Reset link sent to your email!");
      setEmail(""); 
    } catch (error) {
      console.log("Forgot Password Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to process request. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster={formthumb}
      >
        <source src={rain} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Form Container */}
      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-md items-center relative">
          
          {/* Logo */}
          <Link
            className="font-bold text-2xl flex mb-2 justify-center items-center"
            to="/"
          >
            Farm <span className="text-green-500">Assist</span>
          </Link>
          
          <h1 className="text-2xl font-semibold text-center mb-2">Reset Password</h1>
          <p className="text-sm text-center text-gray-300 mb-6">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your registered email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 animate-spin text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                    fill="currentColor"
                  />
                </svg>
              )}
              <span>{loading ? "Sending..." : "Send Reset Link"}</span>
            </button>

            <div className="text-center mt-4 border-t border-gray-600 pt-4">
              <p className="text-sm text-white">
                Remembered your password?{" "}
                <Link to="/login" className="text-blue-400 hover:underline">
                  Log In
                </Link>
              </p>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
