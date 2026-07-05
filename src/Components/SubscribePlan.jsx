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
      color: "red",
      features: ["2–4 Page Website", "Free Domain", "Hosting 5GB", "SSL Certificate"],
      description:
        "Perfect for starters who want a clean, fast and modern online presence.",
    },
    Professional: {
      color: "red",
      features: ["5–8 Pages", "Domain & Hosting", "SSL Security", "Email Accounts"],
      description:
        "Ideal for growing brands needing a strong, professional digital identity.",
    },
    Enterprise: {
      color: "red",
      features: ["10+ Pages", "Custom Design", "SEO Optimization", "Priority Support"],
      description:
        "Full-scale enterprise solution with premium performance and scalability.",
    },
  };

  const data = planDetails[plan] || planDetails.Lite;

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 text-white bg-black">
      <Helmet>
        <title>Subscribe | {plan}</title>
      </Helmet>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl p-8 border shadow-2xl border-red-600/30 bg-black/80 backdrop-blur-xl rounded-3xl"
      >

        {/* HEADER */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center gap-2 text-4xl font-extrabold"
          >
            <Star className="text-red-500" size={34} />
            {plan} Plan
          </motion.div>

          <p className="mt-3 text-gray-400">Monthly Subscription</p>

          <p className="mt-2 text-5xl font-bold text-red-500">
            £{price}
          </p>
        </div>

        {/* PLAN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-6 mb-10 border border-red-600/30 rounded-2xl bg-white/5"
        >
          <p className="mb-6 text-gray-300">{data.description}</p>

          <div className="grid gap-3">
            {data.features.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 border border-white/10 rounded-xl bg-black/40"
              >
                <Check className="text-red-500" />
                <span className="text-gray-200">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* PAYMENT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-6 border border-red-600/30 bg-black/60 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="text-red-500" size={28} />
            <h2 className="text-2xl font-bold">Secure Payment</h2>
          </div>

          <p className="mb-5 text-gray-400">
            Complete your subscription securely using Stripe payment system.
          </p>

          <Elements stripe={stripePromise}>
            <CheckOutForm plan={plan} price={price} />
          </Elements>
        </motion.div>
      </motion.div>
    </div>
  );
}