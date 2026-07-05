import React from "react";


const FlyerDesign = () => {
  return (
    <div className="w-full bg-[#f8f6ff] py-16 px-6 md:px-14 lg:px-20 rounded-xl" id="flyer-Design">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            <span className="font-extrabold">Flyer</span> Design
          </h1>

          <p className="max-w-xl mb-8 leading-relaxed text-gray-600">
            Effectively share your message with our custom-designed flyers. From paper
            quality to precise design, we ensure every detail is perfect so your
            marketing and promotional efforts stand out.
          </p>

          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
            <div>
              <p className="mb-3 font-semibold text-gray-900">
                Design your unique flyers for just <span className="font-bold">£65</span>
              </p>
              <button className="flex items-center gap-2 px-5 py-2 font-semibold text-white  bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] rounded-full ">
                Pay Now ➜
              </button>
            </div>

            <div>
              <p className="mb-3 font-semibold text-gray-900">Bespoke design</p>
              <button className="flex items-center gap-1 font-medium text-green-600 hover:underline">
                Contact us to get a quote ➜
              </button>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center w-full lg:w-1/2">
          {/* File Format Card */}
          {/* <div className="absolute p-3 text-sm bg-white border-t-4 border-green-500 rounded-lg shadow-md -top-4 right-10">
            <p className="mb-1 font-semibold">File Formats</p>
            <ul className="space-y-1 text-gray-600">
              <li>✔ AI, EPS, PSD</li>
              <li>✔ PDF (best)</li>
              <li>✔ JPG</li>
            </ul>
          </div> */}

          {/* Flyer Image */}
          <img
            src={'https://i.ibb.co.com/xqBBgDRw/flyer-design.png'}
            alt="Flyer Design"
            className="w-80 md:w-96 lg:w-[430px] drop-shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FlyerDesign;