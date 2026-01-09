/* eslint-disable no-unused-vars */
import { Navbar } from "../components/layout/Navbar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/Footer";

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "সাধারণ",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "সেবা সমস্যা",
    "দুর্নীতি",
    "অন্য সমস্যা",
    "সাধারণ মন্তব্য",
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "নাম অবশ্যই প্রয়োজন";
    if (!formData.phone.trim()) newErrors.phone = "ফোন নাম্বার অবশ্যই প্রয়োজন";
    else if (!/^\d{10,14}$/.test(formData.phone.trim()))
      newErrors.phone = "সঠিক ফোন নাম্বার দিন (10-14 digit)";
    if (!formData.message.trim())
      newErrors.message = "অভিযোগ/মন্তব্য অবশ্যই প্রয়োজন";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    // এখানে API বা backend call করা যাবে
    console.log("Submitted data:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      category: "সাধারণ",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
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
            অভিযোগ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            আপনার পরিচয় গোপন রাখা হবে। দয়া করে সঠিক তথ্য দিয়ে অভিযোগ করুন।
          </motion.p>
        </div>
      </section>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 md:px-6 lg:px-8 ">
        <div className="bg-white shadow-lg rounded-xl w-full max-w-3xl p-8">
          {submitted && (
            <div className="bg-green-100 text-green-800 p-4 rounded mb-6 text-center">
              আপনার অভিযোগ সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                নাম <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                ফোন নাম্বার <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                ইমেইল (ঐচ্ছিক)
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                বিভাগ
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                বিষয় (ঐচ্ছিক)
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                অভিযোগ / মন্তব্য <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Privacy Note */}
            <p className="text-gray-500 text-sm">
              আপনার তথ্য সম্পূর্ণভাবে গোপন রাখা হবে।
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-300"
            >
              অভিযোগ পাঠান
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
