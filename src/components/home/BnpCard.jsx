/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const services = [
  {
  
    img: "/images/card-1.jpg",
  },
  {
   
    img: "/images/card-2.jpg",
  },
  {
   
    img: "/images/card-3.jpg",
  },
  {
   
    img: "/images/card-4.jpg",
  },
];


export default function BnpCard() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="overflow-hidden rounded-lg shadow-lg">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

