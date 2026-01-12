/* eslint-disable no-unused-vars */
import { getMissionData } from "../../services/api";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";
//import missionThumb from "../../assets/thumbnails/mission-2030.jpg";
import childThumb from "../../assets/thumbnails/child.jpg";
import FeaturesSection from "./FeaturesSection";

export function MissionSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mission, setMission] = useState([]);

  useEffect(() => {
    async function loadMission() {
      const res = await getMissionData();
      setMission(Array.isArray(res.data) ? res.data : []);
    }
    loadMission();
  }, []);

  const stripHeadingsAndParagraphs = (html) => {
    if (!html) return "";
    // 1️⃣ remove H1–H6
    let cleanHtml = html.replace(/<\/?h[1-6][^>]*>/gi, "");
    // 2️⃣ remove <p> tags
    cleanHtml = cleanHtml.replace(/<\/?p[^>]*>/gi, "");
    return cleanHtml;
  };

  const getEmbedUrl = (url) => {
    if (!url) return "";
    const id = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  };

  return (
    <section className="relative py-32 bg-green-50 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {mission.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="relative  p-6 md:p-10 rounded-2xl shadow-lg max-w-3xl mx-auto ">
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-800 text-center md:text-left"
              >
                <span className="text-green-900">
                  {item.title.split(" ")[0]}
                </span>{" "}
                <span className="text-gray-800">
                  {item.title.split(" ").slice(1).join(" ")}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-gray-700 text-base md:text-lg leading-7 md:leading-8 text-justify md:text-left"
                style={{ textAlign: "justify", textJustify: "inter-word" }}
              >
                {stripHeadingsAndParagraphs(item.description)}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative rounded-2xl bg-white shadow-xl overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                {!isPlaying ? (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${childThumb})`,
                      }}
                    />
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="Play video"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center shadow-lg hover:bg-emerald-800 transition">
                        <Play
                          className="w-8 h-8 text-white ml-1"
                          fill="white"
                        />
                      </div>
                    </button>
                  </>
                ) : (
                  <iframe
                    src={getEmbedUrl(item.youtube_link)}
                    title="Mission Video"
                    frameBorder="0"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                )}
              </div>

              <div className="p-6 border-t">
                <p className="text-sm font-semibold text-green-900 tracking-wide">
                  মিশন ২০৩০ — ভবিষ্যৎ বাংলাদেশের পথে আমাদের অঙ্গীকার
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      <FeaturesSection />
    </section>
  );
}
