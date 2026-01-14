import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      // 🔐 Not logged in → redirect
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">লোড হচ্ছে...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-red-700 mb-6">
          ড্যাশবোর্ড
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
          <div>
            <span className="font-medium text-gray-700">নাম:</span>{" "}
            {user.name || "N/A"}
          </div>

          <div>
            <span className="font-medium text-gray-700">ইমেইল:</span>{" "}
            {user.email || "N/A"}
          </div>

          <div>
            <span className="font-medium text-gray-700">ফোন নম্বর:</span>{" "}
            {user.phone || "N/A"}
          </div>

          <div>
            <span className="font-medium text-gray-700">ভূমিকা:</span>{" "}
            {user.role || "User"}
          </div>

          <div>
            <span className="font-medium text-gray-700">ইউজার আইডি:</span>{" "}
            {user.id}
          </div>
        </div>

        <button
          onClick={() => {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/login");
          }}
          className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          লগআউট
        </button>
      </main>

      <Footer />
    </div>
  );
}
