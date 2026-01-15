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
      format: [80, 100], // ID card size
    });

    pdf.addImage(imgData, "JPEG", 0, 0, 80, 100);
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
  <table className="w-full text-sm border border-black border-collapse">
  <tbody>
    <tr>
      <td className="border border-black px-2 py-1 font-semibold w-32">
        নাম
      </td>
      <td className="border border-black px-2 py-1">
        {user.name}
      </td>
    </tr>

    <tr>
      <td className="border border-black px-2 py-1 font-semibold">
        ভোটার নং
      </td>
      <td className="border border-black px-2 py-1">
        {user.nid_no}
      </td>
    </tr>

    <tr>
      <td className="border border-black px-2 py-1 font-semibold">
        পিতা/স্বামী
      </td>
      <td className="border border-black px-2 py-1">
        {user.guardian || "—"}
      </td>
    </tr>

    <tr>
      <td className="border border-black px-2 py-1 font-semibold">
        জন্ম তারিখ
      </td>
      <td className="border border-black px-2 py-1">
        {user.created_at?.split("T")[0]}
      </td>
    </tr>

    <tr>
      <td className="border border-black px-2 py-1 font-semibold">
        ঠিকানা
      </td>
      <td className="border border-black px-2 py-1">
        {user.present_address}
      </td>
    </tr>

    <tr>
      <td className="border border-black px-2 py-1 font-semibold">
        ভোট কেন্দ্র
      </td>
      <td className="border border-black px-2 py-1">
        {user.center || "—"}
      </td>
    </tr>

    <tr>
      <td className="border border-black px-2 py-1 font-semibold">
        কক্ষ নং
      </td>
      <td className="border border-black px-2 py-1">
        {user.room || "—"}
      </td>
    </tr>
  </tbody>
</table>
</div>

  );
});

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const idCardRef = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(
  !!localStorage.getItem("accessToken")
  );

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
              setIsLoggedIn(false);
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
