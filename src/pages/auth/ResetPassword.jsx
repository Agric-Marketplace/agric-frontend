import React, { useState } from "react";
import rain from "../../assets/images/formbg.mp4";
import formthumb from "../../assets/images/formthumb.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { apiResetPassword } from "../../services/auth";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    if (!token) {
      toast.error("Invalid or missing reset token. Please request a new link.");
      return;
    }

    const formData = new FormData(event.target);
    const newPassword = formData.get("newPassword");
    const confirmPassword = formData.get("confirmPassword");

    
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    try {
      const response = await apiResetPassword(newPassword, token);
      
      
      toast.success(response.data.message || "Password reset successful!");
      
     
      navigate("/login");
    } catch (error) {
      console.log("Reset Password Error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Failed to reset password. The link may be expired.");
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
          
          <h1 className="text-2xl font-semibold text-center mb-2">Create New Password</h1>
          <p className="text-sm text-center text-gray-300 mb-6">
            Your new password must be different from previous used passwords.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-white mb-1"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter new password"
                required
                minLength="6"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-white mb-1"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your new password"
                required
                minLength="6"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none text-black"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center gap-2 mt-4"
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
              <span>{loading ? "Resetting..." : "Reset Password"}</span>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
