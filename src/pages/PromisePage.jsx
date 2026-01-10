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
            অভিযোগ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
            data-testid="text-biography-title"
          >
            অভিযোগ জানান এবং আপনার কণ্ঠস্বর শোনা যাক
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
          >
            আপনার পরিচয় গোপন রাখা হবে। দয়া করে সঠিক তথ্য দিয়ে অভিযোগ করুন।
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-5 shadow-lg"
          >
            <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-300/30 blur-3xl" />

            <p className="relative text-sm md:text-base text-slate-700">
              আপনার অভিযোগ আমাদের জন্য গুরুত্বপূর্ণ। আমরা নিশ্চিত করি যে প্রতিটি
              মতামত ও অভিযোগ মনোযোগ দিয়ে শোনা হবে এবং প্রয়োজনীয় ব্যবস্থা
              গ্রহণ করা হবে। ন্যায় ও স্বচ্ছতার প্রতিশ্রুতি আমাদের অঙ্গীকার।
            </p>
          </motion.div>
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
