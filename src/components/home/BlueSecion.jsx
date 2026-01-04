/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BookOpen, Building2, Users, Factory } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { useEffect, useState } from "react";
import { getVision } from "../../services/api";

const iconsByIndex = [Building2, BookOpen, Users, Factory];

export default function BlueSection() {
  const [vision, setVision] = useState([]);

  useEffect(() => {
    async function loadVission() {
      const data = await getVision();
      setVision(data.data);
    }
    loadVission();
  }, []);

  const linkMap = {
    1: "/promise",
    3: "/31-points",
    4: "/volunteer",
    5: "/our-dhaka",
  };

  return (
    <div className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {vision.map((item, index) => {
          const Icon = iconsByIndex[index];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a key={item.id} href={linkMap[item.id]}>
                <Card className="text-center h-full bg-white border-0 shadow-sm hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-political-blue/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-political-blue" />
                    </div>
                    <h3 className="font-semibold text-political-dark mb-2">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
