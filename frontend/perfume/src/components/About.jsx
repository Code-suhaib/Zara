import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center mb-5">
        {/* Owner Image */}
        <div className="col-md-4 mb-4 mb-md-0">
          <motion.img
            src="/owner.jpeg" // Replace with actual image
            alt="Owner Salim Sayyed"
            className="img-fluid rounded shadow"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* About Content */}
        <div className="col-md-8">
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
            Welcome to our perfume haven, where scent meets sophistication. Founded by <strong>Salim Sayyed</strong>, a perfumer with over <strong>20 years of experience</strong>, we specialize in curating and crafting luxurious fragrances that leave a lasting impression.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Whether you're drawn to iconic brands like <em>Ferrari, Jaguar, or CR7</em>, or seeking a custom-made scent that mirrors elegance, we bring your fragrance fantasies to life — blended live, in front of you. Every bottle is a blend of tradition, passion, and personalized perfection.
          </motion.p>
        </div>
      </div>

      {/* Workflow Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="mb-4 text-center">Our Workflow</h3>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm h-100">
              <h5>1. Consultation</h5>
              <p>
                Our journey begins with a quick consultation — whether in-store or online — where we understand your fragrance preferences, personality, and inspirations.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm h-100">
              <h5>2. Scent Selection</h5>
              <p>
                Based on your taste, we showcase a variety of original and inspired scents. From international classics to modern aromas, we help you discover your match.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm h-100">
              <h5>3. Live Blending</h5>
              <p>
                Here's where the magic happens! Watch your custom scent come to life as we blend the notes right in front of you — ensuring quality and satisfaction.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 border rounded shadow-sm h-100">
              <h5>4. Packaging & Delivery</h5>
              <p>
                Once finalized, your perfume is beautifully bottled and packaged. We offer both in-store pickup and doorstep delivery options for your convenience.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
