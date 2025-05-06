import React from "react";
import { Link } from "react-router";
import rain from "../../assets/images/formbg.mp4";
import formthumb from "../../assets/images/formthumb.png";
import { useNavigate } from "react-router";
import { apiSignup } from "../../services/auth";

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Prevent default submit bahaviour
    event.preventDefault();
    // Show loading indicator
    // Collect form data
    const data = new FormData(event.target);
    const role = data.get("role");
    if (!role) {
      alert("Please select a role.");
      return;
    }
    // Post data to backend
    try {
      const response = await apiSignup(data);
      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user.role));

      //nagigate user to their role
      console.log("User role:", user.role); // Add this
      if (user.role === "vendor") {
        console.log("Navigating to /login"); // Add this
        navigate("/login");
      } else {
        console.log("Navigating to /"); // Add this
        navigate("/");
      }

      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      // Hide loading indicator
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

      <div className="relative flex flex-col items-center justify-center h-full text-white ">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-md items-center relative ">
          <Link
            className="font-bold text-2xl flex mb-3 justify-center items-center"
            to="/"
          >
            Farm <span className="text-green-500">Assist</span>
          </Link>
          <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>
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
                type="role"
                id="role"
                name="role"
                placeholder="Enter your role"
                required
                defaultValue={" "}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
              >
                <option value="" disabled className="text-gray-400 ">
                  Select your role
                </option>
                <option value="user" className="text-black ">
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
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Sign Up
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
