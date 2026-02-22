
import { useState } from "react"
import { Icon } from "@iconify/react"
import { useRef, useEffect } from "react";
import { motion, press } from "framer-motion";

import mumbossador from "../assets/images/mumbossador.png"

import tdawempire from "../assets/videos/dawempire.mp4"
import dawempire from "../assets/images/dawempire.png"

import ignite2transform from "../assets/images/ignite2transform.png"

import focusstore from "../assets/images/focusstore.png"

const worksData = [
    {
        title: "Web Design and Development for Community Brand",
        image: mumbossador,
        tags: ["web design", "web development"],
        link: "https://mumbossador.com"
    },
       {
        title: "Web Development for Media Management Solutions",
        media: tdawempire,
        image: dawempire,
        tags: ["web development"],
        link: "https://dawempire.com"
    },     
    {
        title: "Web Design and Development for Coaching Business",
        image: ignite2transform,
        tags: ["web design", "web development"],
        link: "https://ignite2transform.com"
    },
    {
        title: "Webflow Development for e-Commerce Fashion Brand",
        image: focusstore,
        tags: ["webflow"],
        link: "https://focusstore.com.ng"
    },
]

export default function Works(){
    const [openIndex, setOpenIndex] = useState(null)
    const [zoomIn, setZoomIn] = useState(false)

    const fullImageRef = useRef(null);

    useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

    useEffect(() => {
    if (openIndex !== null && fullImageRef.current) {
        fullImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end", // scrolls until the bottom of the element is visible
        });
    }
    }, [openIndex]);


    return(
        <section id="projects">
            <div className="w-full max-w-6xl mx-auto px-6 py-12">
                <motion.h2 
                initial={{opacity: 0, y:-80}}
                whileInView={{opacity: 1, y:0}}
                transition={{duration: 0.7, ease: "easeIn"}}
                viewport={{once: true}}
            
                className="text-center text-4xl">Selected Projects</motion.h2>
                <motion.p
                initial={{opacity: 0, scale: 0.6}} 
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.7, delay: 0.3, ease: "linear"}}
                viewport={{once: true}}

                className="text-center text-sm opacity-80 max-w-4xl mx-auto my-8">
                    I specialize in designing and building responsive, high-performance websites using Figma, Illustrator, Photoshop for <span className="font-bold">UI Design.</span> React.js, Tailwind css framework, Framer Motion for <span className="font-bold">Frontend Development.</span> Node.js, PHP, Motoko ICP for <span className="font-bold">Backend Development.</span> MySQL and Postgres for <span className="font-bold">Database Management.</span> I'm also a Webflow developer.
                </motion.p>
                
                {worksData.map((work, index) => {
                    const isEven = index % 2 === 0;

                    return (
                    <motion.div
                        key={index}
                        className="flex flex-col lg:flex-row justify-between w-full mb-8 md:gap-20 xl:py-[50px] items-justify sm:shadow-none"
                    >
                        {/* Image or Video */}
                      <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"} group`}>

                        {/* Rotated background layer */}
                        <div className="
                            absolute 
                            inset-0 
                            max-w-[560px] 
                            max-h-[240px] 
                            md:max-w-[680px] 
                            md:max-h-[400px] 
                            bg-secondary/20 
                            rounded-2xl 
                            rotate-3 group-hover:rotate-0
                            scale-105 
                            z-0
                            transition-transform duration-300
                        "></div>

                        {/* Main media card */}
                        <div
                            className={` 
                            relative 
                            z-10
                            max-w-[500px] 
                            max-h-[200px] 
                            md:max-w-[600px] 
                            md:max-h-[340px] 
                            flex-shrink-0 
                            rounded-2xl 
                            overflow-hidden 
                            group`}
                        >

                            { !work.media ? (
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full object-cover"
                            />
                            ) : (
                            <video
                                src={work.media}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full object-cover"
                            />
                            )}

                            <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden absolute bottom-0 w-full py-3 bg-gray-300 text-dark text-center group-hover:block transition-all duration-200"
                            >
                            Click here to visit site
                            </a>

                        </div>
                        </div>

                        {/* Text */}
                        <div                    
                        className={`lg:max-w-[480px] flex flex-col gap-5 mb-4 justify-between py-8 ${
                            isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                        >
                        
                            <div className="flex flex-row gap-4">
                            {work.tags && work.tags.map((tag) =>
                                <span className="text-xs text-primary border border-primary px-2 py-1">{tag}</span>
                            )}
                            </div>
                            <h3 className="reveal-up sm:text-4xl text-lg font-bold md:mb-6">
                            {work.title}
                            </h3>
                            
                            <a                             
                            onClick={()=>{setOpenIndex(index), setZoomIn(false)}}
                            className="relative overflow-hidden items-center flex w-[140px] py-2 px-3 rounded-lg bg-gradient-to-r from-[rgba(19,19,19,0.9)] to-[rgba(164,164,164,0.2)] group"
                            >
                                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></span>
                                <span className="relative z-10 flex items-center text-center text-white group-hover:text-black transition-colors duration-300">
                                    See Full Details 
                                </span>
                            </a>

                            {openIndex === index && (
                            <div className={`fixed inset-0 z-30 overflow-auto no-scrollbar size-8rmd: bg-gray-300 md:p-8`}>
                                <div className={`relative ${zoomIn ? "md:w-[500px] p-8" : "w-full"} mx-auto`}>
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="w-full object-cover"
                                />

                                <Icon
                                    icon={"ci:close-md"}
                                    onClick={() => setOpenIndex(null)}
                                    className="fixed top-4 right-10 size-8 md:size-10 p-2 bg-dark cursor-pointer hover:bg-body hover:text-dark hover:shadow-md rounded-full"
                                />

                                <Icon
                                    icon={zoomIn ? "lucide:zoom-in" : "lucide:zoom-out"}
                                    onClick={() => setZoomIn(!zoomIn)}
                                    className="fixed md:top-4 md:right-24 right-10 top-14 size-8 md:size-10 p-2 bg-dark cursor-pointer hover:bg-body hover:text-dark hover:shadow-md rounded-full"
                                />
                                </div>
                            </div>
                            )}

                            
                        </div>

                    </motion.div>
                    );
                })}

            </div>
            </section>

    )
}