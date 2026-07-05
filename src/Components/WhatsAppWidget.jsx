import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const popupRef = useRef(null);
  const audioRef = useRef(null);

  const whatsappNumber = "447308888874";

  const welcomeMessage =
    "Hi 👋 Welcome to Faces Solutions.\n\nHow can we assist you today? Our team is ready to help.";

  const defaultSendMessage =
    "Hello! I’d like to know more about your services.";

  /* 🔊 play message open sound */
  const playOpenSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  /* typing animation */
  useEffect(() => {
    if (!open) {
      setTypedText("");
      return;
    }

    let index = 0;
    const timer = setInterval(() => {
      setTypedText(welcomeMessage.slice(0, index));
      index++;
      if (index > welcomeMessage.length) clearInterval(timer);
    }, 35);

    return () => clearInterval(timer);
  }, [open]);

  /* close on outside click */
  useEffect(() => {
    if (!open) return;
    const handleClick = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  const openWhatsApp = () => {
    const encoded = encodeURIComponent(defaultSendMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, "_blank");
  };

  return (
    <>
      {/* 🔊 Hidden audio */}
      <audio
        ref={audioRef}
        src="/sounds/message-open.mp3"
        preload="auto"
      />

      {/* Floating Message Icon */}
      <motion.button
        aria-label="Open WhatsApp Chat"
        onClick={() => {
          playOpenSound();     // 🔥 sound here
          setOpen(true);
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed z-50 flex items-center justify-center rounded-full shadow-xl right-6 bottom-6 w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-600 shadow-green-500/40"
      >
        <MessageCircle className="text-white w-7 h-7" />
      </motion.button>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 p-4 border shadow-2xl right-6 bottom-24 w-80 bg-white/95 backdrop-blur-xl rounded-2xl border-white/40"
          >
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl
              bg-gradient-to-br from-[#5fcf3a] to-[#a0ec86] shadow-md">
                <img
                  src="https://i.ibb.co.com/q3TsWn8y/faces-Solutions-logo.png"
                  alt="Faces Solutions"
                  className="object-contain w-8 h-8"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">
                  Faces Solutions
                </p>
                <p className="text-xs text-gray-500">
                  Online • Replies fast
                </p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X className="w-4 h-4 text-gray-400 hover:text-gray-700" />
              </button>
            </div>

            {/* Message bubble */}
            <div className="mt-4">
              <div className="max-w-[90%] rounded-xl bg-gray-100 p-3
              text-sm text-gray-700 whitespace-pre-line">
                {typedText}
                <span className="animate-pulse">▍</span>
              </div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={openWhatsApp}
              className="w-full mt-4 py-2.5 rounded-xl
              bg-gradient-to-r from-green-500 to-emerald-600
              text-white font-semibold shadow-md"
            >
              Start WhatsApp Chat
            </motion.button>

            <p className="mt-3 text-xs text-center text-gray-400">
              You’ll be redirected to WhatsApp
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;
