import React from "react";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { motion } from "framer-motion";

function WhyYouHire() {
  return (
    <div className="bg-gradient-to-r from-[#f5f9ff] via-[#eef4fd] to-white py-20">
      <div className="container px-6 mx-auto lg:px-12">
        {/* Section Header */}
        <div className="mb-10 text-center">
          <SectionHeader
            heading="Why MyBuilder is the Reliable Way"
            subHeading="Big or small — post your home or garden job on MyBuilder and get matched with verified tradespeople who'll get it done."
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col items-center justify-between lg:flex-row gap-14">
          {/* Left Text Section */}
          <div className="space-y-10 lg:w-1/2">
            <div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                Get matched with available tradespeople
              </h3>
              <p className="leading-relaxed text-gray-600">
                Post your job for free and receive responses from tradespeople
                eager to take it on. You’ll quickly find reliable experts ready
                to start your project.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                Choose who you want to connect with
              </h3>
              <p className="leading-relaxed text-gray-600">
                Review detailed profiles, read verified customer feedback, and
                browse project galleries — all to help you make a confident
                choice about who’s right for your job.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-2xl font-semibold text-gray-800">
                Hire with confidence
              </h3>
              <p className="leading-relaxed text-gray-600">
                Every tradesperson on MyBuilder passes essential checks at
                registration — from ID verification and certifications to skill
                assessments — ensuring your project is in safe hands.
              </p>
              <a
                href="#"
                className="inline-block mt-2 font-medium text-blue-600 hover:underline"
              >
                More info about our checks here →
              </a>
            </div>
          </div>

          {/* Right Image with Animation */}
          <motion.div
            className="flex justify-center lg:w-1/2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <img
              src="https://images.unsplash.com/photo-1591076482161-42ec14aa8c18?auto=format&fit=crop&w=1200&q=80"
              alt="Professional tradesperson working confidently"
              className="object-cover w-full max-w-lg transition-transform duration-700 ease-in-out shadow-2xl rounded-2xl hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WhyYouHire;
