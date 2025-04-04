import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import backgroundImage from "/hero-bg.jpg";  // Ensure the image path is correct

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "#fff",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          <Col md={8} className="text-white text-center">
            <h1 className="display-4 fw-bold text-warning">Fragrance That Defines You</h1>
            <h2 className="fw-light">Crafted With Passion, Inspired by You</h2>
            <p className="lead">
              Discover scents that speak your story — luxury, long-lasting, and made with 20+ years of expertise. Whether it's a signature scent or a custom blend, we’ve got your fragrance journey covered.
            </p>
            <Button variant="dark" size="lg" onClick={() => navigate("/perfume")}>
              Discover
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
