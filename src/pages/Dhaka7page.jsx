/* eslint-disable no-unused-vars */
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaVoteYea,
  FaMapMarkedAlt,
  FaRoad,
  FaGraduationCap,
  FaHospital,
} from "react-icons/fa";
import Dhaka7Map from "./Dhaka7Map";

const stats = [
  { icon: <FaVoteYea />, label: "মোট ভোটার", value: "৪,০০,০০০+" },
  { icon: <FaUser />, label: "প্রার্থী সংখ্যা", value: "৫–৭ জন" },
  { icon: <FaMapMarkedAlt />, label: "ওয়ার্ড সংখ্যা", value: "১৮" },
  {
    icon: <FaRoad />,
    label: "বৃহত্তর এলাকার উন্নয়ন",
    value: "ট্রাফিক ও অবকাঠামো",
  },
];

const issues = [
  {
    icon: <FaRoad />,
    title: "রাস্তা ও ট্রাফিক",
    desc: "প্রধান সড়ক ও ওয়ার্ডের রাস্তার অবস্থা উন্নত করা।",
  },
  {
    icon: <FaGraduationCap />,
    title: "শিক্ষা",
    desc: "স্কুল, কলেজ ও প্রযুক্তি শিক্ষা প্রসারিত করা।",
  },
  {
    icon: <FaHospital />,
    title: "স্বাস্থ্য",
    desc: "প্রতি ওয়ার্ডে আধুনিক স্বাস্থ্যসেবা কেন্দ্র স্থাপন।",
  },
];

export default function Dhaka7Page() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
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
            ঢাকা-৭
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
            data-testid="text-biography-title"
          >
            ঢাকা-৭ আসন তথ্য
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
          >
            জনসংখ্যা, ভোটার তথ্য, প্রার্থী এবং নির্বাচনী ইতিহাসের বিস্তারিত
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-5 shadow-lg"
          >
            <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-300/30 blur-3xl" />

            <p className="relative text-sm md:text-base text-slate-700">
              ঢাকা-৭ আসন তথ্য তুলে ধরে এই এলাকার জনগণ, সামাজিক অবকাঠামো এবং
              নির্বাচনী প্রেক্ষাপট সম্পর্কে স্পষ্ট ধারণা দেয়। এখানে জনগণের
              চাহিদা, উন্নয়নের সুযোগ এবং ন্যায়পরায়ণ রাজনৈতিক প্রতিনিধিত্বের
              গুরুত্ব ফুটে ওঠে।
            </p>
          </motion.div>
        </div>
      </section>
      {/* KEY STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          আমাদের এলাকার প্রধান পরিসংখ্যান
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl text-center"
            >
              <div className="text-green-700 text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ISSUES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          পরিবর্তনের মূল বিষয়সমূহ
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((issue, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-gray-50 p-6 rounded-2xl shadow text-center"
            >
              <div className="text-green-700 text-4xl mb-4">{issue.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{issue.title}</h3>
              <p className="text-gray-600">{issue.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Dhaka7Map />

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          আপনার মতামত দিন
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-6"
        >
          কোন সমস্যাটি সবচেয়ে বেশি গুরুত্বপূর্ণ মনে করেন? আমাদের জানান।
        </motion.p>
        <button className="bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-700 transition">
          <Link to="/contact">মতামত পাঠান</Link>
        </button>
      </section>
    </div>
  );
}
