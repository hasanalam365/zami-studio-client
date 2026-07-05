import React from "react";
import { motion } from "framer-motion";

const Deals = () => {
  return (
    <div className="w-full py-20 bg-[#F8FAFF]">
      <div className="grid items-center grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">

        {/* ===== Left Image Area ===== */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#7A5CFF] rounded-2xl blur-xl opacity-40"></div>

            <motion.img
              initial={{ scale: 0.85, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src="https://i.ibb.co.com/ZpX9wtdf/deal.png"
              alt="Deals"
              className="relative border shadow-lg rounded-xl"
            />
          </div>
        </motion.div>

        {/* ===== Right Text Area ===== */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-[32px] font-semibold text-[#3BB44A]">
            Deals
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Flick Office’s Deals feature allows you to create and manage contracts
            and deals with different clients efficiently. You can create multiple
            deals for the same client, saving details such as deal amount,
            description, progress, and estimated due dates. Notes can be added to
            each deal for better tracking. The advanced filtering system lets you
            sort and search for deals easily. This feature simplifies the management
            and organisation of your business dealings.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Create and preserve different contracts and deals.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Save deal amount, description, progress, and estimated due dates.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Add notes for better tracking.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Sort and search deals with an advanced filtering system.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Manage multiple deals for the same client.
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default Deals;
