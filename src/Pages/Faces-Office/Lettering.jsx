import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const Lettering = () => {
  return (
    <div className="w-full px-5 py-20 bg-white md:px-16">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT IMAGE PART — Animate From Left */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            {/* Background Shape */}
            <div className="absolute w-64 h-64 bg-green-300 -top-6 -left-6 rounded-2xl blur-xl opacity-40"></div>

            {/* Image */}
            <img
              src="https://i.ibb.co.com/YFdbkSd1/Lettering.png"
              alt="Smart Lettering"
              className="relative border shadow-lg rounded-xl"
            />
          </div>
        </motion.div>

        {/* RIGHT TEXT PART — Animate From Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="mb-4 text-3xl font-bold leading-tight">
            <span className="text-green-600">Smart</span>{" "}
            <span className="text-orange-500">Lettering</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600">
            Flick Office offers smart lettering features that allow you to
            create and send official letters directly through the platform.
            You can keep a list of all your sent letters, organise them, and
            view them anytime. Additionally, duplicate an existing letter for
            new clients and convert letters into PDF for downloading or emailing.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Create and send official letters directly through Flick Office.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Keep a list of all sent letters and organise easily.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Duplicate existing letters for new clients.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Convert letters to PDF format.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Download PDFs or send them via email.
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Lettering;
