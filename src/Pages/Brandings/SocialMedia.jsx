import React from "react";

const SocialMedia = () => {
  
  return (
    <div className="w-full bg-[#f5f8ff] py-16 px-4 md:px-10 lg:px-20" id="social-Media-Design">
      {/* Header Section */}
      <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Social Media <span className="text-[#ff6db8]">Starter Pack</span></h2>
          <p className="max-w-xl mt-3 text-gray-600">
            Choose the Perfect Social Media Package for You! Explore our exclusive Social Media Banner Design packages crafted to meet your business needs perfectly.
          </p>
          <p className="max-w-xl mt-2 text-gray-600">
            From basic page design to full branding, we’ve got you covered. Pick the package that fits your needs and make your brand shine!
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/WW5pf4bt/facebook-design.png"
            alt="Social Media Pack"
            className="object-contain w-full max-w-md drop-shadow-lg"
          />
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3">
        {/* Card 1 */}
        <div className="bg-white border-2 border-[#3dbb57] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <span className="text-xs bg-[#3dbb57] text-white px-3 py-1 rounded-full">Standard</span>
          <h3 className="mt-4 text-xl font-bold">Facebook Visual Identity</h3>
          <h2 className="text-3xl font-bold text-[#3dbb57] mt-2">£70 <span className="text-sm text-gray-500">ONLY</span></h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Facebook cover photo design</li>
            <li>✔ Logo for Facebook business page</li>
            <li>✔ Logo for Instagram</li>
            <li>✔ 5 Post designs for Facebook and Instagram</li>
          </ul>

          <button className="mt-6 w-full bg-[#3dbb57] text-white py-2 rounded-lg font-semibold hover:bg-[#34a54d] transition">Pay Now</button>
        </div>

        {/* Card 2 */}
        <div className="bg-white border-2 border-[#ffa726] rounded-2xl p-6 shadow-md hover:shadow-xl transition scale-105">
          <span className="text-xs bg-[#ffa726] text-white px-3 py-1 rounded-full">Premium</span>
          <h3 className="mt-4 text-xl font-bold">Facebook Branding Deluxe</h3>
          <h2 className="text-3xl font-bold text-[#ffa726] mt-2">£80 <span className="text-sm text-gray-500">ONLY</span></h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Facebook page creation</li>
            <li>✔ Services & pages setup</li>
            <li>✔ Professional business details update</li>
            <li>✔ Facebook cover/banner design</li>
            <li>✔ Facebook post/photo design</li>
            <li>✔ Logo for Facebook</li>
            <li>✔ Logo for Instagram</li>
            <li>✔ 5 Post designs for Facebook and Instagram</li>
          </ul>

          <button className="mt-6 w-full bg-[#ffa726] text-white py-2 rounded-lg font-semibold hover:bg-[#e69520] transition">Pay Now</button>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-2 border-[#0066ff] rounded-2xl p-6 shadow-md hover:shadow-xl transition">
          <span className="text-xs bg-[#0066ff] text-white px-3 py-1 rounded-full">Lite</span>
          <h3 className="mt-4 text-xl font-bold">Facebook Essentials</h3>
          <h2 className="text-3xl font-bold text-[#0066ff] mt-2">£50 <span className="text-sm text-gray-500">ONLY</span></h2>

          <ul className="mt-4 space-y-2 text-gray-700">
            <li>✔ Facebook cover photo design</li>
            <li>✔ Logo for Facebook business page</li>
            <li>✔ Logo for Instagram</li>
            <li>✔ 3 Post designs for Facebook and Instagram</li>
          </ul>

          <button className="mt-6 w-full bg-[#0066ff] text-white py-2 rounded-lg font-semibold hover:bg-[#0052cc] transition">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;