/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaUser, FaRegCalendarAlt } from "react-icons/fa";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { useEffect, useState } from "react";
import { getLatestCampaign } from "@/services/api";
import { AnimatePresence } from "framer-motion";
import { FaPlayCircle, FaTimes } from "react-icons/fa";

const videos = [
  {
    id: 1,
    title: "জনসভায় গুরুত্বপূর্ণ বক্তব্য",
    description: "জনগণের অধিকার ও উন্নয়ন নিয়ে আমাদের সাম্প্রতিক জনসভা।",
    src: "/videos/video1.mp4",
    type: "local", // local | youtube
    date: "১২ জানুয়ারি ২০২6",
  },
  {
    id: 2,
    title: "উন্নয়ন প্রকল্প পরিদর্শন",
    description: "চলমান উন্নয়ন প্রকল্প সরেজমিনে পরিদর্শনের দৃশ্য।",
    src: "https://www.youtube.com/embed/VIDEO_ID",
    type: "youtube",
    date: "১০ জানুয়ারি ২০২6",
  },
  {
    id: 3,
    title: "স্বেচ্ছাসেবকদের সাথে মতবিনিময়",
    description: "স্বেচ্ছাসেবকদের সাথে গুরুত্বপূর্ণ আলোচনা ও দিকনির্দেশনা।",
    src: "/videos/video3.mp4",
    type: "local",
    date: "৮ জানুয়ারি ২০২6",
  },
];

export function CampaignNews() {
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    async function loadCampaign() {
      const data = await getLatestCampaign();
      setCampaign(data.data);
    }
    loadCampaign();
  }, []);

  const isLoading = false;

  return (
    <section className="py-20 bg-political-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
            প্রচারণার সর্বশেষ খবর
          </h2>
          <p className="text-political-dark/70 max-w-2xl mx-auto">
            দেশ ও জনগণের স্বার্থে পরিচালিত আমাদের চলমান প্রচারণা কার্যক্রম ও
            গুরুত্বপূর্ণ আপডেট।
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="overflow-hidden bg-white border-0 shadow-sm"
                >
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))
            : campaign.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${item.id}`}>
                    <Card className="overflow-hidden hover-elevate cursor-pointer h-full bg-white border-0 shadow-sm">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-political-blue mb-3 line-clamp-2 hover:text-political-red transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-sm text-political-dark/70 mb-4 line-clamp-2">
                          {item.long_description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-political-dark/60">
                          <span className="flex items-center gap-1">
                            <FaUser className="w-4 h-4" />
                            By: {item.created_by}
                          </span>

                          <span className="flex items-center gap-1">
                            <FaRegCalendarAlt className="w-4 h-4" />
                            {item.date}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
        </div>
        <CampaignVideos />
      </div>
    </section>
  );
}

export function CampaignVideos() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-20 bg-political-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
            প্রচারণার ভিডিও গ্যালারি
          </h2>
          <p className="text-political-dark/70 max-w-2xl mx-auto">
            আমাদের চলমান কার্যক্রম ও গুরুত্বপূর্ণ মুহূর্তের ভিডিও সংকলন।
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                onClick={() => setActiveVideo(item)}
                className="overflow-hidden hover-elevate cursor-pointer h-full bg-white border-0 shadow-sm"
              >
                {/* Video Preview */}
                <div className="relative h-48 overflow-hidden group">
                  {item.type === "local" ? (
                    <video
                      src={item.src}
                      muted
                      preload="metadata"
                      className="w-full h-full object-cover"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                  ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                      <FaPlayCircle className="text-white text-6xl opacity-80" />
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <FaPlayCircle className="text-white text-5xl" />
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-political-blue mb-3 line-clamp-2 hover:text-political-red transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-political-dark/70 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-political-dark/60">
                    <FaRegCalendarAlt className="w-4 h-4" />
                    {item.date}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative bg-black rounded-xl w-full max-w-4xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-white text-xl z-10"
              >
                <FaTimes />
              </button>

              {/* Video */}
              {activeVideo.type === "local" ? (
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="w-full h-[70vh] object-contain bg-black"
                />
              ) : (
                <iframe
                  src={activeVideo.src}
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-[70vh]"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
