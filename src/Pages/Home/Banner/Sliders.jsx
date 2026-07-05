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

/* ======================
   COMPONENT
====================== */

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

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#00ff9c20,transparent_40%),radial-gradient(circle_at_80%_80%,#00d9ff20,transparent_40%),linear-gradient(120deg,#020617,#020617,#000)]"/>

      {/* Floating Glow */}
      <motion.div
        className="absolute w-[150%] h-[150%] bg-gradient-to-r from-green-400/10 via-cyan-400/10 to-green-400/10 blur-3xl"
        animate={{ x: ["-30%", "0%", "-30%"], y: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

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

              {/* LEFT CONTENT */}
              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
                className="text-white"
              >

                <motion.h1
                  variants={{ hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  className="text-4xl font-extrabold leading-tight md:text-6xl"
                >
                  {slide.title}

                  <br />

                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400">
                    {slide.highlight}
                  </span>
                </motion.h1>

                <motion.p
                  variants={{ hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  className="max-w-xl mt-6 text-lg text-gray-300"
                >
                  {slide.text}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                  className="flex gap-4 mt-8"
                >

                  <button className="px-6 py-3 font-semibold text-black transition-all bg-gradient-to-r from-green-400 to-emerald-300 rounded-xl hover:scale-105">
                    Get Started
                  </button>

                  <button className="px-6 py-3 font-semibold text-white border border-white/20 backdrop-blur-xl rounded-xl hover:bg-white/10">
                    View Services
                  </button>

                </motion.div>

              </motion.div>

              {/* RIGHT 3D GLASS CARD */}
              <div className="flex justify-center perspective-[1200px]">

                {animations[slide.lottie] && activeIndex === index && (

                  <motion.div
                    initial={{ opacity: 0, rotateY: 20, scale: 0.8 }}
                    animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                    transition={{ duration: 0.9 }}
                    className="relative p-8 border shadow-2xl backdrop-blur-2xl rounded-3xl bg-white/5 border-white/10"
                  >

                    {/* glow border */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 to-cyan-400/20 blur-2xl"/>

                    <div className="relative w-[420px] h-[380px]">

                      <Lottie
                        animationData={animations[slide.lottie]}
                        loop
                      />

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



























// import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";

// /* ======================
//    SLIDER DATA
// ====================== */

// const slides = [
  
//   {
//     title: "Modern Responsive",
//     highlight: "Web Development",
//     text: "High-performance, SEO-optimized, conversion-focused websites built for speed, security, and scalability.",
//     lottie: "https://assets10.lottiefiles.com/packages/lf20_qp1q7mct.json",
//   },
//   // {
//   //   title: "Premium Brand Identity",
//   //   highlight: "Graphic Design",
//   //   text: "Distinctive logos and visual identities crafted to build trust, recognition, and long-term brand value.",
//   //   lottie: "https://assets9.lottiefiles.com/packages/lf20_3rwasyjy.json",
//   // },
//   // {
//   //   title: "Cinematic Video &",
//   //   highlight: "Creative Animation",
//   //   text: "High-quality video editing and motion graphics designed to capture attention and elevate storytelling.",
//   //   lottie: "https://assets3.lottiefiles.com/packages/lf20_0yfsb3a1.json",
//   // },
//   {
//     title: "SEO-Driven",
//     highlight: "Content Writing",
//     text: "Strategic content crafted to rank higher, attract the right audience, and grow digital authority.",
//     lottie: "https://assets1.lottiefiles.com/packages/lf20_jcikwtux.json",
//   },

  
//   {
//     title: "AI Integration &",
//     highlight: "Business Automation",
//     text: "Seamless AI solutions to automate calls, emails, social media, and operations—making your business faster, smarter, and stress-free.",
//     lottie: "https://assets2.lottiefiles.com/packages/lf20_yd8fbnml.json",
//   },
//   {
//     title: "Custom",
//     highlight: "Software Development",
//     text: "Bespoke software solutions tailored to your workflow, enhanced with intelligent AI for maximum efficiency and scalability.",
//     lottie: "https://assets7.lottiefiles.com/packages/lf20_tno6cg2w.json",
//   },
//  {
//   title: "Complete",
//   highlight: "CRM Solutions",
//   text: "Flexible in-house or bespoke CRM systems designed to perfectly match how your business operates.",
//   lottie: "https://assets1.lottiefiles.com/packages/lf20_3vbOcw.json", 
// },

//   {
//     title: "Business Growth with",
//     highlight: "Digital Marketing",
//     text: "High-performing Facebook, Google, YouTube & TikTok ads, AI-driven SEO, and custom funnels built to scale revenue.",
//     lottie: "https://assets8.lottiefiles.com/packages/lf20_w51pcehl.json",
//   },
//   {
//   title: "Smart & Scalable",
//   highlight: "App Development",
//   text: "AI-powered mobile and web applications designed to improve user experience and streamline business operations.",
//   lottie: "https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json", 
// },

//   {
//     title: "Website Hosting &",
//     highlight: "Maintenance",
//     text: "Secure UK-based hosting, regular updates, and ongoing maintenance to keep your website fast, safe, and reliable.",
//     lottie: "https://assets5.lottiefiles.com/packages/lf20_kdx6cani.json",
//   },
// ];

// /* ======================
//    COMPONENT
// ====================== */

// const Sliders = () => {
//   const [animations, setAnimations] = useState({});
//   const [activeIndex, setActiveIndex] = useState(0);

//   useEffect(() => {
//     slides.forEach((slide) => {
//       fetch(slide.lottie)
//         .then((res) => res.json())
//         .then((data) =>
//           setAnimations((prev) => ({
//             ...prev,
//             [slide.lottie]: data,
//           }))
//         );
//     });
//   }, []);

//   return (
//     <section className="relative w-full h-[100vh] md:h-[60vh] lg:h-[90vh] overflow-hidden">
//       {/* Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1aff8c33,transparent_40%),radial-gradient(circle_at_80%_80%,#00d9ff33,transparent_40%),linear-gradient(120deg,#050b14,#081a14,#050b14)]" />

//       {/* Gloss effect */}
//       <motion.div
//         className="absolute w-[140%] h-[140%] bg-gradient-to-r from-white/5 via-white/10 to-white/5 blur-3xl"
//         animate={{ x: ["-20%", "0%", "-20%"], y: ["-10%", "10%", "-10%"] }}
//         transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <Swiper
//         loop
//         autoplay={{ delay: 6500 }}
//         pagination={{ clickable: true }}
//         modules={[Autoplay, Pagination]}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="relative z-10 w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="grid items-center h-full gap-10 px-6 mx-auto max-w-7xl md:grid-cols-2">
              
//               {/* LEFT */}
//               <motion.div
//                 initial="hidden"
//                 animate="show"
//                 variants={{
//                   hidden: { opacity: 0 },
//                   show: { opacity: 1, transition: { staggerChildren: 0.25 } },
//                 }}
//                 className="text-white"
//               >
//                 <motion.h1
//                   variants={{ hidden: { y: 40, opacity: 0 }, show: { y: 0, opacity: 1 } }}
//                   className="text-3xl font-extrabold md:text-5xl lg:text-6xl"
//                 >
//                   {slide.title} <br />
//                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86]">
//                     {slide.highlight}
//                   </span>
//                 </motion.h1>

//                 <motion.p
//                   variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }}
//                   className="max-w-xl mt-6 text-lg text-gray-300"
//                 >
//                   {slide.text}
//                 </motion.p>
//               </motion.div>

//               {/* RIGHT */}
//               <div className="flex justify-center">
//                 {animations[slide.lottie] && activeIndex === index && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.85 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.8 }}
//                     className="w-full max-w-lg h-[420px]"
//                   >
//                     <Lottie animationData={animations[slide.lottie]} loop />
//                   </motion.div>
//                 )}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Sliders;
