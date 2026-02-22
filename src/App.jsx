import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Services />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}
