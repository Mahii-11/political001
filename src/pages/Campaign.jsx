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
import { Link } from "wouter";
import { Progress } from "../components/ui/progress";

const policies = [
  {
    icon: Shield,
    title: "National Security",
    description:
      "Strengthening our defense and protecting our borders while maintaining diplomatic relations.",
  },
  {
    icon: Heart,
    title: "Healthcare Reform",
    description:
      "Ensuring affordable and accessible healthcare for all citizens regardless of their economic status.",
  },
  {
    icon: Lightbulb,
    title: "Education",
    description:
      "Investing in quality education from early childhood through higher education and vocational training.",
  },
  {
    icon: Globe,
    title: "Climate Action",
    description:
      "Implementing sustainable policies to combat climate change and protect our environment.",
  },
  {
    icon: TrendingUp,
    title: "Economic Growth",
    description:
      "Creating jobs, supporting small businesses, and building a stronger middle class economy.",
  },
  {
    icon: Users,
    title: "Social Justice",
    description:
      "Promoting equality, civil rights, and justice for all members of our diverse society.",
  },
];

const donationGoal = 5000000;
const currentDonation = 3750000;
const donationPercentage = (currentDonation / donationGoal) * 100;

const upcomingEvents = [
  {
    date: "Jan 25",
    title: "Town Hall Meeting",
    location: "Community Center, DC",
  },
  { date: "Jan 28", title: "Youth Rally", location: "University Campus" },
  { date: "Feb 02", title: "Policy Discussion", location: "City Hall" },
  { date: "Feb 05", title: "Volunteer Training", location: "Campaign HQ" },
];

export default function Campaign() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 60, 142, 0.9), rgba(26, 60, 142, 0.9)), url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=1920&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-campaign-title"
            >
              Our Campaign
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              Home / Campaign
            </motion.p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
                Our Key Policies
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                We are committed to creating positive change through thoughtful
                policies that benefit all citizens.
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
                      <div className="w-16 h-16 rounded-full bg-political-blue/10 flex items-center justify-center mx-auto mb-6">
                        <policy.icon className="w-8 h-8 text-political-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-political-blue mb-3">
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

        <section className="py-20 bg-white">
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
                      <h3 className="text-2xl font-bold">Campaign Fund</h3>
                    </div>
                    <p className="text-white/80 mb-6">
                      Help us reach our fundraising goal to spread our message
                      across the nation and bring positive change to every
                      community.
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span>
                          Raised: ${(currentDonation / 1000000).toFixed(2)}M
                        </span>
                        <span>
                          Goal: ${(donationGoal / 1000000).toFixed(0)}M
                        </span>
                      </div>
                      <Progress
                        value={donationPercentage}
                        className="h-3 bg-white/20"
                      />
                    </div>
                    <p className="text-political-yellow font-semibold text-lg mb-6">
                      {donationPercentage.toFixed(0)}% of our goal reached!
                    </p>
                    <Link href="/contact">
                      <Button
                        className="w-full bg-political-red hover:bg-political-red/90 text-white"
                        data-testid="button-donate-now"
                      >
                        Donate Now
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
                  Upcoming Events
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
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Award className="w-16 h-16 text-political-yellow mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-6">
                Join The Movement
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto mb-8">
                Be part of the change. Your support matters in building a better
                future for everyone.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/volunteer">
                  <Button
                    size="lg"
                    className="bg-political-red hover:bg-political-red/90 text-white px-8"
                    data-testid="button-become-volunteer"
                  >
                    Become a Volunteer
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-political-blue text-political-blue hover:bg-political-blue hover:text-white px-8"
                    data-testid="button-contact-us"
                  >
                    Contact Us
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
