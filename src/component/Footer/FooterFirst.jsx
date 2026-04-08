import React from "react";

const FooterFirst = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-[90%] mx-auto text-center text-white space-y-6 py-14">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-extrabold">
          Ready to Transform Your Workflow?
        </h2>

        {/* Subtext */}
        <p className="text-gray-200 font-medium leading-relaxed">
          Join thousands of professionals already using DigiTools to work
          smarter. <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="btn bg-gradient-to-r from-cyan-400 to-blue-600 text-white rounded-full px-6 py-3 font-semibold hover:from-blue-600 hover:to-cyan-400 transition-all">
            Explore Products
          </button>
          <button className="btn border-2 border-white text-white rounded-full px-6 py-3 font-semibold hover:bg-white hover:text-blue-600 transition-all">
            View Pricing
          </button>
        </div>

        {/* Trial Info */}
        <p className="text-sm text-gray-300 mt-4">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
};

export default FooterFirst;
