/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const scheduleFilters = ["All", "Jan 17", "Jan 18", "Jan 21", "Jan 23"];

const eventsData = [
  // -------------------- জানুয়ারি ১৭ --------------------
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "নির্বাচন প্রচারাভিযান",
    date: "জানুয়ারি ১৭",
    time: "সকাল ১০টা - ১১টা",
    location: "সাভার রিজ, ঢাকা, বাংলাদেশ",
  },
  {
    id: 2,
    image: "/images/image2.jpg",
    title: "স্বেচ্ছাসেবক মিলন",
    date: "জানুয়ারি ১৭",
    time: "দুপুর ১টা - ৩টা",
    location: "কারওয়ান বাজার হল, ঢাকা, বাংলাদেশ",
  },
  {
    id: 3,
    image: "/images/image3.jpg",
    title: "সংবাদ সম্মেলন",
    date: "জানুয়ারি ১৭",
    time: "বিকেল ৪টা - ৬টা",
    location: "মতিঝিল সেন্ট্রাল, ঢাকা, বাংলাদেশ",
  },
  {
    id: 4,
    image: "/images/image4.jpg",
    title: "জনসভা ও বক্তৃতা",
    date: "জানুয়ারি ১৭",
    time: "সন্ধ্যা ৬টা - ৮টা",
    location: "গুলশান অ্যারেনা, ঢাকা, বাংলাদেশ",
  },
  {
    id: 5,
    image: "/images/image5.jpg",
    title: "দান সংগ্রহ কার্যক্রম",
    date: "জানুয়ারি ১৭",
    time: "সকাল ৮টা - ১০টা",
    location: "ধানমন্ডি কমিউনিটি সেন্টার, ঢাকা, বাংলাদেশ",
  },
  {
    id: 6,
    image: "/images/image6.jpg",
    title: "সচেতনতা র‍্যালি",
    date: "জানুয়ারি ১৭",
    time: "বিকেল ৫টা - ৭টা",
    location: "লালবাগ পার্ক, ঢাকা, বাংলাদেশ",
  },

  // -------------------- জানুয়ারি ১৮ --------------------
  {
    id: 7,
    image: "/images/image7.jpg",
    title: "কমিউনিটি মিলন",
    date: "জানুয়ারি ১৮",
    time: "দুপুর ২টা - ৪টা",
    location: "মিরপুর স্ট্রিট, ঢাকা, বাংলাদেশ",
  },
  {
    id: 8,
    image: "/images/image8.jpg",
    title: "দলের সমাবেশ",
    date: "জানুয়ারি ১৮",
    time: "সকাল ১১টা - দুপুর ১টা",
    location: "উত্তরা মেইডো গ্রাউন্ডস, ঢাকা, বাংলাদেশ",
  },
  {
    id: 9,
    image: "/images/image9.jpg",
    title: "প্রচারণার ফটোশুট",
    date: "জানুয়ারি ১৮",
    time: "বিকেল ৫টা - ৭টা",
    location: "বনানী পিয়ার, ঢাকা, বাংলাদেশ",
  },
  {
    id: 10,
    image: "/images/image10.jpg",
    title: "ফান্ডরেইজার সভা",
    date: "জানুয়ারি ১৮",
    time: "রাত ৭টা - ৯টা",
    location: "মতিঝিল ভিউ রিসোর্ট, ঢাকা, বাংলাদেশ",
  },
  {
    id: 11,
    image: "/images/image11.jpg",
    title: "স্থানীয় এলাকা পরিদর্শন",
    date: "জানুয়ারি ১৮",
    time: "সকাল ৯টা - ১১টা",
    location: "ডেমরা টাউন, ঢাকা, বাংলাদেশ",
  },
  {
    id: 12,
    image: "/images/image12.jpg",
    title: "পড়শি এলাকা হাঁটাহাঁটি",
    date: "জানুয়ারি ১৮",
    time: "বিকেল ৪টা - ৬টা",
    location: "কলাবাগান স্ট্রিট, ঢাকা, বাংলাদেশ",
  },

  // -------------------- জানুয়ারি ২১ --------------------
  {
    id: 13,
    image: "/images/image13.jpg",
    title: "সংবাদ সম্মেলন",
    date: "জানুয়ারি ২১",
    time: "দুপুর ১টা - ৩টা",
    location: "মোহাম্মদপুর ক্রিক, ঢাকা, বাংলাদেশ",
  },
  {
    id: 14,
    image: "/images/image14.jpg",
    title: "কমিউনিটি আলোচনা",
    date: "জানুয়ারি ২১",
    time: "সকাল ১০টা - দুপুর ১২টা",
    location: "নিউ মার্কেট অ্যারেনা, ঢাকা, বাংলাদেশ",
  },
  {
    id: 15,
    image: "/images/image15.jpg",
    title: "মিডিয়া সাক্ষাৎকার",
    date: "জানুয়ারি ২১",
    time: "বিকেল ৪টা - ৬টা",
    location: "ধানমন্ডি স্টুডিও, ঢাকা, বাংলাদেশ",
  },
  {
    id: 16,
    image: "/images/image16.jpg",
    title: "কৌশল আলোচনা",
    date: "জানুয়ারি ২১",
    time: "দুপুর ২টা - ৩টা",
    location: "গুলশান এক্সিকিউটিভ টাওয়ার, ঢাকা, বাংলাদেশ",
  },
  {
    id: 17,
    image: "/images/image17.jpg",
    title: "দলের কর্মশালা",
    date: "জানুয়ারি ২১",
    time: "বিকেল ৫টা - ৭টা",
    location: "বনানী ইনোভেশন ল্যাব, ঢাকা, বাংলাদেশ",
  },
  {
    id: 18,
    image: "/images/image18.jpg",
    title: "নীতি ঘোষণা",
    date: "জানুয়ারি ২১",
    time: "রাত ৭টা - ৯টা",
    location: "সিটি হল, ঢাকা, বাংলাদেশ",
  },

  // -------------------- জানুয়ারি ২৩ --------------------
  {
    id: 19,
    image: "/images/image19.jpg",
    title: "ফান্ডরেইজিং প্রোগ্রাম",
    date: "জানুয়ারি ২৩",
    time: "বিকেল ৪টা - ৬টা",
    location: "মুগদা গ্র্যান্ড পার্ক, ঢাকা, বাংলাদেশ",
  },
  {
    id: 20,
    image: "/images/image20.jpg",
    title: "সমর্থক মিলন",
    date: "জানুয়ারি ২৩",
    time: "সন্ধ্যা ৬টা - ৮টা",
    location: "কারওয়ান বাজার সেন্টার, ঢাকা, বাংলাদেশ",
  },
  {
    id: 21,
    image: "/images/image21.jpg",
    title: "নেতৃত্বের সেশন",
    date: "জানুয়ারি ২৩",
    time: "দুপুর ১টা - ৩টা",
    location: "সান্তা মনিকা হল, ঢাকা, বাংলাদেশ",
  },
  {
    id: 22,
    image: "/images/image22.jpg",
    title: "জনসাধারণের মিলন",
    date: "জানুয়ারি ২৩",
    time: "সকাল ৯টা - ১১টা",
    location: "মতিঝিল স্ট্রিট, ঢাকা, বাংলাদেশ",
  },
  {
    id: 23,
    image: "/images/image23.jpg",
    title: "যুব সম্বর্ধনা ও আলোচনাসভা",
    date: "জানুয়ারি ২৩",
    time: "সকাল ১১টা - দুপুর ১টা",
    location: "ধানমন্ডি যুবা কেন্দ্র, ঢাকা, বাংলাদেশ",
  },
  {
    id: 24,
    image: "/images/image24.jpg",
    title: "সোশ্যাল মিডিয়া শুটিং",
    date: "জানুয়ারি ২৩",
    time: "রাত ৭টা - ৮টা",
    location: "লালবাগ লিবার্টি স্কয়ার, ঢাকা, বাংলাদেশ",
  },
];

export function CampaignSchedule() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredEvents =
    activeFilter === "All"
      ? eventsData
      : eventsData.filter((event) => event.date === activeFilter);

  const isLoading = false;

  return (
    <section className="py-20 bg-political-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-political-blue mb-4"
            data-testid="text-schedule-title"
          >
            প্রচারণার সময়সূচি
          </h2>
          <p className="text-political-dark/70 max-w-2xl mx-auto">
            দেশজুড়ে অনুষ্ঠিতব্য প্রচারণা কর্মসূচি ও গুরুত্বপূর্ণ আয়োজনের
            সময়সূচি।
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {scheduleFilters.map((filter) => (
            <Button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 ${
                activeFilter === filter
                  ? "bg-political-red text-white"
                  : "bg-white text-political-dark border border-political-dark/20"
              }`}
              data-testid={`button-filter-${filter
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              {filter}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="overflow-hidden bg-white border-0 shadow-sm"
                >
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))
            : filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <Card
                    className="overflow-hidden hover-elevate h-full bg-white border-0 shadow-sm"
                    data-testid={`card-event-${event.id}`}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-political-dark mb-4">
                        {event.title}
                      </h3>

                      <div className="space-y-2 text-sm text-political-dark/60 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-political-blue" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-political-blue" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-political-red" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="border-political-dark/30 text-political-dark hover:bg-political-blue hover:text-white hover:border-political-blue"
                        data-testid={`button-view-event-${event.id}`}
                      >
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
