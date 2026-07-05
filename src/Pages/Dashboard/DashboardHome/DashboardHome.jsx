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
      <div className="flex items-center justify-center h-[60vh]">
        <span className="loading loading-spinner text-[#5fcf3a]"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-10 text-center text-red-500">
        Failed to load dashboard data
      </div>
    );
  }

  return (
    <div className="relative min-h-screen p-6 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-100">

      <Helmet>
        <title>Dashboard Home</title>
      </Helmet>

      {/* Soft Glow Background */}
      <div className="absolute w-80 h-80 bg-[#5fcf3a] opacity-10 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-[#a0ec86] opacity-10 rounded-full blur-3xl bottom-0 right-0 animate-pulse"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 mb-10"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#5fcf3a] to-[#2f9e1f] bg-clip-text">
          Dashboard Overview
        </h1>
        <p className="mt-3 text-gray-600">
          Monitor your Sales Funnels performance in real-time.
        </p>
      </motion.div>

      {/* Total Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 p-8 mb-10 text-white shadow-xl rounded-3xl bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86]"
      >
        <h2 className="text-lg font-medium opacity-90">
          Total Activities
        </h2>
        <p className="mt-3 text-5xl font-bold">
          {totalCount}
        </p>
      </motion.div>

      {/* Stats Cards */}
      <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.06 }}
            className="relative p-6 transition-all duration-500 bg-white border shadow-lg rounded-3xl hover:shadow-2xl"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] opacity-0 hover:opacity-10 transition duration-500"></div>

            <h2 className="text-lg font-semibold text-gray-700">
              {item.category}
            </h2>

            <p className="mt-5 text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#5fcf3a] to-[#2f9e1f] bg-clip-text">
              {item.count}
            </p>

            <p className="mt-3 text-sm text-gray-400">
              {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;