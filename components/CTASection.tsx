"use client";

import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#1A374D] text-center">
      <motion.h2
        className="text-3xl font-bold text-[#F4A261]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Ready to Explore?
      </motion.h2>
      <motion.a
        href="/human"
        className="mt-6 px-8 py-3 bg-[#F4A261] text-[#1A374D] font-bold rounded-lg shadow-lg hover:opacity-90 inline-block"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        Explore the App
      </motion.a>
    </section>
  );
};

export default CTASection;
