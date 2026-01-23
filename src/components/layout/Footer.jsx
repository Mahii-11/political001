// Footer.jsx
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import ContactInfoCard from "./ContactInfoCard";
import { FiLink } from "react-icons/fi";
import { Shield } from "lucide-react";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/hamidurrahmanhamiddhaka7",
    label: "Facebook",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@HamidurRahmanHamid-politician",
    label: "YouTube",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <div className="bg-green-50 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <ContactInfoCard
            title="প্রধান সমন্বয়কারী"
            phones={["+৮৮০ ১৬০ ৩৪৪ ৩২৭৮"]}
            whatsapp={["+৩৪ ৬৫৩ ৩৪ ৫২৩৭"]}
            email="contact@netacampaign.com"
          />
          <ContactInfoCard
            title="তথ্য ও প্রযুক্তি সহযোগিতা"
            phones={["+৮৮০ ১৭১১-৮৭৩৮৯৩", "+৮৮০ ১৯৯১-৬৪৬২৫৪"]}
            whatsapp={["+১ ৫১৪ ৬৬০-৫১০৮"]}
          />
        </div>

        {/* Center Column */}
        <div className="flex flex-col items-center text-center">
          <img src="/images/logo.jpeg" alt="Logo" className="w-20 h-20 mb-2" />
          <h2 className="text-green-800 font-bold text-base">হামিদুর রহমান</h2>
          <p className="text-xs text-gray-600 mt-2 max-w-xs">
            পরিবর্তনের জন্য আমাদের আন্দোলনে যোগ দিন। একসাথে আমরা দেশের জন্য একটি উন্নত ভবিষ্যৎ গড়ে তুলতে পারি এবং স্থায়ী ইতিবাচক প্রভাব সৃষ্টি করতে পারি।
          </p>

          {/* Social Links */}
          <div className="flex gap-3 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110 ${social.hoverBg} text-white`}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-gray-800" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {/* Contact Cards */}
          <ContactInfoCard
            title="মিডিয়া সেল"
            phones={["+৮৮০১৬৮৩-৪২৬৬৫৭", "+৮৮০ ১৩০৪-০৬৩৪৩৩", "+৮৮০ ১৭১৬-১০৮৪০২"]}
          />

          {/* Important Links */}
          <div className="bg-white rounded-2xl border shadow-sm p-4">
            <h3 className="text-sm font-semibold text-green-800 mb-2">গুরুত্বপূর্ণ লিঙ্ক</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                <FiLink className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm">
                  <a
                    href="https://www.ecs.gov.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-political-red transition-colors"
                  >
                    নির্বাচন কমিশন ওয়েবসাইট
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                <FiLink className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                <span className="text-gray-800 text-sm">
                  <a
                    href="https://www.bnpbd.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-political-red transition-colors"
                  >
                    বিএনপি অফিসিয়াল ওয়েবসাইট
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                <a
                  href="/privacy-policy"
                  className="flex items-center gap-2 text-gray-700 hover:text-political-red"
                >
                  <Shield size={18} className="text-green-700" />
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-500 mt-6">
        © 2025 Hamidur Rahman Hamid &nbsp;|&nbsp; ১৯/১, ২০১/সি, ওয়াসি রোড, ঢাকা-১২০৩
      </div>
    </div>
  );
}
