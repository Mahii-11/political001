/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaFilePdf, FaSms } from "react-icons/fa";
import { getWards, getVoters } from "../services/voterapi";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function VoterLocator() {
  const [wards, setWards] = useState([]);
  const [voters, setVoters] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    date_of_birth: "",
    ward_no: "",
  });

  useEffect(() => {
    const fetchWards = async () => {
      try {
        const data = await getWards();

        if (data?.success) {
          setWards(data.wardList || []);
        } else {
          console.error("❌ Ward API success false:", data);
        }
      } catch (err) {
        setError("ওয়ার্ড লিস্ট লোড করতে সমস্যা হয়েছে");
      }
    };

    fetchWards();
  }, []);

  // =========================
  // Bangla Mapping
  // =========================
  const englishToBanglaMap = {
    a: "া",
    b: "ব",
    c: "চ",
    d: "দ",
    e: "ে",
    f: "ফ",
    g: "গ",
    h: "হ",
    i: "ি",
    j: "জ",
    k: "ক",
    l: "ল",
    m: "ম",
    n: "ন",
    o: "ো",
    p: "প",
    q: "ক",
    r: "র",
    s: "স",
    t: "ত",
    u: "ু",
    v: "ভ",
    w: "ও",
    x: "ক্স",
    y: "য",
    z: "জ",
    " ": " ",
  };

  const enToBnNumberMap = {
    0: "০",
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
  };
  const bnToEnNumberMap = {
    "০": "0",
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
  };

  const convertToBangla = (text) =>
    text
      .split("")
      .map((c) => englishToBanglaMap[c.toLowerCase()] || c)
      .join("");

  const convertToBanglaNumber = (text) =>
    text
      .split("")
      .map((c) => enToBnNumberMap[c] || c)
      .join("");

  const convertToEnglishNumber = (text) =>
    text
      .split("")
      .map((c) => bnToEnNumberMap[c] || c)
      .join("");

  // =========================
  // Name field handler → English/Bangla → Bangla
  // =========================
  const handleNameInput = (e) => {
    const banglaText = convertToBangla(e.target.value);
    setFormData((prev) => ({ ...prev, name: banglaText }));
  };

  // =========================
  // DOB field handler → smart, auto /, auto 0
  // =========================
  const handleDOBInput = (e) => {
    let raw = e.target.value;

    // Convert Bangla digits to English for processing
    raw = convertToEnglishNumber(raw);

    // Remove invalid characters (allow only digits & slash)
    raw = raw.replace(/[^0-9/]/g, "");

    // Remove extra slashes at the end
    raw = raw.replace(/\/+$/, "");

    // Split by slash
    let parts = raw.split("/");

    // Auto 0 for single-digit day/month
    parts = parts.map((p, i) => {
      if (i < 2) {
        if (p.length === 1) p = "0" + p;
        if (p.length > 2) p = p.slice(0, 2);
      }
      if (i === 2 && p.length > 4) p = p.slice(0, 4); // max 4 digits for year
      return p;
    });

    // Auto-add slash after day/month if user types continuous digits
    let finalValue = "";
    if (parts.length === 1) {
      finalValue = parts[0];
      if (parts[0].length === 2) finalValue += "/";
    } else if (parts.length === 2) {
      finalValue = parts[0] + "/" + parts[1];
      if (parts[1].length === 2) finalValue += "/";
    } else finalValue = parts.join("/");

    // Convert to Bangla digits
    const bangla = convertToBanglaNumber(finalValue);

    setFormData((prev) => ({ ...prev, date_of_birth: bangla }));
  };

  const handleDOBBlur = () => {
    // Final formatting on blur
    let raw = convertToEnglishNumber(formData.date_of_birth);
    raw = raw.replace(/[^0-9/]/g, "");
    let parts = raw.split("/");
    parts = parts.map((p, i) => {
      if (i < 2 && p.length === 1) p = "0" + p;
      if (i === 2 && p.length > 4) p = p.slice(0, 4);
      return p;
    });
    setFormData((prev) => ({
      ...prev,
      date_of_birth: convertToBanglaNumber(parts.join("/")),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setVoters([]);

    if (!formData.ward_no) {
      setError("অনুগ্রহ করে ওয়ার্ড নির্বাচন করুন");
      return;
    }

    if (!formData.date_of_birth) {
      setError("অনুগ্রহ করে জন্ম তারিখ লিখুন");
      return;
    }

    const finalDOB = convertToEnglishNumber(formData.date_of_birth);
    const formattedDOB = finalDOB
      .split("/")
      .map((p, i) => (i < 2 && p.length === 1 ? "0" + p : p))
      .join("/");
    const banglaDOB = convertToBanglaNumber(formattedDOB);

    const params = {
      ward_no: formData.ward_no,
      date_of_birth: banglaDOB,
      name: formData.name,
    };

    console.log("📤 Sending params:", params);

    setLoading(true);

    try {
      const response = await getVoters(params);

      console.log(" Voter API full response:", response);
      if (response?.success && Array.isArray(response.data)) {
        // Filter client-side to ensure exact match
        const filtered = response.data.filter(
          (voter) =>
            voter.ward_no === formData.ward_no &&
            voter.date_of_birth === banglaDOB &&
            voter.name.includes(formData.name)
        );

        {
          /*&&
            // voter.date_of_birth === formData.date_of_birth &&
            voter.name.includes(formData.name) */
        }

        if (filtered.length > 0) {
          setVoters(filtered);
        } else {
          setError("কোনো ভোটার পাওয়া যায়নি");
        }
      } else {
        console.error("❌ Unexpected API structure:", response);
        setError("ডাটা ফরম্যাট সঠিক নয়");
      }
    } catch (err) {
      console.error("❌ Voter fetch error:", err);
      setError("ভোটার তথ্য আনতে সমস্যা হয়েছে");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">ভোটার অনুসন্ধান</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-md"
        >
          <input
            type="text"
            name="name"
            placeholder="নাম (শুধু বাংলা)"
            value={formData.name}
            onChange={handleNameInput}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <input
            type="text"
            name="date_of_birth"
            placeholder="জন্ম তারিখ (শুধু বাংলা সংখ্যা)"
            value={formData.date_of_birth}
            onChange={handleDOBInput}
            onBlur={handleDOBBlur}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <select
            name="ward_no"
            value={formData.ward_no}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">ওয়ার্ড নির্বাচন করুন</option>
            {wards.map((ward) => (
              <option key={ward.id} value={ward.name}>
                ওয়ার্ড {ward.name}
              </option>
            ))}
          </select>

          <div className="md:col-span-3">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
              disabled={loading}
            >
              {loading ? "অনুসন্ধান চলছে..." : "অনুসন্ধান করুন"}
            </button>
          </div>
        </form>

        {error && <p className="text-red-600 mt-4 font-medium">{error}</p>}

        {voters.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              ভোটার তালিকা ({voters.length})
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {voters.map((voter) => (
                <div
                  key={voter.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-200 transition duration-300"
                >
                  {/* Header */}
                  <div className="p-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-t-xl border-b border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {voter.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      ওয়ার্ড {voter.ward_no}
                    </p>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-2 text-gray-700 text-sm">
                    <p>
                      <span className="font-medium text-gray-900">
                        জন্ম তারিখ:
                      </span>{" "}
                      {voter.date_of_birth}
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">
                        ভোট কেন্দ্র:
                      </span>{" "}
                      {voter.center_name}
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">পিতা:</span>{" "}
                      {voter.father}
                    </p>
                    <p>
                      <span className="font-medium text-gray-900">মাতা:</span>{" "}
                      {voter.mother}
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      <span className="font-medium text-gray-900">ঠিকানা:</span>{" "}
                      {voter.address}
                    </p>

                    {/* Buttons */}
                    <div className="mt-4 flex gap-3">
                      <button className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md text-sm hover:bg-red-700 transition hover:scale-105">
                        <FaFilePdf size={14} /> PDF ডাউনলোড
                      </button>
                      <button className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition hover:scale-105">
                        <FaSms size={14} /> SMS পাঠান
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
