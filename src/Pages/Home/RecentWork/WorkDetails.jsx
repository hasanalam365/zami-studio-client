import { useParams, Link } from "react-router-dom";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const WorkDetails = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen text-white bg-black">

      {/* HERO */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://i.ibb.co.com/mVMHvfC0/arabian-essence-sc.png"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70" />

        <div className="absolute bottom-10 left-10">
          <p className="mb-2 text-sm text-red-400">Project Details</p>
          <h1 className="text-4xl font-bold md:text-6xl">
            Premium <span className="text-red-500">Project</span>
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      <div className="grid w-11/12 gap-10 py-16 mx-auto max-w-7xl lg:grid-cols-3">

        {/* LEFT */}
        <div className="space-y-10 lg:col-span-2">

          <div className="p-6 border rounded-3xl bg-white/5 border-white/10">
            <h2 className="mb-4 text-2xl font-bold text-red-400">
              Project Overview
            </h2>
            <p className="leading-relaxed text-white/70">
              High quality modern system built with performance, UX and scalability in mind.
            </p>
          </div>

          <div className="p-6 border rounded-3xl bg-white/5 border-white/10">
            <h2 className="mb-4 text-2xl font-bold text-red-400">
              Key Features
            </h2>

            <div className="grid gap-3 md:grid-cols-2 text-white/70">
              {["Responsive UI", "Fast Performance", "SEO Ready", "Secure System"].map((f, i) => (
                <div key={i} className="p-3 border bg-black/40 border-white/10 rounded-xl">
                  {f}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="p-6 border rounded-3xl bg-white/5 border-white/10 h-fit">

          <h3 className="mb-6 text-xl font-bold text-red-400">
            Project Info
          </h3>

          <div className="space-y-4 text-white/70">

            <p><span className="text-white">Client:</span> Premium Brand</p>
            <p><span className="text-white">Duration:</span> 2-3 Weeks</p>

            <div>
              <p className="mb-2 text-white">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Tailwind", "Node", "MongoDB"].map((t, i) => (
                  <span key={i} className="px-2 py-1 text-xs border rounded-full bg-red-600/20 border-red-500/30">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <a
            href="#"
            className="block py-3 mt-8 text-center transition rounded-xl bg-gradient-to-r from-red-600 to-black hover:scale-105"
          >
            Live Preview <ExternalLink className="inline ml-2" size={16} />
          </a>

          <Link
            to="/"
            className="block mt-3 text-center text-white/60 hover:text-red-400"
          >
            <ArrowLeft className="inline mr-1" size={16} />
            Back
          </Link>

        </div>

      </div>
    </div>
  );
};

export default WorkDetails;