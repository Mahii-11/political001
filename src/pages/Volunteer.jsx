/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Heart, Users, Calendar, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Form, redirect } from "react-router-dom";
import { createVolunteer } from "../services/api";

const benefits = [
  {
    icon: Heart,
    title: "পরিবর্তনের অংশ হোন",
    description:
      "আপনার ছোট একটি উদ্যোগও সমাজে বড় পরিবর্তন আনতে পারে। নিজের কমিউনিটি ও দেশের কল্যাণে বাস্তব ও ইতিবাচক পরিবর্তনের অংশ হয়ে উঠুন।",
  },
  {
    icon: Users,
    title: "একটি শক্তিশালী কমিউনিটিতে যুক্ত হন",
    description:
      "আপনার মতো একই আদর্শ ও মূল্যবোধে বিশ্বাসী মানুষের সঙ্গে পরিচিত হন। একসাথে কাজ করুন, শিখুন এবং একটি ঐক্যবদ্ধ কমিউনিটি গড়ে তুলুন।",
  },
  {
    icon: Calendar,
    title: "নমনীয় সময়সূচি",
    description:
      "আপনার পড়াশোনা, চাকরি বা ব্যক্তিগত জীবনের সঙ্গে সামঞ্জস্য রেখে স্বেচ্ছাসেবী কার্যক্রমে অংশ নেওয়ার সুযোগ উপভোগ করুন।",
  },
  {
    icon: Award,
    title: "মূল্যবান অভিজ্ঞতা অর্জন করুন",
    description:
      "নেতৃত্ব, সংগঠন এবং দলগত কাজের বাস্তব অভিজ্ঞতা অর্জন করুন, যা আপনার ব্যক্তিগত ও পেশাগত জীবনে দীর্ঘমেয়াদে উপকারে আসবে।",
  },
];

const roles = [
  "ঘরে ঘরে প্রচারণা (ডোর-টু-ডোর ক্যাম্পেইন)",
  "ফোন কলের মাধ্যমে জনসংযোগ",
  "ইভেন্ট ও কর্মসূচি ব্যবস্থাপনা",
  "সোশ্যাল মিডিয়া পরিচালনা",
  "প্রশাসনিক সহায়তা",
  "গ্রাফিক ডিজাইন",
  "কনটেন্ট লেখা",
  "অনুবাদ সেবা",
];

export default function Volunteer() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
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
              data-testid="text-volunteer-title"
            >
              উন্নত আগামী বিনির্মাণে, হামিদুর রহমান হামিদের নেতৃত্বে ঐক্যবদ্ধ
              হোন!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              স্বেচ্ছাসেবক হোন
            </motion.p>
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
                আমাদের সঙ্গে স্বেচ্ছাসেবক হবেন কেন?
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                হাজারো নিবেদিত স্বেচ্ছাসেবকের সঙ্গে যুক্ত হন, যারা নিজ নিজ
                কমিউনিটিতে বাস্তব পরিবর্তন এনে দিচ্ছেন।
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-0 shadow-sm text-center hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-political-red/10 flex items-center justify-center mx-auto mb-4">
                        <benefit.icon className="w-7 h-7 text-political-red" />
                      </div>
                      <h3 className="font-semibold text-political-dark mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-political-dark/60">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <VolunteerForm />
        </motion.div>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="gap-12  flex items-center justify-between">
              {/*grid grid-cols-1 lg:grid-cols-2 items-start*/}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-political-blue mb-6">
                  ঢাকা–৭ এর মানুষের পাশে থাকতে আমাদের সাথে যুক্ত হন
                </h2>
                <p className="text-political-dark/70 mb-8">
                  স্বেচ্ছাসেবক হিসেবে নিবন্ধনের জন্য নিচের ফর্মটি পূরণ করুন।
                  আমরা সব ধরনের পটভূমি ও দক্ষতার মানুষকে স্বাগত জানাই। একসাথে
                  কাজ করে আমরা সমাজে বাস্তব পরিবর্তন আনতে পারি।
                </p>

                <div className="space-y-4">
                  <h3 className="font-semibold text-political-dark">
                    উপলব্ধ দায়িত্বসমূহ:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {roles.map((role) => (
                      <div
                        key={role}
                        className="flex items-center gap-2 text-political-dark/70"
                      >
                        <CheckCircle className="w-4 h-4 text-political-red flex-shrink-0" />
                        <span className="text-sm">{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const fakeVolunteers = [
  {
    id: 1,
    name: "রাকিব হাসান",
    ward: "২৫",
    phone: "০১৭১২৩৪৫৬৭৮",
    email: "rakib@example.com",
    skill: "মাঠ পর্যায়ে",
    address: "ধানমন্ডি, ঢাকা",
    message: "hello",
    status: "Active",
  },
];

export function VolunteerForm() {
  const volunteers = fakeVolunteers;
  function banglaNumbers(number) {
    const eng = "0123456789";
    const bang = "০১২৩৪৫৬৭৮৯";
    return String(number)
      .split("")
      .map((d) => (eng.includes(d) ? bang[eng.indexOf(d)] : d))
      .join("");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <Form
        method="post"
        className="w-full max-w-4xl bg-gray-50 rounded-xl shadow-md p-8"
      >
        <h2 className="text-3xl font-bold text-blue-900 mb-8">
          স্বেচ্ছাসেবক নিবন্ধন
        </h2>

        {/* Grid Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              পূর্ণ নাম
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="আপনার পুরো নাম:"
              className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="people@example.com"
              className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              জাতীয় পরিচয়পত্র (NID) নম্বর
            </label>
            <input
              type="text"
              name="nid"
              placeholder="আপনার ১০ বা ১৭ সংখ্যার NID নম্বর লিখুন"
              className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              ফোন নম্বর
            </label>
            <input
              type="text"
              name="phone"
              placeholder="+০১৭১ ২৩৪ ৫৬৭৮"
              className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              এলাকা / ওয়ার্ড নম্বর
            </label>
            <select
              name="ward"
              className="w-full rounded-lg border border-blue-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              defaultValue=""
            >
              <option value="">ওয়ার্ড নির্বাচন করুন</option>
              {[23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 56, 57].map(
                (w) => (
                  <option key={w} value={w}>
                    ওয়ার্ড–{banglaNumbers(w)}
                  </option>
                )
              )}
            </select>
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              আগ্রহের ক্ষেত্র
            </label>
            <select
              name="interest"
              className="w-full rounded-lg border border-blue-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">আপনি কীভাবে যুক্ত হতে চান?</option>
              <option value="field">মাঠ পর্যায়ে</option>
              <option value="online">অনলাইন সাপোর্ট</option>
              <option value="event">ইভেন্ট ব্যবস্থাপনা</option>
            </select>
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <label className="block text-gray-800 font-medium mb-2">ঠিকানা</label>
          <input
            type="text"
            name="address"
            placeholder="আপনার ঠিকানা লিখুন"
            className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Additional Message */}
        <div className="mt-6">
          <label className="block text-gray-800 font-medium mb-2">
            অতিরিক্ত বার্তা (ঐচ্ছিক)
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="নিজের সম্পর্কে সংক্ষেপে লিখুন..."
            className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <input
            type="hidden"
            name="volunteers"
            value={JSON.stringify(volunteers)}
          />
        </div>
        <button
          type="submit"
          className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition"
        >
          আবেদন জমা দিন
        </button>
      </Form>
    </div>
  );
}

// Action function for form submission
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log("Volunteer form submitted:", data);

  const info = {
    ...data,
    volunteers: JSON.parse(data.volunteers),
  };

  const newVolunteer = await createVolunteer(info);
  return redirect(`/register-volunteer/${newVolunteer.data.id}`);
}
