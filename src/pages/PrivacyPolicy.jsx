/* eslint-disable no-unused-vars */
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Users,
  MapPin,
  RefreshCcw,
  Mail,
  Phone,
} from "lucide-react";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Introduction",
      icon: ShieldCheck,
      content:
        "This Privacy Policy explains how we collect, use, store, and protect your information when you use our mobile and web-based volunteer, voter search, survey, and election-support system.",
    },
    {
      title: "Information We Collect",
      icon: Lock,
      content: [
        "Personal information: name, father/spouse name, date of birth, gender, mobile number, address, photo.",
        "Optional data: NID (only if voluntarily submitted).",
        "Device data: IP address, analytics information.",
        "Volunteer activity: surveys, tasks, booth reports, and issues.",
      ],
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "Register and verify users.",
        "Generate volunteer IDs.",
        "Assist polling center search and election-related activities.",
      ],
    },
    {
      title: "User Rights",
      icon: ShieldCheck,
      content:
        "Users may access, update, delete their data, or withdraw permissions at any time.",
    },
    {
      title: "Children’s Privacy",
      icon: Users,
      content:
        "This platform is not intended for children under the age of 13.",
    },
    {
      title: "Third Parties",
      icon: Lock,
      content:
        "External services may include SMS gateways, hosting providers, analytics services, and Google APIs.",
    },
    {
      title: "Location Access",
      icon: MapPin,
      content:
        "Location access is optional and used only for field verification purposes.",
    },
    {
      title: "Policy Updates",
      icon: RefreshCcw,
      content:
        "We may update this policy from time to time. Users will be notified of any significant changes.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50  text-gray-950">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="mt-4 text-gray-900 max-w-2xl mx-auto">
              Effective Date:{" "}
              <span className="text-gray-800">[Insert Date]</span> · Last
              Updated: <span className="text-gray-800">[Insert Date]</span>
            </p>
          </motion.div>

          <div className="grid gap-6">
            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-lg hover:shadow-indigo-500/10 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                      <Icon size={26} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2">
                        {section.title}
                      </h2>
                      {Array.isArray(section.content) ? (
                        <ul className="list-disc list-inside space-y-2 text-gray-900">
                          {section.content.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-900 leading-relaxed">
                          {section.content}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14 rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 p-8"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3 text-gray-900">
              <p className="flex items-center gap-3">
                <Mail className="text-indigo-400" /> Email: [Insert Email]
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-cyan-400" /> Phone: [Insert Phone Number]
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
