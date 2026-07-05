import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const letters = "CONTACT US".split("");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success(
            "Thank you for contacting us! We’ll get back to you soon."
          );
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message!");
          console.error(error);
        }
      );
  };

  return (
    <div className="overflow-hidden bg-gradient-to-br from-[#e9ffe1] via-[#f4f8ff] to-white px-6 py-20 md:px-12 lg:px-24">
      <motion.div className="relative grid max-w-6xl grid-cols-1 gap-12 p-10 mx-auto shadow-2xl rounded-3xl bg-white/30 backdrop-blur-xl md:grid-cols-2">

        {/* LEFT CONTENT */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-wrap text-3xl font-extrabold text-transparent md:text-4xl bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86] bg-clip-text">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.08, type: "spring" }}
                className="inline-block mr-1"
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <p className="max-w-md text-lg leading-relaxed text-gray-700 md:text-xl">
            Have any questions? Send us a message! We’re always ready to help you
            with premium digital solutions for your business growth.
          </p>

          <motion.div
            className="h-2 w-32 rounded-full bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86]"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >

          {/* NAME */}
          <div className="relative">
            <input
              type="text"
              name="from_name"
              required
              className="w-full px-5 py-4 border border-gray-300 outline-none peer rounded-2xl bg-white/70 focus:border-green-400 focus:ring-1 focus:ring-green-400"
            />
            <label
              className="absolute px-2 text-sm text-gray-500 transition-all -translate-y-1/2 left-5 top-1/2 bg-white/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-400 peer-valid:top-2 peer-valid:text-xs peer-valid:text-green-400"
            >
              Full Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-5 py-4 border border-gray-300 outline-none peer rounded-2xl bg-white/70 focus:border-green-400 focus:ring-1 focus:ring-green-400"
            />
            <label
              className="absolute px-2 text-sm text-gray-500 transition-all -translate-y-1/2 left-5 top-1/2 bg-white/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-400 peer-valid:top-2 peer-valid:text-xs peer-valid:text-green-400"
            >
              Email
            </label>
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-5 py-4 border border-gray-300 outline-none resize-none peer rounded-2xl bg-white/70 focus:border-green-400 focus:ring-1 focus:ring-green-400"
            />
            <label
              className="absolute px-2 text-sm text-gray-500 transition-all left-5 top-6 bg-white/70 peer-focus:top-2 peer-focus:text-xs peer-focus:text-green-400 peer-valid:top-2 peer-valid:text-xs peer-valid:text-green-400"
            >
              Message
            </label>
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 30px rgba(95,207,58,0.6)",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full rounded-2xl bg-gradient-to-r from-[#5fcf3a] to-[#a0ec86]
            py-4 text-lg font-bold text-white shadow-lg transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;
