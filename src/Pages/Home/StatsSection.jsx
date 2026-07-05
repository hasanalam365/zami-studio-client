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
    <section ref={ref} className="relative py-20 overflow-hidden bg-black">

      {/* 🔴 background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-red-600/20 blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-white/10 blur-[160px]" />
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

            {/* 🔴 glow border */}
            <div className="absolute inset-0 transition opacity-0 group-hover:opacity-100 blur-2xl bg-gradient-to-r from-red-700 to-red-500 rounded-3xl" />

            {/* ⚫ card */}
            <div className="relative p-10 border shadow-2xl border-white/10 rounded-3xl bg-black/70 backdrop-blur-md">

              {/* 🔴 number */}
              <h3 className="mb-3 text-5xl font-extrabold text-transparent bg-red-600 md:text-6xl bg-clip-text">
                {trigger && (
                  <CountUp
                    end={item.number}
                    duration={2.5}
                    separator=","
                    suffix={item.suffix || ""}
                  />
                )}
              </h3>

              {/* ⚪ label */}
              <p className="text-sm font-semibold tracking-widest text-white uppercase">
                {item.label}
              </p>

              {/* 🔴 underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.7 + index * 0.15, duration: 0.7 }}
                className="h-[3px] w-14 mx-auto mt-6 origin-left rounded-full bg-gradient-to-r from-red-600 to-white"
              />

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;