import React from "react";
import K from "../constants";
import { Link, NavLink } from "react-router";
import { LogOutIcon } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 gap-y-6 bg-green-50 h-screen px-2 py-4 fixed left-0 top-0 border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-gray-800 px-2">
        Farm<span className="text-green-600">Assist</span>
      </Link>

      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-gray-700 hover:bg-green-100 hover:text-green-800 px-3 py-2 w-full rounded-md flex items-center gap-x-2 transition-all ${
                  isActive
                    ? "bg-green-200 text-green-800 font-semibold shadow-sm"
                    : ""
                }`
              }
              title={link.name}
              end
            >
              <link.icon className="text-green-600" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>

      <Link
        className="flex gap-2 mt-auto hover:bg-green-100 hover:text-green-800 px-3 py-2 w-full rounded-md items-center"
        to={"/"}
      >
        <LogOutIcon className="text-green-600" />
        <button className="mt-auto">Logout</button>
      </Link>
    </div>
  );
};

export default Sidebar;
