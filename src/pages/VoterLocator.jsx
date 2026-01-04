/* eslint-disable no-unused-vars */
import { Navbar } from "@/components/layout/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
export default function VoterLocator() {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    voterId: "",
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে API call বা dynamic lookup logic হবে
    // demo purpose:
    setResult({
      center: "কেন্দ্র-১২, ঢাকা জেলা",
      address: "রাজধানী কেন্দ্র, ঢাকা",
      booth: "বুথ ৫",
    });
  };

  return (
    <>
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
            আপনার ভোট কেন্দ্র খুঁজুন
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            নাম, জন্ম তারিখ বা ভোটার আইডি দিয়ে আপনার ভোট কেন্দ্র বের করুন
          </motion.p>
        </div>
      </section>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 md:px-6">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">নাম</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">জন্ম তারিখ</label>
              <input
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1">
                ভোটার আইডি (ঐচ্ছিক)
              </label>
              <input
                type="text"
                name="voterId"
                value={formData.voterId}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg mt-4 transition-colors"
            >
              কেন্দ্র খুঁজুন
            </button>
          </form>

          {result && (
            <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h2 className="text-green-800 font-semibold mb-2">
                আপনার ভোট কেন্দ্র:
              </h2>
              <p>কেন্দ্র: {result.center}</p>
              <p>ঠিকানা: {result.address}</p>
              <p>বুথ: {result.booth}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
