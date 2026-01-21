import { forwardRef } from "react";



const VoterSlip = forwardRef(({ voter }, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-neutral-100 py-8 px-4 flex items-center justify-center font-['Hind_Siliguri']">
      <div className="w-full max-w-[500px] bg-white border-2 border-black p-1 shadow-2xl relative overflow-hidden text-black">
        <div className="h-full flex flex-col items-center pt-2 relative">
         <div
  className="relative bg-white"
  style={{
    width: "12cm",
    height: "8cm",
  }}
>
  <div className="w-full h-full px-2 pb-1 relative flex flex-col">
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 z-10">
      <div className="rounded-full px-3 py-0.5">
        <span className="font-bold text-xs font-bangla">ভোটারের তথ্য</span>
      </div>
    </div>
    <div className="border border-black w-full h-full text-[11px] mt-0 flex flex-col">
      <div className="border-b border-black p-1 text-center font-semibold leading-tight pt-3 text-sm">
        <p>কেন্দ্রের নামঃ {voter?.center_name || "-"}</p>
        <p>ওয়ার্ডঃ {voter?.ward_no || "-"}</p>
        <br />
      </div>
      <div className="p-2 font-medium text-left flex-1 text-sm">
        <div className="grid grid-cols-1 gap-[2px]">
          <p>ক্রমিক নম্বর: {voter?.pdf_serial || "-"}</p>
          <p>নাম: <span className="font-bold">{voter?.name || "-"}</span></p>
          <p>জন্ম তারিখ: {voter?.date_of_birth || "-"}</p>
          <p>ভোটার নম্বর: {voter?.voter_no || "-"}</p>
          <p>ওয়ার্ড: {voter?.ward_no || "-"}</p>
          <p>লিঙ্গ: {voter?.voter_type || "-"}</p>
          <p>পিতা: {voter?.father || "-"}</p>
          <p>মাতা: {voter?.mother || "-"}</p>     
          <p className="leading-snug">
          ঠিকানা: {voter?.address || "-"}   
          </p>
        </div>
        </div>
    </div>
  </div>
  </div>
 </div>
</div>
</div>
);
});



export default VoterSlip;


