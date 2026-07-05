import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const OnlinePaymentTh = () => {
  return (
    <div className="w-full px-4 py-16 bg-white md:px-12">
      <div className="grid items-center gap-10 mx-auto max-w-7xl md:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="flex justify-center order-1 md:order-none">
          <img
            src="https://i.ibb.co.com/rb7mmCs/online-payment.png"
            alt="Online Payment Form"
            className="w-full max-w-md lg:max-w-lg drop-shadow-2xl rounded-xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl font-bold leading-snug">
            <span className="text-[#23a333]">Online Payment</span>{" "}
            <span className="text-[#ff7a1f]">Through Your Website</span>
          </h2>

          <p className="mt-4 leading-relaxed text-gray-700">
            Easily collect payments directly from your website with seamless CRM
            integration. Accept payments via Stripe, PayPal, or bank transfer,
            send automated email confirmations, and convert payments to invoices
            in one click. Share payment pages through external links, APIs, or QR
            codes—all with free website integration.
          </p>

          <ul className="mt-5 space-y-2 text-gray-700">
            {[
              "Accept online payments through Stripe, PayPal, or bank transfer.",
              "Receive instant email confirmations for every payment.",
              "Convert payments to professional invoices with just one click.",
              "Share invoices quickly with clients for streamlined billing.",
              "Create an external link or API code to embed the payment page on your website or share it via QR code.",
              "Enjoy free and hassle-free integration with your website.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <FaCheckCircle className="mt-1 text-green-500" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default OnlinePaymentTh;
