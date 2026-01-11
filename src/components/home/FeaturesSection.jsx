import {
  CheckCircle,
  Heart,
  BarChart2,
  User,
  Home,
  FileText,
} from "react-feather";

const features = [
  {
    title: "সামাজিক নিরাপত্তা",
    description:
      "আমি বিশ্বাস করি যে, প্রতিটি মানুষের জন্য একটি সুরক্ষিত এবং নিশ্চিত ভবিষ্যত তৈরি করা উচিত। আমি এমন একটি পরিবেশ গঠন করতে চাই যেখানে সকলেই সমান সুযোগ ও সুরক্ষা পাবে।",
    icon: <CheckCircle className="w-8 h-8 text-green-800" />,
  },
  {
    title: "চিকিৎসা সেবা",
    description:
      "আমি চাই সকলের জন্য উন্নত এবং সহজলভ্য চিকিৎসা সেবা নিশ্চিত করা হোক। স্বাস্থ্যসেবা ব্যবস্থার উন্নয়ন এবং সকল নাগরিকের জন্য এটি সহজে প্রাপ্য হোক, এটাই আমার লক্ষ্য।",
    icon: <Heart className="w-8 h-8 text-green-800" />,
  },
  {
    title: "দেশীয় অর্থনীতি",
    description:
      "আমি দেশের অর্থনৈতিক উন্নয়ন ও কর্মসংস্থানের সুযোগ বৃদ্ধির জন্য কাজ করতে চাই। আমার লক্ষ্য হল, নতুন উদ্যোগ ও পরিকল্পনার মাধ্যমে দেশের অর্থনীতি আরও শক্তিশালী করা।",
    icon: <BarChart2 className="w-8 h-8 text-green-800" />,
  },
  {
    title: "নারী অধিকার",
    description:
      "আমি নারী অধিকাররের প্রতি অত্যন্ত প্রতিশ্রুতিবদ্ধ। আমি এমন একটি সমাজ গড়ে তুলতে চাই যেখানে নারীরা সমান অধিকার ও মর্যাদা পাবে।",
    icon: <User className="w-8 h-8 text-green-800" />,
  },
  {
    title: "বৈদেশিক নীতি",
    description:
      "আমি একটি শক্তিশালী এবং বন্ধুত্বপূর্ণ বৈদেশিক নীতি গড়ে তোলার জন্য কাজ করতে চাই, যা দেশের আন্তর্জাতিক সম্পর্ককে উন্নত করবে।",
    icon: <Home className="w-8 h-8 text-green-800" />,
  },
  {
    title: "শিক্ষার প্রতি মনোযোগ",
    description:
      "আমি শিক্ষার মান উন্নয়ন এবং সবার জন্য সমান শিক্ষার সুযোগ নিশ্চিত করতে চাই। আমার বিশ্বাস, একটি শিক্ষিত সমাজই দেশের সঠিক পথ প্রদর্শক হতে পারে।",
    icon: <FileText className="w-8 h-8 text-green-800" />,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
