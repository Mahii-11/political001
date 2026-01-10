/* eslint-disable no-unused-vars */
import { Link } from "wouter";
import { motion } from "framer-motion";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/hamidurrahmanhamiddhaka7",
    label: "Facebook",
    hoverBg: "hover:bg-blue-600",
  },
  {
    icon: FaYoutube,
    href: "https://www.youtube.com/@HamidurRahmanHamid-politician",
    label: "YouTube",
    hoverBg: "hover:bg-red-600",
  },
];

export function Footer() {
  return (
    <footer className="bg-green-50 py-16 relative overflow-hidden">
      {/* Optional subtle background shapes for premium look */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-gray-50 to-white opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* White Card Footer */}
        <div className="bg-white shadow-2xl rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-16">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-6">
                <div className="text-2xl md:text-3xl font-extrabold tracking-tight  text-green-700 font-bangla">
                  হামিদুর <span className="text-political-red">রহমান</span>
                </div>
              </div>
              <p className="text-gray-950 text-sm leading-relaxed mb-6">
                পরিবর্তনের জন্য আমাদের আন্দোলনে যোগ দিন। একসাথে আমরা আমাদের
                দেশের জন্য একটি উজ্জ্বল ভবিষ্যত গড়ে তুলতে পারি এবং স্থায়ী
                ইতিবাচক প্রভাব সৃষ্টি করতে পারি।
              </p>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-political-blue">
                যোগাযোগের তথ্য
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 text-sm">
                    ১২৩ প্রগতি সরণি, মতিঝিল, ঢাকা ১০০০
                  </span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">
                    +৮৮ ০১৭১ ২৩৪ ৫৬৭৮
                  </span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">
                    contact@netacampaign.com
                  </span>
                </li>
                <li className="flex items-center gap-3 hover:translate-x-1 transition-transform duration-300">
                  <Clock className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <span className="text-gray-800 text-sm">
                    সোমবার - শনিবার: সকাল ৯টা - বিকেল ৬টা
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Important Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-6 text-political-blue">
                গুরুত্বপূর্ণ লিংক
              </h3>
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
              </ul>

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
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200/50 mt-10 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-600">
              <p>© 2025 Hamidur Rahman Hamid</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

//#f8fafc
