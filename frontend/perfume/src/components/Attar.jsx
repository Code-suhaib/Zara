import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Attar = () => {
  return (
    <div className="container py-5">
      <motion.h2
        className="mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Attar / Replica Collection
      </motion.h2>
      <p>We can recreate any perfume if you bring us the sample. Our skilled team crafts it in front of you in just 15 minutes.</p>
    </div>
  );
};

export default Attar;
