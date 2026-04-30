"use client";

import { motion } from "framer-motion";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center px-4">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-300 max-w-md"
      >
        We’re working hard to bring this course to you. Stay tuned 🚀
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 text-red-500 text-xl font-semibold"
      >
        Coming Soon...
      </motion.div>

      <a
        href="/contact"
        className="mt-6 bg-red-500 px-6 py-2 rounded hover:bg-red-600 transition"
      >
        Get Notified
      </a>
    </section>
  );
}