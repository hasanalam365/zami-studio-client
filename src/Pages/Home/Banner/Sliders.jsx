import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import { Link } from "react-router-dom";

/* ======================
   SLIDER DATA (SVG ONLY)
====================== */
const slides = [
  {
    title: "Modern & Responsive",
    highlight: "Web Development",
    text: "High-performance, SEO-friendly and fully responsive websites built for speed, security, and scalability to grow your business online.",
    icon: "/Web Development.svg",
  },
  {
    title: "Engaging & SEO-Focused",
    highlight: "Content Writing",
    text: "Well-researched, SEO-optimized content that attracts the right audience, builds authority, and improves search rankings.",
    icon: "/SEO-content-writing.svg",
  },
  {
    title: "Creative & Professional",
    highlight: "Video Editing",
    text: "High-quality video editing for ads, social media, YouTube and branding content that captures attention and drives engagement.",
    icon: "/Video Editing.svg",
  },
  {
    title: "Modern Visual Identity",
    highlight: "Graphic Design",
    text: "Creative and impactful graphic design solutions including logos, banners, social media posts and brand identity systems.",
    icon: "/Designer.svg",
  },
  {
    title: "Secure & Reliable",
    highlight: "Domain & Hosting",
    text: "Fast, secure UK-based domain registration and hosting services with 99.9% uptime and full technical support.",
    icon: "/domain-hosting.svg",
  },
  {
    title: "Growth Driven",
    highlight: "Digital Marketing",
    text: "Data-driven marketing strategies across Google, Facebook, YouTube and TikTok to increase traffic, leads and revenue.",
    icon: "/Digital Marketing Services.svg",
  },
  {
    title: "Rank Higher & Faster",
    highlight: "SEO Optimization",
    text: "Advanced on-page and off-page SEO strategies to improve visibility, rank higher on Google and bring organic traffic.",
    icon: "/SEO.svg",
  },
  {
    title: "Professional Communication",
    highlight: "Email Services",
    text: "Business email setup and automation for professional communication, branding, and better customer engagement.",
    icon: "/Mail.svg",
  },
  {
    title: "Engage & Grow Audience",
    highlight: "Social Media Marketing",
    text: "Strategic social media management and advertising to grow your brand presence, followers, and engagement across platforms.",
    icon: "/Social-Media-Marketing.svg",
  },
];

const Sliders = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden bg-black">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,0,0.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.08),transparent_60%)]" />

      <motion.div
        className="absolute w-[160%] h-[160%] bg-gradient-to-r from-red-600/10 via-black to-red-500/10 blur-3xl"
        animate={{ x: ["-20%", "10%", "-20%"], y: ["-10%", "15%", "-10%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <Swiper
        loop
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectCreative]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative z-10 h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="grid items-center h-full gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2">

              {/* LEFT */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white"
              >
                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                  {slide.title}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-red-400">
                    {slide.highlight}
                  </span>
                </h1>

                <p className="max-w-xl mt-6 text-lg text-white/70">
                  {slide.text}
                </p>

                <div className="flex gap-4 mt-8">
                  {/* <button className="px-6 py-3 font-semibold text-white transition-all bg-red-600 shadow-lg rounded-xl hover:bg-red-700 hover:scale-105 shadow-red-500/20">
                    Get Started
                  </button> */}

                  <Link
                    to="/services"
                    className="px-6 py-3 font-semibold text-white bg-red-600 border rounded-xl backdrop-blur-xl hover:bg-red-700"
                  >
                    View Services
                  </Link>
                </div>
              </motion.div>

              {/* RIGHT SVG */}
              <div className="flex justify-center">

                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, rotateY: 25, scale: 0.85 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className="relative p-8 shadow-2xl rounded-3xl "
                  >
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600/20 via-black to-red-500/10 blur-2xl" />

                    <img
                      src={slide.icon}
                      alt={slide.highlight}
                      className="relative w-[420px] h-[380px] object-contain"
                    />
                  </motion.div>
                )}

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default Sliders;