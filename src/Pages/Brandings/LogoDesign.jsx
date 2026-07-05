import React from "react";

const LogoDesign = () => {
  return (
    <section className="w-full bg-[#e9fbf5] py-16 px-6 md:px-12 lg:px-20" id="logo-Design">
      <div className="grid items-center grid-cols-1 gap-8 mx-auto max-w-7xl lg:grid-cols-12">
        {/* Left Illustration */}
        <div className="flex justify-center lg:col-span-5 lg:justify-start">
          <div className="relative w-full max-w-sm">
            <img
              src="https://i.ibb.co.com/Cs2b3nzV/logo-design.png"
              alt="Logo design illustration"
              className="object-contain w-full drop-shadow-lg"
            />
            {/* small floating card on top-left of image to mimic the design
            <div className="absolute hidden p-3 bg-white border rounded-md shadow-md md:block top-4 left-4 w-36">
              <h4 className="text-xs font-semibold">File Formats</h4>
              <ul className="mt-2 space-y-1 text-xs text-gray-600">
                <li>AI, EPS, PSD</li>
                <li>SVG</li>
                <li>PNG</li>
                <li>PDF</li>
                <li>JPG</li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f1f18]">
            <span className="font-black">Logo</span> Design
          </h2>
          <p className="max-w-3xl mt-4 leading-relaxed text-gray-700">
            A logo represents your company's core values in just a few simple sketches. With our logo design
            services, we can help you create a logo that clearly communicates your business philosophy and
            dedication to your customers.
          </p>

          <div className="flex flex-col gap-6 mt-8 sm:flex-row sm:items-start">
            {/* Pricing Card Group */}
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 w-full sm:w-[480px] shadow-md">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#dff6ee] p-4 rounded-md">
                  <h4 className="font-semibold">Get 4 Unique Logo Concepts</h4>
                  <p className="text-sm text-gray-600">with 3 Design Revisions for just <span className="font-bold">£50</span></p>
                  <button className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] text-white px-4 py-2 rounded-md font-semibold">Pay Now <span aria-hidden>➜</span></button>
                </div>

                <div className="bg-[#dff6ee] p-4 rounded-md">
                  <h4 className="font-semibold">Get 5 Unique Logo Concepts</h4>
                  <p className="text-sm text-gray-600">with Unlimited Revisions for just <span className="font-bold">£75</span></p>
                  <button className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] text-white px-4 py-2 rounded-md font-semibold">Pay Now <span aria-hidden>➜</span></button>
                </div>
              </div>
            </div>

           
          </div>

        </div>
      </div>
    </section>
  );
};

export default LogoDesign;
