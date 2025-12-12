/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Play } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=300&h=200&fit=crop",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=200&fit=crop",
];

export function GallerySection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-political-blue mb-6"
              data-testid="text-gallery-title"
            >
              Campaign Gallery
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square overflow-hidden rounded-md cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Campaign gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    data-testid={`img-gallery-${index}`}
                  />
                </motion.div>
              ))}
            </div>
            <Link
              href="/gallery"
              className="inline-block mt-6 text-political-blue font-medium hover:text-political-red transition-colors"
              data-testid="link-view-gallery"
            >
              View Full Gallery
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2
                className="text-2xl md:text-3xl font-bold text-political-blue"
                data-testid="text-media-title"
              >
                Media Release
              </h2>
              <Link
                href="/gallery"
                className="text-political-blue font-medium hover:text-political-red transition-colors text-sm"
              >
                &gt; More Videos
              </Link>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop"
                alt="Media release video thumbnail"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-16 h-16 rounded-full bg-political-red flex items-center justify-center shadow-lg"
                  data-testid="button-play-media"
                >
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
            className="w-full max-w-4xl aspect-video bg-black rounded-lg"
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
              className="rounded-lg"
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
