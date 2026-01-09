/* eslint-disable no-unused-vars */
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

const statistics = [
  { value: 8200, label: "সদস্যগণ", suffix: "" },
  { value: 50, label: "অভিযোগ", prefix: "" },
  { value: 35, label: "অভিযোগ নিষ্পত্তি ", suffix: "" },
];

function toBanglaNumber(num) {
  const en = "0123456789";
  const bn = "০১২৩৪৫৬৭৮৯";
  return String(num)
    .split("")
    .map((d) => bn[en.indexOf(d)] ?? d)
    .join("");
}

function AnimatedNumber({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        let displayValue;
        if (value >= 1000000) {
          displayValue = `${prefix}${toBanglaNumber(
            (latest / 1000000).toFixed(latest >= value ? 0 : 1)
          )}M`;
        } else if (value >= 1000) {
          displayValue = `${prefix}${toBanglaNumber(
            (latest / 1000).toFixed(latest >= value * 0.9 ? 1 : 0)
          )}K`;
        } else {
          displayValue = `${prefix}${toBanglaNumber(
            Math.floor(latest)
          )}${suffix}`;
        }
        ref.current.textContent = displayValue;
      }
    });
    return () => unsubscribe();
  }, [springValue, value, prefix, suffix]);

  const initialDisplay =
    value >= 1000000 ? `${prefix}0M` : value >= 1000 ? "0K" : toBanglaNumber(0);

  return <span ref={ref}>{initialDisplay}</span>;
}

export function StatisticsSection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-gray-100" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-8 text-center shadow-lg"
              data-testid={`stat-${stat.label.toLowerCase()}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-political-dark mb-2">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.label === "Donations" ? "$" : ""}
                />
              </div>
              <div className="w-8 h-1 bg-political-red mx-auto mb-3" />
              <p className="text-political-dark/70 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
