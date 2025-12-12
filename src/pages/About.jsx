/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and ethical conduct in all our actions.",
  },
  {
    icon: Shield,
    title: "Accountability",
    description:
      "We take responsibility for our decisions and are transparent with the public.",
  },
  {
    icon: Users,
    title: "Unity",
    description:
      "We believe in bringing people together across all backgrounds and beliefs.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in serving our constituents and communities.",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Campaign Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Policy Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Communications Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
  },
  {
    name: "David Williams",
    role: "Finance Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
  },
];

const milestones = [
  { year: "2019", event: "Campaign Founded" },
  { year: "2020", event: "First Major Rally" },
  { year: "2021", event: "10,000 Volunteers" },
  { year: "2022", event: "Policy Platform Released" },
  { year: "2023", event: "50 States Reached" },
  { year: "2024", event: "Election Year Campaign" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="relative py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 60, 142, 0.9), rgba(26, 60, 142, 0.9)), url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1920&q=80')`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              data-testid="text-about-title"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              Home / About Us
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-political-light">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop"
                  alt="Team Meeting"
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-6">
                  Our Story
                </h2>
                <p className="text-political-dark/70 mb-6 leading-relaxed">
                  Founded in 2019, our campaign began with a simple vision: to
                  create a movement that truly represents the voice of the
                  people. What started as a grassroots effort has grown into a
                  nationwide movement of dedicated supporters.
                </p>
                <p className="text-political-dark/70 leading-relaxed">
                  We believe in transparent governance, equal opportunity for
                  all citizens, and building a future where every voice is
                  heard. Our diverse team of volunteers and supporters work
                  tirelessly to bring positive change to communities across the
                  nation.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="h-full bg-political-blue text-white border-0">
                  <CardContent className="p-8">
                    <Target className="w-12 h-12 text-political-yellow mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-white/80 leading-relaxed">
                      To empower citizens, strengthen communities, and build a
                      nation where opportunity, justice, and prosperity are
                      accessible to everyone. We are committed to honest
                      leadership and meaningful action on the issues that matter
                      most to families across America.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="h-full bg-political-red text-white border-0">
                  <CardContent className="p-8">
                    <Eye className="w-12 h-12 text-political-yellow mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-white/80 leading-relaxed">
                      A united nation where every citizen has the opportunity to
                      thrive, where our democracy is strengthened by
                      participation, and where future generations inherit a
                      cleaner environment and a more just society. Together, we
                      can achieve greatness.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
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
                Our Core Values
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-0 shadow-sm text-center hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-full bg-political-blue/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-7 h-7 text-political-blue" />
                      </div>
                      <h3 className="font-semibold text-political-dark mb-2">
                        {value.title}
                      </h3>
                      <p className="text-sm text-political-dark/60">
                        {value.description}
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-4">
                Leadership Team
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                Meet the dedicated professionals leading our campaign forward.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="text-center bg-white border-0 shadow-sm hover-elevate overflow-hidden"
                    data-testid={`card-team-${index}`}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-political-dark">
                        {member.name}
                      </h3>
                      <p className="text-sm text-political-red">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-political-blue">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
                    <span className="text-political-blue font-bold text-lg">
                      {milestone.year}
                    </span>
                  </div>
                  <p className="text-white text-sm max-w-[120px]">
                    {milestone.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
