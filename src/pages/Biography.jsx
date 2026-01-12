/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import BiographySection from "../components/BiographySection";

const timeline = [
  {
    year: "১৯৬৫",
    title: "জন্ম ও শৈশব",
    description:
      "সমাজমনস্ক ও মূল্যবোধসম্পন্ন একটি মধ্যবিত্ত পরিবারে জন্মগ্রহণ করেন",
  },
  {
    year: "১৯৮৭",
    title: "আইনশাস্ত্রে স্নাতক ডিগ্রি অর্জন",
    description:
      "সম্মানের সাথে আইনশাস্ত্রে স্নাতক সম্পন্ন করেন এবং নাগরিক অধিকার বিষয়ে বিশেষ মনোযোগ দেন",
  },
  {
    year: "১৯৯০",
    title: "সামাজিক কর্মকাণ্ডের সূচনা",
    description:
      "স্থানীয় জনগণের কল্যাণে বিভিন্ন সামাজিক উন্নয়নমূলক কার্যক্রমে যুক্ত হন",
  },
  {
    year: "২০০০",
    title: "জনপ্রতিনিধিত্বের সূচনা",
    description: "জনগণের সেবায় প্রথমবারের মতো জনপ্রতিনিধি হিসেবে নির্বাচিত হন",
  },
  {
    year: "২০১০",
    title: "রাষ্ট্রীয় পর্যায়ের নেতৃত্ব",
    description:
      "রাষ্ট্রীয় পর্যায়ে নাগরিকদের প্রতিনিধিত্ব করার দায়িত্ব লাভ করেন",
  },
  {
    year: "২০২০",
    title: "জাতীয় নেতৃত্বের প্রত্যয়",
    description:
      "দেশকে সামনের দিকে এগিয়ে নেওয়ার লক্ষ্যে জাতীয় পর্যায়ের নেতৃত্বে এগিয়ে আসেন",
  },
];

const achievements = [
  {
    icon: Award,
    title: "নেতৃত্বে সম্মাননা",
    description: "জনসেবায় অসামান্য অবদানের জন্য জাতীয় স্বীকৃতি (২০১৮)",
  },
  {
    icon: Users,
    title: "সমাজসেবায় অনন্য অবদান",
    description: "সামাজিক কল্যাণমূলক উদ্যোগে বিশেষ স্বীকৃতি লাভ",
  },
  {
    icon: BookOpen,
    title: "প্রকাশিত লেখক",
    description: "রাষ্ট্র পরিচালনা ও সংস্কার বিষয়ে জনপ্রিয় গ্রন্থের প্রণেতা",
  },
  {
    icon: Heart,
    title: "মানবতার সেবক",
    description: "তিনটি দাতব্য প্রতিষ্ঠানের প্রতিষ্ঠাতা ও সমর্থক",
  },
];

export default function Biography() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
            >
              জীবনী
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
              data-testid="text-biography-title"
            >
              জনাব হামিদুর রহমান – জীবনবৃত্তান্ত
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
            >
              অভিজ্ঞতা, নেতৃত্ব এবং মানবিক মূল্যবোধের এক অনন্য সমন্বয়—যেখানে
              শিক্ষা ও সমাজ গঠনের পথচলা একসাথে এগিয়ে যায়।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-5 shadow-lg"
            >
              {/* warm reddish glow inside card */}
              <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-300/30 blur-3xl" />

              <p className="relative text-sm md:text-base text-slate-700">
                এই অংশটি তাঁর জীবনের গুরুত্বপূর্ণ অধ্যায়, কর্মপরিকল্পনা এবং
                অবদানের গল্প তুলে ধরে—যা ভবিষ্যৎ প্রজন্মকে অনুপ্রাণিত করবে।
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="images/image42.jpg"
                  alt="Candidate Portrait"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  data-testid="img-candidate-portrait"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="items-center text-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
                    তাঁর সম্পর্কে জানুন
                  </h2>
                  <div className="flex justify-center mt-4">
                    <span className="w-20 h-1 bg-political-red rounded-full"></span>
                  </div>
                </div>

                <BiographySection />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                জীবনের <span className="text-gray-800">যাত্রা</span>
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                জনসেবা ও সম্প্রদায় নেতৃত্বে নিবেদিত এক জীবনকাল
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-political-blue/20 hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card className="inline-block bg-white border-0 shadow-sm">
                      <CardContent className="p-6">
                        <span className="text-political-red font-bold text-xl">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-800 mt-2">
                          {item.title}
                        </h3>
                        <p className="text-political-dark/70 text-sm mt-2">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-8">
                    <div className="w-4 h-4 rounded-full bg-political-red border-4 border-white shadow" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                অর্জন <span className="text-gray-900">ও সম্মাননা</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full bg-white border-0 shadow-sm hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-political-blue/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-red-800" />
                      </div>
                      <h3 className="font-semibold text-political-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-political-dark/60">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
