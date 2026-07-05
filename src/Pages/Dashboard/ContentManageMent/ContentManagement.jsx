import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ContentManagement = () => {
  return (
    <div className="flex justify-end p-6 text-white bg-black">

      <Helmet>
        <title>Dashboard | Content Management</title>
      </Helmet>

      <Link to="/dashboard/content-management/add-blog">
        <button className="px-6 py-3 font-bold text-white bg-red-600 rounded-xl hover:bg-red-700">
          + Add Blog
        </button>
      </Link>

    </div>
  );
};

export default ContentManagement;