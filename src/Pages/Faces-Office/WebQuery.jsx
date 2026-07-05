import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const WebQuery = () => {
  return (
    <div className="w-full px-5 py-20 overflow-hidden bg-white md:px-16">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT TEXT SECTION — Animate from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="mb-4 text-3xl font-bold">
            <span className="text-green-600">Web</span>{" "}
            <span className="text-orange-500">Enquiry</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600">
            Collect web enquiries directly from your website into the CRM and
            even from multiple websites. Convert enquiries into leads or
            clients, and embed a custom enquiry form on your site to collect
            data automatically inside the CRM.
          </p>

          <ul className="space-y-3 text-gray-700">
            {[
              "Collect web enquiries directly into CRM.",
              "Collect enquiries from multiple websites in one account.",
              "Convert enquiries into leads or clients instantly.",
              "Create and embed custom enquiry forms easily.",
              "Automatically manage and organise enquiries.",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-600" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT IMAGE SECTION — Animate from Right */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            {/* Glow BG */}
            <div className="absolute w-64 h-64 bg-purple-400 -top-6 -right-6 rounded-2xl blur-2xl opacity-40"></div>

            {/* Image */}
            <img
              src="https://i.ibb.co.com/r289193L/web-inquiry.png"
              alt="Web Enquiry"
              className="relative border shadow-xl rounded-xl w-[350px] md:w-[430px]"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default WebQuery;
