/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { Volume2, VolumeX } from "lucide-react";

export default function IntroVideo() {
  const [location] = useLocation();
  const isHome = location === "/";

  const [visible, setVisible] = useState(() => {
    if (!isHome) return false;
    return !sessionStorage.getItem("introSeen");
  });

  const [muted, setMuted] = useState(true);
  const [showSkip, setShowSkip] = useState(false);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  const videoRef = useRef(null);

  /* Skip button delay */
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setShowSkip(true), 2500);
    return () => clearTimeout(t);
  }, [visible]);

  /* Progress bar */
  useEffect(() => {
    if (!visible || !videoRef.current) return;

    const video = videoRef.current;
    const update = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    video.addEventListener("timeupdate", update);
    return () => video.removeEventListener("timeupdate", update);
  }, [visible]);

  const handleClose = () => {
    sessionStorage.setItem("introSeen", "true");
    setVisible(false);
  };

  const handleSoundToggle = async () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    setMuted(false);

    try {
      await video.play();
    } catch {}
  };

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleClose}
          onCanPlay={() => setLoading(false)}
          className="w-full h-full object-contain md:object-cover"
        >
          <source src="/videos/hamidvideo.mp4" type="video/mp4" />
        </video>

        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}

        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-white/20">
          <div
            className="h-full bg-political-yellow"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Controls */}
        <div className="absolute bottom-5 right-5 flex gap-3">
          {/* Sound */}
          <button
            onClick={handleSoundToggle}
            className="bg-white/90 p-2 rounded-full hover:bg-white transition"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>

          {/* Skip */}
          {showSkip && (
            <button
              onClick={handleClose}
              className="bg-white/90 text-black px-4 py-2 rounded-full text-xs font-semibold hover:bg-white transition"
            >
              Skip
            </button>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
