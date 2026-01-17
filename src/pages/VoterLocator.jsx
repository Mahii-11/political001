/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaFilePdf, FaSms } from "react-icons/fa";
import { getWards, getVoters } from "../services/voterapi";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import headerImage from "../assets/thumbnails/neta-1.jpeg"; 




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
  
const printOrDownloadVoter = (voter) => {
  const printContent = `
   <div style="
  width: 700px;
  margin: auto;
  border: 4px double #000;
  padding: 15px;
  font-family: 'Noto Sans Bengali', sans-serif;
  color: #000;
  background: #fff;
">

  <!-- Top Header -->
  <div style="text-align:center; border-bottom:2px solid #000; padding-bottom:10px;">
    <h2 style="margin:0; font-size:20px;">আমার প্রিয় ভোটারগণ</h2>
    <p style="margin:5px 0; font-size:14px;">
      আসন্ন <b>জাতীয় সংসদ নির্বাচন</b> উপলক্ষে
    </p>
    <h3 style="margin:5px 0; font-size:18px; font-weight:bold;">
      আপনার মূল্যবান ভোট দিয়ে
    </h3>
    <h2 style="margin:5px 0; font-size:22px; font-weight:bold;">
      সৎ ও যোগ্য প্রার্থী নির্বাচন করুন
    </h2>
  </div>

  <!-- Middle Section -->
  <div style="display:flex; margin-top:15px; align-items:center;">
    
    <!-- Image -->
    <div style="width:40%; text-align:center;">
      <img src="${headerImage}" alt="Candidate"
        style="width:180px; border:2px solid #000;" />
    </div>
    <div style="width:60%; padding-left:15px;">
      <h3 style="margin:0; font-size:18px;">আপনার প্রার্থী</h3>
      <h2 style="margin:5px 0; font-size:22px; font-weight:bold;">
        হামিদুর রহমান
      </h2>
      <tr><td style="font-size: 16px; font-weight:bold; padding:5px; border:1px solid #ccc;">ওয়ার্ড: </td><td style="padding:5px; border:1px solid #ccc;">ওয়ার্ড ${voter.ward_no || "-"}</td></tr>
      <br/>
      <tr><td style="font-size: 16px; font-weight:bold; padding:5px; border:1px solid #ccc;">ভোট কেন্দ্র: </td><td style="padding:5px; border:1px solid #ccc;">${voter.center_name || "-"}</td></tr>
    </div>
  </div>
      <!-- Voter Info Table -->
      <h2 style="text-align:center; margin:20px 0 10px 0; font-weight:bold;">ভোটার তথ্য</h2>
      <table style="width:100%; border-collapse: collapse; margin-top:10px;">
        <tr><td style="font-weight:bold; padding:5px; border:1px solid #ccc;">নাম</td><td style="padding:5px; border:1px solid #ccc;">${voter.name || "-"}</td></tr>
        <tr><td style="font-weight:bold; padding:5px; border:1px solid #ccc;">ওয়ার্ড</td><td style="padding:5px; border:1px solid #ccc;">ওয়ার্ড ${voter.ward_no || "-"}</td></tr>
        <tr><td style="font-weight:bold; padding:5px; border:1px solid #ccc;">জন্ম তারিখ</td><td style="padding:5px; border:1px solid #ccc;">${voter.date_of_birth || "-"}</td></tr>
        <tr><td style="font-weight:bold; padding:5px; border:1px solid #ccc;">ভোট কেন্দ্র</td><td style="padding:5px; border:1px solid #ccc;">${voter.center_name || "-"}</td></tr>
        <tr><td style="font-weight:bold; padding:5px; border:1px solid #ccc;">পিতা</td><td style="padding:5px; border:1px solid #ccc;">${voter.father || "-"}</td></tr>
        <tr><td style="font-weight:bold; padding:5px; border:1px solid #ccc;">মাতা</td><td style="padding:5px; border:1px solid #ccc;">${voter.mother || "-"}</td></tr>
        <tr><td style="font-weight:bold; padding:5px; border:1px solid #ccc;">ঠিকানা</td><td style="padding:5px; border:1px solid #ccc;">${voter.address || "-"}</td></tr>
      </table>

      <!-- Footer / Call to Action -->
      <div style="margin-top:30px; text-align:center; font-size:14px; font-weight:bold; color:#0066cc;">
        আপনার ভোট মূল্যবান। নিরাপদে ভোট দিন এবং প্রিয় প্রার্থীকে সমর্থন করুন!
      </div>
    </div>
  `;

  const iframe = document.createElement("iframe");
  iframe.style.position = "absolute";
  iframe.style.width = "0px";
  iframe.style.height = "0px";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(printContent);
  doc.close();

  iframe.contentWindow.focus();
  iframe.contentWindow.print();

  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 1000);
};





 

// ------------------ DOB Input ------------------
const handleDOBChange = (e) => {
  let raw = toEnglish(e.target.value);

  // allow only digits & /
  raw = raw.replace(/[^0-9/]/g,"");
  raw = raw.replace(/\/{2,}/g,"/");

  let parts = raw.split("/");

  // limit each part length
  if(parts[0]) parts[0] = parts[0].slice(0,2); // day
  if(parts[1]) parts[1] = parts[1].slice(0,2); // month
  if(parts[2]) parts[2] = parts[2].slice(0,4); // year

  // ✅ Auto slash logic for double digit (first digit != 0)
  if(parts.length === 1 && parts[0].length === 2 && parts[0][0] !== "0") {
    if(!raw.includes("/")) parts[0] = parts[0] + "/";
  }
  if(parts.length === 2 && parts[1].length === 2 && parts[1][0] !== "0") {
    if(!raw.includes(parts[1] + "/")) parts[1] = parts[1] + "/";
  }

  setFormData(prev => ({
    ...prev,
    date_of_birth: toBangla(parts.join("/"))
  }));
};

// ------------------ Enter Key → Auto 0 / Slash ------------------
const handleDOBKeyDown = (e) => {
  if(e.key !== "Enter") return;
  e.preventDefault();

  let raw = toEnglish(formData.date_of_birth);
  let parts = raw.split("/");

  // Day
  if(parts.length === 1){
    if(parts[0].length === 1) parts[0] = "0"+parts[0]; // leading 0
    if(!parts[0].includes("/")) parts[0] = parts[0] + "/"; // ensure slash
    raw = parts[0];
  }

  // Month
  else if(parts.length === 2){
    if(parts[1].length === 1) parts[1] = "0"+parts[1]; // leading 0
    if(!parts[1].includes("/")) parts[1] = parts[1] + "/"; // ensure slash
    raw = parts[0] + "/" + parts[1];
  }

  setFormData(prev => ({
    ...prev,
    date_of_birth: toBangla(raw)
  }));
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

    // single digit → leading 0
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
            placeholder="জন্ম তারিখ (শুধু বাংলা সংখ্যা)"
            value={formData.date_of_birth}
            onChange={handleDOBChange}
            onKeyDown={handleDOBKeyDown}
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
        <p className="text-sm text-gray-500 mt-1">
          ওয়ার্ড {voter.ward_no}
        </p>
      </div>

      {/* Body */}
      <div className="p-4 flex-1 space-y-2 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">জন্ম তারিখ:</span>{" "}
          {voter.date_of_birth}
        </p>

        <p>
          <span className="font-medium text-gray-900">ভোট কেন্দ্র:</span>{" "}
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

        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-medium text-gray-900">ঠিকানা:</span>{" "}
          {voter.address}
        </p>
      </div>

      {/* Buttons */}
      <div className="p-4 pt-0 flex gap-3">
       <button  onClick={() => printOrDownloadVoter(voter)}
  
  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition"
>
  <FaFilePdf size={14} /> PDF
</button>



        <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-transform duration-200 hover:scale-[1.02] active:scale-95">
          <FaSms size={14} /> SMS
        </button>
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
