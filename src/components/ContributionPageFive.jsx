import { Footer } from "./layout/Footer";
import { Navbar } from "./layout/Navbar";

export default function ContributionPageFive() {
  return (
    <>
      <Navbar/>
         <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 md:px-8">
  <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl border-t-4 border-green-600 overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="relative">
        <img
          src="/images/hamid09.png"
          alt="Youth Politics"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r to-transparent"></div>
      </div>
      <div className="p-8 md:p-14">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
         গুরুত্বপূর্ণ <span className="block mt-6">কর্মপরিকল্পনা</span>
        </h1>

        <p className="text-gray-700 text-justify text-lg md:text-xl leading-relaxed md:leading-loose whitespace-pre-line">
        যানজট, জলাবদ্ধতা, পয়ঃনিষ্কাশনের স্থায়ী সমাধান করার লক্ষে দৃশ্যমান উদ্যোগ নিতে চাই। গ্যাস সমস্যার স্থায়ী সমাধানের সর্বোচ্চ অগ্রাধিকার দিবো। আগুন ও মাদকের ভয়াবহতা থেকে এলাকাবাসীকে রক্ষা করতে সমন্বিত উদ্যোগ নিবো। ব্যবসায়ী বান্ধব পরিবেশ বজায় রাখতে সর্বোচ্চ চেষ্টা থাকবে।
       </p>
      </div>

    </div>
  </div>
        </div>
      <Footer/>
    </>
  )
}
