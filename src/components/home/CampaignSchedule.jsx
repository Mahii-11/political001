/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
import { getCampaignSchedule } from "../../services/api";

//const scheduleFilters = ["All", "Jan 17", "Jan 18", "Jan 21", "Jan 23"];

export function CampaignSchedule() {
  const [eventsData, setEventsData] = useState([]);
  //  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

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

            // 🔹 Filter key (English)
            dateKey: dateObj.toLocaleDateString("en-US", {
              month: "short",
              day: "2-digit",
            }),
            // 🔹 Display date (Bangla)
            date: dateObj.toLocaleDateString("bn-BD", {
              month: "long",
              day: "numeric",
            }),

            // 🔹 Time (Bangla)
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

  const filteredEvents = selectedDate
    ? eventsData.filter((event) => event.dateKey === selectedDate)
    : eventsData;

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
        {/* REAL BANGLA CALENDAR */}
        <div className="mb-12 bg-white rounded-xl shadow-sm p-4">
          <div className="text-center font-semibold text-political-blue mb-4">
            {banglaMonths[new Date().getMonth()]}
          </div>

          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {banglaDays.map((d) => (
              <div key={d} className="text-political-dark/60">
                {d}
              </div>
            ))}

            {Array.from({ length: 31 }, (_, i) => {
              const day = i + 1;
              const dateKey = `Jan ${String(day).padStart(2, "0")}`;
              const hasEvent = eventsData.some((e) => e.dateKey === dateKey);

              return (
                <button
                  key={day}
                  disabled={!hasEvent}
                  onClick={() => setSelectedDate(dateKey)}
                  className={`h-10 rounded-md transition-all
            ${
              selectedDate === dateKey
                ? "bg-political-red text-white"
                : hasEvent
                ? "bg-political-light hover:bg-political-red/10"
                : "text-gray-300 cursor-not-allowed"
            }
          `}
                >
                  {toBanglaNumber(day)}
                </button>
              );
            })}
          </div>
        </div>

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

function formatTime(time) {
  const [hour, minute] = time.split(":");
  const date = new Date();
  date.setHours(hour, minute);

  return date.toLocaleTimeString("bn-BD", {
    hour: "numeric",
    minute: "2-digit",
  });
}

const banglaNumbers = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

function toBanglaNumber(num) {
  return String(num)
    .split("")
    .map((d) => banglaNumbers[d] || d)
    .join("");
}

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

const banglaDays = ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি"];
