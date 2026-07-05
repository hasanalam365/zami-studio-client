import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PricingCards from "./PriceCards";

function PricePlans() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      variants={container}
      initial="hidden"
      animate={controls}
      className="relative py-16 overflow-hidden bg-black"
    >
      {/* 🔴 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-red-600/20 blur-[160px]" />
        <div className="absolute bottom-0 right-1/3 w-[420px] h-[420px] bg-white/10 blur-[160px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4">

        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-6">
          <span className="px-5 py-2 text-sm font-semibold tracking-wide text-red-600 border rounded-full bg-white/10 border-white/10 backdrop-blur-md">
            AI • SEO • Performance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={item}
          className="mb-8 text-4xl font-black leading-tight text-center text-white md:text-6xl"
        >
          We Build{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-white blur-xl opacity-30" />
            <span className="relative text-transparent bg-gradient-to-r from-red-500 to-white bg-clip-text">
              Intelligent Websites
            </span>
          </span>
          <br />
          That Convert & Scale
        </motion.h2>

        {/* Sub headline */}
        <motion.p
          variants={item}
          className="max-w-3xl mx-auto mb-10 text-xl font-medium text-center text-white/70"
        >
          AI-driven experiences, SEO-optimized architecture, and conversion-focused
          design — engineered to grow modern businesses faster.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-4xl mx-auto leading-relaxed text-center text-white/60 mb-14"
        >
          We craft high-performance digital solutions by blending artificial
          intelligence with human-centered design. Every website we build is
          strategically optimized for visibility, speed, and engagement —
          delivering measurable results without premium-agency pricing.
        </motion.p>

        {/* Pricing Cards */}
        <div className="relative">
          <PricingCards />
        </div>

      </div>
    </motion.section>
  );
}

export default PricePlans;