/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  Target,
  Shield,
  Heart,
  Users,
  Lightbulb,
  Globe,
  TrendingUp,
  Award,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const policies = [
  {
    icon: Shield,
    title: "জাতীয় নিরাপত্তা",
    description:
      "আমাদের সীমানা রক্ষা এবং প্রতিরক্ষা শক্তি বৃদ্ধির পাশাপাশি কূটনৈতিক সম্পর্ক বজায় রাখা।",
  },
  {
    icon: Heart,
    title: "স্বাস্থ্যসেবা সংস্কার",
    description:
      "অর্থনৈতিক অবস্থার পার্থক্য নির্বিশেষে সকল নাগরিকের জন্য সাশ্রয়ী ও সহজলভ্য স্বাস্থ্যসেবা নিশ্চিত করা।",
  },
  {
    icon: Lightbulb,
    title: "শিক্ষা",
    description:
      "শিশুকাল থেকে উচ্চশিক্ষা ও কারিগরি প্রশিক্ষণ পর্যন্ত মানসম্মত শিক্ষায় বিনিয়োগ।",
  },
  {
    icon: Globe,
    title: "জলবায়ু পদক্ষেপ",
    description:
      "টেকসই নীতি বাস্তবায়ন করে জলবায়ু পরিবর্তনের মোকাবিলা এবং পরিবেশ সংরক্ষণ।",
  },
  {
    icon: TrendingUp,
    title: "অর্থনৈতিক উন্নয়ন",
    description:
      "চাকরি সৃষ্টি, ক্ষুদ্র ব্যবসায়ীদের সহায়তা এবং মধ্যবিত্ত অর্থনীতিকে শক্তিশালী করা।",
  },
  {
    icon: Users,
    title: "সামাজিক ন্যায়",
    description:
      "সমতার প্রচার, নাগরিক অধিকার রক্ষা এবং আমাদের বৈচিত্র্যময় সমাজের সকলের জন্য ন্যায় নিশ্চিত করা।",
  },
];

const donationGoal = 5000000;
const currentDonation = 3750000;
const donationPercentage = (currentDonation / donationGoal) * 100;

const upcomingEvents = [
  {
    date: "জানুয়ারি ২৫",
    title: "টাউন হল মিটিং",
    location: "কমিউনিটি সেন্টার, ঢাকা",
  },
  {
    date: "জানুয়ারি ২৮",
    title: "যুব র‍্যালি",
    location: "বিশ্ববিদ্যালয় ক্যাম্পাস",
  },
  { date: "ফেব্রুয়ারি ০২", title: "নীতিমালা আলোচনা", location: "সিটি হল" },
  {
    date: "ফেব্রুয়ারি ০৫",
    title: "স্বেচ্ছাসেবক প্রশিক্ষণ",
    location: "প্রচারণা সদর দফতর",
  },
];

export default function Campaign() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 h-56 w-56 rounded-full bg-rose-300/25 blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-medium text-emerald-700"
            >
              প্রতিশ্রুতি
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4"
              data-testid="text-biography-title"
            >
              আমার নির্বাচনী প্রতিশ্রুতি
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
            >
              আমি প্রতিশ্রুতি দিচ্ছি স্বচ্ছতা, ন্যায়পরায়ণতা এবং জনগণের
              কণ্ঠস্বরকে সর্বোচ্চ গুরুত্ব দেওয়ার। আপনার আস্থা ও সমর্থন আমাদেরকে
              এক শক্তিশালী ও সমৃদ্ধ সমাজ গঠনের পথে এগিয়ে নিয়ে যাবে।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-10 mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-lg p-5 shadow-lg"
            >
              <div className="absolute inset-x-8 top-4 h-20 rounded-full bg-rose-300/30 blur-3xl" />

              <p className="relative text-sm md:text-base text-slate-700">
                আমার নির্বাচনী প্রতিশ্রুতি জনগণের সেবা ও কল্যাণকে কেন্দ্র করে
                গঠিত। প্রতিটি উদ্যোগ, নীতি ও কর্মপরিকল্পনা মানুষের জীবন মান
                উন্নয়ন এবং সমাজে ন্যায় ও সমতার নিশ্চয়তা দেওয়ার লক্ষ্য নিয়ে
                গ্রহণ করা হবে।
              </p>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-4">
                আমাদের <span className="text-gray-900">মূল নীতিমালা</span>
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                আমরা চিন্তাশীল নীতিমালার মাধ্যমে এমন পরিবর্তন আনার
                প্রতিশ্রুতিবদ্ধ, যা সকল নাগরিকের কল্যাণে কাজ করবে।
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {policies.map((policy, index) => (
                <motion.div
                  key={policy.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="h-full bg-white border-0 shadow-sm hover-elevate"
                    data-testid={`card-policy-${index}`}
                  >
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                        <policy.icon className="w-8 h-8 text-green-950" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-3">
                        {policy.title}
                      </h3>
                      <p className="text-political-dark/60">
                        {policy.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/*   <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-political-blue text-white border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Target className="w-8 h-8 text-political-yellow" />
                      <h3 className="text-2xl font-bold">প্রচারণার তহবিল</h3>
                    </div>
                    <p className="text-white/80 mb-6">
                      আমাদের তহবিল সংগ্রহের লক্ষ্যে সাহায্য করুন, যাতে আমরা
                      আমাদের বার্তা সারাদেশে পৌঁছে দিতে পারি এবং প্রতিটি
                      কমিউনিটিতে ইতিবাচক পরিবর্তন আনতে পারি।
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>
                          উত্থাপিত অর্থ: $
                          {(currentDonation / 1000000).toFixed(2)}M
                        </span>
                        <span>
                          লক্ষ্য: ${(donationGoal / 1000000).toFixed(0)}M
                        </span>
                      </div>
                      <Progress
                        value={donationPercentage}
                        className="h-3 bg-white/20"
                      />
                    </div>
                    <p className="text-political-yellow font-semibold text-lg mb-6">
                      {donationPercentage.toFixed(0)}% লক্ষ্য অর্জিত!
                    </p>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-political-red hover:bg-political-red/90 text-white"
                        data-testid="button-donate-now"
                      >
                        এখনই দান করুন
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-political-blue mb-6">
                  আসন্ন কার্যক্রম
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <Card
                      key={index}
                      className="bg-political-light border-0 hover-elevate"
                      data-testid={`card-upcoming-event-${index}`}
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-16 h-16 bg-political-red text-white rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                          <span className="text-xs font-medium">
                            {event.date.split(" ")[0]}
                          </span>
                          <span className="text-xl font-bold">
                            {event.date.split(" ")[1]}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-political-dark">
                            {event.title}
                          </h4>
                          <p className="text-sm text-political-dark/60">
                            {event.location}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>   */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-14"
            >
              বাস্তবায়ন পরিকল্পনা
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  time: "প্রথম ১০০ দিন",
                  text: "জরুরি সেবা ও প্রশাসনিক সংস্কার কার্যক্রম শুরু",
                },
                {
                  time: "প্রথম ১ বছর",
                  text: "শিক্ষা, স্বাস্থ্য ও কর্মসংস্থান প্রকল্প বাস্তবায়ন",
                },
                {
                  time: "৫ বছর",
                  text: "একটি টেকসই, স্মার্ট ও উন্নত অঞ্চল গড়ে তোলা",
                },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow flex flex-col md:flex-row md:items-center md:gap-6"
                >
                  <span className="text-green-800 font-bold text-lg min-w-[140px]">
                    {step.time}
                  </span>
                  <p className="text-gray-700 mt-2 md:mt-0">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-gray-800 max-w-3xl mx-auto"
          >
            “আমি প্রতিশ্রুতি দিচ্ছি—এই ঘোষণাগুলো শুধু কথায় নয়, বাস্তব কাজের
            মাধ্যমেই জনগণের সামনে তুলে ধরবো।”
          </motion.blockquote>

          <p className="mt-6 text-gray-600">— আপনার বিশ্বস্ত প্রার্থী</p>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 text-political-yellow mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-6">
                পরিবর্তনে আমাদের{" "}
                <span className="text-gray-900">সঙ্গে থাকুন</span>
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto mb-8">
                পরিবর্তনের অংশ হোন। সকলের জন্য একটি উজ্জ্বল ভবিষ্যত গড়তে আপনার
                সহায়তা গুরুত্বপূর্ণ।
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/volunteer/new">
                  <Button
                    size="lg"
                    className="bg-political-red hover:bg-political-red/90 text-white px-8"
                    data-testid="button-become-volunteer"
                  >
                    স্বেচ্ছাসেবক হন
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-political-blue text-political-blue hover:bg-political-blue hover:text-white px-8"
                    data-testid="button-contact-us"
                  >
                    যোগাযোগ করুন
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
