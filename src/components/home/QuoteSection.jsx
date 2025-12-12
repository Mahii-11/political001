/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export function QuoteSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 60, 142, 0.85), rgba(26, 60, 142, 0.85)), url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-political-red text-6xl font-serif">"</span>
          <blockquote
            className="text-xl md:text-2xl lg:text-3xl text-white italic font-light leading-relaxed"
            data-testid="text-quote"
          >
            THE ONLY WAY TO REFORM A POLITICIAN IS TO HANG HIM.
          </blockquote>
          <span className="text-political-red text-6xl font-serif">"</span>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-white/50" />
            <p className="text-white/80 text-lg">Jacob Jera</p>
            <div className="w-12 h-0.5 bg-white/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
