/* eslint-disable no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Clock, Bell } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { useState, useEffect } from "react";
import { useToast } from "../hooks/use-toast";

export default function ComingSoon() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-15T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "We'll notify you when we launch.",
      });
      setEmail("");
    }
  };

  const timeBlocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 60, 142, 0.95), rgba(26, 60, 142, 0.95)), url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80')`,
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-full bg-political-red/20 flex items-center justify-center mx-auto mb-8"
            >
              <Clock className="w-10 h-10 text-political-yellow" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              data-testid="text-coming-soon-title"
            >
              Coming Soon
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto"
            >
              We're working hard to bring you something amazing. Stay tuned for
              exciting updates!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {timeBlocks.map((block) => (
                <Card
                  key={block.label}
                  className="bg-white/10 border-white/20 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <motion.span
                      key={block.value}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl md:text-5xl font-bold text-white block mb-2"
                      data-testid={`text-countdown-${block.label.toLowerCase()}`}
                    >
                      {block.value.toString().padStart(2, "0")}
                    </motion.span>
                    <span className="text-white/70 text-sm uppercase tracking-wider">
                      {block.label}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm max-w-md mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 justify-center mb-4">
                    <Bell className="w-5 h-5 text-political-yellow" />
                    <span className="text-white font-medium">Get Notified</span>
                  </div>
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/10 border-white/30 text-white placeholder:text-white/50"
                      data-testid="input-coming-soon-email"
                    />
                    <Button
                      type="submit"
                      className="bg-political-yellow hover:bg-political-yellow/90 text-political-dark font-semibold px-6"
                      data-testid="button-coming-soon-notify"
                    >
                      Notify Me
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
