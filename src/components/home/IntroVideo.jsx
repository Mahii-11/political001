/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroVideo() {
  // ✅ initial state derived safely
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem("introSeen");
  });

  const [showSkip, setShowSkip] = useState(false);

  useEffect(() => {
    if (!visible) return;

    // Skip button after 3 sec
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 3000);

    return () => clearTimeout(skipTimer);
  }, [visible]);

  const handleClose = () => {
    sessionStorage.setItem("introSeen", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            onEnded={handleClose}
          >
            <source src="/videos/hamidvideo.mp4" type="video/mp4" />
          </video>

          {showSkip && (
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              onClick={handleClose}
              className="absolute bottom-6 right-6 bg-white/90 text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white transition"
            >
              Skip
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
