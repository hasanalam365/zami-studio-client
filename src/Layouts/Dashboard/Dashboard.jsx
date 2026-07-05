import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import DashboardNavbar from "../..//Shared/DashboardNav/DashboardNavbar";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">

      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      {/* 🔥 RED GLOW BACKGROUND */}
      <div className="absolute w-[400px] h-[400px] bg-red-600/20 blur-3xl rounded-full -top-20 -left-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-white/5 blur-3xl rounded-full bottom-0 right-0"></div>

      {/* MOBILE NAV */}
      <div className="relative z-20 flex items-center justify-between p-4 border-b border-red-500/20 bg-black/70 backdrop-blur-md md:hidden">

        <button
          onClick={() => setIsOpen(true)}
          className="text-2xl text-red-500"
        >
          <FiMenu />
        </button>

        <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
          Dashboard
        </h2>
      </div>

      {/* SIDEBAR */}
      <DashboardNavbar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative z-10 p-6 md:ml-64"
      >
        <div className="p-6 border shadow-2xl border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl">
          <Outlet />
        </div>
      </motion.div>

    </div>
  );
};

export default Dashboard;