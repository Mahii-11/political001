/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { getCampaignSchedule } from "../../services/api";

// Bangla month names
const banglaMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

// Bangla digit converter
const toBanglaNumber = (num) =>
  num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);

export function CampaignSchedule() {
  const [eventsData, setEventsData] = useState([]);
  const [activeDate, setActiveDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getCampaignSchedule();

        const formatted = data.map((item) => {
          const dateObj = new Date(item.date);

          return {
            id: item.id,
            title: item.title,
            image: item.image,
            dateObj,
            date: `${toBanglaNumber(dateObj.getDate())} ${
              banglaMonths[dateObj.getMonth()]
            }`,
            time: `${formatTime(item.start_time)} - ${formatTime(
              item.end_time
            )}`,
            location: "ঢাকা, বাংলাদেশ",
          };
        });

        setEventsData(formatted);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Event date set
  const eventDates = new Set(eventsData.map((e) => e.dateObj.toDateString()));

  // Filter events by active date
  const filteredEvents =
    activeDate === null
      ? eventsData
      : eventsData.filter(
          (e) => e.dateObj.toDateString() === activeDate.toDateString()
        );

  // Month navigation
  const prevMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );

  const nextMonth = () =>
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const todayKey = new Date().toDateString();

  return (
    <section className="py-20 bg-political-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            প্রচারণার <span className="text-gray-950">সময়সূচি</span>
          </h2>
          <p className="text-political-dark/70 max-w-2xl mx-auto">
            দেশজুড়ে অনুষ্ঠিতব্য প্রচারণা কর্মসূচির সময়সূচি।
          </p>
        </motion.div>

        {/* CALENDAR */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-12">
          {/* MONTH HEADER */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="px-3 py-1 rounded-md bg-green-100 hover:bg-green-200"
            >
              ←
            </button>

            <h3 className="text-lg font-semibold text-green-900">
              {banglaMonths[month]} {toBanglaNumber(year)}
            </h3>

            <button
              onClick={nextMonth}
              className="px-3 py-1 rounded-md bg-green-100 hover:bg-green-200"
            >
              →
            </button>
          </div>

          {/* WEEK */}
          <div className="grid grid-cols-7 text-center text-sm text-political-dark/60 mb-4">
            <span>রবি</span>
            <span>সোম</span>
            <span>মঙ্গল</span>
            <span>বুধ</span>
            <span>বৃহস্পতি</span>
            <span>শুক্র</span>
            <span>শনি</span>
          </div>

          {/* DATES */}
          <div className="grid grid-cols-7 gap-y-4 text-center">
            {(() => {
              const firstDay = new Date(year, month, 1).getDay();
              const totalDays = new Date(year, month + 1, 0).getDate();
              const days = [];

              for (let i = 0; i < firstDay; i++) {
                days.push(<div key={`e-${i}`} />);
              }

              for (let d = 1; d <= totalDays; d++) {
                const dateObj = new Date(year, month, d);
                const dateKey = dateObj.toDateString();

                const hasEvent = eventDates.has(dateKey);
                const isActive =
                  activeDate && activeDate.toDateString() === dateKey;
                const isToday = dateKey === todayKey;

                days.push(
                  <button
                    key={d}
                    disabled={!hasEvent}
                    onClick={() =>
                      hasEvent && setActiveDate(isActive ? null : dateObj)
                    }
                    className={`mx-auto w-10 h-10 rounded-lg text-sm transition
                      ${
                        hasEvent
                          ? isActive
                            ? "bg-green-900 text-white"
                            : "bg-green-100 hover:bg-green-300"
                          : "text-political-dark/30 cursor-not-allowed"
                      }
                      ${isToday && hasEvent ? "ring-2 ring-green-500" : ""}`}
                  >
                    {toBanglaNumber(d)}
                  </button>
                );
              }
              return days;
            })()}
          </div>
        </div>

        {/* EVENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [1, 2, 3].map((i) => (
                <Card key={i} className="border-0 shadow-sm">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                  </CardContent>
                </Card>
              ))
            : filteredEvents.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden h-full border-0 shadow-sm">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-48 w-full object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-3">{event.title}</h3>
                      <div className="space-y-2 text-sm text-political-dark/60">
                        <div className="flex gap-2">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex gap-2">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </div>
                        <div className="flex gap-2">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}

function formatTime(time) {
  const [h, m] = time.split(":");
  const d = new Date();
  d.setHours(h, m);
  return d.toLocaleTimeString("bn-BD", {
    hour: "numeric",
    minute: "2-digit",
  });
}
