/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getVolunteer } from "../services/api";

function banglaNumbers(number) {
  const eng = "0123456789";
  const bang = "০১২৩৪৫৬৭৮৯";
  return String(number)
    .split("")
    .map((d) => (eng.includes(d) ? bang[eng.indexOf(d)] : d))
    .join("");
}

export default function VolunteerDetail() {
  const volunteer = useLoaderData();

  // 🔹 Centered Friendly Error
  if (!volunteer) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-lg">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            Volunteer not found!
          </h2>
          <p className="text-gray-700 mb-6">
            সম্ভবত এই ID এর কোন নিবন্ধন পাওয়া যায়নি। অনুগ্রহ করে ঠিকঠাক URL
            চেক করুন অথবা নতুন স্বেচ্ছাসেবক হিসেবে আবেদন করুন।
          </p>
          <a
            href="/volunteer/new"
            className="inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition"
          >
            নতুন আবেদন করুন
          </a>
        </div>
      </div>
    );
  }

  const { id, name, ward, phone, email, skill, address, message, status } =
    volunteer;

  const statusMap = {
    Active: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
  };

  const statusLabel = {
    Active: "অনুমোদিত",
    Pending: "অপেক্ষমাণ",
    Rejected: "বাতিল",
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-red-600 p-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
          স্বেচ্ছাসেবক তথ্য
        </h2>
        <p className="text-sm text-white/90 text-center mt-1">
          আবেদন অবস্থা এবং ব্যক্তিগত তথ্য
        </p>
      </div>

      <div className="p-6 space-y-4 text-slate-700">
        <div className="flex justify-between">
          <span className="font-semibold">ID:</span>
          <span>{banglaNumbers(id)}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">নাম:</span>
          <span>{name}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">ওয়ার্ড:</span>
          <span>{ward ? banglaNumbers(ward) : "N/A"}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">ফোন:</span>
          <span>{phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">ইমেইল:</span>
          <span>{email}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">আগ্রহ:</span>
          <span>{skill}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">ঠিকানা:</span>
          <span>{address}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">বার্তা:</span>
          <span>{message || "N/A"}</span>
        </div>
      </div>

      <div className="bg-gray-50 p-4 flex justify-between items-center border-t border-gray-200">
        <span className="font-semibold text-gray-600">অবস্থা:</span>
        <span
          className={`px-4 py-2 rounded-full text-sm font-semibold ${
            statusMap[status] || "bg-gray-100 text-gray-600"
          }`}
        >
          {statusLabel[status] || status}
        </span>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  try {
    const volunteer = await getVolunteer(params.volunteerId);
    return volunteer;
  } catch (error) {
    console.error("getVolunteer error (id:", params.volunteerId, "):", error);
    return null;
  }
}
