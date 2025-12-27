/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { FaUser, FaRegCalendarAlt, FaRegCommentDots } from "react-icons/fa";
import { Card, CardContent } from "../ui/card";
import { Skeleton } from "../ui/skeleton";
const manualNews = [
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "গণতান্ত্রিক সমাবেশ",
    description: "গণতন্ত্র ও অধিকার রক্ষায় আয়োজিত সাম্প্রতিক সমাবেশ।",
    author: "Admin",
    date: "26 March, 2024",
    comments: 6,
  },
  {
    id: 2,
    image: "/images/image2.jpg",
    title: "প্রচারণা কার্যক্রম",
    description: "দেশজুড়ে চলমান প্রচারণার গুরুত্বপূর্ণ মুহূর্ত।",
    author: "Admin",
    date: "25 March, 2024",
    comments: 8,
  },
  {
    id: 3,
    image: "/images/image3.jpg",
    title: "জনগণের সঙ্গে সংলাপ",
    description: "নাগরিকদের মতামত ও অংশগ্রহণে অনুষ্ঠিত প্রচারণা কর্মসূচি।",
    author: "Admin",
    date: "24 March, 2024",
    comments: 12,
  },
];

export function CampaignNews() {
  const isLoading = false;

  return (
    <section className="py-20 bg-political-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
            প্রচারণার সর্বশেষ খবর
          </h2>
          <p className="text-political-dark/70 max-w-2xl mx-auto">
            দেশ ও জনগণের স্বার্থে পরিচালিত আমাদের চলমান প্রচারণা কার্যক্রম ও
            গুরুত্বপূর্ণ আপডেট।
          </p>
        </motion.div>

        {/* Blog Cards */}
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
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))
            : manualNews.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${item.id}`}>
                    <Card className="overflow-hidden hover-elevate cursor-pointer h-full bg-white border-0 shadow-sm">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>

                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-political-blue mb-3 line-clamp-2 hover:text-political-red transition-colors">
                          {item.title}
                        </h3>

                        <p className="text-sm text-political-dark/70 mb-4 line-clamp-2">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-political-dark/60">
                          <span className="flex items-center gap-1">
                            <FaUser className="w-4 h-4" />
                            By: {item.author}
                          </span>

                          <span className="flex items-center gap-1">
                            <FaRegCalendarAlt className="w-4 h-4" />
                            {item.date}
                          </span>

                          <span className="flex items-center gap-1">
                            <FaRegCommentDots className="w-4 h-4" />
                            {item.comments}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
