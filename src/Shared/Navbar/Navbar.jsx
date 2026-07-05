import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brandingOpen, setBrandingOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { user, signOutUser } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = async () => {
    await signOutUser();
  };

  const activeClass =
    "bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300";
  const normalClass =
    "px-4 py-2 rounded-lg text-gray-900 transition-all duration-300 hover:bg-gray-100";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full border-b backdrop-blur-md transition-all duration-300
          ${isOpen ? "z-40 opacity-0 pointer-events-none" : "z-50 opacity-100"}
          ${
            scrolled
              ? "bg-white/70 shadow-md border-white/30"
              : "bg-white/20 border-white/10"
          }`}
      >
        <div className="flex items-center justify-between h-16 px-4 md:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
  <div className="flex items-center justify-center px-3 h-14 ">
    
    <img
      src="https://i.ibb.co.com/WRXs9Xj/faces-Solution-Black.png"
      alt="Faces Solutions Logo"
      className="object-contain w-auto h-12 md:h-14"
    />
  </div>
</Link>


          {/* Desktop Menu */}
          <div className="items-center hidden gap-6 font-semibold text-gray-900 lg:flex">
            <NavLink to="/" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Home
            </NavLink>

            {/* Branding
            <div className="relative">
              <button
                onClick={() => setBrandingOpen(!brandingOpen)}
                className="flex items-center gap-1 px-4 py-2 rounded-lg transition-all duration-300 hover:text-[#ff6db8]"
              >
                Branding
                <FaChevronDown
                  size={12}
                  className={`transition-transform duration-300 ${
                    brandingOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {brandingOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.25 }}
                    className="absolute left-0 z-50 w-64 p-4 mt-2 border shadow-2xl bg-white/95 backdrop-blur-xl rounded-xl border-white/30"
                  >
                    <div className="grid gap-3">
                      {[
                        {
                          img: "https://i.ibb.co/TqrjnBK8/facebook-newsfeed-icon.jpg",
                          title: "Facebook",
                          desc: "Social Media",
                        },
                        {
                          img: "https://i.ibb.co/kVv1K4n/instagram-icon.jpg",
                          title: "Instagram",
                          desc: "Social Media",
                        },
                      ].map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          onClick={() => setBrandingOpen(false)}
                          className="flex items-center gap-3 p-2 transition-all duration-300 rounded-md hover:bg-black/5"
                        >
                          <img src={item.img} className="w-10 h-10 rounded-full" />
                          <div>
                            <h4 className="text-sm font-semibold">{item.title}</h4>
                            <p className="text-xs text-gray-600">{item.desc}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}

         
            <NavLink to="/services" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Services
            </NavLink>
            {/* <NavLink to="/faces-office" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Office
            </NavLink> */}
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Contact
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              About
            </NavLink>

            {!user ? (
              <NavLink to="/login" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
                Login
              </NavLink>
            ) : (
              <div>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Dashboard
            </NavLink>
                <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 font-bold text-[#5fcf3a]"
              >
                Logout
              </motion.button>


              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(true)} className="text-2xl text-gray-900 lg:hidden">
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
              bg-white text-gray-900 shadow-2xl p-6 flex flex-col gap-6"
            >
              <div className="flex items-center justify-between pb-4 border-b">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-900 hover:text-black"
                >
                  <IoClose />
                </button>
              </div>

              {["/", "/services","/contact-us", "/about"].map((path, i) => (
                <NavLink
                  key={i}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `w-full px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] text-white shadow-md"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  {["Home", "Services","Contact", "About"][i]}
                </NavLink>
              ))}

              {!user ? (
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `w-full px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] text-white shadow-md"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  Login
                </NavLink>
              ) : (
                <div>
                <NavLink to="/dashboard" className={({ isActive }) => (isActive ? activeClass : normalClass)}>
              Dashboard
            </NavLink>
                <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-4 py-2 font-bold text-[#5fcf3a]"
              >
                Logout
              </motion.button>


              </div>
              )}
            </motion.div>

            {/* Overlay */}
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
