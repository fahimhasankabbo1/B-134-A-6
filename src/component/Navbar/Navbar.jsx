import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = ({ info }) => {
  return (
    <div className="border-b border-b-gray-200 sticky top-0 z-50 bg-white">
      <div className="max-w-[90%] lg:max-w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center py-4 space-y-4 lg:space-y-0">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          DigiTools
        </h2>
          <ul className="flex items-center gap-5 lg:gap-8 font-semibold text-black">
          <li className="hover:text-blue-600 cursor-pointer transition">Products</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Features</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Pricing</li>
          <li className="hover:text-blue-600 cursor-pointer transition">FAQ</li>
        </ul>
        <div className="flex items-center gap-5">
          <div className="relative cursor-pointer text-2xl text-gray-700">
            <LuShoppingCart />
            {info.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] rounded-full px-1.5 py-0.5 text-white font-bold">
                {info.length}
              </span>
            )}
          </div>
          <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full px-6 hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;