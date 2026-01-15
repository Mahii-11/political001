/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getTopSection } from "../../services/api";
import heroBg from "../../assets/thumbnails/netabg-1.jpg";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const fallbackTop = [
  {
    description:
      "গণতন্ত্রের পথেই মুক্তি—যেখানে আপনার প্রতিটি কথাই মূল্যবান এবং প্রতিটি ভোটই গড়বে আমাদের জাতির ভাগ্য।",
  },
];

export function HeroSection3() {
  const [top, setTop] = useState(fallbackTop);
  useEffect(() => {
    async function loadTopSection() {
      try {
        const res = await getTopSection();
        console.log("API response:", res);
        if (res && Array.isArray(res.data) && res.data.length > 0) {
          setTop(res.data);
        } else {
          console.warn("API returned empty, using fallback content.");
        }
      } catch (error) {
        console.warn(
          "Error fetching top section, using fallback content.",
          error
        );
      }
    }
    loadTopSection();
  }, []);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 py-32 w-full flex flex-col lg:flex-row items-center gap-10">
          <div className="max-w-xl">
            {top.map((topdata, i) => (
              <div key={i}>
                <motion.h1
                  variants={containerVariants}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 flex flex-col gap-2 font-bangla"
                >
                  <motion.span variants={lineVariants}>
                    একটি সুন্দর ও
                  </motion.span>
                  <motion.span
                    variants={lineVariants}
                    className="text-green-700"
                  >
                    ঐক্যবদ্ধ আগামী
                  </motion.span>
                  <motion.span variants={lineVariants}>
                    গড়ার প্রত্যয়ে
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/85 text-base md:text-lg leading-relaxed mb-10"
                >
                  {topdata.description}
                </motion.p>
              </div>
            ))}

            <div className="flex flex-col md:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/voter-locator">
                  <Button className="h-[56px] px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg hover:shadow-emerald-600/30 flex items-center gap-3 transition-all">
                    ভোট কেন্দ্র খুঁজুন
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
<<<<<<< HEAD
                <Link to="/volunteer/new">
=======
                <Link to="/voter-locator">
>>>>>>> 74d411fbd43d3c20377e09eeab86012173959a75
                  <Button className="h-[56px] px-8 rounded-full bg-emerald-800 hover:bg-emerald-600 text-white font-semibold shadow-lg hover:shadow-emerald-600/30 flex items-center gap-3 transition-all">
                    স্বেচ্ছাসেবক হোন
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
