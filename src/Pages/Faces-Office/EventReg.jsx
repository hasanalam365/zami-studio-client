import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const EventReg = () => {
  return (
    <div className="w-full px-4 py-16 bg-white md:px-12">
      <div className="grid items-center gap-10 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold leading-snug">
            <span className="text-[#23a333]">Event</span>{" "}
            <span className="text-[#ff7a1f]">Registration</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Flick Office Event Management Module simplifies event registrations with
            customizable external links, secure payment options via PayPal and
            Stripe, automated email confirmations, and seamless website integration.
            Effortlessly manage attendee data and download reports in CSV
            format—all in one place.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            {[
              "Simplified Registration: Create an external link or API code to embed the registration page.",
              "Integrated Payment Options: Accept registration payments securely through PayPal or Stripe.",
              "Automated Notifications: Send email confirmations for successful registrations and payments.",
              "Data Management: Access all registration data in a centralized backend with CSV export.",
              "Hassle-Free Website Integration: Seamless and free integration with your website.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-green-500" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/8z8WYqN/event-reg-ui.png"
            alt="Event Registration Form"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default EventReg;
