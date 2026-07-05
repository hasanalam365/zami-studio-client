import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ---------- CLEAN PREMIUM RED SYSTEM ---------- */
const colorMap = {
  standard: {
    accent: "from-red-700 to-red-500",
    check: "text-red-500",
    ring: "from-red-700/40 to-transparent",
  },
  normal: {
    accent: "from-red-600 to-red-400",
    check: "text-red-400",
    ring: "from-red-600/30 to-transparent",
  },
  premium: {
    accent: "from-red-500 to-white",
    check: "text-red-300",
    ring: "from-red-500/40 via-red-400/10 to-transparent",
  },
};

/* ---------- DATA ---------- */
const cards = [
  {
    id: 1,
    title: "Pay Monthly Website",
    subtitle: "Flexible & Budget Friendly",
    plans: [
      {
        key: "m-standard",
        name: "Standard",
        price: "20",
        type: "standard",
        features: [
          "2–3 Pages Website",
          "Basic SEO",
          "Free Domain",
          "5GB Hosting",
          "SSL Certificate",
        ],
      },
      {
        key: "m-normal",
        name: "Normal",
        price: "30",
        type: "normal",
        features: [
          "2–3 Pages Website",
          "Advanced SEO",
          "Free Domain & Hosting",
          "Business Email",
          "Performance Optimization",
        ],
      },
      {
        key: "m-advanced",
        name: "Advanced",
        price: "40",
        type: "premium",
        features: [
          "3–4 Pages Website",
          "Premium UI/UX",
          "SEO Optimization",
          "Priority Support",
          "Monthly Maintenance",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Basic Website",
    subtitle: "Pay Once, Own Forever",
    plans: [
      {
        key: "b-standard",
        name: "Standard",
        price: "400",
        type: "standard",
        features: [
          "4 Pages Website",
          "Responsive Design",
          "Basic SEO",
          "Free Domain",
          "1 Month Support",
        ],
      },
      {
        key: "b-normal",
        name: "Normal",
        price: "500",
        type: "normal",
        features: [
          "8 Pages Website",
          "Custom UI Design",
          "Advanced SEO",
          "Speed Optimization",
          "3 Months Support",
        ],
      },
      {
        key: "b-advanced",
        name: "Advanced",
        price: "600",
        type: "premium",
        features: [
          "12+ Pages Website",
          "Custom UX Strategy",
          "SEO + Analytics",
          "Performance Boost",
          "6 Months Support",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Premium Website",
    subtitle: "High-End Business Solution",
    plans: [
      {
        key: "p-standard",
        name: "Standard",
        price: "900",
        type: "standard",
        features: [
          "Custom Premium Design",
          "Brand-Focused Layout",
          "SEO Setup",
          "Fast Loading",
          "3 Months Support",
        ],
      },
      {
        key: "p-normal",
        name: "Normal",
        price: "1150",
        type: "normal",
        features: [
          "Advanced UI/UX",
          "Conversion-Optimized Pages",
          "SEO + Analytics",
          "Security Setup",
          "6 Months Support",
        ],
      },
      {
        key: "p-advanced",
        name: "Advanced",
        price: "1550",
        type: "premium",
        features: [
          "Enterprise-Grade Design",
          "Custom Features",
          "Advanced SEO Strategy",
          "Performance & Security",
          "12 Months Priority Support",
        ],
      },
    ],
  },
];

export default function PricingCards() {
  const navigate = useNavigate();

  const [activePlans, setActivePlans] = useState({
    1: "m-standard",
    2: "b-standard",
    3: "p-standard",
  });

  const [revealed, setRevealed] = useState({});

  return (
    <div className="grid gap-8 md:grid-cols-3">

      {cards.map((card) => {
        const activePlan = card.plans.find(
          (p) => p.key === activePlans[card.id]
        );

        const colors = colorMap[activePlan.type];

        return (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.03 }}
            className={`p-[1px] rounded-3xl bg-gradient-to-br ${colors.ring}`}
            onViewportEnter={() =>
              setRevealed((r) => ({ ...r, [card.id]: true }))
            }
          >
            {/* CARD */}
            <div className="flex flex-col h-full p-6 border bg-black/80 backdrop-blur-xl rounded-3xl border-white/10">

              {/* TITLE */}
              <h3 className="text-3xl font-extrabold text-center text-white">
                {card.title}
              </h3>

              {/* CONTENT */}
              <AnimatePresence>
                {revealed[card.id] && (
                  <motion.div
                    key={activePlan.key}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 40 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col flex-1"
                  >
                    {/* SUBTITLE */}
                    <p className="mb-4 text-center text-white/60">
                      {card.subtitle}
                    </p>

                    {/* TABS */}
                    <div className="flex justify-center mb-6">
                      {card.plans.map((plan) => (
                        <button
                          key={plan.key}
                          onClick={() =>
                            setActivePlans((p) => ({
                              ...p,
                              [card.id]: plan.key,
                            }))
                          }
                          className={`px-4 py-1 mx-1 rounded-full text-sm font-semibold transition
                          ${
                            activePlans[card.id] === plan.key
                              ? "bg-red-600 text-white"
                              : "text-white/60 hover:text-white"
                          }`}
                        >
                          {plan.name}
                        </button>
                      ))}
                    </div>

                    {/* PRICE */}
                    <h4 className="mb-4 text-5xl font-extrabold text-center text-white">
                      £{activePlan.price}
                    </h4>

                    {/* FEATURES */}
                    <ul className="mb-8 space-y-2 text-white/70">
                      {activePlan.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <span className={colors.check}>✔</span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={() =>
                        navigate("/payment", {
                          state: {
                            plan: `${card.title} - ${activePlan.name}`,
                            price: activePlan.price,
                          },
                        })
                      }
                      className={`mt-auto py-3 font-bold text-white rounded-xl bg-gradient-to-r ${colors.accent} hover:opacity-90 transition`}
                    >
                      Subscribe Now
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}