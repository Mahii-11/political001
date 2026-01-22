import { useRef, forwardRef, useImperativeHandle } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const IDCard = forwardRef(({ user }, ref) => {
  const cardRef = useRef(null);

  const downloadPDF = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/jpeg");

    const pdf = new jsPDF({
      unit: "mm",
      format: [80, 100],
    });

    pdf.addImage(imgData, "JPEG", 0, 0, 80, 100);
    pdf.save("voter-id-card.pdf");
  };

  useImperativeHandle(ref, () => ({ downloadPDF }));

  return (
    <div
      ref={cardRef}
      className="w-[320px] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-300"
      style={{
        backgroundImage: "url('/bd-flag.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "200px",
      }}
    >
      {/* watermark overlay */}
      <div className="absolute inset-0 bg-white/90" />

      <div className="relative z-10">

        {/* HEADER BAR */}
        <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white text-center py-3">
          <h2 className="text-sm font-bold tracking-wide">
            গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
          </h2>
          <p className="text-xs tracking-wider">
            ভোটার পরিচয়পত্র
          </p>
        </div>

        {/* PROFILE SECTION */}
        <div className="flex flex-col items-center mt-3 px-4">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <img
              src={`https://election-backend.dotzpos.com/public/volunteer/${user.image}`}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-red-500"
            />
          </div>

          <h3 className="mt-2 font-bold text-base text-gray-800">
            {user.name}
          </h3>

          <span className="text-xs text-gray-600 mt-1">
            ক্রমিক নং: {user.id}
          </span>
        </div>

        {/* INFO TABLE */}
        <div className="px-4 mt-4">
          <div className="border rounded-xl overflow-hidden">
            {[
              ["ভোটার নং", user.nid_no],
              ["পিতা/স্বামী", user.guardian || "—"],
              ["জন্ম তারিখ", user.created_at?.split("T")[0]],
              ["ঠিকানা", user.present_address],
              ["ভোট কেন্দ্র", user.center || "—"],
              ["কক্ষ নং", user.room || "—"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`grid grid-cols-3 text-xs
                  ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  border-b last:border-none`}
              >
                <div className="px-2 py-2 font-semibold text-gray-700">
                  {label}
                </div>
                <div className="col-span-2 px-2 py-2 text-gray-800">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center text-[10px] text-gray-600 mt-3 mb-3 px-4">
          এই কার্ডটি সরকার কর্তৃক প্রদত্ত এবং হস্তান্তরযোগ্য নয়
        </div>
      </div>
    </div>
  );
});

export default IDCard;
