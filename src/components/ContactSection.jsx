import React from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";

const ContactCard = ({ icon: Icon, title, content }) => (
  <div className="relative bg-white p-6 rounded-2xl shadow-md w-full max-w-xs">
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-yellow-400 p-3 rounded-full">
        <Icon className="text-white" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <hr className="mb-4" />
    <div className="text-sm text-gray-700 space-y-1">
      {content.map((line, idx) => (
        <p key={idx}>{line}</p>
      ))}
    </div>
    <button className="absolute bottom-2 right-2 text-gray-400 hover:text-gray-600">
      <X size={16} />
    </button>
  </div>
);

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-center">
        <ContactCard
          icon={Mail}
          title="Mail us 24/7"
          content={["farmassit@admin.com", "farmdmin@info.com"]}
        />
        <ContactCard
          icon={Phone}
          title="Call us 24/7"
          content={[
            "Phone: (+233) 654 - 545 - 5418",
            "Mobile: (+233) 654 - 545 - 1235",
          ]}
        />
        <ContactCard
          icon={MapPin}
          title="Our Locations"
          content={["4821 Ridge Town, Arch St, Accra", "997998, Accra, Ghana."]}
        />
      </div>
    </section>
  );
}
