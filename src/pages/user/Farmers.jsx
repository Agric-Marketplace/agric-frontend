import React from "react";
import farmersbg from "../../assets/images/farmersbg.png";
import { ArrowRight } from "lucide-react";
import f1 from "../../assets/images/f1.png";
import f2 from "../../assets/images/f2.png";

const Farmers = () => {
  // Sample data for farmers
  const farmers = [
    {
      id: 1,
      name: "Jacob Mersin",
      role: "ECO FARMER",
      image: f1,
    },
    {
      id: 2,
      name: "Clara Henry",
      role: "MANGO FARMER",
      image: f2,
    },
    {
      id: 3,
      name: "Paula Den",
      role: "MANAGER",
      image: f1,
    },
    {
      id: 4,
      name: "Carla Hall",
      role: "ECO FARMER",
      image: f2,
    },
    {
      id: 5,
      name: "Mark Donald",
      role: "FIELD MANAGER",
      image: f1,
    },
    {
      id: 6,
      name: "Jamie Oliver",
      role: "GARDEN EXPERT",
      image: f2,
    },
    {
      id: 7,
      name: "Alice Waters",
      role: "MAJOR MANAGER",
      image: f1,
    },
    {
      id: 8,
      name: "Julia Taylor",
      role: "ECO FARMER",
      image: f2,
    },
  ];
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="h-[50vh] relative bg-[url('assets/images/farmersbg.png')] bg-no-repeat bg-center bg-cover -mt-4">
        <div className="absolute top-0 left-0 w-full bg-black opacity-40 h-full"></div>
        <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-md">
            Meet Our Farmers
          </h1>
        </div>
      </div>

      <div className="bg-stone-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {farmers.map((farmer) => (
              <div key={farmer.id} className="relative group">
                {/* Rounded container for image */}
                <div className="rounded-2xl overflow-hidden bg-white shadow-sm">
                  {/* Image */}
                  <div className="aspect-square relative">
                    <img
                      src={farmer.image}
                      alt={farmer.name}
                      className="w-full h-full object-cover"
                    />

                    {/* Arrow button overlay */}
                    <div className="absolute bottom-4 right-4">
                      <button className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transform transition-transform group-hover:rotate-45">
                        <ArrowRight size={16} className="text-stone-800" />
                      </button>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                      <span className="text-xs uppercase text-stone-500 tracking-wider font-medium">
                        {farmer.role}
                      </span>
                    </div>
                    <h3 className="text-stone-800 font-medium mt-1">
                      {farmer.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Farmers;
