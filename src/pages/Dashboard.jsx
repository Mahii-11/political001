import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const IDCard = forwardRef(({ user }, ref) => {
  const cardRef = useRef(null);

  const downloadPDF = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/jpeg");

    const pdf = new jsPDF({
      unit: "mm",
      format: [60, 65], // ID card size
    });

    pdf.addImage(imgData, "JPEG", 0, 0, 60, canvas.height * (65 / canvas.width));
    pdf.save("voter-id-card.pdf");
  };

  // 👇 expose method to parent
  useImperativeHandle(ref, () => ({
    downloadPDF,
  }));

  return (
    <div
  ref={cardRef}
  className="w-[320px] border rounded-xl p-4 bg-white shadow"
>
  {/* TOP IMAGE */}
  <div className="flex justify-center mb-3">
    <img
      src={user.profile_photo_url || "/avatar.png"}
      alt="Profile"
      className="w-20 h-20 rounded-full object-cover border-2 border-red-200"
    />
  </div>

  {/* SERIAL */}
  <div className="flex items-center gap-2 mb-3 justify-center">
    <span className="font-semibold text-sm">
      ক্রমিক নং: {user.id || "—"}
    </span>
  </div>

  {/* DETAILS */}
  <div className="text-sm space-y-1">
    <p><strong>নাম:</strong> {user.name}</p>
    <p><strong>ভোটার নং:</strong> {user.nid_no}</p>
    <p><strong>পিতা/স্বামী:</strong> {user.guardian || "—"}</p>
    <p><strong>জন্ম তারিখ:</strong> {user.created_at?.split("T")[0]}</p>
    <p><strong>ঠিকানা:</strong> {user.present_address}</p>
    <p><strong>ভোট কেন্দ্র:</strong> {user.center || "—"}</p>
    <p><strong>কক্ষ নং:</strong> {user.room || "—"}</p>
  </div>
</div>

  );
});

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const idCardRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      navigate("/login");
    } else {
      setUser(JSON.parse(storedUser));
    }
  }, [navigate]);

  if (!user) return <p className="text-center">লোড হচ্ছে...</p>;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-red-700">ড্যাশবোর্ড</h1>
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            লগআউট
          </button>
        </div>

        {/* ID Card */}
        <div className="mt-8">
          <IDCard ref={idCardRef} user={user} />
        </div>

        {/* Download Button */}
        <button
          onClick={() => idCardRef.current.downloadPDF()}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
        >
          ID Card ডাউনলোড করুন
        </button>
      </main>

      <Footer />
    </div>
  );
}
