/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import heroBg from "../../assets/thumbnails/bgimage.jpg";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-32 w-full flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <motion.h1
            variants={lineVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-white space-y-3 font-bangla"
          >
            <span className="block mb-2">একটি সুন্দর ও</span>
            <span className="block text-emerald-700 mb-2">ঐক্যবদ্ধ আগামী</span>
            <span className="block mb-2">গড়ার প্রত্যয়ে</span>
          </motion.h1>

          <motion.p
            variants={lineVariants}
            className="text-gray-200 text-lg md:text-xl max-w-lg mx-auto lg:mx-0"
          >
            গড়ার প্রত্যয়ে গণতন্ত্রের পথেই মুক্তি—যেখানে আপনার প্রতিটি কথাই
            মূল্যবান এবং প্রতিটি ভোটই গড়বে আমাদের জাতির ভাগ্য।
          </motion.p>

          <motion.div
            variants={lineVariants}
            className="flex justify-center lg:justify-start gap-4 mt-4"
          >
            <Link to="/voter-locator">
              <Button className="h-[56px] px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg hover:shadow-emerald-600/30 flex items-center gap-3 transition-all">
                ভোট কেন্দ্র খুঁজুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          variants={lineVariants}
          className="flex-1 hidden lg:flex justify-end"
        >
          <div
            className="w-full h-[500px] bg-no-repeat bg-contain bg-right-bottom drop-shadow-lg"
            style={{
              backgroundImage: "url('/images/image42.png')",
              maskImage:
                "linear-gradient(to left, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 70%, transparent 100%)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
