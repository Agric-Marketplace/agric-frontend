import React from "react";

const StatCards = () => {
  return (
    <>
      <Card
        title="Gross Revenue"
        value="$2444"
        pillText="2.75%"
        trend="up"
        period="From Jan - Dec"
      />
      <Card
        title="Gross Revenue"
        value="$2444"
        pillText="2.75%"
        trend="up"
        period="From Jan - Dec"
      />
      <Card
        title="Gross Revenue"
        value="$2444"
        pillText="2.75%"
        trend="up"
        period="From Jan - Dec"
      />
    </>
  );
};

const Card = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="p-4 bg-black col-span-4 text-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-2xl font-bold">{value}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="px-3 py-1 text-sm bg-gray-700 rounded">
          {pillText}
        </span>
        <span
          className={`text-sm ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend === "up" ? "▲" : "▼"} {period}
        </span>
      </div>
    </div>
  );
};

export default StatCards;
