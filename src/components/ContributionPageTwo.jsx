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
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
      </div>
      <div className="p-8 md:p-14">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">
        যুব রাজনীতিতে <span className="block mt-2"> অবদান</span>
        </h1>

        <p className="text-gray-700 text-justify text-lg md:text-xl leading-relaxed md:leading-loose whitespace-pre-line">
         স্কুল জীবন থেকেই তিনি বাংলাদেশ জাতীয়তাবাদী ছাত্রদলের রাজনীতির সাথে নিজেকে যুক্ত করেন। তাঁর নেতৃত্বের অন্যতম মাইলফলক ছিল জগন্নাথ কলেজকে বিশ্ববিদ্যালয়ে রূপান্তরের আন্দোলনে অসামান্য ভূমিকা পালন করা। তিনি জগন্নাথ বিশ্ববিদ্যালয় ছাত্রদলকে সুসংগঠিত করতেও গুরুত্বপূর্ণ ভূমিকা রাখেন এবং অদ্যাবধি ছাত্রদলের পৃষ্ঠপোষকতা করে আসছেন। দীর্ঘ ৩৯ বছর যাবত তিনি বাংলাদেশ জাতীয়তাবাদী দল বিএনপি'র রাজনীতির সাথে সক্রিয়ভাবে সম্পৃক্ত আছেন। তিনি দীর্ঘ দিন অবিভক্ত ঢাকা মহানগর ছাত্রদলের সহ-সভাপতি, কেন্দ্রীয় ছাত্রদলের সহ-সভাপতি, ঢাকা মহানগর দক্ষিণ যুবদলের সভাপতি, যুবদল কেন্দ্রীয় সংসদের সহ-সভাপতি, ঢাকা মহানগর দক্ষিণ বিএনপি'র সহ-সভাপতি সহ অসংখ্য পদে গুরুত্বপূর্ণ দায়িত্ব পালন করেন। বর্তমানে তিনি বিএনপি'র নির্বাহী কমিটির অন্যতম সদস্য। দীর্ঘ রাজনৈতিক পরিক্রমায় সাংগঠনিক দায়িত্ব পালন করতে গিয়ে অসংখ্য বার কারারুদ্ধ হয়েছেন এবং বিগত ফ্যাসিবাদী আওয়ামীলীগের রাজনৈতিক প্রতিহিংসার শিকার হয়ে ১২১ টির অধিক মামলার আসামী হয়েছেন। ছাত্র-জনতার জুলাই আন্দোলনে তিনি ঢাকা মহানগরের বিভিন্ন অঙ্গ-সহযোগী সংগঠনের অন্যতম সমন্বয়ক ছিলেন।
        </p>
      </div>

    </div>
  </div>
</div>
<Footer/>
</>
  )
}
