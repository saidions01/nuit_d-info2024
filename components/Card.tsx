'use client';
import { motion } from "framer-motion";

type CardProps = {
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ title, description }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white shadow-lg rounded-lg p-4"
  >
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <p className="mt-2 text-gray-600">{description}</p>
  </motion.div>
);

export default Card;
