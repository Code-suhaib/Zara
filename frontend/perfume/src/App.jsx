// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Perfume from "./components/Perfume";
import Attar from "./components/Attar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App= () => {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/attar" element={<Attar />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;




// Guide to Implement:
// 1. Create a folder structure: components/ and pages/
// 2. Add components: NavbarComp.jsx, Footer.jsx
// 3. Add pages: Home.jsx, About.jsx, Contact.jsx, Perfume.jsx, Attar.jsx
// 4. Install required libraries:
//    npm install react-router-dom bootstrap framer-motion @fontsource/poppins
// 5. Replace logo path with your real logo inside assets folder
// 6. I’ll now provide code for each page one by one as you requested.

