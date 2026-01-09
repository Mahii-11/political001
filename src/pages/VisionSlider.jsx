/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const slides = [
  {
    id: 1,
    title: "সংবিধান সংস্কার কমিশন গঠন",
    short: "",
    details:
      "সংবিধান সংস্কারের মাধ্যমে গণতন্ত্র শক্তিশালী করা, নাগরিক অধিকার নিশ্চিত করা এবং রাষ্ট্রীয় ভারসাম্য প্রতিষ্ঠা করা হবে।",
  },
  {
    id: 2,
    title: "জাতীয় ঐকমত্য ও পুনর্মিলন",
    short: "",
    details:
      "জাতীয় ঐকমত্য প্রতিষ্ঠার জন্য একটি স্বাধীন কমিশন গঠন করে রাজনৈতিক ও সামাজিক বিভাজন দূর করা হবে।",
  },
  {
    id: 3,
    title: "নির্বাচনকালীন নিরপেক্ষ সরকার",
    short: "",
    details:
      "নির্বাচনকালীন সময়ে একটি সম্পূর্ণ নিরপেক্ষ প্রশাসনিক কাঠামো গড়ে তোলা হবে।",
  },

  {
    id: 4,
    title: "শিক্ষা সংস্কার",
    short: "",
    details:
      "শিক্ষা ব্যবস্থার মান উন্নয়ন এবং সকলের জন্য সমান সুযোগ নিশ্চিত করা হবে।",
  },
  {
    id: 5,
    title: "স্বাস্থ্য সেবা উন্নয়ন",
    short: "",
    details: "জনগণের জন্য সহজলভ্য এবং মানসম্মত স্বাস্থ্যসেবা নিশ্চিত করা হবে।",
  },
  {
    id: 6,
    title: "পরিবেশ সংরক্ষণ",
    short: "",
    details:
      "পরিবেশের ভারসাম্য রক্ষা এবং দূষণ নিয়ন্ত্রণে কার্যকর পদক্ষেপ গ্রহণ করা হবে।",
  },
  {
    id: 7,
    title: "অর্থনৈতিক উন্নয়ন",
    short: "",
    details: "দেশের অর্থনীতি শক্তিশালী ও টেকসই উন্নয়ন নিশ্চিত করা হবে।",
  },
  {
    id: 8,
    title: "স্মার্ট নগর উন্নয়ন",
    short: "",
    details: "নগরগুলোর পরিকল্পিত ও প্রযুক্তিনির্ভর উন্নয়ন নিশ্চিত করা হবে।",
  },
  {
    id: 9,
    title: "সড়ক ও পরিবহন",
    short: "",
    details: "সড়ক ও পরিবহন ব্যবস্থার মান উন্নয়ন ও সম্প্রসারণ করা হবে।",
  },
  {
    id: 10,
    title: "ডিজিটাল বাংলাদেশ",
    short: "",
    details:
      "সরকারি ও বেসরকারি সেবা ডিজিটালাইজ করে নাগরিক সুবিধা বৃদ্ধি করা হবে।",
  },
  {
    id: 11,
    title: "কৃষি উন্নয়ন",
    short: "",
    details: "কৃষি খাতের আধুনিকীকরণ ও উৎপাদন বৃদ্ধির উদ্যোগ গ্রহণ করা হবে।",
  },
  {
    id: 12,
    title: "শ্রমিক ও চাকরিজীবী সুরক্ষা",
    short: "",
    details: "শ্রমিক ও চাকরিজীবীদের অধিকার সুরক্ষা ও কল্যাণ নিশ্চিত করা হবে।",
  },
  {
    id: 13,
    title: "নারী ও শিশু অধিকার",
    short: "",
    details: "নারী ও শিশুদের অধিকার ও নিরাপত্তা নিশ্চিত করা হবে।",
  },
  {
    id: 14,
    title: "নিরাপত্তা ব্যবস্থা",
    short: "",
    details:
      "দেশের নিরাপত্তা ও আইন-শৃঙ্খলা বজায় রাখার কার্যক্রম উন্নত করা হবে।",
  },
  {
    id: 15,
    title: "সাংস্কৃতিক উন্নয়ন",
    short: "",
    details: "দেশীয় সংস্কৃতি ও শিল্পকলার উন্নয়ন ও প্রসার নিশ্চিত করা হবে।",
  },
  {
    id: 16,
    title: "পর্যটন উন্নয়ন",
    short: "",
    details:
      "দেশের পর্যটন খাত সম্প্রসারণ এবং আন্তর্জাতিক পর্যটকদের আকর্ষণ বৃদ্ধি করা হবে।",
  },
  {
    id: 17,
    title: "উদ্যোক্তা সহায়তা",
    short: "",
    details:
      "নতুন উদ্যোক্তা ও ক্ষুদ্র ব্যবসায়ীদের জন্য সহায়তা ও সুবিধা প্রদান করা হবে।",
  },
  {
    id: 18,
    title: "তথ্য ও যোগাযোগ",
    short: "",
    details: "তথ্য ও যোগাযোগ প্রযুক্তির উন্নয়ন ও সেবার প্রসার নিশ্চিত করা হবে।",
  },
  {
    id: 19,
    title: "গৃহহীন সমস্যা সমাধান",
    short: "",
    details:
      "গৃহহীনদের জন্য সাশ্রয়ী ও মানসম্মত আবাসন প্রকল্প বাস্তবায়ন করা হবে।",
  },
  {
    id: 20,
    title: "বিদ্যুৎ ও জ্বালানি",
    short: "",
    details:
      "বিদ্যুৎ ও জ্বালানির নিরাপদ, যথাযথ ও পর্যাপ্ত সরবরাহ নিশ্চিত করা হবে।",
  },
  {
    id: 21,
    title: "টেকসই শিল্পায়ন",
    short: "",
    details: "শিল্প খাতের টেকসই উন্নয়ন ও উৎপাদনশীলতা বৃদ্ধির উদ্যোগ নেওয়া হবে।",
  },
  {
    id: 22,
    title: "আইনশৃঙ্খলা উন্নয়ন",
    short: "",
    details: "আইনশৃঙ্খলা কার্যকর ও নাগরিক নিরাপত্তা নিশ্চিত করা হবে।",
  },
  {
    id: 23,
    title: "মানবসম্পদ উন্নয়ন",
    short: "",
    details: "মানবসম্পদের দক্ষতা বৃদ্ধি ও শিক্ষার মান উন্নয়ন করা হবে।",
  },
  {
    id: 24,
    title: "সামুদ্রিক উন্নয়ন",
    short: "",
    details: "সামুদ্রিক সম্পদ ব্যবস্থাপনা ও উন্নয়ন কার্যক্রম গ্রহণ করা হবে।",
  },
  {
    id: 25,
    title: "বাজার ও বাণিজ্য",
    short: "",
    details:
      "দেশের অভ্যন্তরীণ ও আন্তর্জাতিক বাণিজ্য সম্প্রসারণ নিশ্চিত করা হবে।",
  },
  {
    id: 26,
    title: "ট্রাফিক ব্যবস্থাপনা",
    short: "",
    details: "শহর ও শহরতলি ট্রাফিক ব্যবস্থাপনা উন্নয়ন করা হবে।",
  },
  {
    id: 27,
    title: "পরিষ্কার-পরিচ্ছন্নতা",
    short: "",
    details:
      "শহর ও গ্রামাঞ্চলে পরিচ্ছন্নতা ও স্বাস্থ্যকর পরিবেশ নিশ্চিত করা হবে।",
  },
  {
    id: 28,
    title: "অর্থনৈতিক নীতি",
    short: "",
    details: "দেশের অর্থনৈতিক নীতি কার্যকর ও স্থিতিশীল করা হবে।",
  },
  {
    id: 29,
    title: "সামাজিক নিরাপত্তা",
    short: "",
    details:
      "অসচ্ছল ও দুর্বল জনগোষ্ঠীর জন্য সামাজিক নিরাপত্তা ব্যবস্থা নিশ্চিত করা হবে।",
  },
  {
    id: 30,
    title: "ডিজিটাল সেবা সম্প্রসারণ",
    short: "",
    details:
      "সরকারি ও বেসরকারি সেবার ডিজিটালাইজেশন ও নাগরিক সুবিধা বৃদ্ধি করা হবে।",
  },
];

export default function HorizontalCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const [openId, setOpenId] = useState(null);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) setCardsPerPage(3);
      else if (window.innerWidth >= 768) setCardsPerPage(2);
      else setCardsPerPage(1);
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [startIndex, cardsPerPage]);

  const prev = () => {
    setStartIndex((prev) =>
      prev - cardsPerPage < 0
        ? slides.length - cardsPerPage
        : prev - cardsPerPage
    );
  };

  const next = () => {
    setStartIndex((prev) =>
      prev + cardsPerPage >= slides.length ? 0 : prev + cardsPerPage
    );
  };

  const visibleSlides = slides.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(18, 42, 110, 0.95) 0%, rgba(18, 42, 110, 0.85) 45%, rgba(18, 42, 110, 0.25) 100%), url('/images/bgimage.png')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl  mb-4 font-extrabold text-white leading-tight"
            data-testid="text-about-title"
          >
            আমাদের ৩১ দফা
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/85 text-base md:text-lg leading-relaxed"
          >
            জনগণের কল্যাণে আমাদের রাজনৈতিক প্রতিশ্রুতি ও সংস্কার পরিকল্পনা
          </motion.p>
        </div>
      </section>
      <section className="py-24 bg-[#fdf6f6]">
        {/* soft classic background */}
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex overflow-hidden gap-4">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleSlides.map((slide) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-full sm:w-full md:w-1/2 lg:w-1/3"
                >
                  <div className="bg-white rounded-2xl shadow-md p-6 text-center min-h-[220px] flex flex-col justify-between">
                    <div className="w-12 h-12 mx-auto mb-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold text-lg">
                      {slide.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex w-full justify-between px-2">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-white/90 hover:bg-white shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-white/90 hover:bg-white shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

{
  /*   <AnimatePresence>
                      {openId === slide.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-gray-700 text-sm mt-2"
                        >
                          {slide.details}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() =>
                        setOpenId(openId === slide.id ? null : slide.id)
                      }
                      className="mt-3 text-green-600 font-semibold hover:underline text-sm"
                    >
                      {openId === slide.id ? "Hide Details" : "View Details"}
                    </button>

                     <p className="text-gray-600 text-sm">{slide.short}</p>
                     */
}
