import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: "arabian-essence",
    title: "Arabian Essence Perfume Store",
    category: "E-Commerce Website",
    image:
      "https://i.ibb.co.com/mVMHvfC0/arabian-essence-sc.png",
    shortDescription:
      "A modern luxury perfume website built to showcase premium Arabian fragrances with elegant design and a seamless user experience.",
    tech: ["React", "Tailwind CSS", "Node.js", "MongoDB","Stripe","Firebase Auth","JWT"],
    liveLink: "https://www.arabianessence.co.uk",
  },
{
  id: "arabian-essence-funnel",
  title: "Arabian Essence Funnel",
  category: "Sales Funnel Landing Page",
  image: "https://i.ibb.co.com/chbq7BYg/our-Story-All-Products.png",
  shortDescription:
    "A high-converting sales funnel landing page crafted to promote premium perfumes with persuasive design and seamless user flow.",
  tech: ["React", "Tailwind CSS", "Framer Motion", "Stripe"],
  liveLink: "https://landing-page-arabian-essence.vercel.app",
},
  {
  id: "faces-training-funnel",
  title: "Faces Training Funnel",
  category: "Course Funnel",
  image: "https://i.ibb.co.com/wZ3ppLrB/Phlebotomy-PRP-PRP-hair-Fo-F.jpg",
  shortDescription:
    "A conversion-focused training funnel designed to promote and sell courses with a clean layout and seamless user experience.",
  tech: ["React", "Tailwind CSS", "Framer Motion", "Stripe"],
  liveLink: "https://facesonfacestraining.vercel.app/",
}
];

const RecentWork = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-11/12 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <p className="inline-block px-4 py-1 mb-4 text-sm font-semibold tracking-wide rounded-full bg-[#5fcf3a]/10 text-[#5fcf3a]">
            Recent Work
          </p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
            Some of My Latest Website Projects
          </h2>
          <p className="text-base leading-7 text-gray-600 md:text-lg">
            Here are some recently completed website design and development
            projects crafted with modern UI, strong performance, and responsive
            user experience.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden transition-all duration-300 bg-white border border-gray-100 shadow-sm group rounded-3xl hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-64 transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
                <span className="absolute px-4 py-1 text-sm font-medium text-white rounded-full top-4 left-4 bg-[#5fcf3a]/90 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 transition duration-300 group-hover:text-[#5fcf3a]">
                  {project.title}
                </h3>

                <p className="mb-5 leading-7 text-gray-600">
                  {project.shortDescription}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between gap-3">
                  <Link
                    to={`/work/${project.id}`}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white transition rounded-xl bg-[#5fcf3a] hover:bg-[#4fba2f]"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-[#5fcf3a]"
                  >
                    Live Preview <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;