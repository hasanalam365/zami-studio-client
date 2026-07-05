import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import CheckOutForm from "./ChekOutForm";
import { Check, CreditCard, Star } from "lucide-react";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

export default function SubscribePlan() {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");
  const price = searchParams.get("price");

  const planDetails = {
    Lite: {
      color: "green",
      features: ["2–4 Page Website", "Free Domain", "Hosting 5GB", "SSL Certificate"],
      description:
        "Perfect for starters and small brands. Clean and responsive website with essentials included.",
    },
    Professional: {
      color: "blue",
      features: ["5–8 Pages", "Domain & Hosting", "SSL", "Email Accounts"],
      description:
        "Take your online presence to the next level with a professionally crafted multi-page website.",
    },
    Enterprise: {
      color: "orange",
      features: ["10+ Pages", "Custom Design", "SEO Optimization", "Priority Support"],
      description:
        "Premium large-scale website with SEO, custom design, unlimited revisions & top-level support.",
    },
  };

  const data = planDetails[plan] || {};

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-10 bg-gradient-to-br from-gray-100 to-gray-200">
      <Helmet>
        <title>Subscribe | {plan}</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl p-8 bg-white border border-gray-200 shadow-2xl rounded-2xl"
      >
        {/* Header */}
        <div className="mb-6 text-center">
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-2 text-4xl font-extrabold"
          >
            <Star className={`text-${data.color}-600`} size={34} />
            {plan} Plan
          </motion.h1>
          <p className="mt-2 text-lg text-gray-700">Monthly Charge:</p>
          <p className={`text-4xl font-bold text-${data.color}-600`}>£{price}</p>
        </div>

        {/* Plan Details Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`p-6 rounded-xl shadow-inner bg-${data.color}-50 border-t-4 border-${data.color}-500 mb-8`}
        >
          <p className="mb-4 text-lg text-gray-700">{data.description}</p>

          <ul className="space-y-2">
            {data.features?.map((f, idx) => (
              <li key={idx} className="flex items-center gap-3 text-base text-gray-700">
                <Check className={`text-${data.color}-600`} /> {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Payment Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 border shadow-md bg-gray-50 rounded-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="text-green-600" size={28} />
            <h2 className="text-2xl font-bold">Secure Payment</h2>
          </div>

          <p className="mb-4 text-gray-600">
            Complete your subscription securely using your card details.
          </p>

          <Elements stripe={stripePromise}>
            <CheckOutForm plan={plan} price={price} />
          </Elements>
        </motion.div>
      </motion.div>
    </div>
  );
}