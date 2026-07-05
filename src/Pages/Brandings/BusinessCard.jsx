import React from "react";

const BusinessCard = () => {
  return (
    <section className="w-full bg-[#eef6ff] py-16 px-6 md:px-12 lg:px-20 rounded-xl" id="BusinessCard-Design">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-12">
        {/* Left Content */}
        <div className="lg:col-span-7">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f1f18]">
            <span className="font-black">Business Card</span> Design
          </h2>

          <p className="max-w-3xl mt-4 leading-relaxed text-gray-700">
            Make a strong and lasting impression with our stylish and innovative business card designs. The next
            time you hand out your card, you'll see the difference it makes in the eyes of your clients and
            customers.
          </p>

          {/* Price + Bespoke */}
          <div className="flex flex-col gap-10 mt-10 sm:flex-row">
            <div>
              <h4 className="text-lg font-semibold">Unique business card for just £40</h4>
              <button className="mt-3 inline-flex items-center gap-2 bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] text-white px-5 py-2 rounded-md font-semibold">
                Pay Now ➜
              </button>
            </div>

            <div>
              <h4 className="text-lg font-semibold">Bespoke design</h4>
              <button className="inline-flex items-center gap-2 mt-3 font-semibold text-green-600">
                Contact us to get a quote ➜
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
          <img
            src="https://i.ibb.co.com/7d8mZzpm/business-card.png"
            alt="Business card samples"
            className="object-contain w-full max-w-md drop-shadow-lg"
          />

          {/* Floating file formats card
          <div className="absolute w-40 p-4 bg-white border rounded-lg shadow-lg top-4 right-6">
            <h4 className="text-sm font-semibold">File Formats</h4>
            <ul className="mt-2 space-y-1 text-xs text-gray-700">
              <li>✔ AI, EPS, PSD</li>
              <li>✔ PDF (best)</li>
              <li>✔ JPG</li>
            </ul>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default BusinessCard;