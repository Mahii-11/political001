import {
  FaUserGraduate,
  FaUsers,
  FaBriefcase,
  FaHandsHelping,
  FaLandmark,
  FaBullhorn,
} from "react-icons/fa";

const sections = [
  {
    icon: <FaUserGraduate />,
    title: "শিক্ষা ও ছাত্র রাজনীতি",
    content:
      "জনাব হামিদুর রহমান হামিদ তৎকালীন জগন্নাথ কলেজের একজন মেধাবী ও পরিশ্রমী ছাত্রনেতা ছিলেন। স্কুলজীবন থেকেই তিনি বাংলাদেশ জাতীয়তাবাদী ছাত্রদলের রাজনীতির সঙ্গে যুক্ত হন। জগন্নাথ কলেজকে বিশ্ববিদ্যালয়ে রূপান্তরের আন্দোলনে তাঁর ভূমিকা ছিল ঐতিহাসিক, যা ২০০৫ সালের ২০ অক্টোবর জগন্নাথ বিশ্ববিদ্যালয় প্রতিষ্ঠার মাধ্যমে বাস্তবায়িত হয়।",
  },
  {
    icon: <FaUsers />,
    title: "যুব রাজনীতিতে অবদান",
    content:
      "দলের এক ক্রান্তিকালে বিএনপি চেয়ারপার্সন বেগম খালেদা জিয়া তাঁকে ঢাকা মহানগর দক্ষিণ যুবদলের সভাপতির দায়িত্ব দেন। নিষ্ঠা ও সাংগঠনিক দক্ষতায় তিনি যুবদলকে একটি শক্তিশালী ও সুসংগঠিত ইউনিটে রূপ দেন।",
  },
  {
    icon: <FaBriefcase />,
    title: "একজন সফল উদ্যোক্তা",
    content:
      "রাজনীতির পাশাপাশি তিনি একজন সফল উদ্যোক্তা ও ব্যবসায়ী। সততা ও পরিশ্রমের মাধ্যমে তিনি ব্যবসায়িক অঙ্গনে সুনাম অর্জন করেন এবং তাঁর প্রতিষ্ঠিত প্রতিষ্ঠানসমূহের মাধ্যমে শত শত যুবকের কর্মসংস্থান সৃষ্টি হয়েছে।",
  },
  {
    icon: <FaHandsHelping />,
    title: "সমাজসেবায় নিবেদিত প্রাণ",
    content:
      "তিনি ‘মানবতার ফেরিওয়ালা’ হিসেবে পরিচিত। দুর্যোগে সাধারণ মানুষের পাশে দাঁড়ানো, শিক্ষা ও ধর্মীয় প্রতিষ্ঠান প্রতিষ্ঠা এবং অসাম্প্রদায়িক মূল্যবোধ লালন—সব ক্ষেত্রেই তাঁর অবদান প্রশংসনীয়।",
  },
  {
    icon: <FaLandmark />,
    title: "বর্তমান রাজনৈতিক অবস্থান",
    content:
      "বর্তমানে তিনি বাংলাদেশ জাতীয়তাবাদী দল (বিএনপি)-এর জাতীয় নির্বাহী কমিটির সদস্য। দলের ভারপ্রাপ্ত চেয়ারম্যান জনাব তারেক রহমানের নির্দেশনায় তিনি দলকে আরও গতিশীল করতে কাজ করে যাচ্ছেন।",
  },
  {
    icon: <FaBullhorn />,
    title: "তরুণ ও ব্যবসায়ীদের প্রতি বার্তা",
    content:
      "তিনি বিশ্বাস করেন—“ব্যবসায়ীরা বাঁচলে বাঁচবে দেশ।” তরুণদের উদ্যোক্তা হয়ে কর্মসংস্থান সৃষ্টির আহ্বান জানান এবং ব্যবসায়ীদের সৎ পথে ব্যবসা পরিচালনার পরামর্শ দেন।",
  },
];

const BiographySection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            জনাব হামিদুর রহমান
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            রাজনীতি, সমাজসেবা ও উন্নয়নের পথে এক অনবদ্য নেতৃত্বের প্রতিচ্ছবি
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary text-2xl mr-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
