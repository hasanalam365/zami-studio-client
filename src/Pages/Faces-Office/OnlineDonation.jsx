import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OnlineDonation = () => {
  return (
    <div className="w-full px-4 py-16 bg-white md:px-12">
      <div className="grid items-center gap-10 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold leading-snug">
            <span className="text-[#23a333]">Online Donation</span>{" "}
            <span className="text-[#ff7a1f]">Payment</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Flick Office’s CRM offers a powerful Donation Management feature that
            allows organisations to collect donations, either directly through the
            CRM system or via their website. Donations can be made through secure
            payment gateways like PayPal or Stripe. You can set up flexible donation
            options, with free amounts, fixed contributions, or preset amounts
            through a dropdown menu, ensuring they meet the needs of your supporters.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            {[
              "Collect donations directly through the CRM or website and share it via a QR code.",
              "Payment processing options available via PayPal and Stripe.",
              "Choose flexible, fixed, or dropdown donation amounts.",
              "Easy setup and customisation for various donation types.",
              "Secure and user-friendly donation experience for supporters.",
              "Free integration with your website.",
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
            src="https://i.ibb.co.com/Sbg7rby/charity-donation-ui.png"
            alt="Online Donation Form"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </div>

      </div>
    </div>
  );
};

export default OnlineDonation;
