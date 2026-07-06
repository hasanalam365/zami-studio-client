import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { MdOndemandVideo } from "react-icons/md";
import {
  FaPaintBrush,
  FaPenFancy,
  FaBullhorn,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

function ServicesCategories() {
  const categories = [
    { id: 4, icon: <FaBullhorn />, title: "Digital Marketing", count: 8 },
    { id: 5, icon: <FaLaptopCode />, title: "Web Development", count: 7 },
    { id: 6, icon: <FaChartLine />, title: "SEO & Analytics", count: 3 },
    { id: 7, icon: <FaLaptopCode />, title: "AI Integration", count: 6 },
    { id: 8, icon: <FaChartLine />, title: "Business Automation", count: 8 },
    { id: 9, icon: <FaBullhorn />, title: "Marketing Services", count: 10 },
    { id: 10, icon: <FaPaintBrush />, title: "Web Design & Maintenance", count: 7 },
    { id: 11, icon: <MdOndemandVideo />, title: "Web Hosting", count: 4 },
    { id: 12, icon: <FaPenFancy />, title: "Domain Names", count: 3 },
   

   
    { id: 16, icon: <MdOndemandVideo />, title: "Email Services", count: 4 },
    { id: 17, icon: <FaBullhorn />, title: "Google Visibility", count: 6 },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-black">

      {/* 🔴 background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-[420px] h-[420px] bg-red-600/20 blur-[160px]" />
        <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-white/10 blur-[160px]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-6">

        {/* Section Header */}
        <SectionHeader
          heading="Services Categories"
          subHeading="Explore the most powerful service categories"
        />

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
          }}
          freeMode
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mt-16"
        >

          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >

                {/* CARD */}
                <div className="relative p-10 text-center transition duration-500 border shadow-xl bg-black/70 border-white/10 rounded-3xl backdrop-blur-md">

                  {/* 🔴 hover glow */}
                  <div className="absolute inset-0 transition duration-500 opacity-0 group-hover:opacity-100 rounded-3xl bg-gradient-to-r from-red-700/20 to-red-500/10" />

                  {/* ICON */}
                  <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl text-white transition duration-300 shadow-lg rounded-xl bg-gradient-to-r from-red-600 to-red-500 group-hover:scale-110">
                    {cat.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="relative text-xl font-semibold text-white">
                    {cat.title}
                  </h3>

                  {/* COUNT */}
                  <p className="relative mt-2 text-white/60">
                    {cat.count} Services
                  </p>

                  {/* 🔴 bottom accent */}
                  <div className="relative h-[3px] w-0 mx-auto mt-6 bg-gradient-to-r from-red-600 to-white group-hover:w-20 transition-all duration-500 rounded-full"></div>

                </div>

              </motion.div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  );
}

export default ServicesCategories;