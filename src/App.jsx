import React from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import About from "./components/About";
import Services from "./components/Services";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <About />
        <Services />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
