import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function ExplorerServices() {
  const servicesData = [
    {
      id: 2,
      title: "A modern responsive website",
      rating: 4.9,
      userReviews: 24,
      imgUrl: "https://i.ibb.co.com/fYcrp01Z/web-development.jpg",
      description:
        "High-performance websites with clean UI, SEO optimization, and mobile-first design.",
      serviceCategories: "Web Development",
    },
    {
      id: 5,
      title: "SEO optimized blog articles",
      rating: 5,
      userReviews: 50,
      imgUrl: "https://i.ibb.co.com/TB2nbhcf/content-writing.jpg",
      description:
        "SEO-friendly articles designed to rank higher on Google.",
      serviceCategories: "Content Writing",
    },
    {
      id: 6,
      title: "App Development",
      rating: 5,
      userReviews: 20,
      imgUrl: "https://i.ibb.co.com/spZSxvMd/Custom-Software-Development.jpg",
      description:
        "Scalable Android & iOS apps with modern architecture.",
      serviceCategories: "App Development",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden text-white bg-black">

      {/* glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-red-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/10 blur-[150px]" />
      </div>

      <div className="max-w-[1300px] mx-auto px-4">
        <SectionHeader
          heading="Explore Services"
          subHeading="Premium digital solutions built for growth"
        />

        <div className="grid gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative p-[1px] rounded-3xl bg-gradient-to-br from-red-600 via-black to-white/20"
            >
              <div className="flex flex-col h-full overflow-hidden border bg-black/80 backdrop-blur-xl rounded-3xl border-white/10">

                <div className="relative overflow-hidden h-52">
                  <img
                    src={service.imgUrl}
                    alt={service.title}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-110"
                  />
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h2 className="mb-2 text-xl font-bold text-white">
                    {service.title}
                  </h2>

                  <p className="mb-4 text-sm text-white/70 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4 text-red-500">
                    <FaStar />
                    <span className="text-sm text-white/80">
                      {service.rating} ({service.userReviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-sm font-semibold text-red-400">
                      {service.serviceCategories}
                    </span>

                    <Link to={`/service-details/${service.id}`} state={service}>
                      <button className="px-5 py-2 text-sm font-bold text-white transition bg-red-600 rounded-xl hover:scale-105">
                        View
                      </button>
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExplorerServices;