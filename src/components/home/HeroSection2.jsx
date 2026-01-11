/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getTopSection } from "../../services/api";

const containerVariants = {
  hidden: {},
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

const candidateImages = [
  "/images/bnp neta.jpg",
  "/images/hamid.png",
  "/images/hamidbhai.jpg",
  "/images/bnp neta.jpg",
];

export function HeroSection2() {
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
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(18, 42, 110, 0.95) 0%, rgba(18, 42, 110, 0.85) 45%, rgba(18, 42, 110, 0.25) 100%), url('/images/image41.jpg)`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 w-full">
          <div className="max-w-xl">
            {top.map((topdata, i) => (
              <div key={i}>
                <motion.h1
                  variants={containerVariants}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 flex flex-col gap-2"
                >
                  <motion.span variants={lineVariants}>
                    একটি সুন্দর ও
                  </motion.span>
                  <motion.span
                    variants={lineVariants}
                    className="text-political-yellow"
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
                <Button
                  size="lg"
                  className="bg-political-yellow text-political-blue font-semibold px-8 py-4 text-base shadow-lg hover:shadow-xl hover:bg-yellow-400 transition"
                >
                  আপনার ভোট কেন্দ্র খুঁজুন
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
