
import { Icon } from "@iconify/react"
import { useState, useEffect } from "react";
import React from "react";
import { motion } from "framer-motion";

import heroImage from "../assets/images/dazeefa.png"
import backdrop from "../assets/images/backdrop.png"
import cv from "../resume/Dazeefa Resume Web Design & Dev.pdf"

export default function Hero(){
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const phrases = [
    "Passionate UI/UX Designer",
    "Senior Full-Stack Developer",
    "Senior Graphics Designer"
    ];

    const introTitle = "I research problems, design solutions, and build products that work."
    const introText = "I design and build beautiful websites for businesses around the globe. If you need a modern and powerful website or social media designs, send me an email."

    const skills = [
    "Web Design", 
    "Full Stack Develeopment", 
    "App Design", 
    "Webflow",
    "Social Media Design", 
    "Product Design", 
    "Branding"
    ];

    useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
        if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));

        if (displayText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 1200); // pause before deleting
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
        <section className="h-100vh">
            <div className="relative flex flex-col lg:flex-row w-full justify-between items-center max-w-6xl mx-auto px-6 pb-8">
                <motion.img
                    src={backdrop}
                    className="hidden sm:block absolute z-1 w-[280px] lg:w-[350px] top-10 right-4 lg:left-1/2"
                    initial={{ opacity: 0, scale: 0.5, x: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: "-50%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                />

                <header className="flex items-center">
                    <div className="w-full z-10 min-w-[310px] mx-auto lg:min-w-[500px]">
                        <motion.span 
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="text-lg"
                        >I am Dazeefa
                        </motion.span>
                        {phrases.length > 0 && (
                        <motion.h1 
                        initial={{ opacity: 0, x: 80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="text-3xl lg:text-4xl h-24 max-w-[250px] sm:max-w-[300px] pr-1 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                         {displayText}
                        </motion.h1>
                        )}
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay:0.7, ease: "easeOut" }}
                            className="lg:hidden w-full mt-8"
                        >

                            <span className="text-xs opacity-50 tracking-[3px]">- Introduction</span>
                            <h3 className="font-body text-2xl mb-5">{introTitle}</h3>
                            <p className="opacity-60 text-sm mb-10">{introText}</p>

                            <div className="flex items-center gap-8">
                                <button 
                                onClick={() => window.open(cv, "_blank")}
                                className="flex items-center gap-2 text-sm border border-gray-100 py-2 px-4 hover:scale-105 transition-transform">  
                                    <span>Download CV</span>
                                    <Icon icon={"tabler:arrow-badge-down"} />
                                </button>
                                <a 
                                href="https://wa.me/2347082816283?text=Let's%20talk" 
                                className="flex text-primary items-center gap-4 underline underline-offset-3 text-sm">
                                    <span>Let's talk</span>
                                    <Icon icon={"tabler:arrow-badge-right"} />
                                </a>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex gap-2 mt-16 lg:mt-32"
                        >
                            <a href="https://www.instagram.com/dazeefacreative/"><Icon icon={"logos:instagram-icon"} className="hover:animate-bounce bg-white rounded-md p-0.5 size-8 sm:size-6"/></a>
                            <a href="https://github.com/dazeefacreative"><Icon icon={"logos:github-icon"} className="hover:animate-bounce bg-white rounded-md p-0.5 size-8 sm:size-6"/></a>
                            <a href="https://behance.net/dazeefacreative"><Icon icon={"streamline-logos:behance-logo-block"} className="hover:animate-bounce size-8 sm:size-6"/></a>
                            <a href="https://linkedin.com/in/dazeefacreative"><Icon icon={"streamline-logos:linkedin-logo-block"} className="hover:animate-bounce size-8 sm:size-6"/></a>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ x: -80, y: 80 }}
                        whileInView={{ x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="hidden sm:block w-full max-w-[500px] lg:-ml-[300px] z-10"
                    >
                        <img src={heroImage} className="w-full h-full object-cover" />
                    </motion.div>
                </header>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay:0.7, ease: "easeOut" }}
                    className="hidden lg:block w-full max-w-[280px]"
                >

                    <span className="text-xs opacity-50 tracking-[3px] before:content-['-'] before:mr-1">Introduction</span>
                    <h3 className="font-body text-2xl mb-5">{introTitle}</h3>
                    <p className="opacity-60 text-sm mb-10">{introText}</p>
                    
                    <div className="flex gap-8">
                        <button 
                        onClick={() => window.open(cv, "_blank")}
                        className="flex items-center gap-2 text-sm border border-gray-100 py-2 px-4 hover:scale-105 transition-transform">
                            <span>Download CV</span>
                            <Icon icon={"tabler:arrow-badge-down"} />
                        </button>
                        <div className="flex text-primary items-center gap-2 hover:gap-4">
                            <a href="https://wa.me/2347082816283?text=Let's%20talk" className="underline underline-offset-3">Let's talk</a>
                            <Icon icon={"tabler:arrow-badge-right"} />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="w-full bg-veryDark mt-10 md:mt-0">
                
                <div className="overflow-x-auto lg:overflow-visible no-scrollbar scroll-smooth">
                    
                    <div className="
                        w-max md:w-full
                        flex items-center gap-4
                        py-5 px-[30px]
                        md:max-w-7xl md:mx-auto md:justify-center
                    ">
                        <Icon icon={"tabler:direction-arrows-filled"} className="size-3" />

                        {skills.map((skill, i) => (
                            <React.Fragment key={i}>
                                <span className="uppercase font-heading whitespace-nowrap">
                                    {skill}
                                </span>
                                <Icon icon={"tabler:direction-arrows-filled"} className="size-3"  />
                            </React.Fragment>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    )
}