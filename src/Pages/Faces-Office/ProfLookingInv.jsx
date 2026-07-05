import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const ProfLookingInv = () => {
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
          <h2 className="text-3xl font-bold leading-snug">
            <span className="text-[#23a333]">Professional</span>{" "}
            <span className="text-[#ff7a1f]">Looking Invoices</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Invoicing in Flick Office is designed to streamline your billing
            process. You can create invoices quickly and easily, send them to
            clients with a single click, and set up recurring invoices for ongoing
            services. Automatic payment reminders ensure timely payments and
            online payment options provide convenience for clients.
          </p>

          <p className="mt-3 leading-relaxed text-gray-700">
            Additionally, Flick Office allows clients to make partial payments,
            download invoices as PDF files, and export invoice data to Excel for
            easy management by your accountant.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            {[
              "Create invoices quickly and easily.",
              "Send invoices to clients via email with a single click.",
              "Send recurring invoices for ongoing services.",
              "Set up automatic payment reminders for clients.",
              "Include options for online payments.",
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
            src="https://i.ibb.co.com/cXcMw0Ps/invoice.png"
            alt="Professional Invoices"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </motion.div>

      </div>
    </div>
  );
};

export default ProfLookingInv;
