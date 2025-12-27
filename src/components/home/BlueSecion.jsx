/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { BookOpen, Building2, Users, Factory } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function BlueSection() {
  const items = [
    { title: "আমার ৩১ দফা", icon: BookOpen, link: "/dofa" },
    { title: "নির্বাচনী প্রতিশ্রুতি", icon: Building2, link: "/protishruti" },
    { title: "স্বেচ্ছাসেবক", icon: Users, link: "/volunteer" },
    { title: "আমাদের ঢাকা", icon: Factory, link: "/dhaka" },
  ];

  return (
    <div className="w-full bg-white py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {items.map((item, index) => (
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
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
