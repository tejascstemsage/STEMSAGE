"use client";
import { motion } from "framer-motion";

const data = [
  {
    title: "Educational Kits",
    desc: "Hands-on kits for electronics, robotics & IoT learning",
  },
  {
    title: "Courses",
    desc: "Beginner to advanced STEM courses",
  },
  {
    title: "STEM Curriculum",
    desc: "Structured programs for schools",
  },
  {
    title: "STEM Lab Setup",
    desc: "Complete lab infrastructure",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="p-10 bg-black text-white text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </section>

      <div className="grid md:grid-cols-2 gap-8 p-10">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="border p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p className="mt-2">{item.desc}</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Explore
            </button>
          </motion.div>
        ))}
      </div>
    </>
  );
}