
import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import mumbossador from "../assets/images/mumbossador.png";
import tdawempire from "../assets/videos/dawempire.mp4";
import dawempire from "../assets/images/dawempire.png";
import ignite2transform from "../assets/images/ignite2transform.png";
import scanmyframeFeaturedImg from "../assets/images/scanframedashboard.jpg";
import scanmyframe from "../assets/images/scanmyframe.png";
import sturdylife from "../assets/images/sturdylife.png";

const worksData = [
  {
    title: "E-commerce Storefront, Cart & Checkout",
    client: "Sturdy Life",
    image: sturdylife,
    tags: ["Web Design", "Full-Stack Dev"],
    features: ["Product catalog", "Cart & checkout", "Payment integration", "Responsive design"],
    description:
      "Built a full-stack e-commerce storefront from the ground up, covering product browsing, cart, checkout, and payment integration. Clean, conversion-focused design paired with a reliable purchase flow customers can trust.",
    link: "https://sturdylifer.com",
  },
  {
    title: "SaaS Platform, Landing Page, Dashboard & Auth",
    client: "ScanMyFrame",
    image: scanmyframe,
    featured_image: scanmyframeFeaturedImg,
    tags: ["Web Design", "Full-Stack Dev"],
    features: ["Landing page", "User dashboard", "Authentication", "Custom blog", "Responsive design"],
    description:
      "Built the complete digital infrastructure for a growing SaaS product, from a high-converting landing page to a fully functional user dashboard with authentication and a custom blog. The result: a polished, scalable platform ready to acquire and retain customers.",
    link: "https://scanmyframe.com",
  },
  {
    title: "Community Brand Website, 7+ Pages",
    client: "Mumbossador",
    image: mumbossador,
    tags: ["Web Design", "Full-Stack Dev"],
    features: ["7+ page website", "Custom blog", "Responsive design"],
    description:
      "Designed and developed a multi-page website for a community brand that needed to communicate authority and warmth simultaneously. Strong visual identity, clear information architecture, and a custom blog that turns visitors into engaged community members.",
    link: "https://mumbossador.com",
  },
  {
    title: "Media Management Platform, Full Web Experience",
    client: "DawEmpire",
    media: tdawempire,
    image: dawempire,
    tags: ["Web Development"],
    features: ["5+ page website", "Autoplay video hero", "Responsive design"],
    description:
      "Engineered a media management platform with a cinematic landing page and seamless multi-page navigation. The autoplay video hero creates immediate brand impact, the kind that makes visitors stop scrolling and start paying attention.",
    link: "https://dawempire.com",
  },
  {
    title: "Coaching Business Website, 7+ Pages",
    client: "Ignite2Transform",
    image: ignite2transform,
    tags: ["Web Design", "Full-Stack Dev"],
    features: ["7+ page website", "Lead generation", "Responsive design"],
    description:
      "Developed a comprehensive multi-page website for a coaching business that needed to establish credibility fast. Strong visual hierarchy and a clear content flow guide visitors from first impression straight to booking, with conversion as the primary objective.",
    link: "https://ignite2transform.com",
  },
];

export default function Works() {
  const [openIndex, setOpenIndex] = useState(null);
  const [zoomIn, setZoomIn] = useState(false);
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
      fullImageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [openIndex]);

  return (
    <section id="projects" aria-label="Selected projects">
      <div className="w-full max-w-6xl mx-auto px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeIn" }}
          viewport={{ once: true }}
          className="text-center text-4xl"
        >
          Selected Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "linear" }}
          viewport={{ once: true }}
          className="text-center text-sm opacity-80 max-w-3xl mx-auto my-8 leading-relaxed"
        >
          From concept to production, I design and build websites that look premium and perform at the highest level.
          Figma to full-stack, no handoffs, no gaps. One person who thinks like a designer and executes like a senior engineer.
          <br />
          <strong className="opacity-100">
            Stack: React.js · Tailwind CSS · Framer Motion · Node.js · Supabase · PostgreSQL · Webflow
          </strong>
        </motion.p>

        {worksData.map((work, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col lg:flex-row justify-between w-full mb-20 md:gap-20 xl:py-[50px] items-start"
              aria-label={`Project: ${work.title}`}
            >
              {/* Media */}
              <div className={`relative ${isEven ? "lg:order-1" : "lg:order-2"} group`}>
                <div className="absolute inset-0 max-w-[560px] max-h-[240px] md:max-w-[680px] md:max-h-[400px] bg-[#000000]/20 rounded-2xl rotate-3 group-hover:rotate-0 scale-105 z-0 transition-transform duration-300" />
                <div className="relative z-10 max-w-[500px] max-h-[200px] md:max-w-[600px] md:max-h-[340px] flex-shrink-0 rounded-2xl overflow-hidden">
                  {!work.media ? (
                    <img
                      src={work.featured_image || work.image}
                      alt={`${work.client}, ${work.title}`}
                      className="w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <video
                      src={work.media}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full object-cover"
                      aria-label={`${work.client} website preview`}
                    />
                  )}
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden absolute bottom-0 w-full py-3 bg-white text-dark text-center font-medium text-sm group-hover:flex items-center justify-center gap-2 transition-all duration-200"
                    aria-label={`Visit ${work.client} live site`}
                  >
                    Visit live site <Icon icon="tabler:external-link" className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Text */}
              <div
                className={`max-w-[300px] lg:max-w-[480px] flex flex-col gap-4 mb-4 justify-between py-8 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div className="flex flex-row gap-2 flex-wrap">
                  {work.tags && work.tags.map((tag, i) => (
                    <span key={i} className="text-xs text-primary border border-primary px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                {work.client && (
                  <span className="text-xs opacity-40 uppercase tracking-widest">{work.client}</span>
                )}

                <h3 className="text-lg sm:text-2xl font-bold leading-tight">{work.title}</h3>

                <p className="text-sm opacity-70 leading-relaxed">{work.description}</p>

                <div className="flex flex-row gap-2 flex-wrap">
                  {work.features && work.features.map((feature, i) => (
                    <span
                      key={i}
                      className="text-[0.8rem] text-primary border border-primary/30 bg-primary/5 px-2 py-0.5 rounded-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-2 items-center">
                  <button
                    onClick={() => { setOpenIndex(index); setZoomIn(false); }}
                    className="relative overflow-hidden items-center flex py-2 px-4 rounded-lg bg-gradient-to-r from-[rgba(19,19,19,0.9)] to-[rgba(164,164,164,0.2)] group"
                    aria-label={`View full preview of ${work.title}`}
                  >
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0" />
                    <span className="relative z-10 flex items-center text-sm text-white group-hover:text-black transition-colors duration-300">
                      Full Preview
                    </span>
                  </button>
                  <a
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-primary hover:underline underline-offset-2 transition-all"
                    aria-label={`Visit ${work.client} live site`}
                  >
                    <Icon icon="tabler:external-link" className="size-4" aria-hidden="true" />
                    Live Site
                  </a>
                </div>

                {openIndex === index && (
                  <div
                    ref={fullImageRef}
                    className="fixed inset-0 z-[60] overflow-auto no-scrollbar bg-gray-900/98 md:p-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Full preview: ${work.title}`}
                  >
                    <div className={`relative ${zoomIn ? "md:w-[500px] p-8" : "w-full"} mx-auto`}>
                      <img
                        src={work.image}
                        alt={`Full screenshot of ${work.client}, ${work.title}`}
                        className="w-full object-cover"
                      />
                      <Icon
                        icon="ci:close-md"
                        onClick={() => setOpenIndex(null)}
                        className="fixed top-4 right-10 size-8 md:size-10 p-2 bg-dark cursor-pointer hover:bg-body hover:text-dark hover:shadow-md rounded-full"
                        role="button"
                        tabIndex={0}
                        aria-label="Close preview"
                        onKeyDown={(e) => e.key === "Enter" && setOpenIndex(null)}
                      />
                      <Icon
                        icon={zoomIn ? "lucide:zoom-out" : "lucide:zoom-in"}
                        onClick={() => setZoomIn(!zoomIn)}
                        className="fixed md:top-4 md:right-24 right-10 top-14 size-8 md:size-10 p-2 bg-dark cursor-pointer hover:bg-body hover:text-dark hover:shadow-md rounded-full"
                        role="button"
                        tabIndex={0}
                        aria-label={zoomIn ? "Zoom out" : "Zoom in"}
                        onKeyDown={(e) => e.key === "Enter" && setZoomIn(!zoomIn)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
