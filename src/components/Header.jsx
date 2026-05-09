
import { Icon } from "@iconify/react";
import { useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header(){
    const [open, setOpen] = useState(false);

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
        });
    }
    };


    //  items-center group opacity-70 hover:opacity-1
    return(
        <heading>
            <nav className="w-full max-w-6xl mx-auto py-10 px-6">
                <div className="flex justify-between">
                    <div class="text-2xl font-black">Dazeefa<span class="text-primary">.</span></div>
                    <div 
                    className="hidden md:flex justify-between gap-2">
                        <motion.button
                        initial={{opacity: 0, x:-80}}
                        animate={{ opacity: 0.7, x: 0 }}
                        whileHover={{ opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } }}
                        transition={{duration: 0.7, delay: 0.3, ease: "easeInOut"}}
                        onClick={() => scrollToSection("services")}

                        className="group flex flex-col items-center font-lufga px-3 py-2 rounded text-[0.95rem] no-underline transition-colors duration-200 ease-in-out active:opacity-80 opacity-70 hover:opacity-100"
                        >
                        Services
                        <div className="w-1 h-1 opacity-0 group-hover:opacity-100 group-hover:animate-pulse group-hover:w-4 font-black bg-primary transition-all duration-500 rounded-full"></div>
                        </motion.button>

                        <motion.button
                        initial={{opacity: 0, x:-60}}
                        animate={{ opacity: 0.7, x: 0 }}
                        whileHover={{ opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } }}
                        transition={{duration: 0.7, delay: 0.4, ease: "easeInOut"}}
                        onClick={() => scrollToSection("projects")}

                        className="group flex flex-col items-center font-lufga px-3 py-2 rounded text-[0.95rem] no-underline transition-colors duration-200 ease-in-out active:opacity-80 opacity-70 hover:opacity-100"
                        >
                        Projects
                        <div className="w-1 h-1 opacity-0 group-hover:opacity-100 group-hover:animate-pulse group-hover:w-4 font-black bg-primary transition-all duration-500 rounded-full"></div>
                        </motion.button>

                        <motion.button
                        initial={{opacity: 0, x:-40}}
                        animate={{ opacity: 0.7, x: 0 }}
                        whileHover={{ opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } }}
                        transition={{duration: 0.7, delay: 0.5, ease: "easeInOut"}}
                        onClick={() => scrollToSection("contact")}

                        className="group flex flex-col items-center font-lufga px-3 py-2 rounded text-[0.95rem] no-underline transition-colors duration-200 ease-in-out active:opacity-80 opacity-70 hover:opacity-100"
                        >
                        Contact
                        <div className="w-1 h-1 opacity-0 group-hover:opacity-100 group-hover:animate-pulse group-hover:w-4 font-black bg-primary transition-all duration-500 rounded-full"></div>
                        </motion.button>
                    </div>
                    {/* Mobile Hamburger */}
                    <button
                    className="md:hidden inline-flex items-center justify-center text-cherry-red p-2 z-30"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle Menu"
                    >
                    {open ? <Icon className="text-2xl" icon={"line-md:menu-to-close-alt-transition"} /> : <Icon className="text-2xl" icon={"line-md:menu"} /> }
                    </button>
                </div>
            </nav>
            <div
                className={`md:hidden absolute w-full bg-veryDark rounded-br-3xl rounded-bl-3xl overflow-hidden left-1/2 -translate-x-1/2 top-0 pt-20 pb-10 z-20 w-full shadow-md transition-all duration-300 ${
                open
                    ? "flex opacity-100 translate-y-0"
                    : "hidden opacity-0 -translate-y-2"
                } flex-col gap-4 px-6 py-4`}
            >
                {links.map((l) => (
                    <a
                    onClick={() => {scrollToSection(l.href.substring(1)), setOpen(false)}}
                    key={l.label}
                    href={l.href}
                    className="flex flex-col items-center font-lufga px-3 py-2 rounded text-[0.95rem] no-underline transition-colors duration-200 ease-in-out active:opacity-80 hover:opacity-100"

                    >
                    {l.label}
                    </a>
                ))}
            </div>
        </heading>
    )
}