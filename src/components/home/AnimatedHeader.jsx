/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

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
  return (
    <div className="fixed  left-0 w-full h-12 z-40 overflow-hidden bg-green-100 border-b border-black/10 flex items-center">
      <motion.div
        className="flex whitespace-nowrap text-sm md:text-base font-medium text-gray-900"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {slogans.map((text, i) => (
          <span key={i} className="mx-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
