import React from "react";

const RatingBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-6 max-w-[80%] lg:max-w-[60%] mx-auto py-12">
        {/* Active Users */}
        <div className="md:border-r border-gray-300/30">
          <h2 className="text-3xl lg:text-5xl font-extrabold">50K+</h2>
          <p className="font-medium text-gray-200 mt-2">Active Users</p>
        </div>

        {/* Premium Tools */}
        <div>
          <h2 className="text-3xl lg:text-5xl font-extrabold">200+</h2>
          <p className="font-medium text-gray-200 mt-2">Premium Tools</p>
        </div>

        {/* Rating */}
        <div className="md:border-l border-gray-300/30">
          <h2 className="text-3xl lg:text-5xl font-extrabold">4.9</h2>
          <p className="font-medium text-gray-200 mt-2">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default RatingBanner;
