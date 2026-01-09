/* eslint-disable no-unused-vars */
import { getLeaderMessage } from "../../services/api";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function QuoteSection() {
  const [quote, setQuoteSection] = useState([]);

  useEffect(() => {
    async function loadTopSection() {
      const res = await getLeaderMessage();
      console.log("API response:", res);
      setQuoteSection(Array.isArray(res.data) ? res.data : []);
    }
    loadTopSection();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {quote.map((item, i) => (
        <div key={i}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-green-50"
            style={
              {
                //backgroundImage: `linear-gradient(rgba(18, 90, 60, 0.85),rgba(18, 90, 60, 0.85)),url('images/image8.jpg')`,
              }
            }
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
                className="text-xl md:text-2xl lg:text-3xl text-gray-800 italic font-light leading-relaxed"
                data-testid="text-quote"
              >
                {item.description}
              </blockquote>
              <span className="text-political-red text-6xl font-serif">"</span>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-12 h-0.5 bg-gray-900" />
                <p className="text-gray-800 text-lg">{item.title}</p>
                <div className="w-12 h-0.5 bg-gray-900" />
              </div>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
