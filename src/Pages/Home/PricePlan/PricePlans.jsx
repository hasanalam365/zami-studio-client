import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import PricingCards from "./PriceCards";

function PricePlans() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  React.useEffect(function () {
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
      className="relative py-12 overflow-hidden"
    >
      {/* Background Glow (UNCHANGED) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-green-400/30 blur-[140px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-orange-400/30 blur-[140px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4">
        {/* Badge */}
        <motion.div
          variants={item}
          className="flex justify-center mb-6"
        >
          <span className="px-5 py-2 text-sm font-semibold tracking-wide text-green-700 bg-green-100 rounded-full">
            AI • SEO • Performance
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={item}
          className="mb-8 text-4xl font-black leading-tight text-center md:text-6xl"
        >
          We Build{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-orange-400 blur-xl opacity-40" />
            <span className="relative text-transparent bg-gradient-to-r from-green-500 to-orange-500 bg-clip-text">
              Intelligent Websites
            </span>
          </span>
          <br />
          That Convert & Scale
        </motion.h2>

        {/* Sub headline */}
        <motion.p
          variants={item}
          className="max-w-3xl mx-auto mb-10 text-xl font-medium text-center text-gray-700"
        >
          AI-driven experiences, SEO-optimized architecture, and conversion-focused
          design — engineered to grow modern businesses faster.
        </motion.p>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-4xl mx-auto leading-relaxed text-center text-gray-600 mb-14"
        >
          We craft high-performance digital solutions by blending artificial
          intelligence with human-centered design. Every website we build is
          strategically optimized for visibility, speed, and engagement —
          delivering measurable results without premium-agency pricing.
        </motion.p>

        {/* Pricing */}
        <PricingCards />
      </div>
    </motion.section>
  );
}

export default PricePlans;
