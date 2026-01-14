/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Heart, Users, Calendar, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Link, Form, useNavigate, useActionData } from "react-router-dom";
import { createVolunteer, getWards } from "../services/api";
import { useEffect, useRef, useState } from "react";

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
  const actionData = useActionData();
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden mb-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
            >
              স্বেচ্ছাসেবক হোন
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
              data-testid="text-biography-title"
            >
              স্বেচ্ছাসেবক হোন এবং সমাজে পরিবর্তনের অংশ হয়ে উঠুন
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
            >
              উন্নত আগামী বিনির্মাণে, হামিদুর রহমান হামিদের নেতৃত্বে ঐক্যবদ্ধ
              হোন!
            </motion.p>
          </div>
        </section>
        <VolunteerForm />
        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                আমাদের সঙ্গে{" "}
                <span className="text-gray-900">স্বেচ্ছাসেবক হবেন কেন?</span>
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
        ></motion.div>
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
                <h2 className="text-3xl font-bold text-red-800 mb-6">
                  ঢাকা–৭ এর মানুষের পাশে{" "}
                  <span className="text-gray-800">
                    থাকতে আমাদের সাথে যুক্ত হন
                  </span>
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

export function VolunteerForm() {
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [passwordError, setPasswordError] = useState("");
  const actionData = useActionData();
  const [error, setError] = useState("");
  const [wards, setWards] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const wardList = await getWards(); // ✅ call the API helper
      setWards(wardList);
    }
    fetchData();
  }, []);

  // File refs
  const imageRef = useRef();
  const nidRef = useRef();

  function banglaNumbers(number) {
    const eng = "0123456789";
    const bang = "০১২৩৪৫৬৭৮৯";
    return String(number)
      .split("")
      .map((d) => (eng.includes(d) ? bang[eng.indexOf(d)] : d))
      .join("");
  }

  const validators = {
    name: (v) => (v.trim().split(" ").length >= 1 ? "" : "পূর্ণ নাম লিখুন"),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "সঠিক ইমেইল লিখুন",
    phone: (v) =>
      /^01[3-9]\d{8}$/.test(v.replace(/\D/g, ""))
        ? ""
        : "সঠিক বাংলাদেশি ফোন নম্বর লিখুন",
    nid_no: (v) =>
      /^(\d{10}|\d{17})$/.test(v) ? "" : "১০ বা ১৭ সংখ্যার সঠিক NID দিন",
    ward_no: (v) => (v ? "" : "ওয়ার্ড নির্বাচন করুন"),
    skill: (v) => (v ? "" : "একটি অপশন নির্বাচন করুন"),
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!validators[name]) return;

    const error = validators[name](value);
    setFormErrors((prev) => {
      const copy = { ...prev };
      if (error) copy[name] = error;
      else delete copy[name];
      return copy;
    });
  };

  const validatePassword = (value) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if (!regex.test(value)) {
      return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে এবং একটি বড় হাতের অক্ষর, একটি সংখ্যা ও একটি বিশেষ চিহ্ন থাকতে হবে।";
    }
    return "";
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(validatePassword(value));
  };

  const isValid =
    Object.keys(formErrors).length === 0 &&
    password.length > 0 &&
    passwordError === "" &&
    imageRef.current?.files[0] &&
    nidRef.current?.files[0];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <Form
        method="post"
        className="w-full max-w-4xl bg-gray-50 rounded-xl shadow-md p-8"
        onSubmit={handleSubmit}
        //encType="multipart/form-data"
      >
        {actionData?.error && (
          <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
            {actionData.message}
          </div>
        )}

        <h2 className="text-3xl font-bold text-red-700 mb-8">
          স্বেচ্ছাসেবক <span className="text-gray-900">নিবন্ধন</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block font-medium mb-2">পূর্ণ নাম</label>
            <input
              type="text"
              name="name"
              required
              onBlur={handleBlur}
              className="w-full rounded-lg border px-4 py-3"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">ইমেইল</label>
            <input
              type="email"
              name="email"
              required
              onBlur={handleBlur}
              className="w-full rounded-lg border px-4 py-3"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          {/* NID */}
          <div>
            <label className="block font-medium mb-2">
              জাতীয় পরিচয়পত্র (NID)
            </label>
            <input
              type="text"
              name="nid_no"
              required
              onBlur={handleBlur}
              className="w-full rounded-lg border px-4 py-3"
            />
            {formErrors.nid_no && (
              <p className="text-red-500 text-sm mt-1">{formErrors.nid_no}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium mb-2">ফোন নম্বর</label>
            <input
              type="text"
              name="phone"
              required
              onBlur={handleBlur}
              className="w-full rounded-lg border px-4 py-3"
            />
            {formErrors.phone && (
              <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
            )}
          </div>

          {/* Image */}
          <div>
            <label className="block font-medium mb-2">নিজের ছবি</label>
            <input
              type="file"
              required
              name="image"
              ref={imageRef}
              accept="image/jpeg,image/jpg,image/png,image/svg+xml,image/gif"
              className="w-full border rounded-lg p-2"
            />
          </div>

          {/* NID Image */}
          <div>
            <label className="block font-medium mb-2">NID ছবি</label>
            <input
              type="file"
              required
              name="nid_image"
              ref={nidRef}
              accept="image/jpeg,image/jpg,image/png,image/svg+xml,image/gif"
              className="w-full border rounded-lg p-2"
            />
          </div>
          {/* Ward */}
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              ওয়ার্ড নির্বাচন করুন
            </label>
            <select
              value={selectedWard}
              onChange={(e) => setSelectedWard(e.target.value)}
              className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">-- ওয়ার্ড নির্বাচন করুন --</option>
              {wards.map((ward) => (
                <option key={ward.id} value={ward.id}>
                  ওয়ার্ড - {ward.name}
                </option>
              ))}
            </select>
            {formErrors.ward_no && (
              <p className="text-red-500 text-sm mt-1">{formErrors.ward_no}</p>
            )}
          </div>

          {/* Skill */}
          <div>
            <label className="block font-medium mb-2">আগ্রহের ক্ষেত্র</label>
            <select
              name="skill"
              required
              onBlur={handleBlur}
              className="w-full rounded-lg border px-4 py-3"
            >
              <option value="">নির্বাচন করুন</option>
              <option value="field">মাঠ পর্যায়ে</option>
              <option value="online">অনলাইন</option>
              <option value="event">ইভেন্ট</option>
            </select>
            {formErrors.skill && (
              <p className="text-red-500 text-sm mt-1">{formErrors.skill}</p>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="mt-6">
          <label className="block font-medium mb-2">ঠিকানা (ঐচ্ছিক)</label>
          <input
            type="text"
            name="address"
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        {/* Password */}
        <div className="mt-6">
          <label className="block font-medium mb-2">পাসওয়ার্ড</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full rounded-lg border px-4 py-3"
          />
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="block font-medium mb-2">
            অতিরিক্ত বার্তা (ঐচ্ছিক)
          </label>
          <textarea
            name="message"
            rows="4"
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className={`mt-8 w-full ${
            isValid
              ? "bg-red-600 hover:bg-red-700"
              : "bg-gray-400 cursor-not-allowed"
          } text-white font-semibold py-4 rounded-lg transition`}
        >
          আবেদন জমা দিন
        </button>
        <p className="text-center text-sm text-slate-600 mt-6">
          ইতিমধ্যেই নিবন্ধিত?{" "}
          <Link
            to="/login"
            className="text-red-600 font-medium hover:underline"
          >
            লগইন করুন
          </Link>
        </p>
      </Form>
    </div>
  );

  async function handleSubmit(event) {
    if (!isValid) {
      event.preventDefault();
    } else {
      const formData = new FormData(event.target);
      try {
        console.log("Submitting volunteer data:", formData);
        const response = await createVolunteer(formData);

        if (!response || !response.data.id) {
          return {
            error: true,
            message: "স্বেচ্ছাসেবক নিবন্ধন ব্যর্থ হয়েছে।",
          };
        }

        console.log("Volunteer created:", response);
        alert("স্বেচ্ছাসেবক নিবন্ধন সফল হয়েছে!");
        navigate("/login", { replace: true });
        return {
          success: true,
          volunteer: response,
        };
      } catch (err) {
        if (err.message?.toLowerCase().includes("duplicate")) {
          return {
            error: true,
            message: "আপনি সম্ভবত একই ফোন বা ইমেইল দিয়ে ইতিমধ্যে আবেদন করেছেন।",
          };
        }

        return { error: true, message: "স্বেচ্ছাসেবক নিবন্ধন ব্যর্থ হয়েছে।" };
      }
    }
  }
}
