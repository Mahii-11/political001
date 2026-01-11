/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HeroSection } from "./HeroSection";
import { HeroSection2 } from "./HeroSection2.jsx";
import { HeroSection3 } from "./HeroSection3";
import clsx from "clsx";

export function HeroSlider() {
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [
    <HeroSection key="hero1" />,
    <HeroSection2 key="hero1" />,
    <HeroSection3 key="hero1" />,
  ];

  // 🔹 AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 1000000); // ⏱️ 6 sec

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <section className="relative w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBanner}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {banners[activeBanner]}
        </motion.div>
      </AnimatePresence>

      {/* 🔘 DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveBanner(index)}
            aria-label={`Go to banner ${index + 1}`}
            className={clsx(
              "h-2 rounded-full transition-all duration-300 ease-out",
              activeBanner === index
                ? "w-8 bg-emerald-700"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            )}
          />
        ))}
      </div>
    </section>
  );
}
