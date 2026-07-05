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
  { id: 13, icon: <FaLaptopCode />, title: "App Development", count: 9 },
  { id: 14, icon: <FaChartLine />, title: "CRM Systems", count: 5 },
  { id: 15, icon: <FaLaptopCode />, title: "Software Development", count: 11 },
  { id: 16, icon: <MdOndemandVideo />, title: "Email Services", count: 4 },
  { id: 17, icon: <FaBullhorn />, title: "Google Visibility", count: 6 },
];

  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-[1300px] mx-auto px-6">

        <SectionHeader
          heading="Services Categories"
          subHeading="Explore the most popular service categories"
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
                whileHover={{ y: -10 }}
                className="group"
              >

                <div className="relative p-10 text-center transition duration-500 bg-white border border-gray-100 shadow-md rounded-3xl hover:shadow-xl">

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl bg-gradient-to-r from-[#5fcf3a]/10 via-green-400/10 to-emerald-400/10" />

                  {/* Icon */}
                  <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-6 text-2xl text-white transition duration-300 rounded-xl bg-gradient-to-r from-[#5fcf3a] to-emerald-500 group-hover:scale-110">
                    {cat.icon}
                  </div>

                  {/* Title */}
                  <h3 className="relative text-xl font-semibold text-gray-800">
                    {cat.title}
                  </h3>

                  {/* Count */}
                  <p className="relative mt-2 text-gray-500">
                    {cat.count} Services
                  </p>

                  {/* Bottom Accent */}
                  <div className="relative h-[3px] w-0 mx-auto mt-6 bg-gradient-to-r from-[#5fcf3a] to-emerald-500 group-hover:w-20 transition-all duration-500 rounded-full"></div>

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