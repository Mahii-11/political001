/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getTopSection } from "../../services/api";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function HeroSection() {
  const [top, setTop] = useState([]);

  useEffect(() => {
    async function loadTopSection() {
      const res = await getTopSection();
      console.log("API response:", res);
      setTop(Array.isArray(res.data) ? res.data : []);
    }
    loadTopSection();
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(18, 42, 110, 0.95) 0%, rgba(18, 42, 110, 0.85) 45%, rgba(18, 42, 110, 0.25) 100%), url('/images/bgimage.png')`,
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
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6"
              >
                <motion.span variants={lineVariants} className="block">
                  একটি সুন্দর ও
                </motion.span>

                <motion.span
                  variants={lineVariants}
                  className="block text-political-yellow"
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
            <Link href="/campaign">
              <Button
                size="lg"
                className="bg-political-yellow text-political-blue font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl hover:bg-yellow-400 transition"
              >
                আজই যোগ দিন
              </Button>
            </Link>

            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white px-8 py-6 text-base hover:bg-white hover:text-political-blue transition"
              >
                আরও জানুন
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
        <div
          className="absolute inset-0 bg-contain bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: 'url("/images/bnp neta.jpg")',
            maskImage: "linear-gradient(to left, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 70%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
