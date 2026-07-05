import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOST_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register = () => {
  const { signUpUser, updateUser, signOutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const [errorText, setErrorText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorText("");

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const photo = form.photo.files[0];
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // ✅ Password Match Check
    if (password !== confirmPassword) {
      setErrorText("Passwords do not match!");
      return;
    }

    if (!photo) {
      setErrorText("Please upload a profile photo.");
      return;
    }

    try {
      setLoading(true);

      // 🔹 1️⃣ Upload Image
      const formData = new FormData();
      formData.append("image", photo);

      const imgRes = await axiosPublic.post(image_hosting_api, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const photoURL = imgRes?.data?.data?.display_url;

      if (!photoURL) {
        throw new Error("Image upload failed");
      }

      // 🔹 2️⃣ Create Firebase User
      await signUpUser(email, password);
      await updateUser(name, photoURL);

      // 🔹 3️⃣ Save User to Backend DB
      const newUser = {
        name,
        email,
        phone,
        photoURL,
        role: "user",
        status: "active",
        createdAt: new Date(),
      };

      // ⚠️ Make sure your backend has:
      // app.post("/users", ...)
     await axiosPublic.put(`/users/${email}`, newUser);

      
      // 🔹 4️⃣ Logout & Redirect
      await signOutUser();

      setTimeout(() => {
        navigate("/login");
      }, 1200);

    } catch (error) {
      console.log("Registration Error:", error);

      if (error.response?.status === 404) {
        setErrorText("Server route not found (404). Check backend API.");
      } else if (error.code === "auth/email-already-in-use") {
        setErrorText("Email already in use.");
      } else {
        setErrorText("Registration failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
  <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-[#0d111f] via-[#08192b] to-[#0a0f1a]">

    <Helmet>
      <title>Register | Faces Solutions</title>
    </Helmet>

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl p-10 rounded-2xl shadow-2xl 
      bg-gradient-to-br from-[#0f172a]/90 via-[#08192b]/90 to-[#020617]/90
      backdrop-blur-md border border-white/10"
    >

      <h2 className="mb-8 text-3xl font-bold text-center text-white">
        Create Account
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">

        {/* Name */}
        <div className="col-span-2 md:col-span-1 flex items-center px-3 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[#22c55e]">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full text-white placeholder-gray-400 bg-transparent outline-none"
          />
        </div>

        {/* Email */}
        <div className="col-span-2 md:col-span-1 flex items-center px-3 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[#22c55e]">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full text-white placeholder-gray-400 bg-transparent outline-none"
          />
        </div>

        {/* Phone */}
        <div className="col-span-2 md:col-span-1 flex items-center px-3 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[#22c55e]">
          <input
            type="text"
            name="phone"
            placeholder="WhatsApp Number"
            required
            className="w-full text-white placeholder-gray-400 bg-transparent outline-none"
          />
        </div>

        {/* Photo */}
        <div className="flex items-center col-span-2 px-3 py-2 border rounded-lg md:col-span-1 border-white/10 bg-white/5 backdrop-blur-sm">
          <input
            type="file"
            name="photo"
            required
            className="w-full text-gray-300 bg-transparent outline-none"
          />
        </div>

        {/* Password */}
        <div className="col-span-2 md:col-span-1 flex items-center px-3 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[#22c55e]">
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full text-white placeholder-gray-400 bg-transparent outline-none"
          />
        </div>

        {/* Confirm Password */}
        <div className="col-span-2 md:col-span-1 flex items-center px-3 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[#22c55e]">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
            className="w-full text-white placeholder-gray-400 bg-transparent outline-none"
          />
        </div>

        {errorText && (
          <p className="col-span-2 text-sm text-red-400">{errorText}</p>
        )}

        {/* Button */}
        <div className="col-span-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full py-3 font-semibold text-white rounded-lg shadow-lg 
            bg-gradient-to-r from-[#5fcf3a] to-[#22c55e]"
          >
            {loading ? "Processing..." : "Register"}
          </motion.button>
        </div>

      </form>

      <p className="mt-6 text-sm text-center text-gray-400">
        Already have an account?
        <Link
          to="/login"
          className="ml-1 font-semibold text-green-500 hover:underline"
        >
          Login
        </Link>
      </p>

      <ToastContainer />

    </motion.div>

  </div>
);
};

export default Register;