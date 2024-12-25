"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-[#1A374D] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-[#F4A261]">About the Challenge</h2>
      <p className="mt-4 text-lg text-[#6998AB] max-w-3xl mx-auto">
        The ocean is Earth's lifeline, mirroring the systems within our own bodies. 
        From the flow of ocean currents to the oxygen exchange, explore how our health is intricately connected to a healthy ocean.
      </p>
    </motion.section>
  );
};

export default AboutSection;
