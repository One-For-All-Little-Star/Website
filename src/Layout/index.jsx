import React from "react";
import Header from "./header";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Tutorial from "../pages/Tutorial";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Download from "../pages/Download";
import ChatMessenger from "../components/ChatMessenger";
import { FullPage, Slide } from "react-full-page";
import "../index.css";

function Index() {
  return (
    <FullPage duration="600">
      <Header />
      <Slide id="slide">
        <Home />
      </Slide>
      <Slide id="slide">
        <Tutorial />
      </Slide>
      <Slide id="slide">
        <Features />
      </Slide>
      <Slide id="slide">
        <About />
      </Slide>
      <Slide id="slide">
        <Contact />
      </Slide>
      <Slide id="slide">
        <Download />
      </Slide>
      <ChatMessenger />
    </FullPage>
  );
}

export default Index;
