import { forwardRef } from "react";
import candidateImage from "../assets/thumbnails/hanmid.png";
import symbolImage from "../assets/thumbnails/logo-1.jpg"; 

const VoterSlip = forwardRef(({ voter }, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-neutral-100 py-8 px-4 flex items-center justify-center font-['Hind_Siliguri']">
      <div className="w-full max-w-[500px] bg-white border-2 border-black p-1 shadow-2xl relative overflow-hidden text-black">
        <div className="border border-black h-full flex flex-col items-center pt-2 relative">
          <div className="border border-black rounded-full px-4 py-0.5 mb-2 items-center ">
            <span className="text-sm font-semibold">আল্লাহ সর্বশক্তিমান</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-center leading-tight mb-1">
            আসন্ন দ্বাদশ জাতীয় সংসদ নির্বাচনে
          </h1>
          <h2 className="text-sm sm:text-base font-semibold text-center mb-3">
            ৫৩, রাজশাহী ২ (রাজশাহী সিটি কর্পোরেশন)
          </h2>
          <div className="flex items-center gap-2 mb-3 w-full justify-center px-4">
           
      <div className="bg-black text-white px-4 py-0.5 transform -skew-x-12">
        <span className="font-bold text-lg inline-block transform skew-x-12 px-2">
         সংসদ সদস্য
         </span>
       </div>
            <span className="font-bold text-sm">পদপ্রার্থী</span>
          </div>
          <div className="w-full mb-4 relative flex justify-center">
             <div className="bg-black text-white py-1 px-8 rounded-full w-[95%] text-center">
               <h2 className="text-xl font-bold">
                 অধ্যক্ষ মোঃ শফিকুর রহমান বাদশা কে
               </h2>
             </div>
          </div>
          <div className="flex w-full px-2 mb-8 relative">
            <div className="w-5/12 relative z-10 pl-2">
               <div className="aspect-[3/4] overflow-hidden grayscale border-b border-black">
                 <img 
                   src={candidateImage} 
                   alt="Candidate" 
                   className="w-full h-full object-cover object-top"
                 />
               </div>
            </div>
            <div className="w-7/12 flex flex-col items-end text-right pr-2">
              <div className="text-center w-full flex flex-col items-center">
                <h3 className="text-xl font-bold mb-0 leading-none">ধানের শীষে</h3>
                <h4 className="text-lg font-medium mb-1">ভোট দিন</h4>
                <div className="w-32 h-32 relative mb-1">
                  <img 
                    src={symbolImage} 
                    alt="Symbol" 
                    className="w-full h-full object-contain grayscale"
                  />
                </div>
                <h4 className="text-xl font-bold">জয়যুক্ত করুন</h4>
              </div>
            </div>
          </div>
          <div className="w-full px-2 pb-1 mt-auto relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 z-10">
               <div className="border border-black rounded-full px-3 py-0.5">
                  <span className="font-bold text-xs sm:text-sm">ভোটারের তথ্য</span>
               </div>
            </div>
            <div className="border border-black w-full text-xs sm:text-sm mt-2">
              <div className="border-b border-black p-1 text-center font-semibold leading-tight pt-3">
                <p>কেন্দ্রের নামঃ {voter?.center_name || "নবাবগঞ্জ সাত শহীদ কমিউনিটি সেন্টার"}</p>
                <p>ওয়ার্ডঃ {voter?.ward_no || "২৩"}</p>
              </div>
              <div className="p-2 leading-relaxed font-medium text-left">
                <div className="grid grid-cols-1 gap-0.5">
                  <p>নাম: <span className="font-bold">{voter?.name || "নুসরাত জাহান নিশা"}</span></p>
                  <p>ওয়ার্ড: {voter?.ward_no || "২৩"}</p>
                  <p>পিতা: {voter?.father || "মোঃ লিটন"}</p>
                  <p>মাতা: {voter?.mother || "রাজিয়া আক্তার মুক্তা"}</p>
                  <p>জন্ম তারিখ: {voter?.date_of_birth || "২৯/০৭/২০০৫"}</p>
                  <p>ঠিকানা: {voter?.address || "হোসেন উদ্দিন খান ২য় লেন, নবাবগঞ্জ, লালবাগ, ঢাকা"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white text-center py-1 text-xs font-medium mt-0.5">
          মুদ্রণে: এই.সিস.আইটি, ঢাকা। ০১৬২৪১৫৬৫৮৫
        </div>
      </div>
    </div>
  );
});



export default VoterSlip;



//<p>নাম: <span className="font-bold">{voter?.name || "-"}</span></p>
//<p>ওয়ার্ড: {voter?.ward_no || "-"}</p>
//<p>পিতা: {voter?.father || "-"}</p>
//<p>মাতা: {voter?.mother || "-"}</p
//<p>জন্ম তারিখ: {voter?.date_of_birth || "-"}</p>
// <p>ঠিকানা: {voter?.address || "-"}</p>


