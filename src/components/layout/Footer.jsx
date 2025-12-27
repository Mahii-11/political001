/* eslint-disable no-unused-vars */
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const quickLinks = [
  { label: "হোম", href: "/" },
  { label: "আমাদের সম্পর্কে", href: "/about" },
  { label: "জীবনী", href: "/biography" },
  { label: "প্রচারণা", href: "/campaign" },
  { label: "গ্যালারি", href: "/gallery" },
  { label: "যোগাযোগ", href: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-political-blue text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <div className="text-3xl font-bold tracking-tight">
                বি<span className="text-political-red">এন</span>পি
              </div>
              <div className="flex gap-0.5 mt-1"></div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              পরিবর্তনের জন্য আমাদের আন্দোলনে যোগ দিন। একসাথে আমরা আমাদের দেশের
              জন্য একটি উজ্জ্বল ভবিষ্যত গড়ে তুলতে পারি এবং স্থায়ী ইতিবাচক
              প্রভাব সৃষ্টি করতে পারি।
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-political-red transition-colors"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">
              গুরুত্বপূর্ণ লিঙ্কসমূহ
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-political-yellow transition-colors text-sm"
                    data-testid={`footer-link-${link.label
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">যোগাযোগের তথ্য</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-political-yellow flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">
                  ১২৩ প্রগতি সরণি, মতিঝিল, ঢাকা ১০০০
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-political-yellow flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  +৮৮ ০১৭১ ২৩৪ ৫৬৭৮{" "}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-political-yellow flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  contact@netacampaign.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-political-yellow flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  সোমবার - শনিবার: সকাল ৯টা - বিকেল ৬টা
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">নিউজলেটার</h3>
            <p className="text-white/80 text-sm mb-4">
              আমাদের নিউজলেটার সাবস্ক্রাইব করুন এবং প্রচারণার আপডেট ও খবর পান।
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                data-testid="input-newsletter-email"
              />
              <Button
                className="w-full bg-political-yellow hover:bg-political-yellow/90 text-political-dark font-semibold"
                data-testid="button-newsletter-subscribe"
              >
                সাবস্ক্রাইব করুন
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p>© 2025 Hamidur Rahman Hamid</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
