import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const Login = () => {

  const { signInUser, signOutUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {

      const result = await signInUser(email, password);

      if (result?.user) {

        try {

          const userRes = await axiosPublic.get(`/users/check/${email}`);

          if (userRes.data.status === "blocked") {

            await signOutUser();

            toast.error("Your account has been blocked by admin");

            return;
          }

          const res = await axiosPublic.post("/jwt", { email });

          localStorage.setItem("access-token", res.data.token);

          toast.success("Login Successfully");

          navigate(location?.state?.from || "/");

        } catch (error) {

          await signOutUser();

          toast.error("Your account has been blocked by system please Contact us");

        }

      }

    } catch (error) {

      if (error.code === "auth/user-not-found") {
        toast.error("User not registered");
      }
      else if (error.code === "auth/wrong-password") {
        toast.error("Incorrect password");
      }
      else {
        toast.error("Invalid email or password");
      }

    }
  };

  return (

    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-tr from-[#0d111f] via-[#08192b] to-[#0a0f1a]">

      <Helmet>
        <title>Login | Faces Solutions</title>
      </Helmet>

      <motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="w-full max-w-md p-8 rounded-2xl shadow-2xl 
  bg-gradient-to-br from-[#0f172a]/90 via-[#08192b]/90 to-[#020617]/90
  backdrop-blur-md border border-white/10"
>
        {/* Logo / Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6 text-3xl font-bold text-center text-white"
        >
          Faces Solutions
        </motion.h2>

        <form onSubmit={handleLogin} className="space-y-5">

       {/* Email */}
<div className="flex items-center px-3 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[#22c55e] transition">

  <MdOutlineMailOutline className="mr-2 text-xl text-gray-400"/>

  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    className="w-full text-white placeholder-gray-400 bg-transparent outline-none"
    required
  />

</div>

{/* Password */}
<div className="flex items-center px-3 py-2 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm focus-within:ring-2 focus-within:ring-[#22c55e] transition">

  <RiLockPasswordLine className="mr-2 text-xl text-gray-400"/>

  <input
    type="password"
    name="password"
    placeholder="Enter password"
    className="w-full text-white placeholder-gray-400 bg-transparent outline-none"
    required
  />

</div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2 font-semibold text-white rounded-lg shadow-lg bg-gradient-to-r from-[#5fcf3a] to-[#22c55e]"
          >
            Login
          </motion.button>

          {/* Register */}
          <p className="text-sm text-center text-gray-400">

            Don't have an account?

            <Link
              to="/registerUser"
              className="ml-1 font-semibold text-green-600 hover:underline"
            >
              Register
            </Link>

          </p>

        </form>

      </motion.div>

    </div>
  );
};

export default Login;