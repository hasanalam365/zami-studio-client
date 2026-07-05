import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const StatsSection = () => {
  const [trigger, setTrigger] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.35,
  });

  const stats = [
    { number: 1359, label: "Total Orders" },
    { number: 20, label: "Services Item", suffix: "+" },
    { number: 326, label: "Reviews" },
  ];

  useEffect(() => {
    if (inView) {
      setTrigger(false);
      setTimeout(() => setTrigger(true), 120);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative py-16 overflow-hidden bg-white"
    >
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[420px] h-[420px] bg-indigo-300/30 blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-purple-300/30 blur-[160px]" />
      </div>

      <div className="grid max-w-6xl grid-cols-1 gap-10 px-6 mx-auto text-center md:grid-cols-3">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.25 }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="relative group"
          >
            {/* glow border */}
            <div className="absolute inset-0 transition opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl"/>

            {/* card */}
            <div className="relative p-10 border border-gray-100 shadow-xl backdrop-blur-md rounded-3xl bg-white/90">

              {/* number */}
              <h3 className="mb-3 text-5xl font-extrabold text-transparent md:text-6xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
                {trigger && (
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    separator=","
                    suffix={item.suffix || ""}
                  />
                )}
              </h3>

              {/* label */}
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                {item.label}
              </p>

              {/* underline animation */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.7 + index * 0.15, duration: 0.7 }}
                className="h-[3px] w-14 mx-auto mt-6 origin-left rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
              />

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;