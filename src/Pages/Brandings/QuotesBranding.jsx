import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const QuotesBranding = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="relative px-5 mx-auto max-w-7xl">
        
        {/* Background Dotted Pattern */}
        <div className="absolute left-0 transform -translate-y-1/2 pointer-events-none top-1/2 opacity-20">
          <img
            src="/pattern-dots.png" 
            alt="pattern"
            className="w-72"
          />
        </div>

        {/* Text Section */}
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-[#111] leading-snug">
            We don’t just build websites, we get results.  
            Be it planning, <br />
            designing or marketing your brand online
          </h1>

          <h2 className="mt-2 text-lg font-semibold text-orange-500 md:text-xl">
            — we do it all with an edge.
          </h2>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 mt-10">
            
            <button className="flex items-center gap-2 text-[#111] font-semibold">
              Request a tailored quote today
              <IoIosArrowForward size={18} />
            </button>

            <button className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] rounded-full ">
              Get a quote now
              <IoIosArrowForward size={18} />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesBranding;
