import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
// import useAuth from "../../Hooks/useAuth";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const { user, signOutUser } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const handleLogout = async () => {
  //   await signOutUser();
  // };

  const activeClass =
    "bg-gradient-to-r from-[#7f1d1d] to-[#dc2626] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300";

  const normalClass =
    "px-4 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full border-b backdrop-blur-md transition-all duration-300
        ${isOpen ? "z-40 opacity-0 pointer-events-none" : "z-50 opacity-100"}
        ${
          scrolled
            ? "bg-black/90 border-red-900/40 shadow-lg"
            : "bg-black border-white/10"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 md:px-8">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Zami Studio Logo"
              className="object-contain w-10 h-10"
            />

            <h4 className="flex items-center gap-2 text-2xl font-bold md:text-3xl">

              <span className="text-white">
               ZAMI
              </span>
              <span className="text-red-600">
               <Typewriter
                  words={["STUDIO"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={80}
                  delaySpeed={2000}
                />
              </span>

              
            </h4>
          </Link>

          {/* DESKTOP MENU */}
          <div className="items-center hidden gap-6 font-semibold lg:flex">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Home
            </NavLink>

            <NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Services
            </NavLink>

            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Contact
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              About
            </NavLink>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-2xl text-white lg:hidden"
          >
            <IoMenu />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-[60] h-full w-[80%] sm:w-[65%]
              bg-white text-black shadow-2xl p-6 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between pb-4 border-b">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setIsOpen(false)} className="text-2xl">
                  <IoClose />
                </button>
              </div>

              {["/", "/services", "/contact-us", "/about"].map((path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `w-full px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#7f1d1d] to-[#dc2626] text-white shadow-md"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  {["Home", "Services", "Contact", "About"][i]}
                </NavLink>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] bg-black"
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;