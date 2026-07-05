import React from "react";
import { motion } from "framer-motion";
import { LiaQuoteLeftSolid } from "react-icons/lia";

const AllTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Video & Animation",
      name: "David Lee",
      designation: "Motion Designer",
      text: "Creating visual stories is my passion. Good animation inspires people, and I love helping brands express ideas through motion.",
      photo: "https://i.ibb.co/92qJSyp/client-5.jpg",
    },
    {
      id: 2,
      title: "Graphic Design",
      name: "James Anderson",
      designation: "Creative Graphic Designer",
      text: "Design is not just about visuals—it's about solving problems creatively. I enjoy turning complex ideas into clean, effective graphics.",
      photo: "https://i.ibb.co/wrjJ4xQ/client-7.jpg",
    },
    {
      id: 3,
      title: "Content Writing",
      name: "Sall Thompson",
      designation: "Content Specialist",
      text: "I love crafting content that connects with people. Writing meaningful, clear messages is what turns simple text into impact.",
      photo: "https://i.ibb.co/p020XnC/client-8.jpg",
    },
    {
      id: 4,
      title: "Digital Marketing",
      name: "Maria Gonzalez",
      designation: "Digital Marketing Expert",
      text: "Helping brands grow online is what drives me. Data, strategy, and creativity—digital marketing needs all three working together.",
      photo: "https://i.ibb.co/W0mH1Kc/client-6.jpg",
    },
    {
      id: 5,
      title: "Web Development",
      name: "Michael Brown",
      designation: "Full Stack Developer",
      text: "I enjoy building fast, modern websites that feel great to use. Clean code and smooth performance always come first.",
      photo: "https://i.ibb.co/bLfvYRG/client-4.jpg",
    },
    {
      id: 6,
      title: "SEO & Analytics",
      name: "Robert Wilson",
      designation: "SEO & Data Analyst",
      text: "I help businesses grow by analyzing data and improving search visibility. The right analytics lead to powerful decisions.",
      photo: "https://i.ibb.co/rFRKyBw/client-1.jpg",
    },
    {
      id: 7,
      title: "Brand Strategy",
      name: "Priya Patel",
      designation: "Brand Strategist",
      text: "A strong brand is built on clarity and consistency. I help businesses understand their identity and communicate it effectively.",
      photo: "https://i.ibb.co/tD4g6rS/client-2.jpg",
    },
    {
      id: 8,
      title: "UI/UX Design",
      name: "Maria Gonzalez",
      designation: "UI/UX Designer",
      text: "Good design is invisible. I focus on creating intuitive, user-centered experiences that feel natural and effortless.",
      photo: "https://i.ibb.co/W0mH1Kc/client-6.jpg",
    },
  ];

  return (
    <div className="px-4 py-24 bg-gradient-to-br from-[#f7fff4] via-[#f4f8ff] to-white">
      <div className="mx-auto max-w-7xl">

        {/* ===== SECTION HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="inline-block px-4 py-1 text-2xl font-semibold text-green-700 bg-green-100 rounded-full">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
            Trusted by Professionals <br />
            <span className="text-green-600">Across Industries</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Real experiences from experts and clients who trusted Faces Media
            to deliver premium digital solutions.
          </p>
        </motion.div>

        {/* ===== TESTIMONIAL GRID ===== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="relative p-8 overflow-hidden border shadow-xl rounded-3xl bg-white/70 backdrop-blur-xl border-white/60 hover:shadow-2xl"
            >
              {/* Gradient Glow */}
              <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-green-200/30 to-emerald-200/30 rounded-3xl" />

              {/* Quote Icon */}
              <LiaQuoteLeftSolid className="absolute text-5xl text-green-500 top-6 right-6 opacity-20" />

              {/* User */}
              <div className="relative z-10 flex items-center gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="object-cover border border-green-300 rounded-full shadow-md w-14 h-14"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-600">{t.designation}</p>
                </div>
              </div>

              {/* Content */}
              <p className="relative z-10 mt-6 leading-relaxed text-gray-700">
                {t.text}
              </p>

              {/* Category */}
              <span className="inline-block mt-6 text-sm font-semibold text-green-700">
                {t.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTestimonials;
