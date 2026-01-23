import { useRef, forwardRef, useImperativeHandle } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const IDCard = forwardRef(({ user }, ref) => {
  const cardRef = useRef(null);

  const downloadPDF = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    const imgData = canvas.toDataURL("image/jpeg", 1.0);

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: [60, 100],
    });

    pdf.addImage(imgData, "JPEG", 0, 0, 60, 100);
    pdf.save("voter-id-card.pdf");
  };

  useImperativeHandle(ref, () => ({ downloadPDF }));

  return (
    <div
      ref={cardRef}
      className="w-[320px] rounded-2xl overflow-hidden shadow-2xl relative border border-gray-300 bg-white"
    >
      {/* ================= HEADER ================= */}
      <div>
        <div className="bg-gradient-to-r from-green-700 via-green-600 to-green-700 text-white py-3 px-4 flex items-center justify-between">
          {/* Left Logo */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="text-center flex-1 mx-2">
            <h2 className="text-[13px] font-bold tracking-wide">
              হামিদুর রহমান হামিদ ভাইকে
            </h2>
            <h2 className="text-[13px] font-bold tracking-wide">
              ধানের শীষে ভোট দিন
            </h2>
          </div>

          {/* Right Logo */}
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Subtitle Strip */}
        <div className="text-center py-2">
          <p className="inline-block bg-[#E3F2E1] text-[#6A1B1A] font-semibold text-xs tracking-wider px-3 py-1 rounded-md">
            সমাজসেবক পরিচয় পত্র
          </p>
        </div>
      </div>

      {/* ================= PROFILE IMAGE ================= */}
      <div className="flex justify-center mt-4">
        <div className="bg-white p-1 rounded-full shadow-lg">
          <img
            src={`https://election-backend.dotzpos.com/public/volunteer/${user?.image}`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-red-600"
          />
        </div>
      </div>

      {/* ================= INFO TABLE WITH WATERMARK ================= */}
      <div className="px-4 mt-4">
        <div
          className="relative border rounded-xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/logo.jpeg')",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
            backgroundSize: "160px",
          }}
        >
          {/* Watermark opacity layer */}
          <div className="absolute inset-0 bg-white/85"></div>

          {/* Table Content */}
          <div className="relative px-4 py-4">
            {/* Watermark */}
            <div
              className="absolute inset-0 opacity-10 flex items-center justify-center"
              style={{
                backgroundImage: "url('/images/logo.jpeg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "120px",
              }}
            ></div>

            {/* Info Content */}
            <div className="relative z-10 flex flex-col gap-2">
              {/* Name */}
              <h1 className="text-center text-lg font-bold text-gray-800">
                {user?.name}
              </h1>

              {/* Divider */}
              <div className="border-t border-gray-300 my-1"></div>

              {/* Details */}
              <div className="flex justify-between text-sm text-gray-700">
                <span className="font-semibold">এনআইডি:</span>
                <span>{user?.nid_no || "—"}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-700">
                <span className="font-semibold">ফোন:</span>
                <span>{user?.phone || "—"}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-700">
                <span className="font-semibold">রক্তের গ্রুপ:</span>
                <span>{user?.blood_group || "—"}</span>
              </div>

              <div className="flex justify-between text-sm text-gray-700">
                <span className="font-semibold">ঠিকানা:</span>
                <span>{user?.present_address || "—"}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="flex justify-center mt-4">
        <div className="w-20 h-20 overflow-hidden border-2 border-white shadow-md">
          <img
            src="/images/qrcode.png"
            alt="QR Code"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  );
});

export default IDCard;
