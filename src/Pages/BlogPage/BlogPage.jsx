import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogPage = () => {
  const axiosPublic = useAxiosPublic();

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogPost"],
    queryFn: async () => {
      const res = await axiosPublic.get("/addblog");
      return res.data;
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0b0f14] to-black text-white px-4 py-10">

      <div className="flex flex-col gap-8 mx-auto lg:flex-row max-w-7xl">

        {/* LEFT BLOG LIST */}
        <div className="w-full space-y-6 lg:w-3/4">

          {blogs.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden border rounded-2xl border-white/10 bg-white/5 backdrop-blur-xl"
            >
              {/* IMAGE */}
              <img
                src={blog.photoURL}
                className="object-cover w-full h-72"
              />

              <div className="p-6">

                {/* DATE */}
                <div className="flex items-center gap-2 text-sm text-green-400">
                  <FaRegClock />
                  {blog.postDate}
                </div>

                {/* TITLE */}
                <h2 className="mt-3 text-xl font-bold">
                  Modern Blog Title Here
                </h2>

                {/* CONTENT */}
                <div className="mt-3 text-white/70">
                  <Markdown rehypePlugins={[rehypeRaw]}>
                    {blog.blogContent.slice(0, 200)}
                  </Markdown>
                </div>

                {/* BUTTON */}
                <button className="mt-5 font-semibold text-green-400 transition hover:text-green-300">
                  Read More →
                </button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="w-full lg:w-1/4">

          <div className="p-5 border rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl">

            {/* SEARCH */}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search blog..."
                className="w-full px-3 py-2 text-white border rounded-lg bg-black/40 border-white/10"
              />
              <button className="px-4 font-semibold bg-green-500 rounded-lg">
                Go
              </button>
            </div>

            {/* MENU */}
            <ul className="mt-6 space-y-3 text-white/70">
              <li className="cursor-pointer hover:text-green-400">All Blogs</li>
              <li className="cursor-pointer hover:text-green-400">Popular</li>
              <li className="cursor-pointer hover:text-green-400">Latest</li>
            </ul>

          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;