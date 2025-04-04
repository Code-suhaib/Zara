import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";


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

      {/* WhatsApp Section */}
      <p>
        <strong>WhatsApp:</strong>{" "}
        <a
          href="https://wa.me/8805394936"
          target="_blank"
          rel="noopener noreferrer"
          className="d-inline-flex align-items-center"
          style={{ textDecoration: "none", color: "#25D366", fontSize: "18px" }}
        >
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            style={{ width: "24px", height: "24px", marginRight: "8px" }}
          />
          Chat with us
        </a>
      </p>

      {/* Store Locations */}
      <div className="my-4">
        <h5>Visit Our Stores</h5>
        <ul>
          <li>
            Main Branch (Islamic Mall):{" "}
            <a href="https://goo.gl/maps/sample1" target="_blank">
              Google Maps
            </a>
          </li>
          <li>
            Shop 2:{" "}
            <a href="https://goo.gl/maps/sample2" target="_blank">
              Google Maps
            </a>
          </li>
          <li>
            Shop 3:{" "}
            <a href="https://goo.gl/maps/sample3" target="_blank">
              Google Maps
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
