import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // ✅ Import Link for routing

const perfumes = [
  { img: "/perfume1.jpg", name: "Ferrari Black" },
  { img: "/perfume2.webp", name: "Jaguar Classic" },
  { img: "/perfume3.jpg", name: "Bentley Intense" },
  { img: "/perfume4.webp", name: "CR7 by Ronaldo" },
  { img: "/perfume5.jpg", name: "Azzaro Wanted" },
  { img: "/perfume6.avif", name: "Hugo Boss Bottled" },
  { img: "/perfume7.jpg", name: "Versace Eros" },
  { img: "/perfume8.webp", name: "Dior Sauvage" },
  { img: "/perfume9.jpg", name: "Armani Code" },
  { img: "/perfume10.jpg", name: "Calvin Klein One" },
  { img: "/perfume11.jpg", name: "Mont Blanc Legend" },
  { img: "/perfume12.jpeg", name: "YSL La Nuit" },
];

const Perfume = () => {
  return (
    <Container className="py-5">
      <motion.h2
        className="mb-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Original Perfumes
      </motion.h2>
      <p className="text-center mb-5">
        We offer authentic perfumes from top brands like Ferrari, Jaguar, Bentley, CR7 and more.
      </p>

      <Row className="g-4">
        {perfumes.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0 rounded-4">
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.name}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              />
              <Card.Body className="text-center d-flex flex-column justify-content-between">
                <div>
                  <Card.Title className="fs-6 fw-bold mb-2">{item.name}</Card.Title>
                  <Card.Text className="small text-muted mb-3">
                    Long-lasting & luxurious fragrance.
                  </Card.Text>
                </div>
                {/* ✅ Use Link for navigation */}
                <Link
                  to="/contact"
                  className="btn btn-dark btn-sm mt-auto px-3 rounded-pill"
                >
                  Buy Now
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Perfume;
