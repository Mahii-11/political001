import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";


export default function ContributionPageFour() {
  return (
   <>
   <Navbar/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 md:px-8">
  <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl border-t-4 border-green-600 overflow-hidden">
    
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative">
        <img
          src="/images/hamid04.jpg"
          alt="Youth Politics"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>
      </div>
      <div className="p-8 md:p-14">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
          সমাজ সেবায়<span className="block mt-4">নিবেদিত প্রাণ</span>
        </h1>

        <p className="text-gray-700 text-justify text-lg md:text-xl leading-relaxed md:leading-loose whitespace-pre-line">
          সমাজের প্রতি গভীর দায়বদ্ধতা ও মানুষের কল্যাণে নিরলস প্রচেষ্টাই একজন প্রকৃত জননেতার পরিচয়। সেই গুণাবলির বাস্তব প্রতিচ্ছবি হলেন জনাব হামিদুর রহমান। তিনি বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)-এর একজন নিবেদিতপ্রাণ নেতা এবং ঢাকা–৭ আসনে সংসদ সদস্য মনোনয়নপ্রার্থী।
দীর্ঘদিন ধরে তিনি সাধারণ মানুষের সুখ-দুঃখের সাথী হয়ে কাজ করে যাচ্ছেন। শিক্ষা, স্বাস্থ্য, সামাজিক উন্নয়ন ও মানবিক সহায়তায় তাঁর অবদান এলাকাবাসীর কাছে সুপরিচিত। রাজনৈতিক পরিচয়ের বাইরেও তিনি একজন মানবিক মানুষ, যিনি সমাজের অবহেলিত ও পিছিয়ে পড়া মানুষের পাশে সবসময় দাঁড়ানোর চেষ্টা করেন।
সমাজ সেবাকে তিনি শুধু দায়িত্ব নয়, বরং জীবনের ব্রত হিসেবে গ্রহণ করেছেন। তাঁর এই নিষ্ঠা, সততা ও মানুষের প্রতি ভালোবাসাই তাঁকে ঢাকা–৭ আসনের একজন গ্রহণযোগ্য ও সম্মানিত নেতৃত্বে পরিণত করেছে।
        </p>
      </div>

    </div>
  </div>
</div>
   <Footer/>
   </>
  )
}
