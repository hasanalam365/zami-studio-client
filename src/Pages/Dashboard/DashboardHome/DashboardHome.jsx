import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useMemo } from "react";

const DashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  const { data = [], isLoading, isError } = useQuery({
    queryKey: ["track-users-data"],
    queryFn: async () => {
      const res = await axiosSecure.get("/track");
      return res.data;
    },
  });

  const totalCount = useMemo(() => {
    return data.reduce((sum, item) => sum + item.count, 0);
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh] bg-black">
        <span className="text-red-500 loading loading-spinner"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500 bg-black">
        Failed to load dashboard data
      </div>
    );
  }

  return (
    <div className="relative min-h-screen p-6 overflow-hidden text-white bg-black">

      <Helmet>
        <title>Dashboard Home</title>
      </Helmet>

      {/* 🔴 Glow Effects */}
      <div className="absolute bg-red-600 rounded-full w-96 h-96 blur-3xl opacity-20 -top-20 -left-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 bg-white rounded-full w-96 h-96 blur-3xl opacity-5 animate-pulse"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-10"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
          Dashboard Overview
        </h1>
        <p className="mt-3 text-gray-400">
          Monitor your system performance in real-time.
        </p>
      </motion.div>

      {/* TOTAL CARD */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 p-8 mb-10 border border-red-500/30 rounded-3xl bg-red-500/10 backdrop-blur-xl"
      >
        <h2 className="text-lg text-gray-300">
          Total Activities
        </h2>

        <p className="mt-3 text-5xl font-extrabold text-red-500">
          {totalCount}
        </p>
      </motion.div>

      {/* STATS GRID */}
      <div className="relative z-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 transition duration-300 border border-white/10 rounded-3xl bg-white/5 hover:border-red-500/50"
          >

            {/* Hover Glow */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 rounded-3xl bg-gradient-to-r from-red-600/20 to-white/10 hover:opacity-100"></div>

            <h2 className="relative text-lg font-semibold text-white">
              {item.category}
            </h2>

            <p className="relative mt-5 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
              {item.count}
            </p>

            <p className="relative mt-3 text-sm text-gray-400">
              {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default DashboardHome;