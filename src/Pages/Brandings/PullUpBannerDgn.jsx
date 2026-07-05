import React from "react";

const PullUpBannerDgn = () => {
  return (
    <div className="w-full bg-[#FFF8F0] py-16 px-6 md:px-12 lg:px-20" id="PullUp-Banner">
      <div className="grid items-center gap-10 mx-auto max-w-7xl lg:grid-cols-2">

        {/* Left Images */}
        <div className="flex justify-center gap-6">
          <img
            src="https://i.ibb.co.com/gZGrK6gD/pull-up-banner.png"
            alt="Pullup Banner 1"
            className="w-40 md:w-48 lg:w-56 drop-shadow-xl"
          />
         
        </div>

        {/* Right Content */}
        <div>
          <h1 className="text-4xl font-bold text-[#1a1a1a]">
            <span className="text-black">Pull-Up</span> Banner Design
          </h1>

          <p className="mt-4 leading-relaxed text-gray-600">
            Grab attention and make a bold statement with our professionally
            designed pull-up banners! Perfect for exhibitions, trade shows, and
            in-store promotions, our banners are crafted to highlight your brand
            and message with stunning visuals and clear, impactful layouts.
          </p>

          {/* Price Box */}
          <div className="mt-8">
            <p className="text-lg font-semibold text-black">
              Design your unique Pull-Up Banner for just <span className="font-bold">£65</span>
            </p>

            <button className="mt-4 bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] text-white font-semibold px-6 py-2 rounded-full transition-all flex items-center gap-1">
              Pay Now
              <span>➜</span>
            </button>
          </div>

          {/* Bespoke design */}
          <div className="mt-6">
            <p className="text-lg font-semibold text-black">Bespoke design</p>
            <a
              href="#"
              className="text-[#2db34a] font-medium flex items-center gap-1 mt-1"
            >
              Contact us to get a quote <span>➜</span>
            </a>
          </div>
        </div>
      </div>

      {/* File Formats */}
      <div className="absolute mt-[-380px] ml-[20px] md:ml-[80px]">
        <div className="w-32 px-4 py-2 bg-white border rounded-lg shadow-xl">
          <p className="text-sm font-semibold">File Formats</p>
          <ul className="mt-1 space-y-1 text-xs">
            <li>✔ AI, EPS, PSD</li>
            <li>✔ PDF (best)</li>
            <li>✔ JPG</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PullUpBannerDgn;
