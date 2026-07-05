import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const NewsLetter = () => {
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
            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-pink-400 -top-6 -left-6 rounded-2xl blur-xl opacity-40"></div>

            {/* Image */}
            <img
              src="https://i.ibb.co.com/zh2Rm8gc/News-Letter.png"
              alt="Newsletter Management"
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
          <h2 className="mb-4 text-3xl font-bold">
            <span className="text-green-600">Newsletter</span>{" "}
            <span className="text-orange-500">Management</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600">
            Flick Office’s Newsletter Management tools make it easy to plan and
            execute campaigns. You can set up new campaigns with intuitive tools,
            manage subscriber lists, and create and customise email templates for
            consistent branding and messaging. You can also monitor campaign
            performance with detailed analytics, import/export lists, and track
            newsletter logs to improve engagement.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Plan and execute newsletter campaigns.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Set up new campaigns easily with intuitive tools.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Manage subscriber lists.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Create and customise email templates.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Monitor performance with detailed analytics & reports.
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default NewsLetter;
