import { getBioData } from "@/services/api";
import { useEffect, useState } from "react";
import {
  FaUserGraduate,
  FaUsers,
  FaBriefcase,
  FaHandsHelping,
  FaLandmark,
  FaBullhorn,
} from "react-icons/fa";

const contributionIcon = {
  "শিক্ষা ও ছাত্র রাজনীতি": FaUserGraduate,
  "যুব রাজনীতিতে অবদান": FaUsers,
  "একজন সফল উদ্যোক্তা": FaBriefcase,
  "সমাজসেবায় নিবেদিত প্রাণ": FaHandsHelping,
  "বর্তমান রাজনৈতিক অবস্থান": FaLandmark,
  "তরুণ ও ব্যবসায়ীদের প্রতি বার্তা": FaBullhorn,
};

const BiographySection = () => {
  const [contribution, setContribution] = useState([]);

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
                  {item.description}
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
