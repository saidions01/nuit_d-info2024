"use client";

import { motion } from "framer-motion";
const features = [
  {
    title: "Heart ↔ Ocean Currents",
    description:
      "The circulatory system mirrors the thermohaline circulation of ocean currents.",
    image: "/images/heart.png",
  },
  {
    title: "Lungs ↔ Gas Exchange",
    description:
      "Like lungs, oceans exchange gases through photosynthesis and CO₂ absorption.",
    image: "/images/lungs.png",
  },
  {
    title: "Skin ↔ Ocean Surface",
    description:
      "The skin regulates temperature, just as the ocean moderates global heat.",
    image: "/images/skin.png",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-[#406882]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#F4A261]">
          Explore the Connections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white text-black rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-md mb-4 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
