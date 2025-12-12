/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../components/ui/skeleton";

const categories = ["All", "Rally", "Meeting", "Community", "Event"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const [selectedImage, setSelectedImage] = useState(null);

  const { data: galleryImages = [], isLoading } = useQuery({
    queryKey: ["/api/gallery"],
  });

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 60, 142, 0.9), rgba(26, 60, 142, 0.9)), url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-gallery-page-title"
            >
              Photo Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              Home / Gallery
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 ${
                    activeCategory === category
                      ? "bg-political-red text-white"
                      : "bg-white text-political-dark border border-political-dark/20"
                  }`}
                  data-testid={`button-gallery-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              {isLoading ? (
                [1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <Skeleton
                    key={i}
                    className="aspect-[4/3] w-full rounded-lg"
                  />
                ))
              ) : (
                <AnimatePresence>
                  {filteredImages.map((image, index) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      layout
                      className="group cursor-pointer overflow-hidden rounded-lg"
                      onClick={() => setSelectedImage(image)}
                      data-testid={`img-gallery-item-${image.id}`}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-political-blue/0 group-hover:bg-political-blue/60 transition-colors duration-300 flex items-center justify-center">
                          <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          >
                            {image.title}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src.replace("w=600&h=400", "w=1200&h=800")}
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white font-semibold text-xl">
                  {selectedImage.title}
                </h3>
                <span className="text-white/70 text-sm">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-political-yellow transition-colors"
              data-testid="button-close-lightbox"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
