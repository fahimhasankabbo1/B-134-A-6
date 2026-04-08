import React from "react";

const MidLastCarts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Starter Plan */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-4 shadow-lg transition-transform duration-500 hover:-translate-y-3">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Starter</h2>
          <p className="text-gray-500 font-medium">
            Perfect for getting started
          </p>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">
          $0{" "}
          <span className="text-base font-semibold text-gray-500">/Month</span>
        </h2>
        <ul className="flex flex-col gap-2 text-sm font-medium text-gray-600 mb-6">
          <li>✔ Access to 10 free tools</li>
          <li>✔ Basic templates</li>
          <li>✔ Community support</li>
          <li>✔ 1 project per month</li>
        </ul>
        <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-full font-semibold text-base py-3">
          Get Started Free
        </button>
      </div>

      {/* Pro Plan (Most Popular) */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-2xl space-y-4 shadow-xl transition-transform duration-500 hover:-translate-y-3">
        <div>
          <h2 className="text-2xl font-bold mb-2">Pro</h2>
          <p className="text-gray-200">Best for professionals</p>
        </div>
        <h2 className="text-3xl font-extrabold">
          $29 <span className="text-base font-normal">/Month</span>
        </h2>
        <ul className="flex flex-col gap-2 text-sm font-medium mb-6">
          <li>✔ Access to all premium tools</li>
          <li>✔ Unlimited templates</li>
          <li>✔ Priority support</li>
          <li>✔ Unlimited projects</li>
          <li>✔ Cloud sync</li>
          <li>✔ Advanced analytics</li>
        </ul>
        <div className="bg-white rounded-full overflow-hidden">
          <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent w-full font-bold text-base py-3">
            Get Started
          </button>
        </div>
        <span className="absolute -top-3 left-6 bg-yellow-300 text-yellow-900 font-semibold rounded-full text-xs px-3 py-1">
          Most Popular
        </span>
      </div>

      {/* Enterprise Plan */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl space-y-4 shadow-lg transition-transform duration-500 hover:-translate-y-3">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Enterprise</h2>
          <p className="text-gray-500 font-medium">For teams and businesses</p>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">
          $99{" "}
          <span className="text-base font-semibold text-gray-500">/Month</span>
        </h2>
        <ul className="flex flex-col gap-2 text-sm font-medium text-gray-600 mb-6">
          <li>✔ Everything in Pro</li>
          <li>✔ Team collaboration</li>
          <li>✔ Custom integrations</li>
          <li>✔ Dedicated support</li>
          <li>✔ SLA guarantee</li>
          <li>✔ Custom branding</li>
        </ul>
        <button className="btn bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-full font-semibold text-base py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MidLastCarts;
