import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AccordionHeader = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.25 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-20 overflow-hidden bg-black">

      {/* BACKGROUND GLOW ANIMATION */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,0,0,0.15), transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.05), transparent 40%)",
        }}
      />

      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={controls}
        className="relative z-10 w-[95%] md:w-[90%] lg:w-[85%] mx-auto text-center"
      >
        {/* BADGE */}
        <motion.span
          variants={fadeUp}
          className="inline-block px-6 py-2 mb-6 text-xs font-bold tracking-widest text-white uppercase rounded-full shadow-lg bg-gradient-to-r from-red-700 to-red-500"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Pay-Monthly Website Solutions
        </motion.span>

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="mb-6 text-3xl font-black text-white md:text-5xl"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
            Pay-monthly website solutions
          </span>{" "}
          designed to grow with your business.
        </motion.h2>

        {/* SUB TEXT */}
        <motion.p
          variants={fadeUp}
          className="max-w-3xl mx-auto mb-12 text-lg text-white/70"
        >
          We combine{" "}
          <span className="font-semibold text-red-500">design</span>,{" "}
          <span className="font-semibold text-white">maintenance</span>,{" "}
          <span className="font-semibold text-red-400">CRM</span>, and{" "}
          <span className="font-semibold text-white">marketing</span> with AI-powered systems
          that improve conversions and performance.
        </motion.p>

        {/* GRID */}
        <motion.div
          variants={container}
          className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3"
        >
          {/* CARD 1 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 transition bg-black border rounded-xl border-white/10 hover:border-red-500/40"
          >
            <h4 className="mb-2 font-bold text-red-500">Design & Maintenance</h4>
            <p className="text-sm text-white/70">
              Modern UI, SEO-ready structure, fast performance, continuous updates.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 transition bg-black border rounded-xl border-white/10 hover:border-red-500/40"
          >
            <h4 className="mb-2 font-bold text-white">CRM & Marketing</h4>
            <p className="text-sm text-white/70">
              Lead capture, automation workflows, and conversion optimization tools.
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={cardAnim}
            whileHover={{ scale: 1.05, y: -5 }}
            className="p-6 transition bg-black border rounded-xl border-white/10 hover:border-red-500/40"
          >
            <h4 className="mb-2 font-bold text-red-400">AI & Hosting</h4>
            <p className="text-sm text-white/70">
              AI optimization, secure hosting, SSL, domain, and support included.
            </p>
          </motion.div>
        </motion.div>

        {/* FOOT TEXT */}
        <motion.p
          variants={fadeUp}
          className="max-w-3xl mx-auto mt-12 text-white/60"
        >
          All packages are designed to match modern SaaS standards with performance,
          security, and scalability in mind.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AccordionHeader;