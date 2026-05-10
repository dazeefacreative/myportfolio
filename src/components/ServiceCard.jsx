import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useState } from "react";

import CreativeDesign from "../assets/images/vector-alt.svg?react";
import Coding from "../assets/images/code-window.svg?react";
import GraphicsDesign from "../assets/images/customize-computer.svg?react";

export const services = [
  { title: "UI/UX Creative Design", icon: CreativeDesign, delay: 0.2 },
  { title: "Full-Stack Development", icon: Coding, delay: 0.4 },
  { title: "Social Media Design", icon: GraphicsDesign, delay: 0.6 },
];

const serviceDetails = [
  "Your product's success starts with how it feels to use. I design high-converting interfaces grounded in user psychology and brand strategy — so your users stay, explore, and take action. Every pixel is intentional, every flow is tested. Delivered in Figma, ready for handoff or direct development.",
  "I build fast, scalable web applications engineered for performance and growth. From custom APIs to complex dashboards, I architect and ship production-ready products using React.js, Node.js, Supabase, PostgreSQL, and Webflow — all under one roof.",
  "Your brand deserves to stand out in crowded feeds. I create compelling, on-brand social media visuals that capture attention, communicate your value clearly, and keep your audience coming back. Cohesive, scroll-stopping, strategy-led design.",
];

export default function ServiceCard() {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (index) => {
    setSelectedService(selectedService === index ? null : index);
  };

  return (
    <>
      {services.map((service, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: service.delay, ease: "easeIn" }}
          drag
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
          dragElastic={0.7}
          whileDrag={{ scale: 1.05, cursor: "grabbing" }}
          viewport={{ once: true }}
          layout
          className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col justify-between py-12 px-8 gap-8 cursor-grab bg-dark group hover:bg-gradient-to-b hover:from-primary hover:to-secondary active:bg-gradient-to-b active:from-primary active:to-secondary transition-colors duration-300"
          aria-label={`Service: ${service.title}`}
        >
          {selectedService !== index && (
            <service.icon
              className="w-12 h-12 group-hover:text-dark group-active:text-dark transition-colors duration-200"
              aria-hidden="true"
            />
          )}
          {selectedService !== index && (
            <h3 className="text-2xl max-w-[160px] uppercase group-hover:text-dark group-active:text-dark transition-colors duration-200">
              {service.title}
            </h3>
          )}
          {selectedService === index && (
            <p className="text-sm group-hover:text-dark group-active:text-dark leading-relaxed transition-colors duration-200">
              {serviceDetails[index]}
            </p>
          )}
          <button
            onClick={() => handleServiceClick(index)}
            className="flex gap-2 items-center hover:gap-4 group-hover:text-dark group-active:text-dark transition-all duration-200 text-sm font-medium"
            aria-expanded={selectedService === index}
            aria-label={selectedService === index ? `Close ${service.title} details` : `Learn more about ${service.title}`}
          >
            {selectedService === index ? "Close" : "Learn More"}
            <Icon
              icon={selectedService === index ? "tabler:letter-x" : "tabler:arrow-narrow-right-dashed"}
              aria-hidden="true"
            />
          </button>
        </motion.article>
      ))}
    </>
  );
}
