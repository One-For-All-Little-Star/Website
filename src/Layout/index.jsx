import React from "react";
import Header from "./header";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Tutorial from "../pages/Tutorial";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Download from "../pages/Download";
import { Container } from "react-bootstrap";
import "../styles/index.css";
import ChatMessenger from "../components/ChatMessenger";
function index(props) {
  return (
    <div>
      <Header></Header>
      <Container fluid id="swup" className="transition-fade">
        <Home />
        <Features />
        <Tutorial />
        <About />
        <Contact />
        <Download />
        <ChatMessenger/>
      </Container>

    </div>
  );
}

export default index;
