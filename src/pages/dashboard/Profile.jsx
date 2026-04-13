import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [userData, setUserData] = useState({
    fullName: "Loading...",
    email: "Loading...",
    role: "Loading...",
  });

  // Pull the user data from localStorage when the page loads
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
      } catch (error) {
        console.error("Error parsing user data from local storage", error);
      }
    }
  }, []);

  const handleEditClick = () => {
    toast.info("Profile editing functionality is coming soon!");
  };

  return (
    <div className="p-6 pt-14 bg-[#F7F7F7] min-h-screen flex flex-col items-center">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl mb-8 font-bold text-gray-700 p-1.5 border-b-2 border-green-500 pb-2 w-fit">
          My Profile
        </h1>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 h-32 relative">
            {/* Avatar Circle */}
            <div className="absolute -bottom-12 left-8 w-24 h-24 bg-white rounded-full p-1 shadow-md flex items-center justify-center">
              <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl font-bold uppercase">
                {userData.fullName.charAt(0)}
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-8">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{userData.fullName}</h2>
                <p className="text-gray-500 font-medium capitalize">{userData.role} Account</p>
              </div>
              <button 
                onClick={handleEditClick}
                className="bg-gray-100 text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-200 transition"
              >
                Edit Profile
              </button>
            </div>

            {/* Form Fields (Disabled) */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={userData.fullName} 
                  disabled 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-600 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={userData.email} 
                  disabled 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-600 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <input 
                  type="text" 
                  value={userData.role.toUpperCase()} 
                  disabled 
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-600 font-semibold cursor-not-allowed"
                />
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
