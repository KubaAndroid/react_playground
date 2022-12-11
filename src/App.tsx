import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Order } from "./pages/Order"
import { Menu } from "./pages/Menu"
import { Contact } from "./pages/Contact"
import {Navbar} from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/order" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
