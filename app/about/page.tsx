"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white text-gray-900">

      {/* 🔥 HERO SECTION */}
      <section className="bg-black text-white py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          About <span className="text-red-500">STEMSAGE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
        >
          Empowering innovators through hands-on STEM education
        </motion.p>
      </section>

      {/* 🔥 STORY SECTION */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">The Full Story</h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          STEMSAGE was born out of a shared passion for empowering individuals to innovate 
          and thrive in a rapidly evolving technological landscape. Founded by a team of 
          visionaries with a background in engineering, education, and design, our mission 
          is to bridge the gap between theoretical knowledge and practical application.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          Recognizing the growing demand for hands-on STEM learning, we set out to create 
          a platform that delivers cutting-edge solutions in custom projects, 3D design, 
          IoT, robotics, Arduino, and electronics workshops.
        </p>

        <p className="text-gray-700 leading-relaxed">
          From humble beginnings, we’ve grown into a trusted name, providing robotic 
          educational kits and tailored solutions that spark curiosity, creativity, and 
          confidence in learners of all ages. STEMSAGE is more than a company—it’s a 
          movement dedicated to nurturing problem solvers and innovators who will shape 
          the future.
        </p>
      </section>

      {/* 🔥 VISION */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>

          <p className="text-gray-700 leading-relaxed">
            At STEMSAGE, we envision a world where innovation knows no bounds and where 
            individuals, regardless of their background, have access to the tools and 
            knowledge needed to excel. Our long-term goal is to revolutionize STEM 
            education and innovation by creating solutions that empower learners, 
            educators, and organizations.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            By integrating advanced technologies like robotics, IoT, and 3D design into 
            practical learning experiences, we aim to build a globally recognized hub for 
            technological excellence.
          </p>

        </div>
      </section>

      {/* 🔥 CORE VALUES */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-10 text-center">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow border"
          >
            <h3 className="font-bold text-lg mb-2">Innovation</h3>
            <p className="text-gray-600">
              Innovation is at the heart of everything we do. From robotics kits to IoT 
              solutions, we constantly push boundaries to create impactful products.
            </p>
          </motion.div>

          {/* Accessibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow border"
          >
            <h3 className="font-bold text-lg mb-2">Accessibility</h3>
            <p className="text-gray-600">
              We believe education should be accessible to all. Our affordable workshops 
              and user-friendly kits ensure technology reaches everyone.
            </p>
          </motion.div>

          {/* Hands-on Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow border"
          >
            <h3 className="font-bold text-lg mb-2">Hands-On Learning</h3>
            <p className="text-gray-600">
              True learning happens through doing. We focus on experiential education 
              that builds real-world skills and confidence.
            </p>
          </motion.div>

        </div>
      </section>

    </div>
  );
}