import { forwardRef } from "react";
import candidateImage from "../assets/thumbnails/hamidbw.png";
import symbolImage from "../assets/thumbnails/bnplogo.png"; 
import { FaCut } from "react-icons/fa";


const VoterSlip = forwardRef(({ voter }, ref) => {
  return (
    <div ref={ref} className="min-h-screen bg-neutral-100 py-8 px-4 flex items-center justify-center font-['Hind_Siliguri']">
      <div className="w-full max-w-[500px] bg-white border-2 border-black p-1 shadow-2xl relative overflow-hidden text-black">
        <div className="border border-black h-full flex flex-col items-center pt-2 relative">
          <div className="rounded-full px-4 py-0.5 mb-2 items-center ">
            <span className="text-sm font-semibold">আল্লাহ সর্বশক্তিমান</span>
          </div>
          <p className="font-semibold font-bangla">--- সবার আগে বাংলাদেশ ---</p>
          <h1 className="text-xl sm:text-2xl font-bold text-center leading-tight mb-1 font-bangla">
           তারুণ্যের প্রথম ভোট, ধানের শীষের জন্য হোক
          </h1>
          <h2 className="text-sm sm:text-base font-semibold text-center mb-3 font-bangla">
          আগামী ১২ ফেব্রুয়ারী ২০২৬ ইং, রোজ বৃহস্পতিবার আসন্ন ঢাকা-৭ সংসদ সদস্য নির্বাচনে 
          </h2>
          <div className="flex items-center gap-2 mb-3 w-full justify-center px-4">
           
      <div className="text-black px-4 py-0.5 transform -skew-x-12">
        <span className="font-bold text-lg inline-block transform skew-x-12 px-2 font-bangla">
         সংসদ সদস্য
         </span>
         <p className="ml-9 font-bangla">পদপ্রার্থী</p>
       </div>
          </div>
          <div className="w-full mb-4 relative flex justify-center">
             <div className="text-black py-1 px-8 rounded-full w-[95%] text-center">
               <h2 className="text-2xl font-bold font-bangla">
               হামিদুর রহমান ভাই কে 
               </h2>
             </div>
          </div>
          <div className="flex w-full px-2 mb-8 relative">
            <div className="w-7/12 flex flex-col items-center justify-center">
              <div className="text-center w-full flex flex-col items-center">
                <h3 className="text-xl font-bold  leading-none font-bangla">ধানের শীষে</h3>
                <h4 className="text-lg font-medium font-bangla">ভোট দিয়ে </h4>
                <div className="w-36 h-36 relative -mt-2"> <img src={symbolImage} alt="Symbol" className="w-36 h-36 object-contain grayscale" /></div>
                <h4 className="text-xl font-bold -mt-3 font-bangla">জয়যুক্ত করুন</h4>
              </div>
            </div>
              <div className="w-5/12 relative z-10 pl-2">
               <div className="aspect-[3/4] overflow-hidden grayscale">
                 <img 
                   src={candidateImage} 
                   alt="Candidate" 
                   className="w-full h-5/6 object-cover object-top"
                 />
               </div> 
            </div>
          </div>
        <div className="relative flex items-center my-6">
         <FaCut className="text-base" />
          <span className="text-xs text-gray-900 whitespace-nowrap">
          ----------------------------------------এই লাইন বরাবর কাটুন---------------------------------------------
           </span>
          <FaCut className="text-base" />
          </div>
          <br />
         <div
  className="relative bg-white"
  style={{
    width: "12cm",
    height: "8cm",
  }}
>
  <div className="w-full h-full px-2 pb-1 relative flex flex-col">
    
    {/* Title */}
    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 z-10">
      <div className="rounded-full px-3 py-0.5">
        <span className="font-bold text-xs font-bangla">ভোটারের তথ্য</span>
      </div>
    </div>
    {/* Main Box */}
    <div className="border border-black w-full h-full text-[11px] mt-2 flex flex-col">

      {/* Header */}
      <div className="border-b border-black p-1 text-center font-semibold leading-tight pt-3 text-base">
        <p>কেন্দ্রের নামঃ {voter?.center_name || "-"}</p>
        <p>ওয়ার্ডঃ {voter?.ward_no || "-"}</p>
        <br />
      </div>
      <div className="p-2 font-medium text-left flex-1 text-base">
        <div className="grid grid-cols-1 gap-[2px]">
          <p>
            নাম: <span className="font-bold">{voter?.name || "-"}</span>
          </p>
          <p>জন্ম তারিখ: {voter?.date_of_birth || "-"}</p>
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


