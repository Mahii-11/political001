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

export function CampaignSchedule() {
  const [eventsData, setEventsData] = useState([]);
  const [activeDate, setActiveDate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const data = await getCampaignSchedule();

        const formattedData = data.map((item) => {
          const dateObj = new Date(item.date);

          return {
            id: item.id,
            title: item.title,
            image: item.image,
            dateObj,
            date: `${dateObj.getDate()} ${banglaMonths[dateObj.getMonth()]}`,
            time: `${formatTime(item.start_time)} - ${formatTime(
              item.end_time
            )}`,
            location: "ঢাকা, বাংলাদেশ",
          };
        });

        setEventsData(formattedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  // Filter events
  const filteredEvents =
    activeDate === null
      ? eventsData
      : eventsData.filter(
          (event) => event.dateObj.toDateString() === activeDate.toDateString()
        );

  return (
    <section className="py-20 bg-political-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
            প্রচারণার সময়সূচি
          </h2>
          <p className="text-political-dark/70 max-w-2xl mx-auto">
            দেশজুড়ে অনুষ্ঠিতব্য প্রচারণা কর্মসূচি ও গুরুত্বপূর্ণ আয়োজনের
            সময়সূচি।
          </p>
        </motion.div>

        {/* CALENDAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm p-6 mb-12"
        >
          {/* MONTH */}
          <h3 className="text-center text-lg font-semibold text-political-blue mb-6">
            {banglaMonths[new Date().getMonth()]}
          </h3>

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
              const today = new Date();
              const year = today.getFullYear();
              const month = today.getMonth();

              const firstDay = new Date(year, month, 1).getDay();
              const totalDays = new Date(year, month + 1, 0).getDate();

              const days = [];

              for (let i = 0; i < firstDay; i++) {
                days.push(<div key={`empty-${i}`} />);
              }

              for (let day = 1; day <= totalDays; day++) {
                const dateObj = new Date(year, month, day);

                const hasEvent = eventsData.some(
                  (e) => e.dateObj.toDateString() === dateObj.toDateString()
                );

                const isActive =
                  activeDate &&
                  activeDate.toDateString() === dateObj.toDateString();

                days.push(
                  <button
                    key={day}
                    disabled={!hasEvent}
                    onClick={() => hasEvent && setActiveDate(dateObj)}
                    className={`mx-auto w-10 h-10 rounded-lg text-sm transition
                      ${
                        hasEvent
                          ? isActive
                            ? "bg-political-blue text-white"
                            : "bg-political-light text-political-dark hover:bg-political-blue/10"
                          : "text-political-dark/30 cursor-default"
                      }`}
                  >
                    {day}
                  </button>
                );
              }

              return days;
            })()}
          </div>
        </motion.div>

        {/* EVENTS */}
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
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <Card className="overflow-hidden h-full bg-white border-0 shadow-sm">
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

                      <div className="space-y-2 text-sm text-political-dark/60">
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
  const [hour, minute] = time.split(":");
  const date = new Date();
  date.setHours(hour, minute);

  return date.toLocaleTimeString("bn-BD", {
    hour: "numeric",
    minute: "2-digit",
  });
}
