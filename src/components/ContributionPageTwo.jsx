import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";


export default function ContributionPageTwo() {
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
        <div className="absolute inset-0 bg-gradient-to-r  to-transparent"></div>
      </div>
      <div className="p-8 md:p-14">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
        ভোটারদের প্রতি<span className="block mt-2"> অবদান</span>
        </h1>

        <p className="text-gray-700 text-justify text-lg md:text-xl leading-relaxed md:leading-loose whitespace-pre-line">
         দীর্ঘ ৩৯ বৎসর আপনাদের সন্তান হিসাবে পুরাতন ঢাকার রাজনীতির সাথে জড়িত। জাতীয় স্বার্থে সক্রিয় রাজনীতি করেছি। গণতান্ত্রিক বাংলাদেশ প্রতিষ্ঠায় সকল আন্দোলনে যুক্ত থেকে তৃনমূল থেকে রাজনীতি করেছি বিধায় এলাকার সকলের সাথে আমার আত্মিক সম্পর্ক। কেউ ভাই, কেউ বন্ধু, কেউবা সুহৃদ। আমি আপনাদের পুরাতন ঢাকার সন্তান, তাই আপনাদের প্রতিনিধিত্ব করবো এটাই ন্যায্য। বাংলাদেশ জাতীয়তাবাদী দল এবং তার নেত্রী, দেশনেত্রী বেগম খালেদা জিয়া ও জনাব তারেক রহমান আপনাদের উপর আস্থা রেখে ঢাকা-৭ (কোতয়ালী, বংশাল, লালবাগ, চকবাজার, কামরাঙ্গীরচর) আসনে আমাকে প্রার্থী হিসেবে মনোনয়ন দিয়েছেন। এই পুরান ঢাকার অলিগলি আর ধুলোবালির সাথেই মিশে আছে আমার শৈশব। এখানকার মানুষের ভালোবাসা আর কোলাহলেই আমি আমার 'নিজস্বতা' খুঁজে পাই। আপনাদের সাথে থাকলেই মনে হয় আমি আমার শেকড়ের কাছে আছি। আমার স্বপ্ন এখন আপনাদের ঘিরেই এই ঐতিহ্যের শহরকে আগলে রাখা আমার প্রাণের দায়িত্ব। জীবনের বাকিটা পথ আপনাদের সাথেই হেসে-খেলে পার করে দিতে চাই।
        </p>
      </div>

    </div>
  </div>
</div>
<Footer/>
</>
  )
}
