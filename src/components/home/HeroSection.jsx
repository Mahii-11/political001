/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getTopSection } from "../../services/api";
import { ArrowRight } from "lucide-react";
import heroBg from "../../assets/thumbnails/bgimage.jpg";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white/60">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/85 z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="max-w-xl">
            {top.map((topdata, i) => (
              <div key={i}>
                <motion.h1
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-snug mb-6"
                >
                  <motion.span variants={lineVariants} className="block mb-4">
                    একটি সুন্দর ও
                  </motion.span>
                  <motion.span
                    variants={lineVariants}
                    className="block text-emerald-700 font-extrabold mb-2"
                  >
                    ঐক্যবদ্ধ আগামী
                  </motion.span>
                  <motion.span variants={lineVariants} className="block">
                    গড়ার প্রত্যয়ে
                  </motion.span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-600 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
                >
                  {topdata.description}
                </motion.p>
              </div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/voter-locator">
                <Button
                  size="lg"
                  className="group bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:bg-emerald-800 transition-all duration-200 flex items-center gap-2"
                >
                  আপনার ভোট কেন্দ্র খুঁজুন
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div
              className="w-full h-[520px] bg-no-repeat bg-contain bg-right-bottom"
              style={{
                backgroundImage: `url('/images/HamidBhai.png')`,
                maskImage:
                  "linear-gradient(to left, black 65%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to left, black 65%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
