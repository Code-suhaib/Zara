import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container py-5">
      <motion.h2
        className="mb-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Welcome to our perfume haven. With over 20+ years of expertise by owner **Salim Sayyed**, we craft and replicate luxury scents on the spot. From original brands like Ferrari, Jaguar, CR7 to premium replicas crafted live, our experience speaks in every bottle.
      </motion.p>
    </div>
  );
};

export default About;
