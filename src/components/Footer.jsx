import React from "react";
// import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-left">
        {/* Logo & About */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-green-300 mb-4">FarmAssist</h2>
          <p className="text-sm leading-relaxed text-green-100">
            FarmAssist is Ghana’s trusted agri-tech marketplace empowering
            farmers to sell directly to consumers. With secure escrow payments
            and verified sellers, we promote fair trade and food sustainability.
          </p>
          <p className="font-semibold mt-4 mb-1 text-green-200">Address:</p>
          <p className="text-sm text-green-100">123 Agri Street, Accra</p>
          <p className="text-sm text-green-100">Greater Accra, Ghana</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              aria-label="Instagram"
              className="text-green-200 hover:text-white transition"
            >
              {/* <FaInstagram className="text-xl" /> */}
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-green-200 hover:text-white transition"
            >
              {/* <FaFacebookF className="text-xl" /> */}
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="text-green-200 hover:text-white transition"
            >
              {/* <FaTwitter className="text-xl" /> */}
            </a>
          </div>
        </div>

        {/* Column One */}
        <div>
          <h3 className="font-semibold mb-2 text-green-300">Marketplace</h3>
          <ul className="space-y-1 text-sm text-green-100">
            <li>
              <a href="#" className="hover:underline">
                Browse Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Start Selling
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How It Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column Two */}
        <div>
          <h3 className="font-semibold mb-2 text-green-300">Company</h3>
          <ul className="space-y-1 text-sm text-green-100">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Column Three */}
        <div>
          <h3 className="font-semibold mb-2 text-green-300">Resources</h3>
          <ul className="space-y-1 text-sm text-green-100">
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Buyer Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Seller Guide
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto text-green-200">
        <p>&copy; 2025 FarmAssist. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
