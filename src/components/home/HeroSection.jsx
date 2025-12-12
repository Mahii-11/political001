/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(26, 60, 142, 0.95) 0%, rgba(26, 60, 142, 0.7) 50%, rgba(26, 60, 142, 0.3) 100%), url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80')`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-20 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-testid="text-hero-title"
          >
            Let's Make <br />
            <span className="text-political-yellow">Our Country</span> Great
            Again
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl mb-8"
            data-testid="text-hero-subtitle"
          >
            It's High Time to Change Our Country & Ourselves
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/campaign">
              <Button
                size="lg"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-political-blue px-8 py-6 text-base"
                data-testid="button-hero-start"
              >
                LET'S START
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent"
                data-testid="button-hero-learn"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute right-0 bottom-0 h-full w-1/2"
      >
        <div
          className="absolute inset-0 bg-contain bg-right-bottom bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80')`,
            maskImage: "linear-gradient(to left, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to left, black 60%, transparent 100%)",
          }}
        />
      </motion.div>
    </section>
  );
}
