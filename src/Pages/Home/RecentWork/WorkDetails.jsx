import { useParams, Link } from "react-router-dom";
import projectsData from "./projectsData";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const WorkDetails = () => {
  const { id } = useParams();

  const project = projectsData.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-white">
        <div className="text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Project Not Found
          </h2>
          <p className="mb-6 text-gray-600">
            Sorry, the project you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-3 text-white rounded-xl bg-[#5fcf3a] hover:bg-[#4fba2f] transition"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white">
      {/* Banner */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img
          src={project.bannerImage}
          alt={project.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute inset-0 flex items-center">
          <div className="w-11/12 mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-white"
            >
              <p className="inline-block px-4 py-1 mb-4 text-sm font-medium rounded-full bg-[#5fcf3a]/90">
                {project.category}
              </p>
              <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="text-lg leading-8 text-gray-200">
                {project.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-11/12 py-16 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
              <p className="leading-8 text-gray-600">
                {project.fullDescription}
              </p>
            </div>

            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Key Features
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 border border-gray-100 bg-gray-50 rounded-2xl"
                  >
                    <p className="font-medium text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Challenges
              </h2>
              <p className="leading-8 text-gray-600">{project.challenges}</p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Solution
              </h2>
              <p className="leading-8 text-gray-600">{project.solution}</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="p-6 border border-gray-100 shadow-sm h-fit bg-gray-50 rounded-3xl">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Project Info
            </h3>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-sm text-gray-500">Client</p>
                <h4 className="font-semibold text-gray-800">{project.client}</h4>
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-500">Duration</p>
                <h4 className="font-semibold text-gray-800">
                  {project.duration}
                </h4>
              </div>

              <div>
                <p className="mb-2 text-sm text-gray-500">Technologies & Tools</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium text-gray-700 bg-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-white transition rounded-xl bg-[#5fcf3a] hover:bg-[#4fba2f]"
                >
                  Live Preview <ExternalLink size={18} />
                </a>

                {project.githubClient && (
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-gray-800 transition bg-white border border-gray-200 rounded-xl hover:border-[#5fcf3a] hover:text-[#5fcf3a]"
                  >
                    Client Code <Github size={18} />
                  </a>
                )}

                {project.githubServer && (
                  <a
                    href={project.githubServer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-gray-800 transition bg-white border border-gray-200 rounded-xl hover:border-[#5fcf3a] hover:text-[#5fcf3a]"
                  >
                    Server Code <Github size={18} />
                  </a>
                )}

                <Link
                  to="/"
                  className="flex items-center justify-center w-full gap-2 px-4 py-3 font-semibold text-gray-800 transition bg-white border border-gray-200 rounded-xl hover:border-[#5fcf3a] hover:text-[#5fcf3a]"
                >
                  <ArrowLeft size={18} />
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetails;