import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { apiGetVendorAdverts } from "../../services/products";
import { toast } from "react-toastify";

const Overview = () => {
  const [recentProducts, setRecentProducts] = useState([]);
  const [totalAds, setTotalAds] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await apiGetVendorAdverts();
        const allProducts = response.data.products || [];
        
        // Grab the total count from the pagination object your backend sends
        setTotalAds(response.data.pagination?.totalProducts || allProducts.length);
        
        // Slice only the first 3 for the "Recent" preview
        setRecentProducts(allProducts.slice(0, 3));
      } catch (error) {
        console.error("Dashboard fetch error:", error);
        toast.error("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="p-6 pt-14 bg-[#F7F7F7] min-h-screen">
      <h1 className="text-4xl mb-6 font-bold text-gray-700 p-1.5 border-b-2 border-green-500 pb-2 w-fit">
        Dashboard Overview
      </h1>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Card 1: Total Ads */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 flex flex-col justify-center">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Total Active Ads</h3>
          {loading ? (
            <div className="h-8 w-16 bg-gray-200 animate-pulse rounded mt-1"></div>
          ) : (
            <p className="text-4xl font-bold text-gray-800">{totalAds}</p>
          )}
        </div>

        {/* Card 2: Status */}
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500 flex flex-col justify-center">
          <h3 className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-1">Account Status</h3>
          <p className="text-2xl font-bold text-blue-600 flex items-center gap-2">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span> Verified Vendor
          </p>
        </div>

        {/* Card 3: Quick Action */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl shadow-md flex flex-col justify-center items-center text-white hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate("/dashboard/create-ad")}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <p className="text-xl font-bold">Create New Ad</p>
        </div>
      </div>

      {/* Recent Ads Section */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-2xl font-bold text-gray-700">Recently Added</h2>
          <Link to="/dashboard/ads" className="text-green-600 font-semibold hover:underline">
            View All &rarr;
          </Link>
        </div>

        {loading ? (
           <p className="text-gray-500 animate-pulse">Loading recent activity...</p>
        ) : recentProducts.length === 0 ? (
          <div className="bg-white p-8 rounded-xl shadow-sm text-center border border-dashed border-gray-300">
            <p className="text-gray-500 mb-4">You have no active advertisements.</p>
            <button onClick={() => navigate("/dashboard/create-ad")} className="text-green-500 font-semibold hover:underline">
              Start posting &rarr;
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProducts.map((product) => (
              <div key={product.productId || product._id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex items-center p-3 gap-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-20 h-20 object-cover rounded-md"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/100?text=No+Img" }} 
                />
                <div>
                  <h4 className="font-bold text-gray-800 text-lg line-clamp-1">{product.title}</h4>
                  <p className="text-green-600 font-semibold text-sm">${product.price}</p>
                  <p className="text-xs text-gray-400 mt-1 capitalize">{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
