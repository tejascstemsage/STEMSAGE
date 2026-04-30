"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center bg-black text-white">

      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-bold"
      >
        Build Real Skills <br />
        <span className="text-red-500">Not Just Marks</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-300"
      >
        Hands-on STEM education in Robotics, IoT & Electronics
      </motion.p>

    </section>
  );
}