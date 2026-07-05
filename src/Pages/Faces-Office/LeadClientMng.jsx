import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const LeadClientMng = () => {
  return (
    <div className="w-full px-4 py-20 bg-white md:px-10 lg:px-20">
      <div className="grid items-center grid-cols-1 gap-10 mx-auto max-w-7xl lg:grid-cols-2">

        {/* LEFT IMAGE with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.3 }}   // 👈 Animation repeats when re-entering viewport
          className="flex justify-center"
        >
          <img
            src="https://i.ibb.co.com/V07cqbgw/lead-And-Client-Mng.png"
            alt="Lead and Client Management"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ amount: 0.3 }}   // 👈 Animation repeats here too
        >
          {/* GRADIENT HEADING */}
          <h2 className="text-4xl font-extrabold leading-tight">
            <span className="text-transparent bg-gradient-to-r from-green-500 to-green-300 bg-clip-text">
              Lead
            </span>{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text">
              and Client Management
            </span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Flick Office’s Lead and Client Management system helps you maintain detailed
            records of potential and existing clients, organise them into categories for
            better management, and quickly find leads with advanced search and sorting.
            Export/import lead information in bulk within the CRM and reach out to
            multiple clients with a single email.
          </p>

          {/* FEATURE LIST */}
          <ul className="mt-6 space-y-3 text-gray-700">
            {[
              "Maintain detailed records of potential and existing clients.",
              "Organise leads and clients into specific categories for better management.",
              "Quickly find leads and clients with advanced sorting and searching capabilities.",
              "Export or import lead and client information in bulk within CRM.",
              "Reach out to multiple leads or clients simultaneously with a single email.",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="mt-1 text-green-500" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default LeadClientMng;
