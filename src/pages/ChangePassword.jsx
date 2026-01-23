import React, { useState, useEffect } from "react";
import axios from "axios";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Dynamic validation
  useEffect(() => {
    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      setError("নতুন পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলেনি।");
    } else if (newPassword && oldPassword && newPassword === oldPassword) {
      setError("নতুন পাসওয়ার্ড পুরোনো পাসওয়ার্ডের সমান হতে পারবে না।");
    } else {
      setError("");
    }
  }, [newPassword, confirmPassword, oldPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("নতুন পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলেনি।");
      return;
    }

    if (oldPassword === newPassword) {
      setError("নতুন পাসওয়ার্ড পুরোনো পাসওয়ার্ডের সমান হতে পারবে না।");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/change-password", {
        old_password: oldPassword,
        password: newPassword,
      });

      if (response.status === 200) {
        setSuccess("পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!");
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        setError("কিছু ভুল হয়েছে। আবার চেষ্টা করুন।");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "পাসওয়ার্ড পরিবর্তন ব্যর্থ হয়েছে।");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[320px] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-300 bg-white">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-2 text-red-600">পাসওয়ার্ড পরিবর্তন করুন</h2>
        <p className="text-sm text-gray-600 mb-6">আপনার পাসওয়ার্ড আপডেট করুন</p>

        {error && <p className="text-red-600 mb-3">{error}</p>}
        {success && <p className="text-green-600 mb-3">{success}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">পুরোনো পাসওয়ার্ড</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="পুরোনো পাসওয়ার্ড লিখুন"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">নতুন পাসওয়ার্ড</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="নতুন পাসওয়ার্ড লিখুন"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">কনফার্ম পাসওয়ার্ড</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="পুনরায় নতুন পাসওয়ার্ড লিখুন"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-red-600 text-white font-medium py-2 rounded-lg hover:bg-red-700 transition-colors ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "আপডেট হচ্ছে..." : "পাসওয়ার্ড আপডেট করুন"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
