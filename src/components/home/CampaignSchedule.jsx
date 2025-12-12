/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

const scheduleFilters = ["All", "Jan 17", "Jan 18", "Jan 21", "Jan 23"];

const eventsData = [
  // -------------------- JAN 17 --------------------
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "Election Campaign",
    date: "Jan 17",
    time: "10AM - 11AM",
    location: "Raven Ridge, Silver Lake, USA",
  },
  {
    id: 2,
    image: "/images/image2.jpg",
    title: "Volunteer Meetup",
    date: "Jan 17",
    time: "1PM - 3PM",
    location: "Greenwood Hall, Chicago, USA",
  },
  {
    id: 3,
    image: "/images/image3.jpg",
    title: "Press Briefing",
    date: "Jan 17",
    time: "4PM - 6PM",
    location: "Central Plaza, New York, USA",
  },
  {
    id: 4,
    image: "/images/image4.jpg",
    title: "Public Speaking Event",
    date: "Jan 17",
    time: "6PM - 8PM",
    location: "Downtown Arena, Seattle, USA",
  },
  {
    id: 5,
    image: "/images/image5.jpg",
    title: "Donation Drive",
    date: "Jan 17",
    time: "8AM - 10AM",
    location: "Willow Community Center, Ohio, USA",
  },
  {
    id: 6,
    image: "/images/image6.jpg",
    title: "Awareness Rally",
    date: "Jan 17",
    time: "5PM - 7PM",
    location: "Hope Street Park, Miami, USA",
  },

  // -------------------- JAN 18 --------------------
  {
    id: 7,
    image: "/images/image7.jpg",
    title: "Community Meetup",
    date: "Jan 18",
    time: "2PM - 4PM",
    location: "Palm Street, Austin, USA",
  },
  {
    id: 8,
    image: "/images/image8.jpg",
    title: "Team Gathering",
    date: "Jan 18",
    time: "11AM - 1PM",
    location: "Meadow Grounds, Boston, USA",
  },
  {
    id: 9,
    image: "/images/image9.jpg",
    title: "Campaign Photoshoot",
    date: "Jan 18",
    time: "5PM - 7PM",
    location: "Sunset Pier, San Diego, USA",
  },
  {
    id: 10,
    image: "/images/image10.jpg",
    title: "Fundraiser Meeting",
    date: "Jan 18",
    time: "7PM - 9PM",
    location: "Harbor View Resort, Tampa, USA",
  },
  {
    id: 11,
    image: "/images/image11.jpg",
    title: "Local Area Visit",
    date: "Jan 18",
    time: "9AM - 11AM",
    location: "Riverside Town, Dallas, USA",
  },
  {
    id: 12,
    image: "/images/image12.jpg",
    title: "Neighborhood Walk",
    date: "Jan 18",
    time: "4PM - 6PM",
    location: "Maple Street, Phoenix, USA",
  },

  // -------------------- JAN 21 --------------------
  {
    id: 13,
    image: "/images/image13.jpg",
    title: "Press Conference",
    date: "Jan 21",
    time: "1PM - 3PM",
    location: "Willow Creek, Denver, USA",
  },
  {
    id: 14,
    image: "/images/image14.jpg",
    title: "Community Talk",
    date: "Jan 21",
    time: "10AM - 12PM",
    location: "Hilltop Arena, Portland, USA",
  },
  {
    id: 15,
    image: "/images/image15.jpg",
    title: "Media Interview",
    date: "Jan 21",
    time: "4PM - 6PM",
    location: "Downtown Studio, NYC, USA",
  },
  {
    id: 16,
    image: "/images/image16.jpg",
    title: "Strategy Discussion",
    date: "Jan 21",
    time: "2PM - 3PM",
    location: "Executive Tower, Houston, USA",
  },
  {
    id: 17,
    image: "/images/image17.jpg",
    title: "Team Workshop",
    date: "Jan 21",
    time: "5PM - 7PM",
    location: "Innovation Lab, Kansas, USA",
  },
  {
    id: 18,
    image: "/images/image18.jpg",
    title: "Policy Announcement",
    date: "Jan 21",
    time: "7PM - 9PM",
    location: "City Hall, Washington, USA",
  },

  // -------------------- JAN 23 --------------------
  {
    id: 19,
    image: "/images/image19.jpg",
    title: "Fundraising Program",
    date: "Jan 23",
    time: "4PM - 6PM",
    location: "Grand Park, Los Angeles, USA",
  },
  {
    id: 20,
    image: "/images/image20.jpg",
    title: "Supporter Meetup",
    date: "Jan 23",
    time: "6PM - 8PM",
    location: "Beverly Hills Center, LA, USA",
  },
  {
    id: 21,
    image: "/images/image21.jpg",
    title: "Leadership Session",
    date: "Jan 23",
    time: "1PM - 3PM",
    location: "Santa Monica Hall, USA",
  },
  {
    id: 22,
    image: "/images/image22.jpg",
    title: "Public Gathering",
    date: "Jan 23",
    time: "9AM - 11AM",
    location: "Hollywood Street, LA, USA",
  },
  {
    id: 23,
    image: "/images/image23.jpg",
    title: "Youth Interaction",
    date: "Jan 23",
    time: "11AM - 1PM",
    location: "City Youth Center, LA, USA",
  },
  {
    id: 24,
    image: "/images/image24.jpg",
    title: "Social Media Content Shoot",
    date: "Jan 23",
    time: "7PM - 8PM",
    location: "Liberty Square, LA, USA",
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
            Campaign Schedule
          </h2>
          <p className="text-political-dark/70 max-w-2xl mx-auto">
            Globally disintermediate best-of-breed methods of empowerment rather
            than.
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
