import React from "react";
import MidLastCarts from "./MidLastCarts";

const Midlast = () => {
  return (
    <div className="py-20 max-w-[85%] mx-auto">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-600 font-medium leading-relaxed">
          Choose the plan that fits your needs. Upgrade or downgrade anytime
          with ease.
        </p>
      </div>

      {/* Pricing Cards */}
      <MidLastCarts />
    </div>
  );
};

export default Midlast;
