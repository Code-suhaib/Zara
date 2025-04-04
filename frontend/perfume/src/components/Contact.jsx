import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="container py-5">
      <motion.h2
        className="mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <p><strong>WhatsApp:</strong><a href="https://wa.me/8600252724" target="_blank" rel="noopener noreferrer">Chat with us</a></p>

      <div className="my-4">
        <h5>Visit Our Stores</h5>
        <ul>
          <li>Main Branch (Mall): <a href="https://goo.gl/maps/sample1" target="_blank">Google Maps</a></li>
          <li>Shop 2: <a href="https://goo.gl/maps/sample2" target="_blank">Google Maps</a></li>
          <li>Shop 3: <a href="https://goo.gl/maps/sample3" target="_blank">Google Maps</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
