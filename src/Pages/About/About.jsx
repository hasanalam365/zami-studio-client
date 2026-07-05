import { motion } from "framer-motion";
import { Code, BarChart3, Globe, Smartphone } from "lucide-react";
import Testimonial from "../Home/Testimonial/Testimonial";

const About = () => {
  return (
    <div className="relative w-full overflow-hidden text-white bg-black">

      {/* RED GLOW */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-white/5 blur-3xl" />

      <div className="px-6 pt-12 lg:px-10">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative grid gap-12 p-10 border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl lg:grid-cols-2 lg:p-16"
        >

          {/* LEFT */}
          <div>
            <p className="mb-2 text-lg text-gray-400">
              About <span className="font-semibold text-red-500">Faces Solutions</span>
            </p>

            <h2 className="mb-6 text-4xl font-bold">
              A Creative Digital Agency
              <span className="block text-red-500">
                Built for Growth & Impact
              </span>
            </h2>

            <p className="mb-6 leading-relaxed text-gray-300">
              We deliver premium web development, branding, SEO, and digital solutions
              focused on real business growth.
            </p>

            <ul className="mb-8 space-y-3 text-gray-300">
              <li>✔ Web Development & UI/UX Design</li>
              <li>✔ Branding & Social Media Design</li>
              <li>✔ SEO & Content Strategy</li>
              <li>✔ Software & App Development</li>
            </ul>

            <button className="px-8 py-3 font-semibold text-white transition border border-red-500 rounded-full bg-gradient-to-r from-red-600 to-black hover:scale-105">
              Let’s Work Together
            </button>
          </div>

          {/* RIGHT ICON GRID */}
          <div className="relative flex items-center justify-center">

            <div className="grid w-full max-w-md grid-cols-2 gap-6 p-8 border border-white/10 bg-black/40 backdrop-blur-xl rounded-3xl">

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="flex flex-col items-center p-6 border bg-white/5 border-white/10 rounded-2xl"
              >
                <Code size={40} className="text-red-600" />
                <p className="mt-2 text-sm">Web Dev</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 3.5 }}
                className="flex flex-col items-center p-6 border bg-white/5 border-white/10 rounded-2xl"
              >
                <Smartphone size={40} className="text-red-600" />
                <p className="mt-2 text-sm">Software</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.8 }}
                className="flex flex-col items-center p-6 border bg-white/5 border-white/10 rounded-2xl"
              >
                <BarChart3 size={40} className="text-red-600" />
                <p className="mt-2 text-sm">SEO Growth</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 3.8 }}
                className="flex flex-col items-center p-6 border bg-white/5 border-white/10 rounded-2xl"
              >
                <Globe size={40} className="text-red-600" />
                <p className="mt-2 text-sm">Digital</p>
              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* TESTIMONIAL SECTION */}
        <div className="mt-20 mb-10 border border-red-600 rounded-3xl rounded-xl backdrop-blur-xl">
          <Testimonial />
        </div>

      </div>
    </div>
  );
};

export default About;