import React from "react";
import rain from "../../assets/images/formbg.mp4";
import { Link } from "react-router";
import formthumb from "../../assets/images/formthumb.png";
import { useNavigate } from "react-router";
import { apiLogin } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await apiLogin(formData);
      const user = response.data;
      localStorage.setItem("token", response.data.accessToken); //fetch token from backend
      localStorage.setItem("user", JSON.stringify(user.role));

      //nagigate user to their role
      if (user.role === "vendor") {
        navigate("/dashboard");
      } else {
        navigate("/adverts");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
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
          <h1 className="text-2xl font-semibold text-center mb-6">Log In</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
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
              <p className="text-sm text-blue-500 hover:underline mt-2">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Log In
            </button>

            <p className="text-sm text-center text-white">
              No account yet?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
