import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FooterLast = () => {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="max-w-[85%] mx-auto text-white">
        {/* Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 py-16 text-center lg:text-left leading-relaxed tracking-wide">
          {/* Brand */}
          <div className="space-y-4 col-span-2">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              DigiTools
            </h2>
            <p className="text-gray-300 font-medium">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful solutions.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-2 text-gray-400">
            <h2 className="text-lg font-semibold text-white">Product</h2>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Features
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Pricing
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Templates
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Integrations
            </p>
          </div>

          {/* Company */}
          <div className="space-y-2 text-gray-400">
            <h2 className="text-lg font-semibold text-white">Company</h2>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              About
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Blog
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Careers
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Press
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-2 text-gray-400">
            <h2 className="text-lg font-semibold text-white">Resources</h2>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Documentation
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Help Center
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Community
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Contact
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-3 text-gray-400">
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="bg-white text-black text-lg p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all cursor-pointer">
                <RiInstagramFill />
              </span>
              <span className="bg-white text-black text-lg p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all cursor-pointer">
                <FaFacebook />
              </span>
              <span className="bg-white text-black text-lg p-2 rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white transition-all cursor-pointer">
                <FaTwitter />
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between text-gray-400 py-6 text-sm tracking-wide">
          <p>© 2026 DigiTools. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Privacy Policy
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Terms of Service
            </p>
            <p className="hover:text-cyan-400 transition-colors cursor-pointer">
              Cookies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLast;
