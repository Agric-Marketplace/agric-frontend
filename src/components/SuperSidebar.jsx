import React from "react";
import K from "../constants";
import { Link, NavLink } from "react-router";
import { LogOutIcon } from "lucide-react";
import admin from "../constants/admin";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 gap-y-6 bg-white h-screen px-2 py-4 fixed left-0 top-0 border-r border-slate-200 shadow-sm">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-slate-800 px-2">
        Farm<span className="text-blue-600">Assist</span>
      </Link>

      {/* Nav Links */}
      <div className="flex flex-col gap-y-3 mt-4">
        {admin.NAVLINKS.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `text-slate-700 hover:bg-blue-50 hover:text-blue-700 px-3 py-2 w-full rounded-md flex items-center gap-x-2 transition-all ${
                isActive
                  ? "bg-blue-100 text-blue-800 font-semibold shadow-sm"
                  : ""
              }`
            }
            title={link.name}
            end
          >
            <link.icon className="text-blue-500" />
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>

      {/* Logout */}
      <Link
        to="/"
        className="flex gap-2 mt-auto hover:bg-red-50 hover:text-red-700 px-3 py-2 w-full rounded-md items-center text-slate-700 transition-all"
      >
        <LogOutIcon className="text-red-500" />
        <span>Logout</span>
      </Link>
    </div>
  );
};

export default Sidebar;
