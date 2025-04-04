import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComp = () => {
  const [expanded, setExpanded] = useState(false); // control toggle state

  const handleNavClick = () => {
    setExpanded(false); // close menu on link click
  };

  return (
    <Navbar
      expand="lg"
      className="bg-white shadow-sm sticky-top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
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
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/perfume" onClick={handleNavClick}>
              Perfume
            </Nav.Link>
            <Nav.Link as={Link} to="/attar" onClick={handleNavClick}>
              Attar
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
