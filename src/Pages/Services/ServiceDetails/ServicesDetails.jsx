import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import Testimonial from "../../Home/Testimonial/Testimonial";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function ServiceDetails() {
  const { state: service } = useLocation();

  return (
    <div className="overflow-hidden text-white bg-black">

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative px-4 pt-24 pb-28"
      >
        <div className="max-w-6xl mx-auto">

          <div className="relative overflow-hidden border shadow-2xl border-white/10 rounded-3xl">

            <img
              src={service.imgUrl}
              alt={service.title}
              className="object-cover w-full h-[460px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

            <div className="absolute text-white bottom-8 left-8 right-8">
              <h1 className="text-4xl font-extrabold md:text-5xl">
                {service.title}
              </h1>

              <div className="flex items-center gap-3 mt-4 text-red-500">
                <FaStar />
                <span className="text-white/70">
                  {service.rating} ({service.userReviews})
                </span>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* CONTENT */}
      <section className="px-4 pb-28">
        <div className="grid max-w-6xl gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-8 border bg-white/5 border-white/10 backdrop-blur-xl rounded-3xl md:col-span-2"
          >
            <h2 className="mb-4 text-3xl font-bold text-white">
              Service Overview
            </h2>

            <p className="leading-relaxed whitespace-pre-line text-white/70">
              {service.description}
            </p>

            <div className="grid gap-4 mt-8 sm:grid-cols-2">
              {[
                "Premium Quality",
                "AI Powered System",
                "Fast Delivery",
                "100% Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 border bg-black/60 border-white/10 rounded-xl"
                >
                  <FaCheckCircle className="text-red-500" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-6 mt-10 border-l-4 border-red-600 bg-white/5 rounded-2xl">
              <h4 className="font-semibold text-red-500">
                Service Category
              </h4>
              <p className="mt-1 text-white/70">
                {service.serviceCategories}
              </p>
            </div>
          </motion.div>

          <div className="p-8 border bg-white/5 border-white/10 rounded-3xl">
            <h3 className="text-xl font-bold text-white">
              Premium Digital Agency
            </h3>

            <p className="mt-4 text-white/70">
              We deliver high-end digital solutions with modern UI, SEO and AI integration.
            </p>

            <button
              onClick={() =>
                window.open("https://wa.me/+8801645782626", "_blank")
              }
              className="w-full py-4 mt-8 font-bold transition bg-red-600 rounded-2xl hover:bg-red-700 hover:scale-105"
            >
              Contact Now
            </button>
          </div>

        </div>
      </section>

      <Testimonial />
    </div>
  );
}