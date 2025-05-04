import React from "react";
import { Calendar } from "lucide-react";
import StatCards from "../../components/StatCards";
import ActivityGraph from "../../components/ActivityGraph";
import RecentTransactions from "../../components/RecentTransactions";
import UsageRadar from "../../components/UsageRadar";
import { Link } from "react-router";

const Overview = () => {
  return (
    <div className="w-full pt-14 bg-[#F7F7F7]">
      <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
        <div className="flex items-center justify-between p-0.5">
          <div>
            <Link
              to={"/dashboard/vendor-profile"}
              className="text-sm font-bold block"
            >
              Good morning, Farmer!
            </Link>
            <span className="text-xs block text-stone-500">
              Friday, March 28th 2025
            </span>
          </div>
          <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
            <Calendar />
            <span>Prev 6 Months</span>
          </button>
        </div>
      </div>
      <div className="px-4 grid gap-3 grid-cols-12">
        <StatCards />
        <ActivityGraph />
        <UsageRadar />
        <RecentTransactions />
      </div>
    </div>
  );
};

export default Overview;
