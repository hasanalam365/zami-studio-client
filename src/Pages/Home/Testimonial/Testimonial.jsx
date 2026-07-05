import { Link } from "react-router-dom";
import DemoTes from "../../../Components/TestimonialRight/DemoTes";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="relative px-6 py-20 overflow-hidden bg-gradient-to-br from-[#e9ffe1] via-[#f4f8ff] to-[#ffffff]">
      
      {/* background blur */}
      <div className="absolute rounded-full w-72 h-72 bg-green-300/30 blur-3xl top-10 -left-20" />
      <div className="absolute rounded-full w-72 h-72 bg-blue-300/30 blur-3xl bottom-10 -right-20" />

      <div className="relative grid grid-cols-1 mx-auto max-w-7xl gap-14 lg:grid-cols-2">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
            Testimonials
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            What People Say <br />
            <span className="text-green-600">About Faces Solutions</span>
          </h2>

          <p className="max-w-xl text-lg leading-relaxed text-gray-600">
            Real experiences from professionals and clients who trusted us.
            We focus on quality, creativity, and long-term digital success.
          </p>

          <Link to="/testimonials">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 mt-4 text-lg font-semibold text-white rounded-full shadow-xl bg-gradient-to-r from-green-500 to-emerald-400"
            >
              View All Testimonials →
            </motion.button>
          </Link>
        </motion.div>

        {/* RIGHT SLIDER (MOBILE FIXED) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full min-h-[340px]"
        >
          <DemoTes />
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonial;
