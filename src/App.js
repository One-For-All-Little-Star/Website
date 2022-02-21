import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./Layout/index";
import Header from "./Layout/header";
import Features from "./pages/Features";
import Tutorial from "./pages/Tutorial";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Download from "./pages/Download";
import SignIn from "./components/Form";
export default function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header>
      <Container fluid className="App">
        <Routes>
          <Route index element={<Index />} />
          <Route exact path="/features" element={<Features />}></Route>
          <Route exact path="/tutorial" element={<Tutorial />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/download" element={<Download />}></Route>
        </Routes>
      </Container> */}
      <NavLink to='/SignIn'><button>SignIn</button></NavLink>
    </BrowserRouter>
    
  );
}
