import React from "react";
import { motion } from "framer-motion";

import { GrTableAdd } from "react-icons/gr";
import { TbLockAccess } from "react-icons/tb";
import { FaFileInvoice, FaTasks, FaIndustry, FaFileCode } from "react-icons/fa";
import { GiNewspaper, GiThrownKnife } from "react-icons/gi";
import { RiTeamFill } from "react-icons/ri";
import { TbCircleLetterL } from "react-icons/tb";
import { FaMoneyCheckDollar, FaIdeal } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { MdManageAccounts, MdOutlineBookOnline, MdPayment, MdEventAvailable } from "react-icons/md";
import { MdOutlineAutoAwesomeMosaic } from "react-icons/md";

// Animation Variants
const animations = [
  { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, scale: 0.6 }, visible: { opacity: 1, scale: 1 } },
  { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, rotate: -90 }, visible: { opacity: 1, rotate: 0 } }
];

export default function FacesBanner() {
  const items = [
    { label: "Lead and Client Management", icon: <GrTableAdd /> },
    { label: "Client Access", icon: <TbLockAccess /> },
    { label: "Invoices", icon: <FaFileInvoice /> },
    { label: "Event Registration", icon: <MdEventAvailable /> },
    { label: "Online Payment", icon: <MdOutlineBookOnline /> },
    { label: "Online Donation", icon: <MdPayment /> },
    { label: "Smart Quotation System", icon: <SiWebmoney /> },
    { label: "Task Management", icon: <FaTasks /> },
    { label: "HR Management", icon: <GiThrownKnife /> },
    { label: "Web Enquiry", icon: <FaIndustry /> },
    { label: "Newsletter", icon: <GiNewspaper /> },
    { label: "File Management and Reminders", icon: <FaFileCode /> },
    { label: "Advanced Team Management", icon: <RiTeamFill /> },
    { label: "Smart Lettering", icon: <TbCircleLetterL /> },
    { label: "Smart Income Statement", icon: <FaMoneyCheckDollar /> },
    { label: "Billable Items", icon: <SiWebmoney /> },
    { label: "Role Manager", icon: <MdManageAccounts /> },
    { label: "To-Do List", icon: <MdOutlineAutoAwesomeMosaic /> },
    { label: "Deals", icon: <FaIdeal /> },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full py-16 overflow-hidden bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] text-white"
    >
      {/* Background decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-[#5fcf3a]/20 to-[#a0ec86]/20 rounded-full -translate-x-32 -translate-y-32 animate-spin-slow pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-[#ff3d6b]/20 to-[#ff7aac]/20 rounded-full translate-x-32 translate-y-32 animate-spin-slow-reverse pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl px-6 mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-4xl font-extrabold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] drop-shadow-lg"
        >
          All-in-One Tools to Work Smarter
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-12 text-lg md:text-xl text-white/90"
        >
          Choose what you need, hide the rest, and manage your agency like a pro.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, i) => {
            const anim = animations[i % animations.length];
            return (
              <motion.div
                key={i}
                variants={anim}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 text-sm font-medium transition-all duration-300 border shadow-lg cursor-pointer rounded-3xl bg-white/10 backdrop-blur-sm border-white/20 hover:scale-105 hover:bg-white/20 hover:shadow-2xl"
              >
                <span className="text-2xl text-[#5fcf3a]">{item.icon}</span>
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
