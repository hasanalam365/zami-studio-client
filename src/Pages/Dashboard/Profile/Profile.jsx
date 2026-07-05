import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [enableEdit, setEnableEdit] = useState(false);
  const [imagePrev, setImagePrev] = useState(null);

  const { data: profile = {}, refetch, isLoading } = useQuery({
    queryKey: ["profile", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/profile?email=${user.email}`);
      return res.data;
    },
  });

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const photo = form.photo.files[0];

    let photoURL = profile.photoURL;

    try {
      if (photo) {
        const formData = new FormData();
        formData.append("image", photo);

        const imgRes = await axiosSecure.post(
          image_hosting_api,
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        photoURL = imgRes?.data?.data?.display_url;
      }

      const updatedProfile = {
        email: user.email,
        name,
        phone,
        photoURL,
      };

      await axiosSecure.patch("/users/profile", updatedProfile);

      toast.success("Profile Updated Successfully");

      setEnableEdit(false);
      refetch();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Profile update failed");
    }
  };

  // ✅ Loading before main div
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <span className="loading loading-spinner text-[#5fcf3a]"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 bg-base-200">
      <Helmet>
        <title>Dashboard | Profile</title>
      </Helmet>

      <div className="max-w-3xl mx-auto overflow-hidden bg-white shadow-xl rounded-2xl">

        {/* Cover */}
        <div className="h-36 bg-gradient-to-r from-[#5fcf3a] via-[#4ade80] to-[#22c55e]"></div>

        {/* Profile Image */}
        <div className="flex flex-col items-center -mt-14">

          <img
            src={imagePrev || profile.photoURL}
            alt="profile"
            className="object-cover border-4 border-white rounded-full shadow-lg w-28 h-28"
          />

          <h2 className="mt-3 text-xl font-semibold text-gray-800">
            {profile.name}
          </h2>

          {/* Role Badge */}
          <span className="px-4 py-1 mt-1 text-xs text-white rounded-full bg-gradient-to-r from-[#5fcf3a] to-[#22c55e]">
            {profile.role}
          </span>

          {!enableEdit && (
            <button
              onClick={() => setEnableEdit(true)}
              className="px-6 py-1 mt-4 text-white transition rounded-full shadow bg-gradient-to-r from-[#5fcf3a] to-[#22c55e] hover:scale-105"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="grid gap-4 p-8">

          <div>
            <label className="text-sm text-gray-500">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={profile.name}
              disabled={!enableEdit}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#5fcf3a]"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              value={profile.email || ""}
              disabled
              className="w-full p-2 bg-gray-100 border rounded"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Phone</label>
            <input
              type="text"
              name="phone"
              defaultValue={profile.phone}
              disabled={!enableEdit}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#5fcf3a]"
            />
          </div>

          {enableEdit && (
            <>
              <div>
                <label className="text-sm text-gray-500">Update Photo</label>

                <input
                  type="file"
                  name="photo"
                  onChange={(e) =>
                    setImagePrev(URL.createObjectURL(e.target.files[0]))
                  }
                  className="w-full"
                />
              </div>

              {imagePrev && (
                <img
                  src={imagePrev}
                  alt="preview"
                  className="w-20 h-20 rounded-full"
                />
              )}

              <button
                type="submit"
                className="py-2 mt-2 text-white transition rounded shadow bg-gradient-to-r from-[#5fcf3a] to-[#22c55e] hover:scale-[1.02]"
              >
                Update Profile
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Profile;