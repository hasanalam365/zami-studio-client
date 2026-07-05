import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import Testimonial from "../../Home/Testimonial/Testimonial";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function ServiceDetails() {
  const { state } = useLocation();
  const service = state;

  return (
    <div className="overflow-hidden bg-gradient-to-br from-[#e9ffe1] via-[#f4f8ff] to-[#ffffff]">
      
      {/* ===== HERO BANNER ===== */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative px-4 pt-24 pb-32"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden shadow-2xl rounded-3xl">
            <img
              src={service.imgUrl}
              alt={service.title}
              className="object-cover w-full h-[460px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

            <div className="absolute text-white bottom-8 left-8 right-8">
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-extrabold md:text-5xl"
              >
                {service.title}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-3 mt-4"
              >
                <FaStar className="text-yellow-400" />
                <span className="text-lg">
                  {service.rating} ({service.userReviews} Reviews)
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="relative px-4 pb-28">
        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">

          {/* ===== SERVICE INFO ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 shadow-xl bg-white/70 backdrop-blur-xl rounded-3xl md:col-span-2"
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Service Overview
            </h2>

            <p className="leading-relaxed text-gray-700">
              {service.description}
            </p>

            {/* Features */}
            <div className="grid gap-4 mt-8 sm:grid-cols-2">
              {[
                "Premium Quality Delivery",
                "Strategic & Result Driven",
                "Modern Tools & Technology",
                "100% Client Satisfaction",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white shadow-md rounded-xl"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* Category */}
            <div className="p-6 mt-10 border-l-4 border-green-500 rounded-2xl bg-gradient-to-r from-green-100 to-emerald-50">
              <h4 className="font-semibold text-green-700">
                Service Category
              </h4>
              <p className="mt-1 text-gray-800">
                {service.serviceCategories}
              </p>
            </div>
          </motion.div>

          {/* ===== PROVIDER CARD ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="p-8 shadow-xl rounded-3xl bg-gradient-to-br from-[#ffffff] to-[#f3f7ff]"
          >
            <div className="flex items-center gap-4">
              

              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {service.name}
                </h3>
                <p className="text-lg font-semibold text-center text-gray-600">
                 -------- Premium Digital Agency  --------
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-gray-700">
              {service.providerBio ||
                "We deliver premium digital solutions focused on performance, design excellence, and long-term growth."}
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              onClick={() =>
                window.open("https://wa.me/+447308888874", "_blank")
              }
              className="w-full py-4 mt-8 text-lg font-bold text-white shadow-xl rounded-2xl bg-gradient-to-r from-green-500 to-emerald-400"
            >
              Hire Faces Solutions
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <Testimonial />
    </div>
  );
}
