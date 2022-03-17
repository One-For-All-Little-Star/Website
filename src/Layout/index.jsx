import React from "react";
import Header from "./header";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Tutorial from "../pages/Tutorial";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Download from "../pages/Download";
import Messager from "../components/ChatMessenger";
import { FullPage, Slide } from "react-full-page";
import "../index.css";

function Index() {
  return (
    <FullPage>
      <Header />
      <Slide>
        <Home />
      </Slide>
      <Slide>
        <Tutorial />
      </Slide>
      <Slide>
        <Features />
      </Slide>
      <Slide>
        <About />
      </Slide>
      <Slide>
        <Contact />
      </Slide>
      <Slide>
        <Download />
      </Slide>
      <Messager />
    </FullPage>
  );
}

export default Index;
