import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const letters = "CONTACT        US".split("");

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
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message!");
        }
      );
  };

  return (
    <div className="px-6 py-24 overflow-hidden bg-black md:px-12 lg:px-24">

      {/* background glow */}
      <div className="absolute w-72 h-72 bg-red-600/20 blur-3xl top-10 -left-20" />
      <div className="absolute w-72 h-72 bg-red-800/20 blur-3xl bottom-10 -right-20" />

      <motion.div
        className="relative grid max-w-6xl grid-cols-1 gap-12 p-10 mx-auto border shadow-2xl rounded-3xl bg-white/5 backdrop-blur-xl border-white/10 md:grid-cols-2"
      >

        {/* LEFT */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* TITLE */}
          <div className="flex flex-wrap text-4xl font-extrabold text-white md:text-5xl">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="mr-1"
              >
                <span className="text-red-500">{letter}</span>
              </motion.span>
            ))}
          </div>

          <p className="max-w-md text-lg leading-relaxed text-white/70">
            Have any questions? Send us a message. We deliver premium digital solutions
            with performance, design, and AI-driven systems.
          </p>

          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-red-600 to-red-400" />
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
              className="w-full px-5 py-4 text-white border outline-none rounded-2xl bg-black/40 border-white/10 focus:border-red-500 peer"
            />
            <label className="absolute px-2 text-sm -translate-y-1/2 text-white/60 left-5 top-1/2 bg-black/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500 peer-valid:top-2 peer-valid:text-xs">
              Full Name
            </label>
          </div>

          {/* EMAIL */}
          <div className="relative">
            <input
              type="email"
              name="from_email"
              required
              className="w-full px-5 py-4 text-white border outline-none rounded-2xl bg-black/40 border-white/10 focus:border-red-500 peer"
            />
            <label className="absolute px-2 text-sm -translate-y-1/2 text-white/60 left-5 top-1/2 bg-black/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500 peer-valid:top-2 peer-valid:text-xs">
              Email
            </label>
          </div>

          {/* MESSAGE */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-5 py-4 text-white border outline-none resize-none rounded-2xl bg-black/40 border-white/10 focus:border-red-500 peer"
            />
            <label className="absolute px-2 text-sm text-white/60 left-5 top-6 bg-black/40 peer-focus:top-2 peer-focus:text-xs peer-focus:text-red-500 peer-valid:top-2 peer-valid:text-xs">
              Message
            </label>
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(255,0,0,0.4)",
            }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-4 text-lg font-bold text-white transition rounded-2xl bg-gradient-to-r from-red-600 to-red-500"
          >
            Send Message
          </motion.button>

        </motion.form>
      </motion.div>
    </div>
  );
};

export default Contact;