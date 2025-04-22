import React from "react";

const auctions = [
  {
    title: "Lettuce",
    farm: "Sunnyhill Farms",
    timeLeft: "03h12m",
    bid: "$2.00",
  },
  {
    title: "Tomatoes",
    farm: "Green Leaf Co.",
    timeLeft: "1d 2h",
    bid: "$4.00",
  },
  {
    title: "Cabbage",
    farm: "FarmFresh Produce",
    timeLeft: "45m",
    bid: "$1.20",
  },
];

const LiveAuctions = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-8">Live Auctions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {auctions.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-sm p-4 flex flex-col items-center"
          >
            <div className="w-full h-40 bg-gray-200 flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gray-300 rounded"></div>
            </div>
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.farm}</p>
            <p className="text-gray-600 text-sm mt-1">
              Time Left: {item.timeLeft}
            </p>
            <p className="text-gray-800 font-medium mt-1">
              Current Bid: {item.bid}
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
              Place Bid
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LiveAuctions;
