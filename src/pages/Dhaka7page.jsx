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
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-gallery-page-title"
          >
            ঢাকা-৭ আসন তথ্য
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            জনসংখ্যা, ভোটার তথ্য, প্রার্থী এবং নির্বাচনী ইতিহাসের বিস্তারিত
          </motion.p>
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
              <div className="text-blue-500 text-4xl mb-4">{item.icon}</div>
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
              <div className="text-blue-500 text-4xl mb-4">{issue.icon}</div>
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
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition">
          <Link to="/contact">মতামত পাঠান</Link>
        </button>
      </section>
    </div>
  );
}
