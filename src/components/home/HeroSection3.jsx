/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
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

const candidateImages = ["/images/", "/images/", "/images/", "/images/"];

export function HeroSection3() {
  const [top, setTop] = useState([]);
  const [currentCandidate, setCurrentCandidate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCandidate((prev) => (prev + 1) % candidateImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function loadTopSection() {
      const res = await getTopSection();
      console.log("API response:", res);
      setTop(Array.isArray(res.data) ? res.data : []);
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
          </div>
        </div>

        {/* Candidate Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hidden lg:block absolute right-0 bottom-0 h-full w-[45%]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentCandidate}
              className="absolute inset-0 bg-no-repeat"
              style={{
                backgroundImage: `url('${candidateImages[currentCandidate]}')`,
                backgroundSize: "contain",
                backgroundPosition: "right bottom",
                maskImage:
                  "linear-gradient(to left, black 60%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 60%, transparent 100%)",
              }}
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}
