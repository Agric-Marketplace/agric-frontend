import React from "react";
import formbg from "../../assets/images/formbg.mp4";
import { apiAddAdvert } from "../../services/products";
import { useState } from "react";
import { useNavigate } from "react-router";

const CreateAd = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [file, setFile] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(event.target);
    setLoading(true);

    const formData = new FormData(event.target); //line to get your data
    console.log(file);

    formData.append("image", file);

    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      alert("You are not authenticated. Please log in again.");
      setLoading(false);
      return;
    }

    try {
      const response = await apiAddAdvert(formData);
      console.log(response);

      alert("Ad created successfully!"); // Show success alert

      //Move user to vendor ads
      navigate("/dashboard/ads");
    } catch (error) {
      console.log(error);

      alert("Failed to create ad. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col p-6 w-full bg-[#F7F7F7] pt-14 font-tektur-au">
      <h1
        className="text-4xl mb-1 flex justify-center items-center 
        font-bold text-gray-700 p-1.5 border-b-2 border-green-500 pb-2 
        w-fit mx-auto"
      >
        Create Your Advert
      </h1>

      <div className="flex w-full flex-1 md:flex-row items-center justify-center gap-8 p-6 bg-gradient-to-r from-green-100 to-white shadow-lg border border-gray-300 rounded-md">
        <div className="w-full md:w-1/2 h-[500px]">
          <video
            src={formbg}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={formbg} type="video/mp4" />
          </video>
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg h-[500px] overflow-y-auto">
          <form
            action=""
            className="flex flex-col space-y-2"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Advert Title*
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="Enter a catchy title for your advert"
                required
              />
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description*
              </label>
              <textarea
                name="description"
                id="description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="Describe your product or service in detail"
                required
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category*
              </label>
              <select
                name="category"
                id="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              >
                <option value="">Select Category</option>
                <option value="Vegetables">Vegetables </option>
                {/* <option value="smartphones">Smartphones</option>
                <option value="headphones">Headphones</option>
                <option value="smartwatches">Smartwatches</option>
                <option value="accessories">Accessories</option> */}
              </select>
            </div>

            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Quantity*
              </label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="Enter available quantity"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Image
              </label>
              <input
                type="file"
                // name="image"
                id="image"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                Recommended size: 800x600px. Max file size: 5MB
              </p>
            </div>

            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Price
              </label>
              <input
                type="text"
                name="price"
                id="price"
                className="w-full pl-7 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="$ 0.00"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 flex items-center"
              >
                Post Advert
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAd;
