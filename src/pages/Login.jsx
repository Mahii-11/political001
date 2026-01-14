/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // 🔍 Validation
  const validate = () => {
    const newErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^017\d{8}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!emailRegex.test(email) && !mobileRegex.test(email)) {
      newErrors.email =
        "ইমেইল অথবা 017 দিয়ে শুরু হওয়া ১১ সংখ্যার মোবাইল নম্বর দিন";
    }

    if (!passwordRegex.test(password)) {
      newErrors.password =
        "পাসওয়ার্ড কমপক্ষে ৮ অক্ষর এবং একটি সংখ্যা ও একটি বিশেষ চিহ্ন থাকতে হবে";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔥 Login API Call (on button click)
  const handleSubmit = async (e) => {
    e.preventDefault(); // 🚫 stop page reload

    if (!validate()) return;

    setLoading(true);

  console.log("Logging in with:", { email, password });
  try {
    // 🔥 THIS is the call you asked for
    const response = await loginUser({
      email,
      password,
    });
    console.log("Response from loginUser:", response);
    console.log("Login successful:", response.user);
    localStorage.setItem("accessToken", response.token);
    localStorage.setItem("user", JSON.stringify(response.user));
    navigate("/dashboard");
  } catch (err) {
    setErrors({
      form: err.message,
    });
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4">
        {/* Background Blur */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-red-300/30 blur-3xl" />
        <div className="absolute top-40 left-1/3 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-slate-200 p-8"
        >
          <h2 className="text-3xl font-bold text-red-700 mb-2">লগইন</h2>
          <p className="text-slate-600 mb-6">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>

          {/* API Error */}
          {errors.form && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* email */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                ইমেইল বা মোবাইল নম্বর
              </label>
              <input
                type="text"
                placeholder="example@email.com অথবা 017xxxxxxxx"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                পাসওয়ার্ড
              </label>
              <input
                type="password"
                placeholder="আপনার পাসওয়ার্ড"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-blue-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-red-600 hover:underline"
              >
                পাসওয়ার্ড ভুলে গেছেন?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition
                ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700"
                }`}
            >
              {loading ? "লগইন হচ্ছে..." : "লগইন করুন"}
            </button>
          </form>

          {/* Register */}
          <p className="text-center text-sm text-slate-600 mt-6">
            নতুন ব্যবহারকারী?{" "}
            <Link
              to="/volunteer/new"
              className="text-red-600 font-medium hover:underline"
            >
              নিবন্ধন করুন
            </Link>
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
