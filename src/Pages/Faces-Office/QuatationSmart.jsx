import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const QuatationSmart = () => {
  return (
    <div className="w-full px-4 py-16 bg-white md:px-12">
      <div className="grid items-center gap-10 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT IMAGE - Animate from Left */}
        <motion.div
          className="flex justify-center order-1 md:order-none"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="https://i.ibb.co.com/JRHCHt3M/Quatation.png"
            alt="Smart Quotation System"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT - Animate from Right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold leading-snug">
            <span className="text-[#23a333]">Smart</span>{" "}
            <span className="text-[#ff7a1f]">Quotation System</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Within Flick CRM, you can easily generate professional quotations and
            send them directly to clients via email in PDF format. You can
            customise quotations with your company branding or letterhead and
            enable or disable the email signature option. Quotation templates and
            the ability to duplicate existing quotes make sending so much easier.
            Additionally, you can convert quotations to invoices with just one click,
            streamlining the process and saving time.
          </p>

          <p className="mt-3 leading-relaxed text-gray-700">
            Customising invoices with product details, VAT information and
            communication options helps businesses maintain professionalism and
            improve customer experience.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            {[
              "Easily generate professional quotations within Flick CRM.",
              "Send quotations directly to clients via email in PDF format.",
              "Customise quotations with company branding or letterhead.",
              "Enable or disable the email signature option.",
              "Utilise quotation templates and duplicate existing quotes for quick sending.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-green-500" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default QuatationSmart;
