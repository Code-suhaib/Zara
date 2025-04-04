import React from "react";
import { motion } from "framer-motion";

const Perfume = () => {
  return (
    <div className="container py-5">
      <motion.h2
        className="mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Original Perfumes
      </motion.h2>
      <p>We offer authentic perfumes from brands like Ferrari, Jaguar, Bentley, CR7 and more.</p>
    </div>
  );
};

export default Perfume;
