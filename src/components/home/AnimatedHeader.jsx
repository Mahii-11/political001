/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slogans = [
  "জনগণের শক্তিতেই গড়বো আগামীর বাংলাদেশ",
  "উন্নয়ন, ঐক্য আর ন্যায়—এই আমাদের অঙ্গীকার",
  "কথায় নয়, কাজে পরিবর্তন",
  "স্বচ্ছ নেতৃত্ব, শক্তিশালী ভবিষ্যৎ",
  "গ্রাম থেকে শহর—সমান উন্নয়ন সবার জন্য",
  "দুর্নীতির বিরুদ্ধে শূন্য সহনশীলতা",
  "শিক্ষা, স্বাস্থ্য, কর্মসংস্থান—এটাই আমাদের পথ",
  "মানুষই মুখ্য, রাজনীতি নয়",
  "আজকের সিদ্ধান্ত, আগামীর নিরাপত্তা",
  "একসাথে এগিয়ে যাই, বাংলাদেশকে বদলাই",
];

export default function AnimatedHeader() {
  const [index, setIndex] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slogans.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="w-full h-12 flex items-center justify-center overflow-hidden
bg-gradient-to-r from-[#0f5132] via-[#1b7a4a] to-[#b02a37]
text-white border-b border-black/10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute text-center text-sm md:text-base px-4 font-medium"
            >
              {slogans[index]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
