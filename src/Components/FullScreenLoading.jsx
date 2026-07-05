import { motion } from "framer-motion";

const FullScreenLoading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-md">

      {/* Glow Background */}
      <div className="absolute w-96 h-96 bg-[#5fcf3a] opacity-10 rounded-full blur-3xl animate-pulse"></div>

      {/* Animated Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center space-y-8"
      >

        {/* Brand Name */}
        <motion.h1
          initial={{ y: -15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-extrabold text-transparent bg-gradient-to-r from-[#5fcf3a] to-[#2f9e1f] bg-clip-text"
        >
          Faces Solutions
        </motion.h1>

        {/* 🔥 Custom Gradient Spinner */}
        <div className="relative flex items-center justify-center w-24 h-24">

          {/* Outer Rotating Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute w-24 h-24 border-4 border-t-[#5fcf3a] border-b-[#a0ec86] border-l-transparent border-r-transparent rounded-full"
          />

          {/* Inner Pulse Circle */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-10 h-10 rounded-full bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] shadow-lg"
          />

        </div>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm tracking-widest text-gray-500 uppercase"
        >
          Securing Access...
        </motion.p>

      </motion.div>
    </div>
  );
};

export default FullScreenLoading;