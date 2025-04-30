import React from "react";

import contactbanner from "../../assets/images/contactbanner.png";
import contactform from "../../assets/images/contactform.png";
import ContactSection from "../../components/ContactSection";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="h-[50vh] relative bg-[url('assets/images/contactbanner.png')] bg-no-repeat bg-center bg-cover -mt-4">
        <div className="absolute top-0 left-0 w-full bg-black opacity-40 h-full"></div>
        <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-md">
            Contact Us
          </h1>
        </div>
      </div>

      <ContactSection />

      {/* contact form  */}
      <section>
        <div className="flex bg-stone-50 min-h-screen p-6">
          {/* Left section with image */}
          <div className="hidden md:block md:w-1/2 relative">
            <img
              src={contactform}
              alt="Farmer with strawberries"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* Right section with form */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-lg md:rounded-l-none md:rounded-r-lg shadow-sm">
            <div className="mb-6">
              <p className="text-green-600 text-sm font-medium mb-1">
                Get In Contact Us
              </p>
              <h2 className="text-gray-800 text-3xl font-semibold mb-1">
                Have a any Questions?
              </h2>
              <h3 className="text-gray-800 text-2xl font-semibold">
                Get in Touch!
              </h3>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  //   rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                ></textarea>
              </div>

              <div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded flex items-center justify-center transition-colors">
                  Send Message
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
