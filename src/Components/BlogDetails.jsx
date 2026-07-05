import { useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogDetails = () => {
  const blog = useLoaderData();

  return (
    <div className="min-h-screen px-4 py-20 text-white bg-black">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold md:text-4xl">
            Blog Details
          </h1>

          <p className="mt-2 text-white/60">
            Read full article with modern UI experience
          </p>
        </div>

        {/* CARD */}
        <div className="overflow-hidden border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl">

          <img
            src={blog.photoURL}
            className="object-cover w-full h-80"
          />

          <div className="p-6">

            <h2 className="mb-4 text-2xl font-bold">
              {blog.title || "Blog Title"}
            </h2>

            <div className="leading-relaxed text-white/70">
              <Markdown rehypePlugins={[rehypeRaw]}>
                {blog.blogContent}
              </Markdown>
            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default BlogDetails;