
import { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react"
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Skills(){
    

    return(
        <section id="skills">
            <div className="w-full max-w-6xl mx-auto px-6 py-12">
                <div className="flex gap-12 items-center justify-center flex-col lg:flex-row">
                    <div className="w-full max-w-md">
                    <motion.span
                    initial={{opacity: 0, y: 20}} 
                    whileInView={{opacity: 0.5, y: 0}}        
                    viewport={{once: true}}
                    className="inline-block text-xs tracking-[3px] text-center sm:text-start before:content-['-'] before:mr-1">
                    My Skills
                    </motion.span>
                    <motion.h3
                        initial={{opacity: 0, y: 20}} 
                        whileInView={{opacity: 1, y: 0}}        
                        viewport={{once: true}}
                        transition={{duration: 0.7, delay: 0.2, ease: "easeOut"}}
                        className="text-3xl mb-10 uppercase mt-4">
                            Let's explore popular skills <span className="font-heading">& experience</span>
                    </motion.h3>
                    <motion.p  
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.7, delay: 0.3, ease: "easeOut"}}
                        className="text-sm opacity-80 mb-10">
                        Over the years, I’ve developed a diverse technical skill set through hands-on projects and real-world problem solving. I continuously refine my expertise and stay current with emerging technologies to deliver reliable, scalable, and high-quality solutions to my clients.
                    </motion.p> 
                    </div>
                    <motion.div
                    className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    >  
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:figma"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">Figma</span>
                                <span className="text-sm opacity-50">85%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-[85%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:adobe-photoshop"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">Photoshop</span>
                                <span className="text-sm opacity-50">95%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-[95%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:adobe-illustrator"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">Illustrator</span>
                                <span className="text-sm opacity-50">65%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-orange-900 to-orange-500 rounded-full w-[65%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:react"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">React.js</span>
                                <span className="text-sm opacity-50">90%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-[90%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:javascript"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">JavaScript</span>
                                <span className="text-sm opacity-50">90%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full w-[90%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:supabase-icon"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">Supabase</span>
                                <span className="text-sm opacity-50">70%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 rounded-full w-[70%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:nodejs-icon"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">Node.js</span>
                                <span className="text-sm opacity-50">95%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full w-[95%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"skill-icons:webflow"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">Webflow</span>
                                <span className="text-sm opacity-50">90%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-blue-800 to-blue-300 rounded-full w-[90%]"></div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={cardVariants}
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="relative flex flex-col gap-4 justify-between items-end bg-veryDark rounded-lg p-6"
                            >
                            <Icon icon={"logos:postgresql"} className="absolute -top-5 left-5 text-4xl" />
                            <div className="flex w-full justify-between">
                                <span className="text-sm opacity-80">Postgres</span>
                                <span className="text-sm opacity-50">85%</span>
                            </div>
                            <div className="w-full h-1 bg-gray-700 rounded-full">
                                <div className="h-full bg-gradient-to-r from-cyan-900 to-cyan-400 rounded-full w-[85%]"></div>
                            </div>
                        </motion.div>                    
                    </motion.div>
                </div>
            </div>
        </section>

    )
}