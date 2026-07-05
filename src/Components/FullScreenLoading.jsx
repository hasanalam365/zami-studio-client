import { motion } from "framer-motion";

const FullScreenLoading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">

      {/* RED GLOW BACKGROUND */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl animate-pulse"></div>

      {/* MAIN LOADER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col items-center space-y-8"
      >

        {/* BRAND */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-600"
        >
          Zami Studio
        </motion.h1>

        {/* SPINNER */}
        <div className="relative flex items-center justify-center w-24 h-24">

          {/* OUTER RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "linear" }}
            className="absolute w-24 h-24 border-4 rounded-full border-t-red-500 border-b-white border-l-transparent border-r-transparent"
          />

          {/* INNER CORE */}
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="w-10 h-10 rounded-full shadow-lg bg-gradient-to-r from-red-500 to-white"
          />
        </div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm tracking-[0.3em] text-gray-300 uppercase"
        >
          Loading Experience...
        </motion.p>

      </motion.div>
    </div>
  );
};

export default FullScreenLoading;