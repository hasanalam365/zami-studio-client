import React from "react";

const BusinessPortfolio = () => {
  return (
    <div className="w-full bg-[#FFF7EE] py-16 px-6 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl shadow-sm" id="Business-Portfolio">
      {/* Left Image Section */}
      <div className="relative flex justify-center">
        <img
          src="https://i.ibb.co.com/mrrss1BF/portfolio-design-2.png"
          alt="Business Portfolio Samples"
          className="w-[350px] md:w-[420px] drop-shadow-xl rounded-xl"
        />

        {/* File Formats Box */}
        {/* <div className="absolute p-3 text-sm bg-white rounded-lg shadow-md top-4 left-4">
          <p className="font-semibold">File Formats</p>
          <ul className="mt-1 space-y-1">
            <li>✓ PDF (best)</li>
            <li>✓ JPG</li>
          </ul>
        </div> */}
      </div>

      {/* Right Content Section */}
      <div>
        <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Business Portfolio <span className="font-medium">Design</span>
        </h2>

        <p className="max-w-lg mb-6 leading-relaxed text-gray-600">
          Looking to create a professional Business Profile, Portfolio, or Brochure? Our expert designers will craft a visually stunning and compelling design that will captivate your audience, boost credibility, and enhance professionalism.
        </p>

        <div className="space-y-4 text-gray-800">
          <p className="text-lg font-semibold">Business Portfolio £150 <span className="text-sm font-medium">(10 pages)</span></p>
          <p className="text-lg font-semibold">Additional Pages £15 <span className="text-sm font-medium">/page</span></p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-6 mt-6">
          <button className="bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all">
            Pay Now →
          </button>

          <button className="flex items-center gap-1 font-semibold text-green-600 hover:text-green-700">
            Contact us to get a quote →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessPortfolio;