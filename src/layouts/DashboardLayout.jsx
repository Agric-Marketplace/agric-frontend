import React from "react";
import Sidebar from "../components/Sidebar";
import DashNav from "../components/DashNav";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex font-play-au ">
      <Sidebar />
      <div className="ml-60  flex flex-col w-full">
        <DashNav />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
