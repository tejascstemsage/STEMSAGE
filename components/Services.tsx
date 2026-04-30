"use client";

import { motion } from "framer-motion";

const services = [
  { title: "Workshops", desc: "Hands-on STEM workshops" },
  { title: "Kits", desc: "Robotics & electronics kits" },
  { title: "Lab Setup", desc: "STEM labs for schools" },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100 text-center">

      {/* FIXED HEADING */}
      <h2 className="text-3xl font-bold mb-10 text-gray-900">
        What We Provide
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200"
          >
            {/* FIXED TITLE */}
            <h3 className="text-xl font-bold text-gray-900">
              {s.title}
            </h3>

            {/* FIXED TEXT */}
            <p className="mt-2 text-gray-600">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}