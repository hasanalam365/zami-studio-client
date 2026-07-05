import React from "react";
import { motion } from "framer-motion";
import {
  Code,
 
  BarChart3,
 
  Globe,
  
  Smartphone,
} from "lucide-react";
import Testimonial from "../Home/Testimonial/Testimonial";

const About = () => {
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Left Gradient Circle */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#5fcf3a]/25 to-[#a0ec86]/20 blur-2xl pointer-events-none" />

      <div className="px-6 pt-12 lg:px-10">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative grid gap-12 p-10 bg-white shadow-2xl rounded-3xl lg:grid-cols-2 lg:p-16"
        >
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-2 text-lg font-medium text-gray-600">
              About <span className="font-semibold text-orange-500">Faces Solutions</span>
            </p>

            <h2 className="mb-6 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              A Creative Digital Agency
              <span className="block text-[#5fcf3a]">
                Built for Growth & Impact
              </span>
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              Faces Media is a premium digital agency delivering high-impact
              web development, branding, social media design, SEO, content
              writing, and video editing solutions focused on measurable growth.
            </p>

            <ul className="mb-8 space-y-3 text-gray-700">
              <li>✔ Web Development & UI/UX Design</li>
              <li>✔ Social Media & Brand Identity</li>
              <li>✔ Premium Logo & Creative Design</li>
              <li>✔ SEO, Content Writing & Video Editing</li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] shadow-lg hover:shadow-xl transition-all"
            >
              Let’s Work Together
            </motion.button>
          </motion.div>

          {/* RIGHT ANIMATED ICON SECTION */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative grid w-full max-w-md grid-cols-2 gap-6 p-8 border shadow-2xl rounded-3xl border-white/40 bg-white/70 backdrop-blur-xl">

              {/* Icon Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl"
              >
                <Code size={42} className="text-[#5fcf3a]" />
                <p className="mt-3 text-sm font-semibold">Web Development</p>
              </motion.div>

              {/* Icon Card 2 */}
              <motion.div
  animate={{ y: [0, -12, 0] }}
  transition={{ repeat: Infinity, duration: 3.5 }}
  className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl"
>
  <Smartphone size={42} className="text-orange-500" />
  <p className="mt-3 text-sm font-semibold">Software Develop.</p>
</motion.div>


              {/* Icon Card 3 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.8 }}
                className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl"
              >
                <BarChart3 size={42} className="text-blue-500" />
                <p className="mt-3 text-sm font-semibold">SEO & Growth</p>
              </motion.div>

              {/* Icon Card 4 */}
             <motion.div
  animate={{ y: [0, -14, 0] }}
  transition={{ repeat: Infinity, duration: 3.8 }}
  className="flex flex-col items-center p-6 bg-white shadow-lg rounded-2xl"
>
  <Globe size={42} className="text-purple-500" />
  <p className="mt-3 text-sm font-semibold">Domain Name</p>
</motion.div>


              {/* Bottom Badge */}
              <div className="absolute left-1/2 -bottom-6 -translate-x-1/2 bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] px-5 py-3 rounded-xl shadow-lg">
                <p className="text-sm font-semibold text-center text-white">
                  Trusted Digital Partner
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#5fcf3a]/10 to-[#a0ec86]/10 p-10">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default About;
