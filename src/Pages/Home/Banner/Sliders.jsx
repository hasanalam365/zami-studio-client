import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";

/* ======================
   SLIDER DATA
====================== */

const slides = [
  {
    title: "Modern Responsive",
    highlight: "Web Development",
    text: "High-performance, SEO-optimized, conversion-focused websites built for speed, security, and scalability.",
    lottie: "https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json",
  },
  {
    title: "SEO-Driven",
    highlight: "Content Writing",
    text: "Strategic content crafted to rank higher, attract the right audience, and grow digital authority.",
    lottie: "https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json",
  },
  {
    title: "AI Integration &",
    highlight: "Business Automation",
    text: "Seamless AI solutions to automate calls, emails, social media, and operations—making your business faster, smarter, and stress-free.",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_yd8fbnml.json",
  },
  {
    title: "Custom",
    highlight: "Software Development",
    text: "Bespoke software solutions tailored to your workflow, enhanced with intelligent AI for maximum efficiency and scalability.",
    lottie: "https://assets7.lottiefiles.com/packages/lf20_tno6cg2w.json",
  },
  {
    title: "Complete",
    highlight: "CRM Solutions",
    text: "Flexible in-house or bespoke CRM systems designed to perfectly match how your business operates.",
    lottie: "https://assets1.lottiefiles.com/packages/lf20_3vbOcw.json",
  },
  {
    title: "Business Growth with",
    highlight: "Digital Marketing",
    text: "High-performing Facebook, Google, YouTube & TikTok ads, AI-driven SEO, and custom funnels built to scale revenue.",
    lottie: "https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json",
  },
  {
    title: "Smart & Scalable",
    highlight: "App Development",
    text: "AI-powered mobile and web applications designed to improve user experience and streamline business operations.",
    lottie: "https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json",
  },
  {
    title: "Website Hosting &",
    highlight: "Maintenance",
    text: "Secure UK-based hosting, regular updates, and ongoing maintenance to keep your website fast, safe, and reliable.",
    lottie: "https://assets5.lottiefiles.com/packages/lf20_kdx6cani.json",
  },
];

const Sliders = () => {
  const [animations, setAnimations] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      fetch(slide.lottie)
        .then((res) => res.json())
        .then((data) =>
          setAnimations((prev) => ({
            ...prev,
            [slide.lottie]: data,
          }))
        );
    });
  }, []);

  return (
    <section className="relative w-full h-[95vh] overflow-hidden bg-black">

      {/* 🔴 PREMIUM BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,0,0,0.15),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.06),transparent_50%),radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.08),transparent_60%)]" />

      {/* MOVING RED GLOW */}
      <motion.div
        className="absolute w-[160%] h-[160%] bg-gradient-to-r from-red-600/10 via-black to-red-500/10 blur-3xl"
        animate={{ x: ["-20%", "10%", "-20%"], y: ["-10%", "15%", "-10%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* GRID (WHITE SUBTLE) */}
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

                {/* BUTTONS */}
                <div className="flex gap-4 mt-8">

                  <button className="px-6 py-3 font-semibold text-white transition-all bg-red-600 shadow-lg rounded-xl hover:bg-red-700 hover:scale-105 shadow-red-500/20">
                    Get Started
                  </button>

                  <button className="px-6 py-3 font-semibold text-white border border-white/20 rounded-xl bg-white/5 backdrop-blur-xl hover:bg-white/10">
                    View Services
                  </button>

                </div>

              </motion.div>

              {/* RIGHT CARD */}
              <div className="flex justify-center">

                {animations[slide.lottie] && activeIndex === index && (

                  <motion.div
                    initial={{ opacity: 0, rotateY: 25, scale: 0.85 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className="relative p-8 border shadow-2xl rounded-3xl bg-white/5 border-white/10 backdrop-blur-2xl"
                  >

                    {/* RED GLOW BORDER */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-red-600/20 via-black to-red-500/10 blur-2xl" />

                    <div className="relative w-[420px] h-[380px]">
                      <Lottie animationData={animations[slide.lottie]} loop />
                    </div>

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