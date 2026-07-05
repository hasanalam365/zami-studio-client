import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-tr from-[#0d111f] via-[#08192b] to-[#0a0f1a] text-gray-300 backdrop-blur-sm shadow-xl">

      {/* Top Accent Glow */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#5fcf3a]/50 to-transparent"></div>

      <div className="grid gap-10 px-6 py-16 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <aside className="relative space-y-5">

          {/* Glow */}
          <div className="absolute -inset-3 rounded-2xl bg-[#5fcf3a]/10 blur-2xl"></div>

          {/* Brand Header */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex items-center gap-3"
          >
            <div className="flex items-center justify-center w-14 h-14 rounded-xl
              bg-gradient-to-br from-[#5fcf3a] to-[#a0ec86]
              shadow-lg shadow-[#5fcf3a]/30">
              {/* <Sparkles className="w-5 h-5 text-black" /> */}
           <img
      src="https://i.ibb.co.com/WRXs9Xj/faces-Solution-Black.png"
      alt="Faces Solutions Logo"
      className="object-contain w-auto h-12 md:h-14"
    />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white">
              Faces
              <span className="ml-1 text-transparent bg-clip-text bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86]">
                Solutions
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative max-w-xs text-sm leading-relaxed text-gray-400"
          >
            We craft high-impact digital experiences through
            <span className="text-gray-200"> design</span>,
            <span className="text-gray-200"> development</span> &amp;
            <span className="text-gray-200"> growth strategy</span>.
          </motion.p>

          {/* Accent Line */}
          <div className="relative w-16 h-[2px] rounded-full bg-gradient-to-r from-[#5fcf3a] to-transparent"></div>
        </aside>

        {/* SERVICES */}
        <nav className="space-y-3">
          <h6 className="text-sm font-semibold tracking-widest text-white uppercase">
            Services
          </h6>
          <Link to="/services" className="footer-link">
            Services
          </Link>
        </nav>

        {/* COMPANY */}
        <nav className="space-y-3">
          <h6 className="text-sm font-semibold tracking-widest text-white uppercase">
            Company
          </h6>
          <Link to="/about" className="footer-link">
            About Us
          </Link>
          <Link to="/contact-us" className="footer-link">
            Contact
          </Link>
        </nav>

        {/* LEGAL */}
        <nav className="space-y-3">
          <h6 className="text-sm font-semibold tracking-widest text-white uppercase">
            Legal
          </h6>
          <Link to="/terms-and-conditions" className="footer-link">
            Terms & Conditions
          </Link>
          <Link to="/privacy-policy" className="footer-link">
            Privacy Policy
          </Link>
        </nav>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 text-sm text-center text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} Faces Solutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
