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
    "Hi 👋 Welcome to Zami Studio.\n\nHow can we assist you today? Our team is ready to help.";

  const defaultSendMessage =
    "Hello! I’d like to know more about your services.";

  const playOpenSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

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
    }, 30);

    return () => clearInterval(timer);
  }, [open]);

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
      {/* SOUND */}
      <audio ref={audioRef} src="/sounds/message-open.mp3" preload="auto" />

      {/* FLOAT BUTTON */}
      <motion.button
        onClick={() => {
          playOpenSound();
          setOpen(true);
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed z-50 flex items-center justify-center bg-black border border-red-500 rounded-full shadow-lg bottom-6 right-6 w-14 h-14 shadow-red-500/30"
      >
        <MessageCircle className="text-red-500 w-7 h-7" />
      </motion.button>

      {/* POPUP */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={popupRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed z-50 border shadow-2xl bottom-24 right-6 w-80 rounded-2xl bg-black/90 backdrop-blur-xl border-red-500/30"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 p-4 border-b border-white/10">
              <div className="flex items-center justify-center shadow-md w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-white">
                <img
                  src="/logo.jpg"
                  alt="Zami Studio"
                  className="object-contain w-8 h-8"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-white">
                  Zami Studio
                </p>
                <p className="text-xs text-gray-400">Online • Fast reply</p>
              </div>

              <button onClick={() => setOpen(false)}>
                <X className="w-4 h-4 text-gray-400 hover:text-red-500" />
              </button>
            </div>

            {/* MESSAGE */}
            <div className="p-4">
              <div className="relative p-3 text-sm text-white whitespace-pre-line border bg-white/5 border-white/10 rounded-xl">
                {typedText}
                <span className="text-red-500 animate-pulse">▍</span>
              </div>
            </div>

            {/* BUTTON */}
            <div className="p-4 pt-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={openWhatsApp}
                className="w-full py-2.5 font-semibold text-white
                bg-gradient-to-r from-red-600 to-black
                border border-red-500 rounded-xl shadow-md"
              >
                Start WhatsApp Chat
              </motion.button>

              <p className="mt-2 text-xs text-center text-gray-500">
                Redirecting to WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;