import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const FilesManagement = () => {
  return (
    <div className="w-full px-5 py-20 bg-white md:px-16">
      <div className="grid items-center grid-cols-1 gap-12 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT TEXT PART */}
        <div>
          <h2 className="mb-4 text-3xl font-bold leading-tight">
            <span className="text-green-600">File Management</span>{" "}
            <span className="text-orange-500">and Reminders</span>
          </h2>

          <p className="mb-6 leading-relaxed text-gray-600">
            In Flick CRM, you can upload various file formats including
            documents, audio and video. Create categories, organise files,
            archive old ones, and easily manage everything. You can also set
            reminders for important tasks or documents and receive email
            notifications for timely completion.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Upload important files directly to the CRM.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Assign files to leads, clients or users.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Create reminders with expiry dates.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Receive reminder notifications via email.
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-600" />
              Manage reminders effortlessly for timely tasks.
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex justify-center">
          <div className="relative">

            {/* Background Glow */}
            <div className="absolute w-64 h-64 bg-green-300 -top-6 -left-6 rounded-2xl blur-xl opacity-40"></div>

            {/* Main Image */}
            <img
              src="https://i.ibb.co.com/chmTzMkq/Team-task-mange.png"
              alt="Files Management"
              className="relative border shadow-lg rounded-xl"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default FilesManagement;
