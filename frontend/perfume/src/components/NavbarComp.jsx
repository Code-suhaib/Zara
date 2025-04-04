import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComp = () => {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <motion.img
            src="/logo.png"
            alt="Logo"
            width="40"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-semibold">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/perfume">Perfume</Nav.Link>
            <Nav.Link as={Link} to="/attar">Attar</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
