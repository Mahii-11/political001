/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  Award,
  BookOpen,
  Briefcase,
  GraduationCap,
  Heart,
  Users,
} from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const timeline = [
  {
    year: "1965",
    title: "Born in Washington D.C.",
    description: "Born into a middle-class family with strong community values",
  },
  {
    year: "1987",
    title: "Graduated from Harvard Law",
    description: "Completed law degree with honors, focused on civil rights",
  },
  {
    year: "1990",
    title: "Started Community Work",
    description:
      "Began working with local communities on social welfare programs",
  },
  {
    year: "2000",
    title: "Elected to City Council",
    description: "First step into public office serving the people",
  },
  {
    year: "2010",
    title: "State Senator",
    description: "Elected to represent citizens at the state level",
  },
  {
    year: "2020",
    title: "Presidential Campaign",
    description: "Announced candidacy to lead the nation forward",
  },
];

const achievements = [
  {
    icon: Award,
    title: "Leadership Award",
    description: "National Excellence in Public Service 2018",
  },
  {
    icon: Users,
    title: "Community Hero",
    description: "Recognition for social welfare initiatives",
  },
  {
    icon: BookOpen,
    title: "Published Author",
    description: "Best-selling book on governance reform",
  },
  {
    icon: Heart,
    title: "Humanitarian",
    description: "Founded 3 charitable organizations",
  },
];

export default function Biography() {
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
              data-testid="text-biography-title"
            >
              Biography
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              Home / Biography
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop"
                  alt="Candidate Portrait"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                  data-testid="img-candidate-portrait"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-political-blue mb-6">
                  About Our Leader
                </h2>
                <p className="text-political-dark/70 mb-6 leading-relaxed">
                  A dedicated public servant with over 30 years of experience in
                  community development and governance. Born and raised with
                  strong values of integrity, service, and commitment to the
                  people.
                </p>
                <p className="text-political-dark/70 mb-6 leading-relaxed">
                  Throughout a distinguished career spanning local, state, and
                  national politics, our candidate has consistently fought for
                  the rights of ordinary citizens, championing causes that
                  matter most to families and communities across the nation.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-political-red" />
                    <span className="text-political-dark font-medium">
                      Harvard Law Graduate
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="w-6 h-6 text-political-red" />
                    <span className="text-political-dark font-medium">
                      30+ Years Experience
                    </span>
                  </div>
                </div>
              </motion.div>
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
                Life Journey
              </h2>
              <p className="text-political-dark/70 max-w-2xl mx-auto">
                A timeline of dedication to public service and community
                leadership
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-political-blue/20 hidden md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <Card className="inline-block bg-white border-0 shadow-sm">
                      <CardContent className="p-6">
                        <span className="text-political-red font-bold text-xl">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-political-blue mt-2">
                          {item.title}
                        </h3>
                        <p className="text-political-dark/70 text-sm mt-2">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="hidden md:flex items-center justify-center w-8">
                    <div className="w-4 h-4 rounded-full bg-political-red border-4 border-white shadow" />
                  </div>

                  <div className="flex-1" />
                </motion.div>
              ))}
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
                Awards & Recognition
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full bg-white border-0 shadow-sm hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 rounded-full bg-political-blue/10 flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-8 h-8 text-political-blue" />
                      </div>
                      <h3 className="font-semibold text-political-dark mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-political-dark/60">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
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
