"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        message: form.get("message"),
      }),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      e.target.reset();
    } else {
      alert("❌ Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4">
      
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        Contact Us
      </motion.h1>

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-full max-w-md"
      >
        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-2 mb-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <button
          type="submit"
          className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </motion.form>

      {/* Contact Info */}
      <div className="mt-8 text-center text-gray-700">
        <p>📧 stemsage.techworld.llp@gmail.com</p>
        <p>📱 +91-9922552891</p>
      </div>
    </section>
  );
}