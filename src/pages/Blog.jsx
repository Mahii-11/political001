/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Calendar, MessageSquare, User, Search, Loader2 } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "../components/ui/skeleton";

const categories = [
  "All",
  "Campaign",
  "Politics",
  "Events",
  "Community",
  "Policy",
  "Youth",
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ["/api/blog"],
  });

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All";
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(18, 42, 110, 0.95) 0%, rgba(18, 42, 110, 0.85) 45%, rgba(18, 42, 110, 0.25) 100%), url('/images/bgimage.png')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-blog-title"
            >
              সংবাদ ও নিবন্ধ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            ></motion.p>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                {isLoading ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((i) => (
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
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Link href={`/blog/${post.id}`}>
                          <Card
                            className="overflow-hidden hover-elevate cursor-pointer h-full bg-white border-0 shadow-sm"
                            data-testid={`card-blog-${post.id}`}
                          >
                            <div className="relative h-48 overflow-hidden">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              />
                              <span className="absolute top-4 left-4 bg-political-red text-white text-xs px-3 py-1 rounded">
                                {post.category}
                              </span>
                            </div>
                            <CardContent className="p-6">
                              <h3 className="text-lg font-semibold text-political-blue mb-3 line-clamp-2 hover:text-political-red transition-colors">
                                {post.title}
                              </h3>
                              <p className="text-political-dark/60 text-sm mb-4 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center gap-4 text-xs text-political-dark/50">
                                <span className="flex items-center gap-1">
                                  <User className="w-3 h-3" />
                                  {post.author}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" />
                                  {post.date}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MessageSquare className="w-3 h-3" />
                                  {post.comments}
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full lg:w-80">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-24 space-y-8"
                >
                  <Card className="bg-white border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-political-blue mb-4">
                        Search
                      </h3>
                      <div className="relative">
                        <Input
                          type="text"
                          placeholder="Search posts..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pr-10"
                          data-testid="input-search-blog"
                        />
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-political-dark/40" />
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-political-blue mb-4">
                        Categories
                      </h3>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <Button
                            key={category}
                            variant="ghost"
                            onClick={() => setActiveCategory(category)}
                            className={`w-full justify-start ${
                              activeCategory === category
                                ? "bg-political-blue text-white"
                                : "text-political-dark"
                            }`}
                            data-testid={`button-category-${category.toLowerCase()}`}
                          >
                            {category}
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-0 shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-political-blue mb-4">
                        Recent Posts
                      </h3>
                      <div className="space-y-4">
                        {blogPosts.slice(0, 3).map((post) => (
                          <Link key={post.id} href={`/blog/${post.id}`}>
                            <div className="flex gap-3 hover-elevate cursor-pointer p-2 -m-2 rounded">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-16 h-16 object-cover rounded flex-shrink-0"
                              />
                              <div>
                                <h4 className="text-sm font-medium text-political-dark line-clamp-2 hover:text-political-blue transition-colors">
                                  {post.title}
                                </h4>
                                <span className="text-xs text-political-dark/50">
                                  {post.date}
                                </span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
