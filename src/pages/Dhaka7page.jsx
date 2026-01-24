/* eslint-disable no-unused-vars */
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Card, CardContent } from "../components/ui/card";
import AboutSpotless from "../assets/coverimages/dhaka-7 bg image.jpg";
import {
  FaRoad,
  FaGraduationCap,
  FaHospital,
} from "react-icons/fa";

import {
  FaTransgenderAlt,
  FaMale,
  FaFemale,
  FaUsers
} from "react-icons/fa";

import {
  FaWater,
  FaTrashAlt,
  FaIndustry,
  FaWarehouse,
  FaProjectDiagram,
} from "react-icons/fa";

import Dhaka7Map from "./Dhaka7Map";



 const drainagePlans = [
  {
    id: 1,
    icon: FaWater,
    title: "আধুনিক ড্রেনেজ পাইপলাইন",
    description:
      "পরিকল্পিত ও আধুনিক ড্রেনেজ পাইপলাইন স্থাপনের মাধ্যমে পানি নিষ্কাশন ব্যবস্থাকে কার্যকর ও দীর্ঘস্থায়ী করা হবে।",
  },
  {
    id: 2,
    icon: FaTrashAlt,
    title: "নিয়মিত ড্রেন পরিষ্কার",
    description:
      "নিয়মিত বর্জ্য অপসারণ ও ড্রেন পরিষ্কারের জন্য স্থায়ী এবং কার্যকর ব্যবস্থাপনা নিশ্চিত করা হবে।",
  },
  {
    id: 3,
    icon: FaIndustry,
    title: "পাম্পিং স্টেশন উন্নয়ন",
    description:
      "পাম্পিং স্টেশনের সক্ষমতা বৃদ্ধি করে অতিরিক্ত পানি দ্রুত অপসারণের ব্যবস্থা করা হবে।",
  },
  {
    id: 4,
    icon: FaWarehouse,
    title: "বৃষ্টির পানি সংরক্ষণ",
    description:
      "বৃষ্টির পানি দ্রুত সরানোর জন্য বিশেষ জলাধার নির্মাণ করা হবে।",
  },
  {
    id: 5,
    icon: FaProjectDiagram,
    title: "গলি থেকে ক্যানেল সংযোগ",
    description:
      "প্রতিটি গলির পানি নিষ্কাশন ব্যবস্থা সরাসরি বড় ক্যানেলের সাথে সংযুক্ত করা হবে।",
  },

  {  id: 6,
    icon: FaRoad ,
    title: "রাস্তা ও ট্রাফিক",
    description: "প্রধান সড়ক ও ওয়ার্ডের রাস্তার অবস্থা উন্নত করা।",
  },
  {  id: 7,
    icon: FaGraduationCap ,
    title: "শিক্ষা",
    description: "স্কুল, কলেজ ও প্রযুক্তি শিক্ষা প্রসারিত করা।",
  },
  {  id: 8,
    icon: FaHospital ,
    title: "স্বাস্থ্য",
    description: "প্রতি ওয়ার্ডে আধুনিক স্বাস্থ্যসেবা কেন্দ্র স্থাপন।",
  },
];

const values = [
  {
    icon: FaUsers,
    title: "মোট ভোটার",
    description: "৪৭৭,৭৩২ জন",
  },
  {
    icon: FaMale,
    title: "পুরুষ ভোটার",
    description:
      "২৪৭,৭৪৪ জন",
  },
  {
    icon: FaFemale,
    title: "মহিলা ভোটার",
    description:
      "২২৯,৯৭৪ জন",
  },
  {
    icon: FaTransgenderAlt,
    title: "হিজড়া ভোটার",
    description:
      "১২ জন",
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
        <section className="relative w-full h-[60vh] md:h-screen flex items-center overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-fixed z-0 scale-110"
        style={{
          backgroundImage: `url(${AboutSpotless})`,
          backgroundPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
    </section>
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
      <section className="py-20 bg-political-light">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                      ভোটার তথ্য <span className="text-gray-900">ও পরিসংখ্যান</span>
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
                            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                              <value.icon className="w-7 h-7 text-green-800" />
                            </div>
                            <h3 className="font-semibold text-political-dark mb-2">
                              {value.title}
                            </h3>
                            <p className="text-sm text-political-dark/80">
                              {value.description}
                            </p>
                          </CardContent>
                        </Card>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4">
                      পরিবর্তনের মূল <span className="text-gray-900">বিষয়সমূহ</span>
                    </h2>
                  </motion.div>
      
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {drainagePlans.map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className="h-full bg-white border-0 shadow-sm text-center hover-elevate">
                          <CardContent className="p-6">
                            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                              <value.icon className="w-7 h-7 text-green-800" />
                            </div>
                            <h3 className="font-semibold text-political-dark mb-2">
                              {value.title}
                            </h3>
                            <p className="text-sm text-political-dark/80">
                              {value.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
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
