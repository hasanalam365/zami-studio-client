import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ClientAccess = () => {
  return (
    <div className="w-full px-4 py-16 bg-white md:px-12">
      <div className="grid items-center gap-10 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT CONTENT - Animate from Left */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold">
            <span className="text-[#23a333]">Client</span>{" "}
            <span className="text-[#ff7a1f]">Access</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Clients using Flick Office can view and download files assigned to
            them, access invoices and quotations, and manage their account by
            logging into the portal. They can also submit support tickets,
            update profiles, and manage communication efficiently.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            {[
              "View and download files assigned to them.",
              "Access and review invoices and quotations.",
              "Register and log in to manage their account.",
              "Submit and track support tickets.",
              "Access letters issued to them.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-green-500" />
                <span>{text}</span>
              </li>
            ))}
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
          <img
            src="https://i.ibb.co.com/Kj3cJ2K5/client-Access.png"
            alt="Lead and Client Management"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default ClientAccess;
