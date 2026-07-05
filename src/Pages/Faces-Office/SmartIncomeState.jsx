import React from "react";
import { motion } from "framer-motion";

const SmartIncomeState = () => {
  return (
    <div className="w-full py-20 bg-[#F8FAFF]">
      <div className="grid items-center grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">

        {/* ===== Left TEXT Section — Animate From Left ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-[32px] font-semibold text-[#3BB44A] leading-tight">
            Smart <span className="text-[#FF7A00]">Income Statement</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Flick Office’s Smart Income Statement system will allow you to keep
            records of all your incomes and expenses and calculate them easily
            when needed. Managing all your companies and their transactions can
            be troublesome, and mistakes in calculations can negatively impact
            your business. With Flick Office, you can create a list of all your
            companies’ transactions, manage categories, add and track
            transactions, and get automatic final calculations.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Create and manage a list of all your companies’ transactions.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Add and track transactions with automatic final calculations.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Import bank statements directly under the names of companies.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Filter transactions by specific categories or company.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Download income statements for safekeeping.
            </li>
          </ul>
        </motion.div>

        {/* ===== Right IMAGE Section — Animate From Right ===== */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#FF897A] rounded-2xl blur-xl opacity-40"></div>

            <img
              src="https://i.ibb.co.com/7JzycZCP/Company-income-Statement.png"
              alt="Smart Income Statement"
              className="relative border shadow-lg rounded-xl"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SmartIncomeState;
