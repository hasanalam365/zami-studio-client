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

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-black">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={controls}
        className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto text-center"
      >
        {/* BADGE */}
        <span className="inline-block px-6 py-2 mb-6 text-xs font-bold tracking-widest text-white uppercase rounded-full shadow-lg bg-gradient-to-r from-red-700 to-red-500">
          Pay-Monthly Website Solutions
        </span>

        {/* TITLE */}
        <h2 className="mb-6 text-3xl font-black text-white md:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
            Pay-monthly website solutions
          </span>{" "}
          designed to grow with your business.
        </h2>

        {/* SUB TEXT */}
        <p className="max-w-3xl mx-auto mb-12 text-lg text-white/70">
          We combine{" "}
          <span className="font-semibold text-red-500">design</span>,{" "}
          <span className="font-semibold text-white">maintenance</span>,{" "}
          <span className="font-semibold text-red-400">CRM</span>, and{" "}
          <span className="font-semibold text-white">marketing</span> with AI-powered systems
          that improve conversions and performance.
        </p>

        {/* GRID */}
        <div className="grid max-w-5xl grid-cols-1 gap-6 mx-auto md:grid-cols-3">
          
          {/* CARD 1 */}
          <div className="p-6 transition bg-black border rounded-xl border-white/10 hover:border-red-500/40">
            <h4 className="mb-2 font-bold text-red-500">Design & Maintenance</h4>
            <p className="text-sm text-white/70">
              Modern UI, SEO-ready structure, fast performance, continuous updates.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 transition bg-black border rounded-xl border-white/10 hover:border-red-500/40">
            <h4 className="mb-2 font-bold text-white">CRM & Marketing</h4>
            <p className="text-sm text-white/70">
              Lead capture, automation workflows, and conversion optimization tools.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 transition bg-black border rounded-xl border-white/10 hover:border-red-500/40">
            <h4 className="mb-2 font-bold text-red-400">AI & Hosting</h4>
            <p className="text-sm text-white/70">
              AI optimization, secure hosting, SSL, domain, and support included.
            </p>
          </div>
        </div>

        {/* FOOT TEXT */}
        <p className="max-w-3xl mx-auto mt-12 text-white/60">
          All packages are designed to match modern SaaS standards with performance,
          security, and scalability in mind.
        </p>
      </motion.div>
    </section>
  );
};

export default AccordionHeader;