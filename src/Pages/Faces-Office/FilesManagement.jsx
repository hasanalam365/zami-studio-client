import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const FilesManagement = () => {
  return (
    <div className="w-full px-5 py-20 bg-white md:px-16">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT TEXT PART - Animate from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="mb-4 text-3xl font-bold leading-tight">
            <span className="text-green-600">File Management</span>{" "}
            <span className="text-orange-500">and Reminders</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600">
            In Flick CRM, you can upload various file formats including
            documents, audio and video. Create categories, organise files,
            archive old ones, and easily manage everything. You can also set
            reminders for important tasks or documents and receive email
            notifications for timely completion.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Upload important files directly to the CRM.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Assign files to leads, clients or users.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Create reminders with expiry dates.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Receive reminder notifications via email.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Manage reminders effortlessly for timely tasks.
            </li>
          </ul>
        </motion.div>

        {/* RIGHT IMAGE - Animate from Right */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-green-300 -top-6 -left-6 rounded-2xl blur-xl opacity-40"></div>

            {/* Main Image */}
            <img
              src="https://i.ibb.co.com/d4yh7Crm/Files.png"
              alt="Files Management"
              className="relative border shadow-lg rounded-xl"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default FilesManagement;
