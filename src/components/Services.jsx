import { motion } from "framer-motion";
import { Icon } from "@iconify/react"

import ServiceCard from "./ServiceCard";

export default function Services(){

    return(
        <section id="services" className="bg-veryDark">
            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 w-full max-w-6xl mx-auto gap-y-10 gap-2 lg:gap-y-16 px-6 py-12">
                <div className="col-span-1 md:col-span-6 lg:col-span-12 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-4 justify-center">
                        <span className="inline-block text-xs opacity-50 tracking-[3px] text-center sm:text-start before:content-['-'] before:mr-1">Services</span>
                        <motion.h2 
                        initial={{opacity: 0, x:-80}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.7, delay: 0.3, ease: "anticipate"}}
                        viewport={{once: true}}

                        className="text-4xl lg:text-5xl max-w-sm  text-center sm:text-start">
                            What I'm Offering
                            </motion.h2>
                    </div>
                    <motion.p 
                    initial={{opacity: 0, y:-80}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 0.7, delay: 0.4, ease: "easeIn"}}

                    className="max-w-sm lg:max-w-lg text-center sm:text-start">
                        There are many areas of service I can handle for you. Please pick one and let’s get started.
                    </motion.p>
                </div>


                <div className="hidden lg:flex justify-center col-span-1 -rotate-90 items-center gap-4">
                    <motion.button 
                    whileTap={{scale: 0.8}}
                    onClick={() => {
                        document
                        .getElementById("works")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="min-w-[50px] min-h-[50px] flex items-center justify-center bg-white hover:scale-110 overflow-hidden group rounded-full hover:animate-none"
                    >
                        <Icon icon={"tabler:arrow-narrow-left-dashed"} className="size-8 text-dark group-active:-translate-x-10 transition-all duration-300"/>
                    </motion.button>
                    <div className="min-w-[40px] min-h-[1px] bg-white"></div>
                    <div className="w-[120px]">
                        <span className="typing-scroll tracking-widest inline-block">
                            Scroll Downn
                        </span>
                    </div>
                </div>
                <div className="hidden lg:flex justify-center col-span-1"/>  
                <div className="hidden lg:flex justify-center col-span-1"/>                
                <ServiceCard />
            </div>
        </section>
    )
}