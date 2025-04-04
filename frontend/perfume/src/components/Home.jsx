import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "/hero-bg.jpg";  // Ensure this image exists in public or assets folder

const Home = () => {
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
          {/* Text & Button */}
          <Col md={8} className="text-light text-center">
            <h1 className="display-4 fw-bold">Hot Gift</h1>
            <h2 className="fw-light">A Little Surprise</h2>
            <p className="lead">
              Experience our finest fragrances, crafted with expertise.
              Get a scent that defines your personality.
            </p>
            <Button variant="dark" size="lg" href="/discover">
              Discover
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
