/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  FaHospital,
  FaGraduationCap,
  FaRoad,
  FaBriefcase,
  FaLeaf,
  FaBalanceScale,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaHospital />,
    title: "স্বাস্থ্যসেবা",
    desc: "প্রতিটি ওয়ার্ডে মানসম্মত ও সহজলভ্য চিকিৎসা নিশ্চিত করা",
  },
  {
    icon: <FaGraduationCap />,
    title: "শিক্ষা",
    desc: "আধুনিক ও প্রযুক্তিনির্ভর শিক্ষাব্যবস্থা গড়ে তোলা",
  },
  {
    icon: <FaRoad />,
    title: "অবকাঠামো",
    desc: "টেকসই রাস্তা ও পরিকল্পিত নগর উন্নয়ন",
  },
  {
    icon: <FaBriefcase />,
    title: "কর্মসংস্থান",
    desc: "যুবসমাজের জন্য দক্ষতা ও কর্মসংস্থানের সুযোগ",
  },
  {
    icon: <FaBalanceScale />,
    title: "সুশাসন",
    desc: "স্বচ্ছতা ও জবাবদিহিতার মাধ্যমে দুর্নীতিমুক্ত প্রশাসন",
  },
  {
    icon: <FaLeaf />,
    title: "পরিবেশ",
    desc: "সবুজ ও বাসযোগ্য এলাকা গড়ে তোলা",
  },
];

export default function PromisePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold"
          >
            আমার নির্বাচনী প্রতিশ্রুতি
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
          >
            কথা নয়, কাজের মাধ্যমে জনগণের কল্যাণ নিশ্চিত করাই আমার অঙ্গীকার
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 bg-white text-green-700 font-semibold px-8 py-3 rounded-full shadow-lg"
          >
            প্রতিশ্রুতিগুলো দেখুন
          </motion.button>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-14"
        >
          প্রতিশ্রুতির মূল ক্ষেত্রসমূহ
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-green-600 text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-14"
          >
            বাস্তবায়ন পরিকল্পনা
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                time: "প্রথম ১০০ দিন",
                text: "জরুরি সেবা ও প্রশাসনিক সংস্কার কার্যক্রম শুরু",
              },
              {
                time: "প্রথম ১ বছর",
                text: "শিক্ষা, স্বাস্থ্য ও কর্মসংস্থান প্রকল্প বাস্তবায়ন",
              },
              {
                time: "৫ বছর",
                text: "একটি টেকসই, স্মার্ট ও উন্নত অঞ্চল গড়ে তোলা",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:items-center md:gap-6"
              >
                <span className="text-green-600 font-bold text-lg min-w-[140px]">
                  {step.time}
                </span>
                <p className="text-gray-700 mt-2 md:mt-0">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-2xl font-semibold text-gray-800 max-w-3xl mx-auto"
        >
          “আমি প্রতিশ্রুতি দিচ্ছি—এই ঘোষণাগুলো শুধু কথায় নয়, বাস্তব কাজের
          মাধ্যমেই জনগণের সামনে তুলে ধরবো।”
        </motion.blockquote>

        <p className="mt-6 text-gray-600">— আপনার বিশ্বস্ত প্রার্থী</p>
      </section>
    </div>
  );
}
