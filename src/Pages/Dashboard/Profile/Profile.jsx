import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

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
      toast.error("Profile update failed");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh] bg-black">
        <span className="text-red-500 loading loading-spinner"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 text-white rounded-xl">

      <Helmet>
        <title>Dashboard | Profile</title>
      </Helmet>

      <div className="max-w-3xl mx-auto border border-red-500/30 rounded-2xl bg-white/5">

        {/* Header */}
        <div className="h-36 bg-gradient-to-r from-red-600 to-black"></div>

        {/* Profile */}
        <div className="flex flex-col items-center -mt-14">

          <img
            src={imagePrev || profile.photoURL}
            className="object-cover border-4 border-black rounded-full w-28 h-28"
          />

          <h2 className="mt-3 text-xl font-semibold">
            {profile.name}
          </h2>

          <span className="px-4 py-1 mt-2 text-xs text-white bg-red-600 rounded-full">
            {profile.role}
          </span>

          {!enableEdit && (
            <button
              onClick={() => setEnableEdit(true)}
              className="px-6 py-1 mt-4 text-white bg-red-600 rounded-full hover:bg-red-700"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Form */}
        <form onSubmit={handleUpdateProfile} className="p-8 space-y-4">

          <input
            name="name"
            defaultValue={profile.name}
            disabled={!enableEdit}
            className="w-full p-2 text-white bg-black border rounded border-white/20"
          />

          <input
            value={profile.email}
            disabled
            className="w-full p-2 text-gray-400 bg-black border rounded border-white/20"
          />

          <input
            name="phone"
            defaultValue={profile.phone}
            disabled={!enableEdit}
            className="w-full p-2 text-white bg-black border rounded border-white/20"
          />

          {enableEdit && (
            <>
              <input
                type="file"
                name="photo"
                onChange={(e) =>
                  setImagePrev(URL.createObjectURL(e.target.files[0]))
                }
                className="w-full text-white"
              />

              <button className="w-full py-2 font-bold text-black bg-red-500 rounded">
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