import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const isValid = username.length > 0 && password.length > 0;

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            username, // email or mobile
            password,
        };

        console.log("Login payload:", payload);
        // call login API here
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4">
            {/* Blur background accents */}
            
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-red-300/30 blur-3xl" />
            <div className="absolute top-40 left-1/3 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-slate-200 p-8"
            >
                <h2 className="text-3xl font-bold text-red-700 mb-2">
                    লগইন
                </h2>
                <p className="text-slate-600 mb-6">
                    আপনার অ্যাকাউন্টে প্রবেশ করুন
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email / Mobile */}
                    <div>
                        <label className="block text-gray-800 font-medium mb-2">
                            ইমেইল বা মোবাইল নম্বর
                        </label>
                        <input
                            type="text"
                            placeholder="example@email.com অথবা 017xxxxxxxx"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full rounded-lg border border-blue-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
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
                            className="w-full rounded-lg border border-blue-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>

                    {/* Forgot password */}
                    <div className="text-right">
                        <a
                            href="/forgot-password"
                            className="text-sm text-red-600 hover:underline"
                        >
                            পাসওয়ার্ড ভুলে গেছেন?
                        </a>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`w-full py-3 rounded-lg font-semibold text-white transition
              ${isValid
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        লগইন করুন
                    </button>
                </form>

                {/* Register link */}
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
            <Footer/>
        </div>
    );
    
}
