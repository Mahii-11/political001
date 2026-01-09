/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { HeroSection2 } from "./HeroSection2.jsx";
import { HeroSection3 } from "./HeroSection3";
import clsx from "clsx";

export function HeroSlider() {
  const [activeBanner, setActiveBanner] = useState(0);

  const banners = [
    <HeroSection key="hero1" />,
    <HeroSection2 key="hero2" />,
    <HeroSection3 key="hero3" />,
  ];

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

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveBanner(index)}
            className={clsx(
              "w-4 h-4 rounded-full transition-all duration-300",
              activeBanner === index
                ? "bg-political-yellow scale-125"
                : "bg-white/50 hover:bg-white"
            )}
          />
        ))}
      </div>
    </section>
  );
}
