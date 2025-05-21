import React from "react";
import { Outlet } from "react-router";
import DashNav from "../components/DashNav";
import Sidebar from "../components/SuperSidebar";

const SuperDashboardLayout = () => {
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

export default SuperDashboardLayout;
