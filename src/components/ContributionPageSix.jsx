import { Navbar } from './layout/Navbar'
import { Footer } from './layout/Footer'

export default function ContributionPageSix() {
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
        জনাব হামিদুর <span className="block mt-2"> রহমানের মন্তব্য</span>
        </h1>

        <p className="text-gray-700 text-justify text-lg md:text-xl leading-relaxed md:leading-loose whitespace-pre-line">
        আসন্ন ১২ ফেব্রুয়ারী জাতীয় নির্বাচনে আমি ও আমার দল প্রার্থী হিসাবে, জনগণ তথা আপনাদের উপর নির্ভর করি ও আস্থা রাখি। আশা রাখি আপনাদের মূল্যবান ভোট "ধানের শীষ" প্রতীকে প্রদান করে মহান জাতীয় সংসদে আপনাদের প্রতিনিধিত্ব করবার গুরু দায়িত্ব আমার উপর অর্পন করবেন। নির্বাচিত হলে অত্র এলাকার সমস্যা, আপনাদের ভাবনা, রাষ্ট্রে আপনাদের অধিকার প্রতিষ্ঠার জন্য মহান সংসদে আপনাদের হয়ে প্রতিনিধিত্ব করবো এবং আমার ভূমিকা যথাযথ ভাবে প্রতিষ্ঠিত করবো, ইনশাআল্লাহ্।
        </p>
      </div>

    </div>
  </div>
        </div>
      <Footer/>
    </>
  )
}
