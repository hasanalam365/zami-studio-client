import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const RecentWork = () => {
  return (
    <section className="relative py-24 overflow-hidden text-white bg-black">

      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-red-600/20 blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-white/10 blur-[160px]" />
      </div>

      <div className="w-11/12 mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="inline-block px-5 py-1 mb-4 text-sm font-semibold text-red-400 border rounded-full bg-red-600/20 border-red-500/30">
            Recent Work
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Latest <span className="text-red-500">Projects</span> Showcase
          </h2>

          <p className="max-w-2xl mx-auto text-white/70">
            Modern web, SaaS and funnel systems built with performance, design and conversion in mind.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {[
            {
              id: "arabian-essence",
              title: "Arabian Essence Perfume Store",
              category: "E-Commerce",
              img: "https://i.ibb.co.com/mVMHvfC0/arabian-essence-sc.png",
              desc: "Luxury perfume store with premium UI & Stripe integration",
              live: "https://www.arabianessence.co.uk",
            },
            {
              id: "funnel",
              title: "Sales Funnel System",
              category: "Landing Page",
              img: "https://i.ibb.co.com/chbq7BYg/our-Story-All-Products.png",
              desc: "High converting funnel optimized for sales",
              live: "https://landing-page-arabian-essence.vercel.app",
            },
            {
              id: "training",
              title: "Training Funnel",
              category: "Course System",
              img: "https://i.ibb.co.com/wZ3ppLrB/Phlebotomy-PRP-PRP-hair-Fo-F.jpg",
              desc: "Course selling funnel with smooth UX",
              live: "https://facesonfacestraining.vercel.app/",
            },
          ].map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="overflow-hidden transition border group border-white/10 rounded-3xl bg-white/5 hover:border-red-500/40"
            >

              <div className="relative overflow-hidden h-60">
                <img
                  src={project.img}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute px-3 py-1 text-xs rounded-full top-4 left-4 bg-red-600/80">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold group-hover:text-red-400">
                  {project.title}
                </h3>

                <p className="mb-5 text-sm text-white/70">
                  {project.desc}
                </p>

                <a
                  href={project.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-white"
                >
                  Live Preview <ExternalLink size={16} />
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default RecentWork;