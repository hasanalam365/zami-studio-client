import React from "react";
import { motion } from "framer-motion";
import { FaRegClipboard, FaComments, FaUserCheck } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Post your job for free",
    desc: "Describe your project, attach images, and set your budget. Posting takes only a few minutes!",
    icon: <FaRegClipboard className="text-4xl text-blue-600" />,
    color: "from-blue-500/10 to-blue-100",
  },
  {
    id: 2,
    title: "Tradespeople respond",
    desc: "Qualified professionals will reach out with interest and quotes so you can compare your best options.",
    icon: <FaComments className="text-4xl text-indigo-600" />,
    color: "from-indigo-500/10 to-indigo-100",
  },
  {
    id: 3,
    title: "Review profiles & choose",
    desc: "Compare profiles, read reviews, and hire the right person confidently for your job.",
    icon: <FaUserCheck className="text-4xl text-green-600" />,
    color: "from-green-500/10 to-green-100",
  },
];

const HowToHireSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fbff] to-white py-10 mt-5">
      {/* Background shape */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[150%] h-96 bg-gradient-to-b from-blue-50 to-transparent rounded-b-[50%]"></div>

      <div className="relative max-w-6xl px-6 mx-auto text-center">
        {/* Section heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl"
        >
          How to hire the right <span className="text-blue-600">tradesperson</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-2xl mx-auto mb-12 text-gray-600"
        >
          Follow these 3 simple steps to connect with trusted professionals ready to help you.
        </motion.p>

        {/* Steps grid */}
        <div className="relative grid gap-10 mt-10 md:grid-cols-3">
          {/* connector line */}
          <div className="hidden md:block absolute top-20 left-[16.5%] w-2/3 h-[2px] bg-gradient-to-r from-blue-200 via-indigo-200 to-green-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
              className={`relative z-10 bg-gradient-to-br ${step.color} p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                {/* Step circle */}
                <div className="flex items-center justify-center w-20 h-20 bg-white border-4 border-blue-100 rounded-full shadow-sm">
                  {step.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  STEP {step.id}: {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-14"
        >
          <button className="px-8 py-3 font-semibold text-white transition bg-blue-600 rounded-full hover:bg-blue-700">
            Post a job — it’s free
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToHireSection;
