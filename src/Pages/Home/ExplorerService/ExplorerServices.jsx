import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ExplorerServices() {
 const servicesData = [
  {
    id: 2,
    title: "A modern responsive website",
    name: "",
    rating: 4.9,
    userReviews: 24,
    imgUrl: "https://i.ibb.co.com/fYcrp01Z/web-development.jpg",
    description:
      "I build high-performance websites with clean UI, SEO optimization, and mobile-first design.",
    serviceCategories: "Web Development",
  },

  {
    id: 5,
    title: "SEO optimized blog articles",
    name: "",
    rating: 5,
    userReviews: 50,
    imgUrl: "https://i.ibb.co.com/TB2nbhcf/content-writing.jpg",
    description:
      "I write engaging, SEO-friendly articles designed to rank higher on Google.",
    serviceCategories: "Content Writing",
  },

  /* -------------------- NEW SERVICES -------------------- */

  {
    id: 6,
    title: "App Development",
    name: "",
    rating: 5,
    userReviews: 20,
    imgUrl: "https://i.ibb.co.com/spZSxvMd/Custom-Software-Development.jpg",
    description:
      "Custom mobile and web application development focused on performance, usability, and scalability. Android & iOS apps, web applications, secure and scalable architecture.",
    serviceCategories: "App Development",
  },

  {
    id: 7,
    title: "Complete CRM Solutions",
    name: "",
    rating: 4.9,
    userReviews: 16,
    imgUrl: "https://i.ibb.co.com/GfTLzZrt/Complete-CRM-Solutions.jpg",
    description:
      "Custom CRM systems designed to manage leads, customers, and workflows efficiently. Lead & customer tracking, sales pipeline management, productivity optimization.",
    serviceCategories: "CRM Systems",
  },

  {
    id: 8,
    title: "Software Development",
    name: "",
    rating: 5,
    userReviews: 20,
    imgUrl: "https://i.ibb.co.com/tP4xFNjH/software-development.jpg" ,
    description:
      "Custom software solutions tailored to your unique business requirements. Scalable systems, secure development, and custom integrations.",
    serviceCategories: "Software Solutions",
  },

  {
    id: 9,
    title: "Email Services",
    name: "",
    rating: 5,
    userReviews: 20,
    imgUrl: "https://i.ibb.co.com/ynYRf5pN/Email-services.jpg",
    description:
      "Professional email solutions for business communication and marketing automation. Business email setup, email marketing campaigns, automation and follow-ups.",
    serviceCategories: "Email Services",
  },
];


  return (
    <section className="relative py-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-green-400/30 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-blue-400/30 blur-[140px]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4">
        <SectionHeader
          heading="Explore Services"
          subHeading="Explore the most popular service categories"
        />

        <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-br from-green-400 via-blue-400 to-purple-400"
            >
              <div className="flex flex-col h-full overflow-hidden shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl">
                <div className="relative overflow-hidden h-52">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h2 className="mb-2 text-xl font-bold text-gray-800">
                    {service.title}
                  </h2>

                  <p className="mb-4 text-sm text-gray-600 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4 text-yellow-500">
                    <FaStar />
                    <span className="text-sm text-gray-700">
                      {service.rating} ({service.userReviews} Reviews)
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-green-600">
                      {service.serviceCategories}
                    </span>

                    <Link to={`/service-details/${service.id}`} state={service}>
                      <button className="px-5 py-2 text-sm font-semibold text-white transition rounded-xl bg-gradient-to-r from-green-500 to-blue-500 hover:scale-105">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-16"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          <Link
            to="/services"
            className="px-10 py-4 text-lg font-bold text-white rounded-2xl bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] shadow-xl"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default ExplorerServices;
