import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { LiaQuoteLeftSolid } from "react-icons/lia";
import { motion } from "framer-motion";

const DemoTes = () => {
  const testimonials = [
    {
      id: 1,
      title: "Video & Animation",
      name: "David Lee",
      designation: "Motion Designer",
      text: "Creating visual stories is my passion. Good animation inspires people and builds strong brand identity.",
      photo: "https://i.ibb.co/92qJSyp/client-5.jpg",
    },
    {
      id: 2,
      title: "Graphic Design",
      name: "James Anderson",
      designation: "Creative Designer",
      text: "Design is about solving problems creatively. Clean visuals create powerful communication.",
      photo: "https://i.ibb.co/wrjJ4xQ/client-7.jpg",
    },
    {
      id: 3,
      title: "Content Writing",
      name: "Sall Thompson",
      designation: "Content Specialist",
      text: "Strong words build trust. I love writing content that connects brands with people.",
      photo: "https://i.ibb.co/p020XnC/client-8.jpg",
    },
    {
      id: 4,
      title: "Web Development",
      name: "Michael Brown",
      designation: "Full Stack Developer",
      text: "Performance and clean code matter most. I build fast, scalable, and modern websites.",
      photo: "https://i.ibb.co/bLfvYRG/client-4.jpg",
    },
  ];

  return (
    <Swiper
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      loop
      slidesPerView={1}
      spaceBetween={24}
      modules={[Autoplay]}
      className="w-full h-full"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id} className="h-full">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full p-6 bg-white border shadow-lg rounded-xl"
          >
            <LiaQuoteLeftSolid className="absolute text-5xl text-green-500/20 top-6 right-6" />

            <div className="flex items-center gap-4">
              <img
                src={t.photo}
                alt={t.name}
                className="object-cover rounded-full w-14 h-14 ring-4 ring-green-100"
              />

              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {t.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {t.designation}
                </p>
              </div>
            </div>

            <p className="mt-5 leading-relaxed text-gray-700">
              {t.text}
            </p>

            <span className="inline-block mt-6 text-sm font-semibold text-green-600">
              {t.title}
            </span>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DemoTes;
