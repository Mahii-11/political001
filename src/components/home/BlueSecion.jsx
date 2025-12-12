import { Link } from "wouter";
import { BookOpen, Building2, Users, Factory } from "lucide-react";

export default function BlueSection() {
  const items = [
    {
      title: "আমার ৩১ দফা",
      icon: <BookOpen className="w-14 h-14" />,
      link: "/dofa",
    },
    {
      title: "নির্বাচনী প্রতিশ্রুতি",
      icon: <Building2 className="w-14 h-14" />,
      link: "/protishruti",
    },
    {
      title: "স্বেচ্ছাসেবক",
      icon: <Users className="w-14 h-14" />,
      link: "/volunteer",
    },
    {
      title: "আমাদের ঢাকা",
      icon: <Factory className="w-14 h-14" />,
      link: "/dhaka",
    },
  ];

  return (
    <div className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {items.map((item, index) => (
          <Link key={index} href={item.link}>
            <div className="cursor-pointer bg-[#1A3C8E] text-white p-12 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-center items-center gap-6 hover:-translate-y-2 hover:bg-[#15306F] min-h-60">
              {item.icon}
              <h3 className="text-2xl font-semibold text-center">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
