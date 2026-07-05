import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ---------- COLOR MAP ---------- */
const colorMap = {
  green: {
    price: "text-green-600",
    check: "text-green-500",
    button: "from-green-400 to-green-600",
    ring: "from-green-400",
  },
  blue: {
    price: "text-blue-600",
    check: "text-blue-500",
    button: "from-blue-400 to-blue-600",
    ring: "from-blue-400",
  },
  orange: {
    price: "text-orange-600",
    check: "text-orange-500",
    button: "from-orange-400 to-orange-600",
    ring: "from-orange-400",
  },
};

/* ---------- DATA ---------- */
const cards = [
  {
    id: 1,
    title: "Pay Monthly Website",
    subtitle: "Flexible & Budget Friendly",
    plans: [
      { key: "m-standard", name: "Standard", price: "20", color: "green", features: ["2–3 Pages Website","Basic SEO","Free Domain","5GB Hosting","SSL Certificate"]},
      { key: "m-normal", name: "Normal", price: "30", color: "blue", features: ["2–3 Pages Website","Advanced SEO","Free Domain & Hosting","Business Email","Performance Optimization"]},
      { key: "m-advanced", name: "Advanced", price: "40", color: "orange", features: ["3–4 Pages Website","Premium UI/UX","SEO Optimization","Priority Support","Monthly Maintenance"]},
    ],
  },
  {
    id: 2,
    title: "Basic Website",
    subtitle: "Pay Once, Own Forever",
    plans: [
      { key: "b-standard", name: "Standard", price: "400", color: "green", features: ["4 Pages Website","Responsive Design","Basic SEO","Free Domain","1 Month Support"]},
      { key: "b-normal", name: "Normal", price: "500", color: "blue", features: ["8 Pages Website","Custom UI Design","Advanced SEO","Speed Optimization","3 Months Support"]},
      { key: "b-advanced", name: "Advanced", price: "600", color: "orange", features: ["12+ Pages Website","Custom UX Strategy","SEO + Analytics","Performance Boost","6 Months Support"]},
    ],
  },
  {
    id: 3,
    title: "Premium Website",
    subtitle: "High-End Business Solution",
    plans: [
      { key: "p-standard", name: "Standard", price: "900", color: "green", features: ["Custom Premium Design","Brand-Focused Layout","SEO Setup","Fast Loading","3 Months Support"]},
      { key: "p-normal", name: "Normal", price: "1150", color: "blue", features: ["Advanced UI/UX","Conversion-Optimized Pages","SEO + Analytics","Security Setup","6 Months Support"]},
      { key: "p-advanced", name: "Advanced", price: "1550", color: "orange", features: ["Enterprise-Grade Design","Custom Features","Advanced SEO Strategy","Performance & Security","12 Months Priority Support"]},
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

  // Track if details revealed for scroll effect
  const [revealed, setRevealed] = useState({});

  return (
    <div className="grid gap-8 md:grid-cols-3">
      {cards.map((card) => {
        const activePlan = card.plans.find(p => p.key === activePlans[card.id]);
        const colors = colorMap[activePlan.color];

        return (
          <motion.div
            key={card.id}
            whileHover={{ scale: 1.04 }}
            className={`p-[1px] rounded-3xl bg-gradient-to-br ${colors.ring} via-blue-400 to-orange-400`}
            onViewportEnter={() => setRevealed(r => ({ ...r, [card.id]: true }))}
          >
            <div className="flex flex-col h-full p-6 bg-white/80 backdrop-blur-xl rounded-3xl">
              {/* Always visible: Title + Base Price */}
              <h3 className="text-3xl font-extrabold text-center">{card.title}</h3>
              {/* <p className={`text-4xl font-bold text-center my-4 ${colors.price}`}>
                £{activePlan.price}
              </p> */}

              {/* Animate detailed section */}
              <AnimatePresence>
                {revealed[card.id] && (
                  <motion.div
                    key={activePlan.key}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="flex flex-col flex-1"
                  >
                    {/* Subtitle */}
                    <p className="mb-4 text-center text-gray-500">{card.subtitle}</p>

                    {/* Tabs */}
                    <div className="flex justify-center mb-6">
                      {card.plans.map(plan => (
                        <button
                          key={plan.key}
                          onClick={() => setActivePlans(p => ({ ...p, [card.id]: plan.key }))}
                          className={`px-4 py-1 mx-1 rounded-full text-sm font-semibold ${
                            activePlans[card.id] === plan.key ? "bg-black text-white" : "text-gray-600"
                          }`}
                        >
                          {plan.name}
                        </button>
                      ))}
                    </div>

                    {/* Price */}
                    <h4 className={`text-5xl font-extrabold text-center mb-4 ${colors.price}`}>
                      £{activePlan.price}
                    </h4>

                    {/* Features */}
                    <ul className="mb-8 space-y-2">
                      {activePlan.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <span className={colors.check}>✔</span>{f}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      onClick={() =>
                        navigate("/payment", {
                          state: { plan: `${card.title} - ${activePlan.name}`, price: activePlan.price },
                        })
                      }
                      className={`mt-auto py-3 font-bold text-white rounded-xl bg-gradient-to-r ${colors.button}`}
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
