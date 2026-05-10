
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "services", label: "Services" },
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({ top: section.offsetTop - 72, behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-dark/95 backdrop-blur-sm shadow-lg" : ""}`}>
      <nav className="w-full max-w-6xl mx-auto py-5 px-6" aria-label="Main navigation">
        <div className="flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="text-2xl font-black"
            aria-label="Dazeefa Creative — back to top"
          >
            Dazeefa<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={{ opacity: 0, x: -80 + i * 20 }}
                animate={{ opacity: 0.7, x: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: "easeInOut" }}
                onClick={() => scrollToSection(l.href)}
                className="group flex flex-col items-center px-3 py-2 rounded text-[0.95rem] transition-all duration-200 ease-in-out hover:opacity-100"
                aria-label={`Navigate to ${l.label}`}
              >
                {l.label}
                <div className="w-1 h-1 opacity-0 group-hover:opacity-100 group-hover:w-4 bg-primary transition-all duration-500 rounded-full" />
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-primary to-secondary text-dark font-bold text-sm rounded hover:scale-105 transition-transform duration-200"
              aria-label="Hire me — navigate to contact"
            >
              Hire Me
            </motion.button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 z-30"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open
              ? <Icon className="text-2xl" icon="line-md:menu-to-close-alt-transition" />
              : <Icon className="text-2xl" icon="line-md:menu" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute w-full bg-veryDark rounded-br-3xl rounded-bl-3xl overflow-hidden left-0 top-0 pt-20 pb-10 z-20 shadow-md transition-all duration-300 ${
          open ? "flex opacity-100 translate-y-0" : "hidden opacity-0 -translate-y-2"
        } flex-col gap-4 px-6 py-4`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {links.map((l) => (
          <button
            onClick={() => { scrollToSection(l.href); setOpen(false); }}
            key={l.label}
            className="flex flex-col items-center px-3 py-2 rounded text-[0.95rem] transition-colors duration-200 ease-in-out hover:opacity-100"
          >
            {l.label}
          </button>
        ))}
        <button
          onClick={() => { scrollToSection("contact"); setOpen(false); }}
          className="mx-auto px-8 py-2.5 bg-gradient-to-r from-primary to-secondary text-dark font-bold text-sm rounded"
        >
          Hire Me
        </button>
      </div>
    </header>
  );
}