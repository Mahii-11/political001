// Footer.jsx
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { Phone, Mail, Shield } from "lucide-react";
import { FiLink } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const socialLinks = [
  { icon: FaFacebookF, href: "https://www.facebook.com/hamidurrahmanhamiddhaka7" },
  { icon: FaYoutube, href: "https://www.youtube.com/@HamidurRahmanHamid-politician" },
  { icon: FaInstagram, href: "https://www.instagram.com/" },
];

export  function Footer() {
  return (
    <footer className="bg-green-50 pt-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Top Intro ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <img
              src="/images/hamidlogo.png"
              alt="Logo"
              className="w-24 h-24 object-contain mb-4"
            />
            <h2 className="text-3xl font-extrabold text-green-700 font-bangla">
              হামিদুর <span className="text-political-red">রহমান</span>
            </h2>
            <p className="mt-4 text-sm text-gray-700 max-w-2xl leading-relaxed">
              পুরান ঢাকার অলিগলি আর ধুলোবালির সাথেই মিশে আছে আমার শৈশব। আপনাদের
              ভালোবাসাতেই আমার শক্তি, আপনাদের সাথেই আমার পথচলা।
            </p>
          </div>

          {/* ===== Contact Grid ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {/* Card */}
            <FooterBlock title="প্রধান সমন্বয়কারী">
              <Item icon={<FaWhatsapp />} text="+৩৪ ৬৫৩ ৩৪ ৫২৩৭" />
              <Item icon={<Phone />} text="+৮৮০১৬০৩৪৪৩২৭৮" />
              <Item icon={<Mail />} text="hamidurrahmanhamid67@gmail.com" />
            </FooterBlock>

            <FooterBlock title="তথ্য ও প্রযুক্তি সহযোগিতা">
              <Item icon={<Phone />} text="+৮৮০ ১৭১১-৮৭৩৮৯৩" />
              <Item icon={<FaWhatsapp />} text="+১ ৫১৪ ৬৬০-৫১০৮" />
              <Item icon={<Phone />} text="+৮৮০ ১৯৯১-৬৪৬২৫৪" />
            </FooterBlock>

            <FooterBlock title="মিডিয়া সেল">
              <Item icon={<Phone />} text="+৮৮০১৬৮৩-৪২৬৬৫৭" />
              <Item icon={<Phone />} text="+৮৮০ ১৩০৪-০৬৩৪৩৩" />
              <Item icon={<Phone />} text="+৮৮০ ১৭১৬-১০৮৪০২" />
            </FooterBlock>

            <FooterBlock title="সার্বিক সহযোগিতা">
              <Item icon={<Phone />} text="+৮৮০ ১৭১১-৫৩০৬৭০" />
              <Item icon={<Phone />} text="+৮৮০ ১৭১২৯২৭০৪৫" />
            </FooterBlock>

            <FooterBlock title="গুরুত্বপূর্ণ লিংক">
              <LinkItem href="https://www.ecs.gov.bd/" text="নির্বাচন কমিশন" />
              <LinkItem href="https://www.bnpbd.org/" text="বিএনপি অফিসিয়াল" />
              <LinkItem href="/privacy-policy" text="Privacy & Policy" icon={<Shield size={16} />} />
            </FooterBlock>

            <FooterBlock title="সোশ্যাল মিডিয়া">
              <div className="flex gap-4 mt-2">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:scale-110 transition"
                  >
                    <s.icon className="text-gray-700 text-sm" />
                  </a>
                ))}
              </div>
            </FooterBlock>

          </div>
        </motion.div>

        {/* ===== Bottom Bar ===== */}
        <div className="mt-10 border-t py-6 text-center text-xs text-gray-600">
          <p>© 2026 Hamidur Rahman Hamid</p>
          <div className="flex justify-center items-center gap-1 mt-1">
            <MdLocationOn />
            <span>১৯/১, বি.সি.সি রোড, ওয়ারী, ঢাকা -১২০৩</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ===== Small Components ===== */

function FooterBlock({ title, children }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-green-900 font-bangla mb-4">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Item({ icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-700">
      <span className="text-emerald-700">{icon}</span>
      {text}
    </div>
  );
}

function LinkItem({ href, text, icon }) {
  return (
    <a
      href={href}
      className="flex items-center gap-2 text-sm text-gray-700 hover:text-political-red"
    >
      {icon || <FiLink />}
      {text}
    </a>
  );
}
