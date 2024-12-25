"use client";

import { motion } from "framer-motion";

type ModalProps = {
  title: string;
  description: string;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ title, description, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md text-black">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-4">{description}</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-[#F4A261] text-[#1A374D] font-bold rounded-lg hover:opacity-90"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default Modal;
