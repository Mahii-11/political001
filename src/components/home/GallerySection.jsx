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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Single Professional Card */}
        <motion.div
          className="flex flex-col lg:flex-row gap-6 bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Left: Gallery */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 p-4 h-full">
            {/* Section Title */}
            <h2 className="col-span-full text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-political-blue to-political-red mb-4">
              প্রচারণার চিত্রশালা
            </h2>
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <img
                  src={image}
                  alt={`Campaign gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            ))}
            <Link
              to="/gallery"
              className="col-span-full mt-2 text-political-blue font-medium hover:text-political-red transition-colors"
            >
              সম্পূর্ণ গ্যালারি দেখুন &rarr;
            </Link>
          </div>

          {/* Right: Featured Video */}
          <div className="w-full lg:w-1/3 relative flex flex-col justify-center p-4">
            <h2 className="text-2xl md:text-3xl font-extrabold text-political-blue mb-4">
              মিডিয়া প্রকাশনা
            </h2>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl flex-1">
              <img
                src="images/image13.jpg"
                alt="Media release video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-20 h-20 rounded-full bg-political-red flex items-center justify-center shadow-lg"
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </motion.button>
              </div>
              <Link
                to="/gallery"
                className="absolute bottom-4 right-4 text-sm text-white hover:text-political-red font-medium"
              >
                আরও ভিডিও &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Media Release Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 text-white text-4xl"
          >
            &times;
          </button>
        </motion.div>
      )}
    </section>
  );
}
