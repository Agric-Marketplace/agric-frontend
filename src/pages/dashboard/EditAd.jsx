import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import formbg from "../../assets/images/formbg.mp4";
import { toast } from "react-toastify";
import { 
  apiGetVendorAdvertById, 
  apiUpdateAdvert, 
  apiUpdateAdvertImage 
} from "../../services/products";

const EditAd = () => {
  const { id } = useParams(); // Gets the ID from the URL
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [file, setFile] = useState(null);
  
  // State to hold the pre-filled data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    quantity: "",
    price: "",
    currentImage: ""
  });

  // Fetch the existing product data on load
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await apiGetVendorAdvertById(id);
        const product = response.data;
        
        setFormData({
          title: product.title,
          description: product.description,
          category: product.category,
          quantity: product.quantity,
          price: product.price,
          currentImage: product.image
        });
      } catch (error) {
        console.error("Error fetching product:", error);
        toast.error("Failed to load advert details.");
        navigate("/dashboard/ads"); // Kick them back if it fails
      } finally {
        setFetching(false);
      }
    };

    fetchProduct();
  }, [id, navigate]);

  // Handle standard text inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // 1. Update the text fields (Title, Price, etc.)
      // We explicitly pull out what the backend expects
      const textPayload = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        quantity: Number(formData.quantity),
        price: Number(formData.price) // Ensure price is a number if your backend requires it
      };
      
      await apiUpdateAdvert(id, textPayload);

      // 2. Only update the image if the user actually selected a new one
      if (file) {
        const imageFormData = new FormData();
        imageFormData.append("image", file);
        await apiUpdateAdvertImage(id, imageFormData);
      }

      toast.success("Advert updated successfully!");
      navigate("/dashboard/ads");

    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to update ad. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="flex-1 flex justify-center items-center h-screen bg-[#F7F7F7]">
        <p className="text-xl font-semibold text-gray-500 animate-pulse">Loading advert details...</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col p-6 w-full bg-[#F7F7F7] pt-14 font-tektur-au">
      <h1 className="text-4xl mb-1 flex justify-center items-center font-bold text-gray-700 p-1.5 border-b-2 border-blue-500 pb-2 w-fit mx-auto">
        Edit Your Advert
      </h1>

      <div className="flex w-full flex-1 md:flex-row items-center justify-center gap-8 p-6 bg-gradient-to-r from-blue-50 to-white shadow-lg border border-gray-300 rounded-md">
        <div className="w-full md:w-1/2 h-[500px] relative rounded-lg overflow-hidden shadow-lg">
          {/* Show the current image if they haven't picked a new one yet */}
          {!file && formData.currentImage ? (
            <img 
              src={formData.currentImage} 
              alt="Current Ad" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=No+Image+Available" }}
            />

          ) : (
            <video
              src={formbg}
              className="w-full h-full object-cover"
              autoPlay muted loop playsInline
            />
          )}
          
          {!file && (
             <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
               Current Image
             </div>
          )}
        </div>

        <div className="w-full md:w-1/2 bg-white p-6 shadow-md rounded-lg h-[500px] overflow-y-auto">
          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Advert Title*</label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description*</label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              >
                <option value="" disabled>Select Category</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains">Grains</option>
                <option value="Legumes">Legumes</option>
                <option value="Herbs">Herbs</option>
              </select>
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity*</label>
              <input
                type="number"
                name="quantity"
                id="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Update Image (Optional)</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0])}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
              <p className="mt-1 text-xs text-gray-500">Leave empty to keep your current image.</p>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price*</label>
              <input
                type="text"
                name="price"
                id="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 flex items-center justify-center gap-2"
              >
                {loading ? "Saving Changes..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAd;
