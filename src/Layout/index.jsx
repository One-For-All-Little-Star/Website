import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Features from "../pages/Features";
import Tutorial from "../pages/Tutorial";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Download from "../pages/Download";
import { FullPage, Slide } from "react-full-page";
import ChatMessenger from "../components/ChatMessenger";

function Index(props) {
  return (
    <div>
      <Header></Header>
      <FullPage>
        <Slide>
          <Home />
        </Slide>
        <Slide>
          <Features />
        </Slide>
        <Slide>
          <Tutorial />
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
        <ChatMessenger />
      </FullPage>
    </div>
  );
}

export default Index;
