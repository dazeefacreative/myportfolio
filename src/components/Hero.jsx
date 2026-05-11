
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";

import heroImage from "../assets/images/dazeefa.png";
import backdrop from "../assets/images/backdrop.png";
import cv from "../resume/Dazeefa Resume Web Design & Dev.pdf";

const phrases = [
  "UI/UX Designer",
  "Full-Stack Developer",
  "Webflow Expert",
];

const skills = [
  "Web Design",
  "Full-Stack Development",
  "App Design",
  "Webflow",
  "Social Media Design",
  "Product Design",
  "Branding",
];

const introTitle = "I turn your vision into a website that wins customers.";
const introText =
  "I help founders, startups, and growing businesses build premium websites that load fast, look stunning, and convert visitors into paying clients. From Figma to full-stack, I handle it all.";

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: "smooth" });
};

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section aria-label="Hero, Dazeefa Web Designer and Full-Stack Developer">
      <div className="relative flex flex-col lg:flex-row w-full justify-between items-center max-w-6xl mx-auto px-6 pb-8 pt-6">
        <motion.img
          src={backdrop}
          alt=""
          role="presentation"
          className="hidden sm:block absolute z-1 w-[280px] lg:w-[350px] top-10 right-4 lg:left-1/2"
          initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
          animate={{ opacity: 1, scale: 1, x: "-50%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="flex items-center">
          <div className="w-full z-10 min-w-[310px] mx-auto lg:min-w-[500px]">

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-secondary/40 rounded-full bg-secondary/10"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" aria-hidden="true" />
              <span className="text-xs text-secondary font-medium tracking-wide">Available for new projects</span>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="block text-sm opacity-60 mb-2"
            >
              Hi, I'm Dazeefa,
            </motion.span>

            {phrases.length > 0 && (
              <motion.h1
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-3xl lg:text-4xl h-20 max-w-[300px] sm:max-w-[340px] pr-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                {displayText}
                <span className="animate-blink border-r-2 border-secondary ml-0.5" aria-hidden="true" />
              </motion.h1>
            )}

            {/* Mobile intro */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
              className="lg:hidden w-full mt-8"
            >
              <span className="text-xs opacity-50 tracking-[3px] before:content-['-'] before:mr-1">What I do</span>
              <h2 className="font-body text-xl font-semibold mb-4 mt-2 leading-snug">{introTitle}</h2>
              <p className="opacity-60 text-sm mb-8 leading-relaxed">{introText}</p>

              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-2 text-sm bg-gradient-to-r from-primary to-secondary text-dark font-bold py-2.5 px-5 hover:scale-105 transition-transform"
                  aria-label="Start a project"
                >
                  <span>Start a Project</span>
                  <Icon icon="tabler:arrow-narrow-right" aria-hidden="true" />
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="flex items-center gap-2 text-sm border border-gray-500 py-2.5 px-5 hover:border-primary hover:text-primary transition-colors"
                  aria-label="View my work"
                >
                  <span>View My Work</span>
                </button>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex gap-3 mt-16 lg:mt-32"
              aria-label="Social media links"
            >
              <a href="https://www.instagram.com/dazeefacreative/" target="_blank" rel="noopener noreferrer" aria-label="View Dazeefa on Instagram">
                <Icon icon="logos:instagram-icon" className="hover:animate-bounce bg-white rounded-md p-0.5 size-8 sm:size-7" aria-hidden="true" />
              </a>
              <a href="https://github.com/dazeefacreative" target="_blank" rel="noopener noreferrer" aria-label="View Dazeefa on GitHub">
                <Icon icon="logos:github-icon" className="hover:animate-bounce bg-white rounded-md p-0.5 size-8 sm:size-7" aria-hidden="true" />
              </a>
              <a href="https://behance.net/dazeefacreative" target="_blank" rel="noopener noreferrer" aria-label="View Dazeefa's Behance portfolio">
                <Icon icon="streamline-logos:behance-logo-block" className="hover:animate-bounce size-8 sm:size-7" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/in/dazeefacreative" target="_blank" rel="noopener noreferrer" aria-label="Connect with Dazeefa on LinkedIn">
                <Icon icon="streamline-logos:linkedin-logo-block" className="hover:animate-bounce size-8 sm:size-7" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ x: -80, y: 80 }}
            whileInView={{ x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden sm:block w-full max-w-[500px] lg:-ml-[300px] z-10"
          >
            <img
              src={heroImage}
              alt="Dazeefa, Web Designer and Full-Stack Developer"
              className="w-full h-full object-cover"
              loading="eager"
              fetchpriority="high"
            />
          </motion.div>
        </div>

        {/* Desktop intro sidebar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
          className="hidden lg:block w-full max-w-[280px]"
        >
          <span className="text-xs opacity-50 tracking-[3px] before:content-['-'] before:mr-2">What I do</span>
          <h2 className="font-body text-xl font-semibold mb-4 mt-2 leading-snug">{introTitle}</h2>
          <p className="opacity-60 text-sm mb-8 leading-relaxed">{introText}</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center gap-2 text-sm bg-gradient-to-r from-primary to-secondary text-dark font-bold py-2.5 px-5 hover:scale-105 transition-transform"
              aria-label="Start a project"
            >
              <span>Start a Project</span>
              <Icon icon="tabler:arrow-narrow-right" aria-hidden="true" />
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 text-sm border border-gray-500 py-2 px-4 hover:border-primary hover:text-primary transition-colors"
                aria-label="View my work"
              >
                View My Work
              </button>
              <button
                onClick={() => window.open(cv, "_blank")}
                className="flex items-center gap-1 text-sm opacity-50 hover:opacity-100 transition-opacity"
                aria-label="Download resume PDF"
              >
                <Icon icon="tabler:download" className="size-4" aria-hidden="true" />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills ticker bar */}
      <div className="w-full bg-veryDark mt-10 md:mt-0" aria-hidden="true">
        <div className="overflow-x-auto lg:overflow-visible no-scrollbar scroll-smooth">
          <div className="w-max md:w-full flex items-center gap-4 py-5 px-[30px] md:max-w-7xl md:mx-auto md:justify-center">
            <Icon icon="tabler:direction-arrows-filled" className="size-3" />
            {skills.map((skill, i) => (
              <React.Fragment key={i}>
                <span className="uppercase font-heading whitespace-nowrap text-sm tracking-wide">{skill}</span>
                <Icon icon="tabler:direction-arrows-filled" className="size-3" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
