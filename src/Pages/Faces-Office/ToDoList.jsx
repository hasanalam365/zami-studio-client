import React from "react";
import { motion } from "framer-motion";

const ToDoList = () => {
  return (
    <div className="w-full py-20 bg-[#F8FAFF]">
      <div className="grid items-center grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:grid-cols-2">

        {/* ===== Left TEXT Section — Animate From Left ===== */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-[32px] font-semibold text-[#3BB44A] leading-tight">
            To-Do <span className="text-[#FF7A00]">List</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-600">
            Flick Office offers an advanced To-Do listing function that ensures you never
            miss a task. You can create To-Do lists and assign tasks to your team members.
            Each task has a verification function: when a team member marks a task as
            completed, the assigner is notified and can verify its completion. If the task
            is not completed satisfactorily, it can be re-issued. The To-Do list also
            includes reminder and due-date functions, which are synchronised with Google
            Calendar for seamless management.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Create To-Do lists and assign tasks to team members.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Verification function to ensure task completion.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Re-issue tasks if not completed satisfactorily.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Reminder and due-date functions.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-xl text-green-500">✔</span>
              Synchronisation with Google Calendar.
            </li>
          </ul>
        </motion.div>

        {/* ===== Right IMAGE Section — Animate From Right ===== */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative">
            {/* Background Glow Shape */}
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-[#FF7A7A] rounded-2xl blur-xl opacity-40"></div>

            {/* Demo Image */}
            <img
              src="https://i.ibb.co.com/rKwtvs7X/to-do-list.png"
              alt="To Do List"
              className="relative border shadow-lg rounded-xl"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ToDoList;
