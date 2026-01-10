/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const values = [
  {
    icon: Heart,
    title: "সততা  ",
    description:
      "আমরা আমাদের সমস্ত কর্মকাণ্ডে সর্বোচ্চ মানের সততা ও নৈতিক আচরণ বজায় রাখি।",
  },
  {
    icon: Shield,
    title: "জবাবদিহিতা ",
    description:
      "আমরা আমাদের সিদ্ধান্তের জন্য দায়িত্ব গ্রহণ করি এবং জনগণের কাছে স্বচ্ছ থাকি। ",
  },
  {
    icon: Users,
    title: "ঐক্য ",
    description:
      "আমরা বিশ্বাস করি সকল পটভূমি ও বিশ্বাসের মানুষদের একত্রিত করা সম্ভব।  ",
  },
  {
    icon: Award,
    title: "অসাধারণতা ",
    description:
      "আমরা আমাদের জনগণ ও সম্প্রদায়কে সেবা দেওয়ার ক্ষেত্রে সর্বোচ্চ মান অর্জনের চেষ্টা করি।",
  },
];

const accordionData = [
  {
    title: "ভূমিকা",
    content:
      "জনাব হামিদুর রহমান হামিদ বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)-এর একজন একনিষ্ঠ রাজনীতিবিদ, দূরদর্শী নেতা এবং ঢাকা-৭ আসনের সংসদ সদস্য পদপ্রার্থী। সততা, বিচক্ষণতা এবং কর্মীবোধ মনোভাবের জন্য তিনি রাজনৈতিক অঙ্গনে সুপরিচিত। শহীদ রাষ্ট্রপতি জিয়াউর রহমানের আদর্শকে বুকে ধারণ করে এবং দেশনায়ক তারেক রহমানের নেতৃত্বে তিনি দেশের গণতন্ত্র পুনঃরুদ্ধার এবং জনগণের অধিকার আদায়ের সংগ্রামে নিরলসভাবে কাজ করে যাচ্ছেন।",
    color: "bg-red-600",
  },
  {
    title: "জন্ম ও পারিবারিক পরিচিতি",
    content:
      "জনাব হামিদুর রহমান হামিদ ১৯৬৫ সালের ১ জানুয়ারি ঢাকায় জন্মগ্রহণ করেন। তাঁর পরিবার রাজনৈতিকভাবে সক্রিয় এবং সমাজসেবামূলক কাজে দীর্ঘদিন জড়িত রয়েছে।",
    color: "bg-green-600",
  },
];

const teamMembers = [
  {
    name: "হামিদুর রহমান হামিদ",
    role: "",
    image: "images/hamidbhai.jpg",
  },
  {
    name: "হামিদুর রহমান হামিদ",
    role: "",
    image: "images/hamidbhai.jpg",
  },
  {
    name: "হামিদুর রহমান হামিদ",
    role: "",
    image: "images/bnp neta.jpg",
  },
  {
    name: "হামিদুর রহমান হামিদ",
    role: "",
    image: "images/bnp neta.jpg",
  },
];

const milestones = [
  { year: "২০১৯", event: "প্রচারণার সূচনা" },
  { year: "২০২০", event: "প্রথম বড় র‍্যালি" },
  { year: "২০২১", event: "১০,০০০ স্বেচ্ছাসেবক" },
  { year: "২০২২", event: "নীতিমালা প্রকাশ" },
  { year: "২০২৩", event: "৫০টি রাজ্যে পৌঁছানো" },
  { year: "২০২৪", event: "নির্বাচন বছরের প্রচারণা" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
            >
              আমাদের সম্পর্কে
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-6"
              data-testid="text-about-title"
            >
              আমাদের লক্ষ্য ও উদ্দেশ্য
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto"
            >
              আমরা একসাথে কাজ করি, পরিবর্তনের জন্য প্রতিশ্রুতিবদ্ধ এবং একটি
              উজ্জ্বল ভবিষ্যৎ গড়ি—যেখানে শিক্ষা, উদ্ভাবন এবং মানবিক মূল্যবোধ
              একসাথে এগিয়ে যায়।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-6 shadow-lg relative overflow-hidden"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 h-24 w-72 rounded-full bg-rose-300/40 blur-3xl" />

              <p className="relative text-sm md:text-base text-slate-700 leading-relaxed">
                এই প্ল্যাটফর্মের মাধ্যমে আমরা এমন একটি পরিবেশ তৈরি করতে চাই,
                যেখানে প্রতিভা বিকশিত হয় এবং ভবিষ্যৎ গঠনের শক্তি জন্ম নেয়।
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
                  src="images/Hamid.jpg"
                  alt="Team Meeting"
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-6">
                  তাঁর সম্পর্কে জানুন
                </h2>
                <h2 className="text-xl md:text-2xl font-bold text-political-red mb-6">
                  জনাব হামিদুর রহমান হামিদ – জীবনবৃত্তান্ত
                </h2>
                <AccordionSection />
                <div class="bg-white rounded-lg shadow overflow-hidden"></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full bg-political-blue text-white border-0">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 text-political-yellow mb-6" />
                    <h3 className="text-2xl font-bold mb-4">আমাদের লক্ষ্য</h3>
                    <p className="text-white/80 leading-relaxed">
                      নাগরিকদের ক্ষমতায়ন করা, সম্প্রদায়কে শক্তিশালী করা এবং
                      এমন একটি দেশ গড়ে তোলা যেখানে সুযোগ, ন্যায় ও সমৃদ্ধি সবার
                      জন্য উন্মুক্ত। আমরা সৎ নেতৃত্ব ও বাস্তব উদ্যোগের মাধ্যমে
                      গুরুত্বপূর্ণ বিষয়গুলোতে কাজ করতে প্রতিশ্রুতিবদ্ধ, যা
                      পরিবারের জন্য সবচেয়ে প্রয়োজনীয়।
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full bg-political-red text-white border-0">
                  <CardContent className="p-8">
                    <Eye className="w-12 h-12 text-political-yellow mb-6" />
                    <h3 className="text-2xl font-bold mb-4">আমাদের দৃষ্টি</h3>
                    <p className="text-white/80 leading-relaxed">
                      একটি ঐক্যবদ্ধ দেশ যেখানে প্রতিটি নাগরিকের সমৃদ্ধির সুযোগ
                      রয়েছে, যেখানে আমাদের গণতন্ত্র অংশগ্রহণের মাধ্যমে
                      শক্তিশালী হয়, এবং যেখানে ভবিষ্যৎ প্রজন্মগুলি একটি
                      পরিচ্ছন্ন পরিবেশ ও আরও ন্যায়সঙ্গত সমাজ গ্রহণ করবে।
                      একসাথে, আমরা মহত্ত্ব অর্জন করতে পারি।
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
                আমাদের মূল মূল্যবোধ
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-0 shadow-sm text-center hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-political-blue/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-7 h-7 text-political-blue" />
                      </div>
                      <h3 className="font-semibold text-political-dark mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-political-dark/60">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
                আমাদের যাত্রা
              </h2>
            </motion.div>

            {/* Milestones */}
            <div className="flex flex-wrap justify-center gap-10">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  {/* Circle */}
                  <div
                    className="
              w-20 h-20 rounded-full
              bg-gradient-to-br from-purple-500 to-purple-700
              flex items-center justify-center mx-auto mb-3
              shadow-[0_10px_30px_rgba(128,90,213,0.35)]
              ring-1 ring-purple-300/40
              transition-all duration-300 ease-out
              group-hover:scale-110
              group-hover:shadow-[0_20px_50px_rgba(128,90,213,0.55)]
              group-hover:ring-4 group-hover:ring-purple-400/40
            "
                  >
                    <span className="text-white font-bold text-lg tracking-wide">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Text */}
                  <p className="text-gray-800 text-sm max-w-[140px] mx-auto leading-snug line-clamp-2 min-h-[2.5rem]">
                    {milestone.event}
                  </p>
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

import { useState } from "react";

const AccordionSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {accordionData.map((item, index) => (
        <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
          <button
            className={`w-full text-left px-6 py-4 ${item.color} text-white font-semibold flex justify-between items-center focus:outline-none`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className="text-2xl transform transition-transform duration-300">
              {openIndex === index ? "-" : "+"}
            </span>
          </button>
          <div
            className={`px-6 py-4 text-gray-700 leading-relaxed transition-all duration-300 ${
              openIndex === index ? "block" : "hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
