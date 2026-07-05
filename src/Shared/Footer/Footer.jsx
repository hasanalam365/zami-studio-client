import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-gray-300 bg-black">

      {/* red glow background */}
      <div className="absolute w-72 h-72 bg-red-600/20 blur-3xl top-10 -left-20" />
      <div className="absolute w-72 h-72 bg-red-800/20 blur-3xl bottom-10 -right-20" />

      {/* top line */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-red-500/40 to-transparent"></div>

      <div className="grid gap-10 px-6 py-20 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <aside className="relative space-y-5">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="flex items-center justify-center shadow-lg w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-red-500 shadow-red-500/30">
              <img
                src="/logo.jpg"
                alt="logo"
                className="h-12"
              />
            </div>

            <h2 className="text-3xl font-extrabold text-white">
              Zami{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
                Studio
              </span>
            </h2>
          </motion.div>

          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            We build high-performance digital products using modern design,
            development and AI-driven strategies for business growth.
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-red-500 to-transparent"></div>
        </aside>

        {/* SERVICES */}
        <nav className="space-y-3">
          <h6 className="text-sm font-bold tracking-widest text-white uppercase">
            Services
          </h6>
          <Link className="footer-link-red" to="/services">
            Services
          </Link>
        </nav>

        {/* COMPANY */}
        <nav className="space-y-3">
          <h6 className="text-sm font-bold tracking-widest text-white uppercase">
            Company
          </h6>
          <Link className="footer-link-red" to="/about">
            About Us
          </Link>
          <Link className="footer-link-red" to="/contact-us">
            Contact
          </Link>
        </nav>

        {/* LEGAL */}
        <nav className="space-y-3">
          <h6 className="text-sm font-bold tracking-widest text-white uppercase">
            Legal
          </h6>
          <Link className="footer-link-red" to="/terms-and-conditions">
            Terms
          </Link>
          <Link className="footer-link-red" to="/privacy-policy">
            Privacy
          </Link>
        </nav>
      </div>

      {/* bottom */}
      <div className="py-6 text-sm text-center border-t text-white/50 border-white/10">
        © {new Date().getFullYear()} Faces Solutions. All rights reserved.
      </div>

      {/* hover styles */}
      <style>{`
        .footer-link-red {
          display: block;
          color: rgba(255,255,255,0.6);
          transition: 0.3s;
        }
        .footer-link-red:hover {
          color: #ef4444;
          transform: translateX(4px);
        }
      `}</style>

    </footer>
  );
};

export default Footer;