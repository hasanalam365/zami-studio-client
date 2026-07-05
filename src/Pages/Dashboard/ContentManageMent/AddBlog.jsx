import JoditEditor from "jodit-react";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AddBlog = () => {
  const axiosPublic = useAxiosPublic();
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const handleAddBlog = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.thumbnail.files[0];

    const imageFile = { image: thumbnail };

    const upload = await axiosPublic.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOST_KEY}`,
      imageFile,
      { headers: { "content-type": "multipart/form-data" } }
    );

    const photoURL = upload.data.data.display_url;

    const blog = {
      title,
      blogContent: content,
      photoURL,
      postDate: new Date().toLocaleString(),
    };

    const res = await axiosPublic.post("/addblog", blog);

    if (res.data.insertedId) {
      toast.success("Blog created successfully");
      form.reset();
      setContent("");
    }
  };

  return (
    <div className="min-h-screen p-6 text-white bg-black">

      <Helmet>
        <title>Dashboard | Add Blog</title>
      </Helmet>

      <div className="max-w-3xl p-6 mx-auto border border-red-500/30 rounded-2xl bg-zinc-950">

        <h2 className="mb-6 text-2xl font-bold text-red-500">
          Create Blog
        </h2>

        <form onSubmit={handleAddBlog} className="space-y-4">

          <input
            name="title"
            placeholder="Blog Title"
            className="w-full p-3 text-white bg-black border border-red-500/30 rounded-xl"
          />

          <input
            type="file"
            name="thumbnail"
            className="w-full p-3 text-white bg-black border border-red-500/30 rounded-xl"
          />

          <div className="overflow-hidden border border-red-500/30 rounded-xl">
            <JoditEditor
              ref={editor}
              value={content}
              onBlur={(newContent) => setContent(newContent)}
            />
          </div>

          <button className="w-full py-3 font-bold text-white transition bg-red-600 rounded-xl hover:bg-red-700">
            Create Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;