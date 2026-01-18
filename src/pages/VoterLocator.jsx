/* eslint-disable no-unused-vars */
import { useEffect, useState, useRef  } from "react";
import { FaFilePdf, FaSms } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import { getWards, getVoters } from "../services/voterapi";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import VoterSlip from "./VoterSlip";

const enToBn = {0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯"};
const bnToEn = {"০":"0","১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9"};

const toBangla = (v="") => v.replace(/[0-9]/g, (d)=>enToBn[d]);
const toEnglish = (v="") => v.replace(/[০-৯]/g, (d)=>bnToEn[d]);

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

   const pdfRefs = useRef({}); 
   const isDeletingRef = useRef(false);

   
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
   
const downloadVoterPDF = (voter) => {
  if (!voter || !voter.id) return;

  const element = pdfRefs.current[voter.id];
  if (!element) return;

  const opt = {
    margin: 5, 
    filename: `${voter.name || "voter"}-card.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      scrollY: 0,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };  
    html2pdf().set(opt).from(element).save();
};


const handleDOBKeyDown = (e) => {
  if (e.key === "Backspace") {
    isDeletingRef.current = true;
  }
};


const handleDOBChange = (e) => {
  const input = e.target;
  const cursor = input.selectionStart;

  let raw = toEnglish(input.value);

  // 🔴 যদি delete চলাকালীন হয়
  if (isDeletingRef.current) {
    isDeletingRef.current = false;

    setFormData(prev => ({
      ...prev,
      date_of_birth: toBangla(raw)
    }));

    requestAnimationFrame(() => {
      input.setSelectionRange(cursor, cursor);
    });

    return;
  }

  // 🟢 Normal typing logic
  raw = raw.replace(/\D/g, "");
  raw = raw.slice(0, 8);

  let formatted = "";

  if (raw.length >= 2) {
    formatted += raw.slice(0, 2) + "/";
  } else {
    formatted += raw;
  }

  if (raw.length >= 4) {
    formatted += raw.slice(2, 4) + "/";
  } else if (raw.length > 2) {
    formatted += raw.slice(2);
  }

  if (raw.length > 4) {
    formatted += raw.slice(4);
  }

  const banglaValue = toBangla(formatted);

  setFormData(prev => ({
    ...prev,
    date_of_birth: banglaValue
  }));

  requestAnimationFrame(() => {
    let newCursor = cursor;

    if (formatted.endsWith("/") && cursor === formatted.length - 1) {
      newCursor += 1;
    }

    input.setSelectionRange(newCursor, newCursor);
  });
};




  const handleNameInput = (e) => {
  const value = e.target.value.replace(/[^\u0980-\u09FF\s]/g, "");
  setFormData((prev) => ({ ...prev, name: value }));
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

    let raw = toEnglish(formData.date_of_birth);
    let parts = raw.split("/");

    if(parts[0]?.length===1) parts[0]="0"+parts[0];
    if(parts[1]?.length===1) parts[1]="0"+parts[1];
    if(parts[2]) parts[2] = parts[2].slice(0,4);

    const banglaDOB = toBangla(parts.join("/"));

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
            placeholder="তারিখ/মাস/বছর"
            value={formData.date_of_birth}
            onChange={handleDOBChange}
            onKeyDown={handleDOBKeyDown}
            inputMode="numeric"
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

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {voters.map((voter) => (
        <div
           key={voter.id}
           className="flex flex-col bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
       >
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-t-2xl border-b">
        <h3 className="text-lg font-semibold text-gray-900 truncate">
          {voter.name}
        </h3>
         <p>
          <span className="font-medium text-gray-900">জন্ম তারিখ:</span>{" "}
          {voter.date_of_birth}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          ওয়ার্ড {voter.ward_no}
        </p>
        <br />
        <p>
          <span className="text-gray-900 font-semibold">ভোট কেন্দ্র:</span>{" "}
           <span className="font-semibold">{voter.center_name}</span>
        </p>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 space-y-2 text-sm text-gray-700">
       

         <p>
          <span className="font-medium text-gray-900">ক্রমিক নম্বর:</span>{" "}
          {voter.id}
        </p>

         <p>
          <span className="font-medium text-gray-900">ভোটার নম্বর:</span>{" "}
          {voter.voter_no}
        </p>

       

        <p>
          <span className="font-medium text-gray-900">পিতা:</span>{" "}
          {voter.father}
        </p>

        <p>
          <span className="font-medium text-gray-900">মাতা:</span>{" "}
          {voter.mother}
        </p>

        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-medium text-gray-900">ঠিকানা:</span>{" "}
          {voter.address}
        </p>
      </div>

      <div className="p-4 pt-0 flex gap-3">
       <button  onClick={() => downloadVoterPDF(voter)}
          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition"
      >
      <FaFilePdf size={14} /> PDF
      </button>
        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
          <FaSms size={14} /> SMS
        </button>
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <VoterSlip ref={(el) => (pdfRefs.current[voter.id] = el)} voter={voter} />
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
