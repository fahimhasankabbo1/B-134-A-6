import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import img from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="max-w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center py-16 gap-10"> 
      <div className="space-y-6">
        <div className="flex items-center gap-2 bg-blue-50 w-fit text-xs px-4 py-2 rounded-full border border-blue-100">
          <FaRegCircleDot className="text-blue-600" />
          <span className="text-blue-700 font-bold">New: AI-Powered Tools Available</span>
        </div>
        <h1 className="text-5xl lg:text-6xl font-extrabold text-black leading-tight">
          Supercharge Your <span className="text-blue-600">Digital Workflow</span>
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Access premium AI tools, design assets, and templates—all in one place. Start creating faster today.
        </p>
        <div className="flex gap-4">
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 border-none">Explore Products</button>
          <button className="btn btn-outline border-gray-300 rounded-full px-8 hover:bg-gray-50 flex items-center gap-2 text-gray-700">
            <FaPlay className="text-xs" /> Watch Demo
          </button>
        </div>
      </div>
      <div className="relative">
        <img src={img} alt="Banner" className="w-full h-auto rounded-2xl shadow-2xl" />
      </div>
    </div>
  );
};

export default Banner;