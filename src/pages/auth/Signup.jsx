import React, { useState } from "react";
import { Link, useNavigate } from "react-router"; // ✅ corrected router import
import rain from "../../assets/images/formbg.mp4";
import formthumb from "../../assets/images/formthumb.png";
import { apiSignup } from "../../services/auth";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // ✅ message state added
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage(""); // clear message on new submit

    const data = new FormData(event.target);
    const role = data.get("role");

    if (!role) {
      alert("Please select a role.");
      setLoading(false);
      return;
    }

    try {
      const response = await apiSignup(data);
      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user.role));
      setMessage(
        "Signup successful! Please check your email to verify your account."
      ); // ✅ success message

      setTimeout(() => {
        if (user.role === "vendor") {
          navigate("/login");
        } else {
          navigate("/");
        }
      }, 2500); // give user time to see message before navigating
    } catch (error) {
      console.log(error);
      setMessage("An error occurred during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
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

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-md items-center relative">
          <Link
            className="font-bold text-2xl flex mb-3 justify-center items-center"
            to="/"
          >
            Farm <span className="text-green-500">Assist</span>
          </Link>
          <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>

          {/* ✅ Message */}
          {message && (
            <div className="mb-4 text-green-400 text-center font-medium">
              {message}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-300 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="role"
                className="block text-sm font-medium text-white"
              >
                Role
              </label>
              <select
                id="role"
                name="role"
                required
                defaultValue=""
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="" disabled className="text-gray-400">
                  Select your role
                </option>
                <option value="user" className="text-black">
                  User
                </option>
                <option value="vendor" className="text-black">
                  Vendor
                </option>
                <option value="superadmin" className="text-black">
                  Superadmin
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-green-500"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
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
              <span>{loading ? "Signing Up..." : "Sign Up"}</span>
            </button>

            <p className="text-sm text-center text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log In Here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
