import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAdmin from "../../Hooks/useAdmin";
import useSuperAdmin from "../../Hooks/useSuperAdmin";
import { motion } from "framer-motion";
import useAuth from "../../Hooks/useAuth";

const DashboardNavbar = ({ isOpen, setIsOpen }) => {
  const [isFunnelOpen, setIsFunnelOpen] = useState(false);

  const [isAdmin] = useAdmin();
  const [isSuperAdmin] = useSuperAdmin();
  const { signOutUser } = useAuth();

  const navStyle = ({ isActive }) =>
    `flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] text-white shadow-lg"
        : "text-gray-700 hover:bg-green-50 hover:text-[#2f9e1f]"
    }`;

  const subNavStyle = ({ isActive }) =>
    `block px-10 py-2 rounded-lg text-sm transition-all duration-300 ${
      isActive
        ? "bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] text-white"
        : "text-gray-600 hover:bg-green-50 hover:text-[#2f9e1f]"
    }`;

  const handleClose = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    await signOutUser();
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden backdrop-blur-sm"
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 z-50 w-64 h-full p-6 bg-white shadow-2xl transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Logo */}
        <Link
          to="/dashboard"
          className="block mb-8 text-2xl font-extrabold text-transparent bg-gradient-to-r from-[#5fcf3a] to-[#2f9e1f] bg-clip-text"
        >
          Dashboard
        </Link>

        <nav className="space-y-3">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={navStyle}
            onClick={handleClose}
          >
            Home
          </NavLink>

          {/* Dashboard */}
          <NavLink
            to="/dashboard"
            end
            className={navStyle}
            onClick={handleClose}
          >
            Dashboard
          </NavLink>
          {/* <NavLink
            to="/dashboard/funnels/super-all-orders"
            end
            className={navStyle}
            onClick={handleClose}
          >
            Orders
          </NavLink> */}

 {isSuperAdmin &&  <NavLink
             to="/dashboard/funnels/super-all-orders"
              end
             className={navStyle}
             onClick={handleClose}
          >
              Orders Management
           </NavLink>} 
 {isSuperAdmin && (
                    <NavLink
                      to="/dashboard/funnels/super-all-users"
                      end
                      className={navStyle}
                      onClick={handleClose}
                    >
                      All Companies(Sub)
                    </NavLink>
                  )}

          {/* Funnels Section */}
          {(isAdmin || isSuperAdmin) && (
            <div>
              <button
                onClick={() => setIsFunnelOpen(!isFunnelOpen)}
                className="w-full px-6 py-3 font-medium text-left text-gray-700 transition-all duration-300 rounded-xl hover:bg-green-50 hover:text-[#2f9e1f]"
              >
                Funnels Management
              </button>

              {isFunnelOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 space-y-2"
                >
                  {isAdmin && (
                    <NavLink
                      to="/dashboard/funnels/all-users"
                      className={subNavStyle}
                      onClick={handleClose}
                    >
                      Company Users
                    </NavLink>
                  )}

                  {isSuperAdmin && (
                    <NavLink
                      to="/dashboard/funnels/allCompaniesUsers"
                      
                      className={subNavStyle}
                      onClick={handleClose}
                    >
                       All Companies Users
                    </NavLink>
                  )}
                  {isSuperAdmin && (
                    <NavLink
                      to="/dashboard/funnels/allCompaniesOrders"
                      
                      className={subNavStyle}
                      onClick={handleClose}
                    >
                       All Companies Orders
                    </NavLink>
                  )}
                </motion.div>
              )}
            </div>
          )}

          {/* Profile */}
          <NavLink
            to="/dashboard/profile"
            className={navStyle}
            onClick={handleClose}
          >
            Profile
          </NavLink>

          {/* Logout */}
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full px-6 py-3 font-semibold text-left text-red-500 transition-all duration-300 rounded-xl hover:bg-red-50"
          >
            Logout
          </motion.button>

        </nav>
      </div>
    </>
  );
};

export default DashboardNavbar;