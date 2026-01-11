/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getTopSection } from "../../services/api";
import { ArrowRight } from "lucide-react";
import heroBg from "../../assets/thumbnails/bgimage.jpg";

const containerVariants = {
  hidden: { opacity: 1 }, // Container hidden state fixed
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    async function loadTopSection() {
      const res = await getTopSection();
      setTop(Array.isArray(res?.data) ? res.data : []);
    }
    loadTopSection();
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Netflix-style Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      {/* Political Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-transparent to-emerald-900/50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — TEXT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="max-w-xl space-y-6"
          >
            {top.map((topdata, i) => (
              <div key={i}>
                {/* Heading */}
                <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-white">
                  <motion.span variants={lineVariants} className="block mb-2">
                    একটি সুন্দর ও
                  </motion.span>
                  <motion.span
                    variants={lineVariants}
                    className="block text-emerald-400 mb-2"
                  >
                    ঐক্যবদ্ধ আগামী
                  </motion.span>
                  <motion.span variants={lineVariants} className="block mb-2">
                    গড়ার প্রত্যয়ে
                  </motion.span>
                </motion.h1>
                <motion.p
                  variants={lineVariants}
                  className="text-gray-100 text-base md:text-lg leading-relaxed mb-2"
                >
                  {topdata.description}
                </motion.p>

                {/* CTA */}
                <motion.div variants={lineVariants}>
                  <Link to="/voter-locator">
                    <Button
                      size="lg"
                      className="group h-[56px] px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center gap-3"
                    >
                      আপনার ভোট কেন্দ্র খুঁজুন
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT — CANDIDATE IMAGE */}
          <div className="hidden lg:flex justify-end relative">
            <div
              className="w-full h-[560px] bg-no-repeat bg-contain bg-right-bottom drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)]"
              style={{
                backgroundImage: `url('/images/image42.png')`,
                maskImage:
                  "linear-gradient(to left, black 70%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 70%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
