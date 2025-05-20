// src/pages/AuctionPage.jsx
import React, { useState } from "react";
import banana from "../../assets/images/banana.jpg";
import tomatoes from "../../assets/images/tomatoes.png";
import lettuce from "../../assets/images/lettuce.png";

const AuctionPage = () => {
  const [bidAmount, setBidAmount] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const auctionItems = [
    {
      id: 1,
      name: "Fresh Banana",
      description: "Fresh Banana",
      currentBid: 1250,
      minBid: 1300,
      endTime: "2025-12-31T23:59:59",
      image: banana,
      bids: 24,
    },
    {
      id: 3,
      name: "Tomatoes",
      description: "Fresh Tomatoes",
      currentBid: 950,
      minBid: 1000,
      endTime: "2025-12-28T20:30:00",
      image: tomatoes,
      bids: 12,
    },
    {
      id: 4,
      name: "Lettuce",
      description: "Fresh Lettuce",
      currentBid: 2100,
      minBid: 2200,
      endTime: "2025-12-29T17:00:00",
      image: lettuce,
      bids: 8,
    },
  ];

  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.now();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return { total, days, hours, minutes };
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const handleBid = (e, itemId) => {
    e.preventDefault();
    alert(`Bid of ${bidAmount} placed on item #${itemId}`);
    setBidAmount("");
  };

  return (
    <main className="min-h-screen py-10 bg-gray-50 pt-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-10">
          <h1 className="text-4xl font-bold text-emerald-700">Live Auctions</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Explore and bid on the freshest farm produce from verified sellers.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            {["all", "ending-soon", "new-arrivals"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab
                    ? "bg-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "all"
                  ? "All Items"
                  : tab === "ending-soon"
                  ? "Ending Soon"
                  : "New Arrivals"}
              </button>
            ))}
          </div>
        </div>

        {/* Auction Cards */}
        {activeTab === "all" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {auctionItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 hover:shadow-md bg-white"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-md mb-3"
                />
                <h4 className="text-lg font-bold">{item.name}</h4>
                <p className="text-sm text-gray-500 mb-1">{item.description}</p>
                <div className="text-sm text-gray-500 mb-2">
                  {getTimeRemaining(item.endTime).days}d{" "}
                  {getTimeRemaining(item.endTime).hours}h left
                </div>
                <p className="text-gray-800 font-semibold">
                  {formatCurrency(item.currentBid)}
                </p>
                <form
                  onSubmit={(e) => handleBid(e, item.id)}
                  className="flex gap-2 mt-3"
                >
                  <input
                    type="number"
                    placeholder={`Min: ${formatCurrency(item.minBid)}`}
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                    min={item.minBid}
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700"
                  >
                    Place Bid
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AuctionPage;
