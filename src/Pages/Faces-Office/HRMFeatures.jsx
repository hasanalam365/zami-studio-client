import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const HRMFeatures = () => {
  return (
    <div className="w-full px-5 py-20 bg-white md:px-16">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT IMAGE SECTION (Animate From Left) */}
        <motion.div
          className="relative flex justify-center md:justify-start"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* BACK SHAPE */}
          <div className="absolute w-72 h-72 bg-[#FF8E8E] rounded-2xl rotate-12 opacity-80"></div>

          {/* IMAGE */}
          <img
            src="https://i.ibb.co.com/7dCZNnX7/HRMng.png"
            alt="HRM Features"
            className="relative z-10 shadow-xl w-96 rounded-xl"
          />
        </motion.div>

        {/* RIGHT TEXT SECTION (Animate From Right) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="mb-4 text-3xl font-bold">
            <span className="text-green-600">HRM</span>{" "}
            <span className="text-gray-800">Features</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600">
            Flick Office’s HRM features make it easy to register and manage your
            staff, perfect for handling multiple branches and team leaders. You
            can easily track staff attendance and leave applications, manage
            holidays and working days and set reminders for important staff
            files, training sessions and more.
            <br /><br />
            These features collectively enhance HR operations, improve
            compliance and promote a productive and engaged workforce.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Perfect for multiple branches and team leaders
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Easily track staff attendance and leave applications
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Manage holidays and keep track of working days
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Set reminders for staff files, trainings and more
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Conduct performance appraisals and reviews
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default HRMFeatures;
