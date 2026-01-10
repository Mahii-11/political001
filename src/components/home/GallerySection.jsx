/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  "images/image39.jpg",
  "images/image35.jpg",
  "images/image37.jpg",
  "images/image36.jpg",
  "images/image38.jpg",
  "images/image40.jpg",
];

export function GallerySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-political-blue tracking-tight">
            আমাদের কাজের ঝলক
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-950">
            ছবি ও ভিডিওতে দেখুন আমাদের সৃজনশীলতা ও উদ্ভাবনী কাজের গল্প।
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* TWO COLUMN GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* LEFT (Gallery) */}
              <div className="lg:col-span-2 grid grid-rows-[auto_1fr] gap-4">
                {/* Title */}

                {/* IMAGE GRID (HEIGHT SOURCE) */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative overflow-hidden rounded-lg shadow-md"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <img
                        src={image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>

                <Link
                  to="/gallery"
                  className="text-political-blue font-medium hover:text-political-red"
                >
                  সম্পূর্ণ গ্যালারি দেখুন →
                </Link>
              </div>

              {/* RIGHT (Video) */}
              <div className="grid grid-rows-[auto_1fr] gap-4">
                {/* Title */}

                {/* VIDEO (EXACT SAME ROW HEIGHT) */}
                <div className="relative rounded-lg overflow-hidden shadow-2xl h-full">
                  <img
                    src="images/image13.jpg"
                    alt=""
                    className="w-full h-96 object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-political-red flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </button>
                  </div>

                  <Link
                    to="/gallery"
                    className="absolute bottom-4 right-4 text-sm text-white hover:text-political-red"
                  >
                    আরও ভিডিও →
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* VIDEO MODAL */}
        {isPlaying && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setIsPlaying(false)}
          >
            <div
              className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
