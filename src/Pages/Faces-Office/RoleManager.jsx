import React from "react";
import { motion } from "framer-motion";

const RoleManager = () => {
  return (
    <div className="w-full py-20 bg-[#F8FAFF]">
      <div className="grid items-center grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">

        {/* ===== Left IMAGE Section — Same Animation as SmartIncomeState ===== */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            {/* Background Glow Shape */}
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-[#A98CFF] rounded-2xl blur-xl opacity-40"></div>

            {/* Demo Image */}
            <img
              src="https://i.ibb.co.com/spKQZw5d/role-Manage-Ment.png"
              alt="Role Manager"
              className="relative border shadow-lg rounded-xl"
            />
          </div>
        </motion.div>

        {/* ===== Right TEXT Section — Same Animation as SmartIncomeState ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-[32px] font-semibold text-[#3BB44A] leading-tight">
            Role <span className="text-[#FF7A00]">Manager</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            With the Role Manager, you can easily manage the roles and actions of the
            admin, manager, and staff within your company. There are numerous modules
            such as Dashboard, Lead, Clients, Task, Email, Invoice, Newsletter,
            Quotation, Template, User, and Setup. You can control the access power of
            your employees, allowing you to specify who can view, add, edit, and delete
            operations in each module. This ensures each user has proper access based on
            their role, enhancing security and efficiency within your organisation.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Manage roles and actions for admin, manager, and staff.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Control access to modules like Dashboard, Lead, Clients, and more.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Specify permissions for view, add, edit, and delete operations.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Tailor access power based on different user roles.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Enhance security and efficiency by regulating module access.
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
};

export default RoleManager;
