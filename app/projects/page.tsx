"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Car BlackBox", desc: "IoT based monitoring system" },
  { title: "MediHub", desc: "Healthcare platform" },
  { title: "Smart Dustbin", desc: "Automated waste system" },
];

export default function Projects() {
  return (
    <>

      <section className="text-center py-10 bg-black text-white">
        <h1 className="text-4xl font-bold">Our Flagship Projects</h1>
      </section>

      <div className="grid md:grid-cols-3 gap-8 p-10">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="border p-6 rounded-xl shadow"
          >
            <h2 className="font-bold">{p.title}</h2>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}