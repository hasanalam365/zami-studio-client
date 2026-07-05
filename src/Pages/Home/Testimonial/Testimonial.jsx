import { Link } from "react-router-dom";
import DemoTes from "../../../Components/TestimonialRight/DemoTes";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="relative px-6 py-24 overflow-hidden bg-black">

      {/* red glow background */}
      <div className="absolute w-72 h-72 bg-red-500/20 blur-3xl top-10 -left-20" />
      <div className="absolute w-72 h-72 bg-red-700/20 blur-3xl bottom-10 -right-20" />

      <div className="relative grid mx-auto max-w-7xl gap-14 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-red-400 border rounded-full border-red-500/30 bg-red-500/10">
            Testimonials
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
            What Clients Say <br />
            <span className="text-red-500">About Our Work</span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-white/70">
            Real feedback from clients who trusted us with design, development and digital growth.
          </p>

          <Link to="/testimonials">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-white transition rounded-full shadow-xl bg-gradient-to-r from-red-600 to-red-500"
            >
              View All Testimonials →
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full min-h-[340px]"
        >
          <DemoTes />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;