import React from "react";
// import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-400 text-gray-800 py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-left">
        {/* Logo & About */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-green-700 mb-4">FarmAssist</h2>
          <p className="text-sm leading-relaxed">
            FarmAssist is Ghana’s trusted agri-tech marketplace empowering
            farmers to sell directly to consumers. With secure escrow payments
            and verified sellers, we promote fair trade and food sustainability.
          </p>
          <p className="font-semibold mt-4 mb-1">Address:</p>
          <p className="text-sm">123 Agri Street, Accra</p>
          <p className="text-sm">Greater Accra, Ghana</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Instagram">
              {/* <FaInstagram className="text-xl" /> */}
            </a>
            <a href="#" aria-label="Facebook">
              {/* <FaFacebookF className="text-xl" /> */}
            </a>
            <a href="#" aria-label="Twitter">
              {/* <FaTwitter className="text-xl" /> */}
            </a>
          </div>
        </div>

        {/* Column One */}
        <div>
          <h3 className="font-semibold mb-2">Marketplace</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Browse Products</a>
            </li>
            <li>
              <a href="#">Start Selling</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Column Two */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our Team</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Column Three */}
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Buyer Guide</a>
            </li>
            <li>
              <a href="#">Seller Guide</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
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
