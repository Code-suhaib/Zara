import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3 border-top">
      <Container>
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <h5 className="fw-bold text-secondary">About Us</h5>
            <p style={{ color: "#6c757d" }}>
              Owned by <strong>Salim Sayyed</strong>, a perfume expert with over <strong>20+ years</strong> of experience. We can replicate any fragrance if you bring us a sample. With 3 stores, including a mall branch and 20+ employees, your scent is in good hands.
            </p>
          </Col>
          <Col md={3} className="mb-3">
            <h5 className="fw-bold text-secondary">Follow Us</h5>
            <a
              href= "https://www.instagram.com/zara_perfume_mall/?igsh=MXZrZ2pkeHJvNTliNQ%3D%3D&utm_source=qr#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark me-3 fs-5"
            >
              <FaInstagram />
            </a>
            <a
              href=" https://www.youtube.com/@Zaraperfumespimpripune"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-5"
            >
              <FaYoutube />
            </a>
          </Col>
          <Col md={3}>
            <h5 className="fw-bold text-secondary">Quick Links</h5>
            <ul className="list-unstyled" style={{ color: "#6c757d" }}>
              <li>Perfume</li>
              <li>Attar</li>
              <li>Custom Fragrance</li>
              <li>Stores</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="text-center">
          <Col>
            <small className="text-muted">
              Website design & developed by{" "}
              <a
                href="https://www.linkedin.com/in/suhaibjahagirdar/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none fw-bold text-secondary"
              >
                Suhaib Jahagirdar
              </a>
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
