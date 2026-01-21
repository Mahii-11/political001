//import { getBioData } from "@/services/api";
//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserGraduate,
  FaUsers,
  FaBriefcase,
  FaHandsHelping,
  FaTasks ,
} from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const contributionIcon = {
  "শিক্ষা ও ছাত্র রাজনীতি": FaUserGraduate,
  "ভোটারদের প্রতি আহবান": FaUsers,
  "ব্যবসা ও সামাজিক কর্মকান্ড": FaBriefcase,
  "সমাজসেবায় নিবেদিত প্রাণ": FaHandsHelping,
  "গুরুত্বপূর্ণ কর্মপরিকল্পনা": FaTasks,
  "জনাব হামিদুর রহমানের মন্তব্য": HiOutlineChatAlt2,
};


const contribution = [
  {
    id: 1,
    name: "শিক্ষা ও রাজনীতি",
    description: "স্কুল জীবন থেকেই তিনি রাজনীতির সাথে যুক্ত....",
    link: "/biography/contribution-1",
  },
   {
    id: 2,
    name: "ব্যবসা ও সামাজিক কর্মকান্ড",
    description: "ব্যবসা ও কর্মসংস্থানে তাঁর অবদান....",
    link: "/biography/contribution-3",
  },
  {
    id: 3,
    name: "ভোটারদের প্রতি আহবান",
    description: "দীর্ঘ ৩৯ বৎসর আপনাদের সন্তান হিসাবে পুরাতন ঢাকার রাজনীতির সাথে....",
    link: "/biography/contribution-2",
  },
 
  {
    id: 4,
    name: "সমাজসেবায় নিবেদিত প্রাণ",
    description: "সমাজের প্রতি গভীর দায়বদ্ধতা ও মানুষের কল্যাণে নিরলস প্রচেষ্টাই...",
    link: "/biography/contribution-4",
  },

   {
    id: 5,
    name: "গুরুত্বপূর্ণ কর্মপরিকল্পনা",
    description: "যানজট, জলাবদ্ধতা, পয়ঃনিষ্কাশনের স্থায়ী সমাধান করার লক্ষে",
    link: "/biography/contribution-5",
  },

   {
    id: 6,
    name: "জনাব হামিদুর রহমানের মন্তব্য",
    description: "আসন্ন ১২ ফেব্রুয়ারী জাতীয় নির্বাচনে আমি ও আমার দল প্রার্থী হিসাবে, ....",
    link: "/biography/contribution-6",
  },
];



const BiographySection = () => {
 // const [contribution, setContribution] = useState([]);

 {/*    
   useEffect(() => {
    let isMounted = true;

    async function loadBiography() {
      try {
        const bio = await getBioData();
        console.log(bio);
        if (!bio || !isMounted) return;

        setContribution(
          Array.isArray(bio.contribution) ? bio.contribution : []
        );
      } catch (error) {
        console.error("loadBiography error:", error);
      }
    }

    loadBiography();

    return () => {
      isMounted = false;
    };
  }, []);
  */}

  const uiContribution = contribution.map((item) => ({
    ...item,
    icon: contributionIcon[item.name] || FaUserGraduate,
  }));


  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
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
          {uiContribution.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition"
              >
                <div className="flex items-center mb-4">
                  <div className="text-green-700 text-2xl mr-3">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  { item.description }
                  <Link
                   to={item.link}
                    className="text-green-700 font-medium ml-1 hover:underline"
                  >
                   আরও পড়ুন
                 </Link>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BiographySection;
