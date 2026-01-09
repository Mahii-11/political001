/* eslint-disable no-unused-vars */
import { getMissionData } from "../../services/api";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

export function MissionSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mission, setMission] = useState([]);

  useEffect(() => {
    async function loadMission() {
      const res = await getMissionData();
      console.log("API response:", res);
      setMission(Array.isArray(res.data) ? res.data : []);
    }
    loadMission();
  }, []);

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const id = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {mission.map((item, i) => (
        <div key={i}>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(18, 90, 60, 0.85),rgba(18, 90, 60, 0.85)),url('images/image8.jpg')`,
              // backgroundImage: `linear-gradient(rgba(26, 60, 142, 0.9), rgba(26, 60, 142, 0.9)), url(${item.image})`,
            }}
          />

          <div className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center px-4 md:px-8 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-mission-title"
            >
              {item.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 text-lg italic mb-10"
            >
              {item.description}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPlaying(true)}
              className="w-20 h-20 rounded-full bg-political-red flex items-center justify-center shadow-lg shadow-political-red/30"
              data-testid="button-play-video"
            >
              <Play className="w-8 h-8 text-white ml-1" fill="white" />
            </motion.button>
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
                  src={getEmbedUrl(item.youtube_link)}
                  title="Campaign Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              </motion.div>
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute top-4 right-4 text-white text-4xl"
                data-testid="button-close-video"
              >
                &times;
              </button>
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
}
