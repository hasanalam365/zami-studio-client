import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import DashboardNavbar from "../..//Shared/DashboardNav/DashboardNavbar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">

      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      {/* 🌿 Soft Background Glow */}
      <div className="absolute w-96 h-96 bg-[#5fcf3a] opacity-10 blur-3xl rounded-full -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-[#a0ec86] opacity-10 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* 🔹 Mobile Top Navbar */}
      <div className="relative z-20 flex items-center justify-between p-4 bg-white shadow-md md:hidden">

        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-[#5fcf3a]"
        >
          <FiMenu />
        </button>

        <h2 className="text-lg font-bold text-transparent bg-gradient-to-r from-[#5fcf3a] to-[#2f9e1f] bg-clip-text">
          Dashboard
        </h2>

      </div>

      {/* Sidebar */}
      <DashboardNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* 🌿 Main Content Area */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 p-6 md:ml-64"
      >
        <div className="p-6 bg-white shadow-xl rounded-3xl">
          <Outlet />
        </div>
      </motion.div>

    </div>
  );
};

export default Dashboard;