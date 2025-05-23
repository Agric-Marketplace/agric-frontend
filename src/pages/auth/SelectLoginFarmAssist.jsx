import React from "react";
import { UserRound, Store, Shield } from "lucide-react";
import { Link } from "react-router";

const SelectLoginFarmAssist = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to{" "}
            <Link to="/">
              Farm<span className="text-green-600">Assist</span>
            </Link>
          </h2>
          <p className="mt-2 text-gray-600">Choose your login type</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8">
          {/* User Login */}
          <Link
            to="/login"
            className="flex items-center justify-center p-6 space-x-4 border-2 border-green-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group"
          >
            <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
              <UserRound className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Login as a User
              </h3>
              <p className="text-gray-600">Browse and purchase farm products</p>
            </div>
          </Link>

          {/* Vendor Login */}
          <Link
            to="/vendorlogin"
            className="flex items-center justify-center p-6 space-x-4 border-2 border-green-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group"
          >
            <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
              <Store className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Login as a Vendor
              </h3>
              <p className="text-gray-600">Manage your products and listings</p>
            </div>
          </Link>

          {/* Superadmin Login */}
          <Link
            to="/superadminlogin"
            className="flex items-center justify-center p-6 space-x-4 border-2 border-green-100 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all group"
          >
            <div className="p-3 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Login as Superadmin
              </h3>
              <p className="text-gray-600">Administrative dashboard access</p>
            </div>
          </Link>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Don’t have an account?{" "}
            <Link
              to="/selectsignup"
              className="font-medium text-green-600 hover:text-green-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectLoginFarmAssist;
